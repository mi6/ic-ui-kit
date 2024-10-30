/*! For license information please see components-ic-toggle-button-group-ic-toggle-button-group-stories-mdx.ba612d22.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[6819],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-toggle-button-group/ic-toggle-button-group.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,appearance:()=>appearance,default:()=>ic_toggle_button_group_stories,defaultArgs:()=>defaultArgs,disabled:()=>disabled,loading:()=>loading,playground:()=>playground,selectType:()=>selectType,sizes:()=>sizes,withIcons:()=>withIcons});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-toggle-button-group\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property          | Attribute          | Description                                                                                                                                                                                                    | Type                              | Default                 |\n| ----------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ----------------------- |\n| `accessibleLabel` | `accessible-label` | The accessible label of the toggle button group component to provide context for screen reader users.                                                                                                          | `string`                          | `"Toggle button group"` |\n| `appearance`      | `appearance`       | The appearance of the toggle button group, e.g dark, or light.                                                                                                                                                 | `"dark" \\| "default" \\| "light"`  | `"default"`             |\n| `disabled`        | `disabled`         | If `true`, the toggle button group will be set to the disabled state.                                                                                                                                          | `boolean`                         | `false`                 |\n| `fullWidth`       | `full-width`       | If `true`, the toggle button group will fill the width of the container.                                                                                                                                       | `boolean`                         | `false`                 |\n| `iconPlacement`   | `icon-placement`   | The placement of the icons in relation to the toggle button labels.                                                                                                                                            | `"left" \\| "right" \\| "top"`      | `undefined`             |\n| `loading`         | `loading`          | If `true`, the toggle button group will be in loading state.                                                                                                                                                   | `boolean`                         | `false`                 |\n| `selectMethod`    | `select-method`    | If `auto`, controls are toggled automatically when navigated to. If `manual`, the controls must be actioned to change their toggled state. The value of this prop is ignored if `selectType` is set to`multi`. | `"auto" \\| "manual"`              | `"manual"`              |\n| `selectType`      | `select-type`      | Sets whether single or multiple options can be toggled. If `multi`, then the `selectMethod` is always `manual`.                                                                                                | `"multi" \\| "single"`             | `"single"`              |\n| `size`            | `size`             | The size of the toggle buttons to be displayed. This does not affect the font size of the accessible label.                                                                                                    | `"default" \\| "large" \\| "small"` | `"default"`             |\n| `variant`         | `variant`          | The variant of the toggle button.                                                                                                                                                                              | `"default" \\| "icon"`             | `"default"`             |\n\n\n## Events\n\n| Event      | Description                               | Type                               |\n| ---------- | ----------------------------------------- | ---------------------------------- |\n| `icChange` | Emitted when a toggle button is selected. | `CustomEvent<IcChangeEventDetail>` |\n\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={accessibleLabel:"",appearance:"default",disabled:!1,fullWidth:!1,iconPlacement:"left",loading:!1,selectMethod:"manual",selectType:"single",size:"default",variant:"default",toggleAccessibleLabel:"",toggleAppearance:"default",toggleDisabled:!1,toggleFullWidth:!1,toggleIconPlacement:"left",label:"Toggle",toggleLoading:!1,toggleSize:"default",toggleChecked:!1,toggleVariant:"default"};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Web Components/Toggle Button Group",component:"Toggle Button Group"}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"select-type",children:"Select type"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Select type",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
        <span>Single and manual</span>
        <ic-toggle-button-group
          select-type="single"
          accessible-label="Single and manual select toggle group"
        >
          <ic-toggle-button label="First toggle"></ic-toggle-button>
          <ic-toggle-button label="Second toggle"></ic-toggle-button>
          <ic-toggle-button label="Third toggle"></ic-toggle-button>
        </ic-toggle-button-group>
        <br />
        <span>Single and auto</span>
        <ic-toggle-button-group
          select-method="auto"
          accessible-label="Single and auto select toggle group"
        >
          <ic-toggle-button label="First toggle"></ic-toggle-button>
          <ic-toggle-button label="Second toggle"></ic-toggle-button>
          <ic-toggle-button label="Third toggle"></ic-toggle-button>
        </ic-toggle-button-group>
        <br />
        <span>Multi and manual</span>
        <ic-toggle-button-group
          select-type="multi"
          accessible-label="Multi and manual select toggle group"
        >
          <ic-toggle-button label="First toggle"></ic-toggle-button>
          <ic-toggle-button label="Second toggle"></ic-toggle-button>
          <ic-toggle-button label="Third toggle"></ic-toggle-button>
        </ic-toggle-button-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sizes",children:"Sizes"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Sizes",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`
        <span>Default</span>
        <ic-toggle-button-group label="Label for single and manual" accessible-label="Single and manual select toggle group">
        <ic-toggle-button label="First toggle"></ic-toggle-button>
        <ic-toggle-button label="Second toggle"></ic-toggle-button>
        <ic-toggle-button label="Third toggle"></ic-toggle-button>
        </ic-toggle-button-group>
        <br />
        <span>Small</span>
        <ic-toggle-button-group size="small" accessible-label="Single and manual select toggle group"
        >
        <ic-toggle-button label="First toggle" size="small"></ic-toggle-button>
        <ic-toggle-button label="Second toggle" size="small"></ic-toggle-button>
        <ic-toggle-button label="Third toggle" size="small"></ic-toggle-button>
        </ic-toggle-button-group>
        <br />
        <span>Large</span>
        <ic-toggle-button-group size="large" accessible-label="Single and manual select toggle group"
        >
        <ic-toggle-button label="First toggle" size="large"></ic-toggle-button>
        <ic-toggle-button label="Second toggle" size="large"></ic-toggle-button>
        <ic-toggle-button label="Third toggle" size="large"></ic-toggle-button>
        </ic-toggle-button-group>
        <br />
        <span>Full width</span>
        <ic-toggle-button-group
          full-width="true" accessible-label="Single and manual select toggle group"
        >
        <ic-toggle-button label="First toggle" full-width="true"></ic-toggle-button>
        <ic-toggle-button label="Second toggle" full-width="true"></ic-toggle-button>
        <ic-toggle-button label="Third toggle" full-width="true"></ic-toggle-button>
        </ic-toggle-button-group>
        <br />
        <span>Custom width</span>
        <ic-toggle-button-group
         style="width: 75%;" label="Label for single and manual" accessible-label="Single and manual select toggle group"
        >
        <ic-toggle-button label="First toggle" class="expand-toggle-group-child"></ic-toggle-button>
        <ic-toggle-button label="Second toggle"></ic-toggle-button>
        <ic-toggle-button label="Third toggle"></ic-toggle-button>
        </ic-toggle-button-group>
        <br />
        <span>Large label</span>
        <ic-toggle-button-group style="width: 40%;" accessible-label="Single and manual select toggle group"
        >
          <ic-toggle-button label="Toggle"></ic-toggle-button>
          <ic-toggle-button label="Toggle with a very very long label"></ic-toggle-button>
        </ic-toggle-button-group>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"appearance",children:"Appearance"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Appearance",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`<span>Light</span>
        <div
          style="background-color:#2c2f34; padding:6px 10px; width:fit-content"
        >
          <ic-toggle-button-group
            appearance="light"
            accessible-label="Single and manual select toggle group"
          >
            <ic-toggle-button
              label="First toggle"
              appearance="light"
            ></ic-toggle-button>
            <ic-toggle-button
              label="Second toggle"
              appearance="light"
            ></ic-toggle-button>
            <ic-toggle-button
              label="Third toggle"
              appearance="light"
            ></ic-toggle-button>
          </ic-toggle-button-group>
        </div>
        <br />
        <span>Dark</span>
        <ic-toggle-button-group
          appearance="dark"
          accessible-label="Single and manual select toggle group"
        >
          <ic-toggle-button
            label="First toggle"
            appearance="dark"
          ></ic-toggle-button>
          <ic-toggle-button
            label="Second toggle"
            appearance="dark"
          ></ic-toggle-button>
          <ic-toggle-button
            label="Third toggle"
            appearance="dark"
          ></ic-toggle-button>
        </ic-toggle-button-group> `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Disabled",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`<span>Disabled</span>
        <ic-toggle-button-group
          disabled="true"
          accessible-label="Single and manual select toggle group"
        >
          <ic-toggle-button
            label="First toggle"
            disabled="true"
          ></ic-toggle-button>
          <ic-toggle-button
            label="Second toggle"
            disabled="true"
          ></ic-toggle-button>
          <ic-toggle-button
            label="Third toggle"
            disabled="true"
          ></ic-toggle-button>
        </ic-toggle-button-group>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"loading",children:"Loading"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Loading",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`<span>Loading default</span>
        <ic-toggle-button-group
          loading="true"
          accessible-label="Single and manual select toggle group"
        >
          <ic-toggle-button
            label="First toggle"
            loading="true"
          ></ic-toggle-button>
          <ic-toggle-button
            label="Second toggle"
            loading="true"
          ></ic-toggle-button>
          <ic-toggle-button
            label="Third toggle"
            loading="true"
          ></ic-toggle-button>
        </ic-toggle-button-group>
        <br />
        <span>Loading light</span>
        <div
          style="background-color:#2c2f34; padding:6px 10px; width:fit-content"
        >
          <ic-toggle-button-group
            loading="true"
            appearance="light"
            accessible-label="Single and manual select toggle group"
          >
            <ic-toggle-button
              label="First toggle"
              loading="true"
              appearance="light"
            ></ic-toggle-button>
            <ic-toggle-button
              label="Second toggle"
              loading="true"
              appearance="light"
            ></ic-toggle-button>
            <ic-toggle-button
              label="Third toggle"
              loading="true"
              appearance="light"
            ></ic-toggle-button>
          </ic-toggle-button-group>
        </div>
        <br />
        <span>Loading dark</span>
        <ic-toggle-button-group
          loading="true"
          appearance="dark"
          accessible-label="Single and manual select toggle group"
        >
          <ic-toggle-button
            label="First toggle"
            loading="true"
            appearance="dark"
          ></ic-toggle-button>
          <ic-toggle-button
            label="Second toggle"
            loading="true"
            appearance="dark"
          ></ic-toggle-button>
          <ic-toggle-button
            label="Third toggle"
            loading="true"
            appearance="dark"
          ></ic-toggle-button>
        </ic-toggle-button-group> `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-icons",children:"With icons"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With icons",parameters:{loki:{skip:!0}},children:args=>lit_html.qy`<span>Icon only</span>
        <ic-toggle-button-group
          variant="icon"
          accessible-label="A group of buttons"
        >
          <ic-toggle-button variant="icon" accessible-label="refresh">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-toggle-button>
          <ic-toggle-button variant="icon" accessible-label="refresh">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-toggle-button>
        </ic-toggle-button-group>
        <br />
        <span>Icon right</span>
        <ic-toggle-button-group
          icon-placement="right"
          accessible-label="Single and manual select toggle group"
        >
          <ic-toggle-button label="Toggle">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-toggle-button>
          <ic-toggle-button label="Toggle">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-toggle-button>
        </ic-toggle-button-group>
        <br />
        <span>Icon top</span>
        <ic-toggle-button-group
          icon-placement="top"
          accessible-label="Single and manual select toggle group"
        >
          <ic-toggle-button label="Toggle">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-toggle-button>
          <ic-toggle-button label="Toggle">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-toggle-button>
        </ic-toggle-button-group>
        <br />
        <span>Icon left</span>
        <ic-toggle-button-group
          icon-placement="left"
          accessible-label="Single and manual select toggle group"
        >
          <ic-toggle-button label="Toggle">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-toggle-button>
          <ic-toggle-button label="Toggle">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-toggle-button>
        </ic-toggle-button-group> `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,parameters:{loki:{skip:!0}},argTypes:{appearance:{options:["default","dark","light"],control:{type:"radio"}},iconPlacement:{options:["left","right","top"],control:{type:"radio"}},selectMethod:{options:["manual","auto"],control:{type:"inline-radio"}},selectType:{options:["single","multi"],control:{type:"inline-radio"}},size:{options:["default","small","large"],control:{type:"radio"}},variant:{options:["default","icon"],control:{type:"inline-radio"}},toggleAppearance:{options:["default","dark","light"],control:{type:"radio"}},toggleIconPlacement:{options:["left","right","top"],control:{type:"radio"}},toggleSize:{options:["default","small","large"],control:{type:"radio"}},toggleVariant:{options:["default","icon"],control:{type:"inline-radio"}}},name:"Playground",children:args=>lit_html.qy`<ic-toggle-button-group
        accessible-label=${args.accessibleLabel}
        appearance=${args.appearance}
        disabled=${args.disabled}
        full-width=${args.fullWidth}
        icon-placement=${args.iconPlacement}
        loading=${args.loading}
        select-method=${args.selectMethod}
        select-type=${args.selectType}
        size=${args.size}
        variant=${args.variant}
      >
        <ic-toggle-button
          accessible-label=${args.toggleAccessibleLabel}
          appearance=${args.toggleAppearance}
          disabled=${args.toggleDisabled}
          full-width=${args.toggleFullWidth}
          icon-placement=${args.toggleIconPlacement}
          loading=${args.toggleLoading}
          size=${args.toggleSize}
          toggle-checked=${args.toggleChecked}
          variant=${args.toggleVariant}
          label=${args.label}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            slot="icon"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
        <ic-toggle-button label="Second toggle"></ic-toggle-button>
        <ic-toggle-button label="Third toggle"></ic-toggle-button>
      </ic-toggle-button-group>`})})]})}const selectType=args=>lit_html.qy`
        <span>Single and manual</span>
        <ic-toggle-button-group
          select-type="single"
          accessible-label="Single and manual select toggle group"
        >
          <ic-toggle-button label="First toggle"></ic-toggle-button>
          <ic-toggle-button label="Second toggle"></ic-toggle-button>
          <ic-toggle-button label="Third toggle"></ic-toggle-button>
        </ic-toggle-button-group>
        <br />
        <span>Single and auto</span>
        <ic-toggle-button-group
          select-method="auto"
          accessible-label="Single and auto select toggle group"
        >
          <ic-toggle-button label="First toggle"></ic-toggle-button>
          <ic-toggle-button label="Second toggle"></ic-toggle-button>
          <ic-toggle-button label="Third toggle"></ic-toggle-button>
        </ic-toggle-button-group>
        <br />
        <span>Multi and manual</span>
        <ic-toggle-button-group
          select-type="multi"
          accessible-label="Multi and manual select toggle group"
        >
          <ic-toggle-button label="First toggle"></ic-toggle-button>
          <ic-toggle-button label="Second toggle"></ic-toggle-button>
          <ic-toggle-button label="Third toggle"></ic-toggle-button>
        </ic-toggle-button-group>
      `;selectType.storyName="Select type",selectType.parameters={storySource:{source:'args => html`\n        <span>Single and manual</span>\n        <ic-toggle-button-group\n          select-type="single"\n          accessible-label="Single and manual select toggle group"\n        >\n          <ic-toggle-button label="First toggle"></ic-toggle-button>\n          <ic-toggle-button label="Second toggle"></ic-toggle-button>\n          <ic-toggle-button label="Third toggle"></ic-toggle-button>\n        </ic-toggle-button-group>\n        <br />\n        <span>Single and auto</span>\n        <ic-toggle-button-group\n          select-method="auto"\n          accessible-label="Single and auto select toggle group"\n        >\n          <ic-toggle-button label="First toggle"></ic-toggle-button>\n          <ic-toggle-button label="Second toggle"></ic-toggle-button>\n          <ic-toggle-button label="Third toggle"></ic-toggle-button>\n        </ic-toggle-button-group>\n        <br />\n        <span>Multi and manual</span>\n        <ic-toggle-button-group\n          select-type="multi"\n          accessible-label="Multi and manual select toggle group"\n        >\n          <ic-toggle-button label="First toggle"></ic-toggle-button>\n          <ic-toggle-button label="Second toggle"></ic-toggle-button>\n          <ic-toggle-button label="Third toggle"></ic-toggle-button>\n        </ic-toggle-button-group>\n      `'},loki:{skip:!0}};const sizes=args=>lit_html.qy`
        <span>Default</span>
        <ic-toggle-button-group label="Label for single and manual" accessible-label="Single and manual select toggle group">
        <ic-toggle-button label="First toggle"></ic-toggle-button>
        <ic-toggle-button label="Second toggle"></ic-toggle-button>
        <ic-toggle-button label="Third toggle"></ic-toggle-button>
        </ic-toggle-button-group>
        <br />
        <span>Small</span>
        <ic-toggle-button-group size="small" accessible-label="Single and manual select toggle group"
        >
        <ic-toggle-button label="First toggle" size="small"></ic-toggle-button>
        <ic-toggle-button label="Second toggle" size="small"></ic-toggle-button>
        <ic-toggle-button label="Third toggle" size="small"></ic-toggle-button>
        </ic-toggle-button-group>
        <br />
        <span>Large</span>
        <ic-toggle-button-group size="large" accessible-label="Single and manual select toggle group"
        >
        <ic-toggle-button label="First toggle" size="large"></ic-toggle-button>
        <ic-toggle-button label="Second toggle" size="large"></ic-toggle-button>
        <ic-toggle-button label="Third toggle" size="large"></ic-toggle-button>
        </ic-toggle-button-group>
        <br />
        <span>Full width</span>
        <ic-toggle-button-group
          full-width="true" accessible-label="Single and manual select toggle group"
        >
        <ic-toggle-button label="First toggle" full-width="true"></ic-toggle-button>
        <ic-toggle-button label="Second toggle" full-width="true"></ic-toggle-button>
        <ic-toggle-button label="Third toggle" full-width="true"></ic-toggle-button>
        </ic-toggle-button-group>
        <br />
        <span>Custom width</span>
        <ic-toggle-button-group
         style="width: 75%;" label="Label for single and manual" accessible-label="Single and manual select toggle group"
        >
        <ic-toggle-button label="First toggle" class="expand-toggle-group-child"></ic-toggle-button>
        <ic-toggle-button label="Second toggle"></ic-toggle-button>
        <ic-toggle-button label="Third toggle"></ic-toggle-button>
        </ic-toggle-button-group>
        <br />
        <span>Large label</span>
        <ic-toggle-button-group style="width: 40%;" accessible-label="Single and manual select toggle group"
        >
          <ic-toggle-button label="Toggle"></ic-toggle-button>
          <ic-toggle-button label="Toggle with a very very long label"></ic-toggle-button>
        </ic-toggle-button-group>
      `;sizes.storyName="Sizes",sizes.parameters={storySource:{source:'args => html`\n        <span>Default</span>\n        <ic-toggle-button-group label="Label for single and manual" accessible-label="Single and manual select toggle group">\n        <ic-toggle-button label="First toggle"></ic-toggle-button>\n        <ic-toggle-button label="Second toggle"></ic-toggle-button>\n        <ic-toggle-button label="Third toggle"></ic-toggle-button>\n        </ic-toggle-button-group>\n        <br />\n        <span>Small</span>\n        <ic-toggle-button-group size="small" accessible-label="Single and manual select toggle group"\n        >\n        <ic-toggle-button label="First toggle" size="small"></ic-toggle-button>\n        <ic-toggle-button label="Second toggle" size="small"></ic-toggle-button>\n        <ic-toggle-button label="Third toggle" size="small"></ic-toggle-button>\n        </ic-toggle-button-group>\n        <br />\n        <span>Large</span>\n        <ic-toggle-button-group size="large" accessible-label="Single and manual select toggle group"\n        >\n        <ic-toggle-button label="First toggle" size="large"></ic-toggle-button>\n        <ic-toggle-button label="Second toggle" size="large"></ic-toggle-button>\n        <ic-toggle-button label="Third toggle" size="large"></ic-toggle-button>\n        </ic-toggle-button-group>\n        <br />\n        <span>Full width</span>\n        <ic-toggle-button-group\n          full-width="true" accessible-label="Single and manual select toggle group"\n        >\n        <ic-toggle-button label="First toggle" full-width="true"></ic-toggle-button>\n        <ic-toggle-button label="Second toggle" full-width="true"></ic-toggle-button>\n        <ic-toggle-button label="Third toggle" full-width="true"></ic-toggle-button>\n        </ic-toggle-button-group>\n        <br />\n        <span>Custom width</span>\n        <ic-toggle-button-group\n         style="width: 75%;" label="Label for single and manual" accessible-label="Single and manual select toggle group"\n        >\n        <ic-toggle-button label="First toggle" class="expand-toggle-group-child"></ic-toggle-button>\n        <ic-toggle-button label="Second toggle"></ic-toggle-button>\n        <ic-toggle-button label="Third toggle"></ic-toggle-button>\n        </ic-toggle-button-group>\n        <br />\n        <span>Large label</span>\n        <ic-toggle-button-group style="width: 40%;" accessible-label="Single and manual select toggle group"\n        >\n          <ic-toggle-button label="Toggle"></ic-toggle-button>\n          <ic-toggle-button label="Toggle with a very very long label"></ic-toggle-button>\n        </ic-toggle-button-group>\n      `'},loki:{skip:!0}};const appearance=args=>lit_html.qy`<span>Light</span>
        <div
          style="background-color:#2c2f34; padding:6px 10px; width:fit-content"
        >
          <ic-toggle-button-group
            appearance="light"
            accessible-label="Single and manual select toggle group"
          >
            <ic-toggle-button
              label="First toggle"
              appearance="light"
            ></ic-toggle-button>
            <ic-toggle-button
              label="Second toggle"
              appearance="light"
            ></ic-toggle-button>
            <ic-toggle-button
              label="Third toggle"
              appearance="light"
            ></ic-toggle-button>
          </ic-toggle-button-group>
        </div>
        <br />
        <span>Dark</span>
        <ic-toggle-button-group
          appearance="dark"
          accessible-label="Single and manual select toggle group"
        >
          <ic-toggle-button
            label="First toggle"
            appearance="dark"
          ></ic-toggle-button>
          <ic-toggle-button
            label="Second toggle"
            appearance="dark"
          ></ic-toggle-button>
          <ic-toggle-button
            label="Third toggle"
            appearance="dark"
          ></ic-toggle-button>
        </ic-toggle-button-group> `;appearance.storyName="Appearance",appearance.parameters={storySource:{source:'args => html`<span>Light</span>\n        <div\n          style="background-color:#2c2f34; padding:6px 10px; width:fit-content"\n        >\n          <ic-toggle-button-group\n            appearance="light"\n            accessible-label="Single and manual select toggle group"\n          >\n            <ic-toggle-button\n              label="First toggle"\n              appearance="light"\n            ></ic-toggle-button>\n            <ic-toggle-button\n              label="Second toggle"\n              appearance="light"\n            ></ic-toggle-button>\n            <ic-toggle-button\n              label="Third toggle"\n              appearance="light"\n            ></ic-toggle-button>\n          </ic-toggle-button-group>\n        </div>\n        <br />\n        <span>Dark</span>\n        <ic-toggle-button-group\n          appearance="dark"\n          accessible-label="Single and manual select toggle group"\n        >\n          <ic-toggle-button\n            label="First toggle"\n            appearance="dark"\n          ></ic-toggle-button>\n          <ic-toggle-button\n            label="Second toggle"\n            appearance="dark"\n          ></ic-toggle-button>\n          <ic-toggle-button\n            label="Third toggle"\n            appearance="dark"\n          ></ic-toggle-button>\n        </ic-toggle-button-group> `'},loki:{skip:!0}};const disabled=args=>lit_html.qy`<span>Disabled</span>
        <ic-toggle-button-group
          disabled="true"
          accessible-label="Single and manual select toggle group"
        >
          <ic-toggle-button
            label="First toggle"
            disabled="true"
          ></ic-toggle-button>
          <ic-toggle-button
            label="Second toggle"
            disabled="true"
          ></ic-toggle-button>
          <ic-toggle-button
            label="Third toggle"
            disabled="true"
          ></ic-toggle-button>
        </ic-toggle-button-group>`;disabled.storyName="Disabled",disabled.parameters={storySource:{source:'args => html`<span>Disabled</span>\n        <ic-toggle-button-group\n          disabled="true"\n          accessible-label="Single and manual select toggle group"\n        >\n          <ic-toggle-button\n            label="First toggle"\n            disabled="true"\n          ></ic-toggle-button>\n          <ic-toggle-button\n            label="Second toggle"\n            disabled="true"\n          ></ic-toggle-button>\n          <ic-toggle-button\n            label="Third toggle"\n            disabled="true"\n          ></ic-toggle-button>\n        </ic-toggle-button-group>`'},loki:{skip:!0}};const loading=args=>lit_html.qy`<span>Loading default</span>
        <ic-toggle-button-group
          loading="true"
          accessible-label="Single and manual select toggle group"
        >
          <ic-toggle-button
            label="First toggle"
            loading="true"
          ></ic-toggle-button>
          <ic-toggle-button
            label="Second toggle"
            loading="true"
          ></ic-toggle-button>
          <ic-toggle-button
            label="Third toggle"
            loading="true"
          ></ic-toggle-button>
        </ic-toggle-button-group>
        <br />
        <span>Loading light</span>
        <div
          style="background-color:#2c2f34; padding:6px 10px; width:fit-content"
        >
          <ic-toggle-button-group
            loading="true"
            appearance="light"
            accessible-label="Single and manual select toggle group"
          >
            <ic-toggle-button
              label="First toggle"
              loading="true"
              appearance="light"
            ></ic-toggle-button>
            <ic-toggle-button
              label="Second toggle"
              loading="true"
              appearance="light"
            ></ic-toggle-button>
            <ic-toggle-button
              label="Third toggle"
              loading="true"
              appearance="light"
            ></ic-toggle-button>
          </ic-toggle-button-group>
        </div>
        <br />
        <span>Loading dark</span>
        <ic-toggle-button-group
          loading="true"
          appearance="dark"
          accessible-label="Single and manual select toggle group"
        >
          <ic-toggle-button
            label="First toggle"
            loading="true"
            appearance="dark"
          ></ic-toggle-button>
          <ic-toggle-button
            label="Second toggle"
            loading="true"
            appearance="dark"
          ></ic-toggle-button>
          <ic-toggle-button
            label="Third toggle"
            loading="true"
            appearance="dark"
          ></ic-toggle-button>
        </ic-toggle-button-group> `;loading.storyName="Loading",loading.parameters={storySource:{source:'args => html`<span>Loading default</span>\n        <ic-toggle-button-group\n          loading="true"\n          accessible-label="Single and manual select toggle group"\n        >\n          <ic-toggle-button\n            label="First toggle"\n            loading="true"\n          ></ic-toggle-button>\n          <ic-toggle-button\n            label="Second toggle"\n            loading="true"\n          ></ic-toggle-button>\n          <ic-toggle-button\n            label="Third toggle"\n            loading="true"\n          ></ic-toggle-button>\n        </ic-toggle-button-group>\n        <br />\n        <span>Loading light</span>\n        <div\n          style="background-color:#2c2f34; padding:6px 10px; width:fit-content"\n        >\n          <ic-toggle-button-group\n            loading="true"\n            appearance="light"\n            accessible-label="Single and manual select toggle group"\n          >\n            <ic-toggle-button\n              label="First toggle"\n              loading="true"\n              appearance="light"\n            ></ic-toggle-button>\n            <ic-toggle-button\n              label="Second toggle"\n              loading="true"\n              appearance="light"\n            ></ic-toggle-button>\n            <ic-toggle-button\n              label="Third toggle"\n              loading="true"\n              appearance="light"\n            ></ic-toggle-button>\n          </ic-toggle-button-group>\n        </div>\n        <br />\n        <span>Loading dark</span>\n        <ic-toggle-button-group\n          loading="true"\n          appearance="dark"\n          accessible-label="Single and manual select toggle group"\n        >\n          <ic-toggle-button\n            label="First toggle"\n            loading="true"\n            appearance="dark"\n          ></ic-toggle-button>\n          <ic-toggle-button\n            label="Second toggle"\n            loading="true"\n            appearance="dark"\n          ></ic-toggle-button>\n          <ic-toggle-button\n            label="Third toggle"\n            loading="true"\n            appearance="dark"\n          ></ic-toggle-button>\n        </ic-toggle-button-group> `'},loki:{skip:!0}};const withIcons=args=>lit_html.qy`<span>Icon only</span>
        <ic-toggle-button-group
          variant="icon"
          accessible-label="A group of buttons"
        >
          <ic-toggle-button variant="icon" accessible-label="refresh">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-toggle-button>
          <ic-toggle-button variant="icon" accessible-label="refresh">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-toggle-button>
        </ic-toggle-button-group>
        <br />
        <span>Icon right</span>
        <ic-toggle-button-group
          icon-placement="right"
          accessible-label="Single and manual select toggle group"
        >
          <ic-toggle-button label="Toggle">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-toggle-button>
          <ic-toggle-button label="Toggle">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-toggle-button>
        </ic-toggle-button-group>
        <br />
        <span>Icon top</span>
        <ic-toggle-button-group
          icon-placement="top"
          accessible-label="Single and manual select toggle group"
        >
          <ic-toggle-button label="Toggle">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-toggle-button>
          <ic-toggle-button label="Toggle">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-toggle-button>
        </ic-toggle-button-group>
        <br />
        <span>Icon left</span>
        <ic-toggle-button-group
          icon-placement="left"
          accessible-label="Single and manual select toggle group"
        >
          <ic-toggle-button label="Toggle">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-toggle-button>
          <ic-toggle-button label="Toggle">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg>
          </ic-toggle-button>
        </ic-toggle-button-group> `;withIcons.storyName="With icons",withIcons.parameters={storySource:{source:'args => html`<span>Icon only</span>\n        <ic-toggle-button-group\n          variant="icon"\n          accessible-label="A group of buttons"\n        >\n          <ic-toggle-button variant="icon" accessible-label="refresh">\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-toggle-button>\n          <ic-toggle-button variant="icon" accessible-label="refresh">\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-toggle-button>\n        </ic-toggle-button-group>\n        <br />\n        <span>Icon right</span>\n        <ic-toggle-button-group\n          icon-placement="right"\n          accessible-label="Single and manual select toggle group"\n        >\n          <ic-toggle-button label="Toggle">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-toggle-button>\n          <ic-toggle-button label="Toggle">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-toggle-button>\n        </ic-toggle-button-group>\n        <br />\n        <span>Icon top</span>\n        <ic-toggle-button-group\n          icon-placement="top"\n          accessible-label="Single and manual select toggle group"\n        >\n          <ic-toggle-button label="Toggle">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-toggle-button>\n          <ic-toggle-button label="Toggle">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-toggle-button>\n        </ic-toggle-button-group>\n        <br />\n        <span>Icon left</span>\n        <ic-toggle-button-group\n          icon-placement="left"\n          accessible-label="Single and manual select toggle group"\n        >\n          <ic-toggle-button label="Toggle">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-toggle-button>\n          <ic-toggle-button label="Toggle">\n            <svg\n              slot="icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-toggle-button>\n        </ic-toggle-button-group> `'},loki:{skip:!0}};const playground=args=>lit_html.qy`<ic-toggle-button-group
        accessible-label=${args.accessibleLabel}
        appearance=${args.appearance}
        disabled=${args.disabled}
        full-width=${args.fullWidth}
        icon-placement=${args.iconPlacement}
        loading=${args.loading}
        select-method=${args.selectMethod}
        select-type=${args.selectType}
        size=${args.size}
        variant=${args.variant}
      >
        <ic-toggle-button
          accessible-label=${args.toggleAccessibleLabel}
          appearance=${args.toggleAppearance}
          disabled=${args.toggleDisabled}
          full-width=${args.toggleFullWidth}
          icon-placement=${args.toggleIconPlacement}
          loading=${args.toggleLoading}
          size=${args.toggleSize}
          toggle-checked=${args.toggleChecked}
          variant=${args.toggleVariant}
          label=${args.label}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            slot="icon"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
        <ic-toggle-button label="Second toggle"></ic-toggle-button>
        <ic-toggle-button label="Third toggle"></ic-toggle-button>
      </ic-toggle-button-group>`;playground.storyName="Playground",playground.argTypes={appearance:{options:["default","dark","light"],control:{type:"radio"}},iconPlacement:{options:["left","right","top"],control:{type:"radio"}},selectMethod:{options:["manual","auto"],control:{type:"inline-radio"}},selectType:{options:["single","multi"],control:{type:"inline-radio"}},size:{options:["default","small","large"],control:{type:"radio"}},variant:{options:["default","icon"],control:{type:"inline-radio"}},toggleAppearance:{options:["default","dark","light"],control:{type:"radio"}},toggleIconPlacement:{options:["left","right","top"],control:{type:"radio"}},toggleSize:{options:["default","small","large"],control:{type:"radio"}},toggleVariant:{options:["default","icon"],control:{type:"inline-radio"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => html`<ic-toggle-button-group\n        accessible-label=${args.accessibleLabel}\n        appearance=${args.appearance}\n        disabled=${args.disabled}\n        full-width=${args.fullWidth}\n        icon-placement=${args.iconPlacement}\n        loading=${args.loading}\n        select-method=${args.selectMethod}\n        select-type=${args.selectType}\n        size=${args.size}\n        variant=${args.variant}\n      >\n        <ic-toggle-button\n          accessible-label=${args.toggleAccessibleLabel}\n          appearance=${args.toggleAppearance}\n          disabled=${args.toggleDisabled}\n          full-width=${args.toggleFullWidth}\n          icon-placement=${args.toggleIconPlacement}\n          loading=${args.toggleLoading}\n          size=${args.toggleSize}\n          toggle-checked=${args.toggleChecked}\n          variant=${args.toggleVariant}\n          label=${args.label}\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n            slot="icon"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-toggle-button>\n        <ic-toggle-button label="Second toggle"></ic-toggle-button>\n        <ic-toggle-button label="Third toggle"></ic-toggle-button>\n      </ic-toggle-button-group>`'},loki:{skip:!0}};const componentMeta={title:"Web Components/Toggle Button Group",tags:["stories-mdx"],includeStories:["selectType","sizes","appearance","disabled","loading","withIcons","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_toggle_button_group_stories=componentMeta,__namedExportsOrder=["defaultArgs","selectType","sizes","appearance","disabled","loading","withIcons","playground"]},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _t$litHtmlVersions;__webpack_require__.d(__webpack_exports__,{qy:()=>x});var t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h="lit$".concat((Math.random()+"").slice(9),"$"),o="?"+h,n="<".concat(o,">"),r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(">|".concat(d,"(?:([^\\s\"'>=/]+)(").concat(d,"*=").concat(d,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>function(i){for(var _len=arguments.length,s=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)s[_key-1]=arguments[_key];return{_$litType$:t,strings:i,values:s}},x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}var P=(t,i)=>{for(var r,s=t.length-1,o=[],l=2===i?"<svg>":"",c=f,_i=0;_i<s;_i++){for(var _s=t[_i],_a=void 0,_u=void 0,_d=-1,_y=0;_y<_s.length&&(c.lastIndex=_y,null!==(_u=c.exec(_s)));){var _r;_y=c.lastIndex,c===f?"!--"===_u[1]?c=v:void 0!==_u[1]?c=_:void 0!==_u[2]?($.test(_u[2])&&(r=RegExp("</"+_u[2],"g")),c=m):void 0!==_u[3]&&(c=m):c===m?">"===_u[0]?(c=null!==(_r=r)&&void 0!==_r?_r:f,_d=-1):void 0===_u[1]?_d=-2:(_d=c.lastIndex-_u[2].length,_a=_u[1],c=void 0===_u[3]?m:'"'===_u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0)}var _x=c===m&&t[_i+1].startsWith("/>")?" ":"";l+=c===f?_s+n:_d>=0?(o.push(_a),_s.slice(0,_d)+e+_s.slice(_d)+h+_x):_s+h+(-2===_d?_i:_x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor(_ref,n){var r,{strings:t,_$litType$:s}=_ref;this.parts=[];var c=0,a=0,u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){var _t=this.el.content.firstChild;_t.replaceWith(..._t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(var _t2 of r.getAttributeNames())if(_t2.endsWith(e)){var _i2=v[a++],_s2=r.getAttribute(_t2).split(h),_e=/([.?@])?(.*)/.exec(_i2);d.push({type:1,index:c,name:_e[2],strings:_s2,ctor:"."===_e[1]?k:"?"===_e[1]?H:"@"===_e[1]?I:R}),r.removeAttribute(_t2)}else _t2.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(_t2));if($.test(r.tagName)){var _t3=r.textContent.split(h),_s3=_t3.length-1;if(_s3>0){r.textContent=i?i.emptyScript:"";for(var _i3=0;_i3<_s3;_i3++)r.append(_t3[_i3],l()),E.nextNode(),d.push({type:2,index:++c});r.append(_t3[_s3],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else for(var _t4=-1;-1!==(_t4=r.data.indexOf(h,_t4+1));)d.push({type:7,index:c}),_t4+=h.length-1;c++}}static createElement(t,i){var s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i){var _s$_$Co,_h,_h2,_h2$_$AO,_s$_$Co2,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,e=arguments.length>3?arguments[3]:void 0;if(i===w)return i;var h=void 0!==e?null===(_s$_$Co=s._$Co)||void 0===_s$_$Co?void 0:_s$_$Co[e]:s._$Cl,o=c(i)?void 0:i._$litDirective$;return(null===(_h=h)||void 0===_h?void 0:_h.constructor)!==o&&(null!==(_h2=h)&&void 0!==_h2&&null!==(_h2$_$AO=_h2._$AO)&&void 0!==_h2$_$AO&&_h2$_$AO.call(_h2,!1),void 0===o?h=void 0:(h=new o(t))._$AT(t,s,e),void 0!==e?(null!==(_s$_$Co2=s._$Co)&&void 0!==_s$_$Co2?_s$_$Co2:s._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var _t$creationScope,{el:{content:i},parts:s}=this._$AD,e=(null!==(_t$creationScope=null==t?void 0:t.creationScope)&&void 0!==_t$creationScope?_t$creationScope:r).importNode(i,!0);E.currentNode=e;for(var h=E.nextNode(),o=0,n=0,l=s[0];void 0!==l;){var _l;if(o===l.index){var _i4=void 0;2===l.type?_i4=new M(h,h.nextSibling,this,t):1===l.type?_i4=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(_i4=new L(h,this,t)),this._$AV.push(_i4),l=s[++n]}o!==(null===(_l=l)||void 0===_l?void 0:_l.index)&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){var i=0;for(var _s4 of this._$AV)void 0!==_s4&&(void 0!==_s4.strings?(_s4._$AI(t,_s4,i),i+=_s4.strings.length-2):_s4._$AI(t[i])),i++}}class M{get _$AU(){var _this$_$AM$_$AU,_this$_$AM;return null!==(_this$_$AM$_$AU=null===(_this$_$AM=this._$AM)||void 0===_this$_$AM?void 0:_this$_$AM._$AU)&&void 0!==_this$_$AM$_$AU?_this$_$AM$_$AU:this._$Cv}constructor(t,i,s,e){var _e$isConnected;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=null===(_e$isConnected=null==e?void 0:e.isConnected)||void 0===_e$isConnected||_e$isConnected}get parentNode(){var _t5,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(_t5=t)||void 0===_t5?void 0:_t5.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){var _this$_$AH,{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if((null===(_this$_$AH=this._$AH)||void 0===_this$_$AH?void 0:_this$_$AH._$AD)===e)this._$AH.p(i);else{var _t6=new S(e,this),_s5=_t6.u(this.options);_t6.p(i),this.$(_s5),this._$AH=_t6}}_$AC(t){var i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());var s,i=this._$AH,e=0;for(var _h3 of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(_h3),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(_this$_$AP=this._$AP)||void 0===_this$_$AP||_this$_$AP.call(this,!1,!0,i);t&&t!==this._$AB;){var _this$_$AP,_i5=t.nextSibling;t.remove(),t=_i5}}setConnected(t){var _this$_$AP2;void 0===this._$AM&&(this._$Cv=t,null===(_this$_$AP2=this._$AP)||void 0===_this$_$AP2||_this$_$AP2.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,s=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,h=this.strings,o=!1;if(void 0===h)t=N(this,t,i,0),(o=!c(t)||t!==this._$AH&&t!==w)&&(this._$AH=t);else{var _n,_r2,_e2=t;for(t=h[0],_n=0;_n<h.length-1;_n++){var _r3;(_r2=N(this,_e2[s+_n],i,_n))===w&&(_r2=this._$AH[_n]),o||(o=!c(_r2)||_r2!==this._$AH[_n]),_r2===T?t=T:t!==T&&(t+=(null!==(_r3=_r2)&&void 0!==_r3?_r3:"")+h[_n+1]),this._$AH[_n]=_r2}}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t){var _N;if((t=null!==(_N=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==_N?_N:T)!==w){var s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var _this$options$host,_this$options;"function"==typeof this._$AH?this._$AH.call(null!==(_this$options$host=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.host)&&void 0!==_this$options$host?_this$options$host:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}var Z=t.litHtmlPolyfillSupport;null!=Z&&Z(V,M),(null!==(_t$litHtmlVersions=t.litHtmlVersions)&&void 0!==_t$litHtmlVersions?_t$litHtmlVersions:t.litHtmlVersions=[]).push("3.1.1")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-toggle-button-group-ic-toggle-button-group-stories-mdx.ba612d22.iframe.bundle.js.map