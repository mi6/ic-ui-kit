/*! For license information please see components-ic-toggle-button-group-ic-toggle-button-group-mdx.f278b660.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[7391,582,6199,6763,1673],{"./src/components/ic-toggle-button-group/ic-toggle-button-group.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const readme_namespaceObject='# ic-toggle-button-group\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property           | Attribute           | Description                                                                                                                                                                                                    | Type                                      | Default                 |\n| ------------------ | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ----------------------- |\n| `accessibleLabel`  | `accessible-label`  | The accessible label of the toggle button group component to provide context for screen reader users.                                                                                                          | `string`                                  | `"Toggle button group"` |\n| `disabled`         | `disabled`          | If `true`, the toggle button group will be set to the disabled state.                                                                                                                                          | `boolean`                                 | `false`                 |\n| `fullWidth`        | `full-width`        | If `true`, the toggle button group will fill the width of the container.                                                                                                                                       | `boolean`                                 | `false`                 |\n| `iconPlacement`    | `icon-placement`    | The placement of the icons in relation to the toggle button labels.                                                                                                                                            | `"left" \\| "right" \\| "top" \\| undefined` | `undefined`             |\n| `loading`          | `loading`           | If `true`, the toggle button group will be in loading state.                                                                                                                                                   | `boolean`                                 | `false`                 |\n| `monochrome`       | `monochrome`        | If `true`, the toggle button group will display as black in the light theme, and white in dark theme.                                                                                                          | `boolean`                                 | `false`                 |\n| `outline`          | `outline`           | If `true`, the toggle button group will display with an outline.                                                                                                                                               | `boolean`                                 | `true`                  |\n| `selectMethod`     | `select-method`     | If `auto`, controls are toggled automatically when navigated to. If `manual`, the controls must be actioned to change their toggled state. The value of this prop is ignored if `selectType` is set to`multi`. | `"auto" \\| "manual"`                      | `"manual"`              |\n| `selectType`       | `select-type`       | Sets whether single or multiple options can be toggled. If `multi`, then the `selectMethod` is always `manual`.                                                                                                | `"multi" \\| "single"`                     | `"single"`              |\n| `size`             | `size`              | The size of the toggle buttons to be displayed. This does not affect the font size of the accessible label.                                                                                                    | `"large" \\| "medium" \\| "small"`          | `"medium"`              |\n| `theme`            | `theme`             | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.                                                                        | `"dark" \\| "inherit" \\| "light"`          | `"inherit"`             |\n| `tooltipPlacement` | `tooltip-placement` | The position of the tooltip in relation to the toggle buttons.                                                                                                                                                 | `"bottom" \\| "left" \\| "right" \\| "top"`  | `"bottom"`              |\n| `variant`          | `variant`           | The variant of the toggle button.                                                                                                                                                                              | `"default" \\| "icon"`                     | `"default"`             |\n\n\n## Events\n\n| Event      | Description                               | Type                               |\n| ---------- | ----------------------------------------- | ---------------------------------- |\n| `icChange` | Emitted when a toggle button is selected. | `CustomEvent<IcChangeEventDetail>` |\n\n\n----------------------------------------------\n\n\n';var ic_toggle_button_group_stories=__webpack_require__("./src/components/ic-toggle-button-group/ic-toggle-button-group.stories.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_toggle_button_group_stories}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.om,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/ic-toggle-button-group/ic-toggle-button-group.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,HideOutline:()=>HideOutline,Loading:()=>Loading,Monochrome:()=>Monochrome,Playground:()=>Playground,SelectType:()=>SelectType,Sizes:()=>Sizes,WithIcons:()=>WithIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Toggle button group",component:"ic-toggle-button-group"},SelectType={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-typography>Single and manual</ic-typography>
    <ic-toggle-button-group
      select-type="single"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <ic-typography>Single and auto</ic-typography>
    <ic-toggle-button-group
      select-method="auto"
      accessible-label="Single and auto select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <ic-typography>Multi and manual</ic-typography>
    <ic-toggle-button-group
      select-type="multi"
      accessible-label="Multi and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
  `,name:"Select type"},Sizes={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-typography>Default</ic-typography>
    <ic-toggle-button-group
      label="Label for single and manual"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <ic-typography>Small</ic-typography>
    <ic-toggle-button-group
      size="small"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <ic-typography>Large</ic-typography>
    <ic-toggle-button-group
      size="large"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <ic-typography>Full width</ic-typography>
    <ic-toggle-button-group
      full-width="true"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <ic-typography>Custom width</ic-typography>
    <ic-toggle-button-group
      style="width: 75%;"
      label="Label for single and manual"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button
        label="First toggle"
        class="expand-toggle-group-child"
      ></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <ic-typography>Large label</ic-typography>
    <ic-toggle-button-group
      style="width: 40%;"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="Toggle"></ic-toggle-button>
      <ic-toggle-button
        label="Toggle with a very very long label"
      ></ic-toggle-button>
    </ic-toggle-button-group>
  `,name:"Sizes"},Monochrome={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-toggle-button-group
      monochrome="true"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>`,name:"Monochrome"},Disabled={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-typography>Disabled</ic-typography>
      <ic-toggle-button-group
        disabled="true"
        accessible-label="Single and manual select toggle group"
      >
        <ic-toggle-button label="First toggle"></ic-toggle-button>
        <ic-toggle-button label="Second toggle"></ic-toggle-button>
        <ic-toggle-button label="Third toggle"></ic-toggle-button>
      </ic-toggle-button-group>`,name:"Disabled"},Loading={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-toggle-button-group
        loading="true"
        accessible-label="Single and manual select toggle group"
      >
        <ic-toggle-button label="First toggle"></ic-toggle-button>
        <ic-toggle-button label="Second toggle"></ic-toggle-button>
        <ic-toggle-button label="Third toggle"></ic-toggle-button>
      </ic-toggle-button-group>
      <br />
      <ic-toggle-button-group
        loading="true"
        monochrome="true"
        accessible-label="Single and manual select toggle group"
      >
        <ic-toggle-button label="First toggle"></ic-toggle-button>
        <ic-toggle-button label="Second toggle"></ic-toggle-button>
        <ic-toggle-button label="Third toggle"></ic-toggle-button>
      </ic-toggle-button-group> `,name:"Loading"},WithIcons={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-typography>Icon only</ic-typography>
      <ic-toggle-button-group
        variant="icon"
        accessible-label="A group of buttons"
      >
        <ic-toggle-button accessible-label="refresh">
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
        <ic-toggle-button accessible-label="refresh">
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
      <span>Tooltip placement</span>
      <ic-toggle-button-group
        variant="icon"
        accessible-label="A group of buttons"
        tooltip-placement="right"
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
      <ic-typography>Icon top</ic-typography>
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
      <ic-typography>Icon left</ic-typography>
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
      </ic-toggle-button-group> `,name:"With icons"},HideOutline={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-toggle-button-group
      select-type="single"
      accessible-label="Hide outline toggle group"
      outline="false"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>`,name:"Hide outline"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-toggle-button-group
      accessible-label=${args.accessibleLabel}
      disabled=${args.disabled}
      full-width=${args.fullWidth}
      icon-placement=${args.iconPlacement}
      loading=${args.loading}
      monochrome=${args.monochrome}
      outline=${args.outline}
      select-method=${args.selectMethod}
      select-type=${args.selectType}
      size=${args.size}
      theme=${args.theme}
      variant=${args.variant}
    >
      <ic-toggle-button
        accessible-label=${args.toggleAccessibleLabel}
        disabled=${args.toggleDisabled}
        full-width=${args.toggleFullWidth}
        icon-placement=${args.toggleIconPlacement}
        label=${args.toggleLabel}
        loading=${args.toggleLoading}
        monochrome=${args.toggleMonochrome}
        size=${args.toggleSize}
        theme=${args.toggleTheme}
        checked=${args.toggleChecked}
        variant=${args.toggleVariant}
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
    </ic-toggle-button-group>`,args:{accessibleLabel:"",disabled:!1,fullWidth:!1,iconPlacement:"left",loading:!1,monochrome:!1,outline:!0,selectMethod:"manual",selectType:"single",size:"medium",theme:"inherit",variant:"default",toggleAccessibleLabel:"",toggleDisabled:!1,toggleFullWidth:!1,toggleIconPlacement:"left",toggleLabel:"Custom Toggle",toggleLoading:!1,toggleMonochrome:!1,toggleSize:"medium",toggleTheme:"inherit",toggleChecked:!1,toggleVariant:"default"},argTypes:{accessibleLabel:{control:{type:"text"}},disabled:{control:{type:"boolean"}},fullWidth:{control:{type:"boolean"}},iconPlacement:{options:["left","right","top"],control:{type:"radio"}},loading:{control:{type:"boolean"}},monochrome:{control:{type:"boolean"}},selectMethod:{options:["manual","auto"],control:{type:"inline-radio"}},selectType:{options:["single","multi"],control:{type:"inline-radio"}},size:{options:["medium","small","large"],control:{type:"radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}},variant:{options:["default","icon"],control:{type:"inline-radio"}},toggleAccessibleLabel:{control:{type:"text"}},toggleDisabled:{control:{type:"boolean"}},toggleFullWidth:{control:{type:"boolean"}},toggleIconPlacement:{options:["left","right","top"],control:{type:"radio"}},toggleLabel:{control:{type:"text"}},toggleLoading:{control:{type:"boolean"}},toggleMonochrome:{control:{type:"boolean"}},toggleSize:{options:["medium","small","large"],control:{type:"radio"}},toggleTheme:{options:["inherit","light","dark"],control:{type:"inline-radio"}},toggleChecked:{control:{type:"boolean"}},toggleVariant:{options:["default","icon"],control:{type:"inline-radio"}}},name:"Playground"},__namedExportsOrder=["SelectType","Sizes","Monochrome","Disabled","Loading","WithIcons","HideOutline","Playground"];SelectType.parameters={...SelectType.parameters,docs:{...SelectType.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-typography>Single and manual</ic-typography>\n    <ic-toggle-button-group\n      select-type="single"\n      accessible-label="Single and manual select toggle group"\n    >\n      <ic-toggle-button label="First toggle"></ic-toggle-button>\n      <ic-toggle-button label="Second toggle"></ic-toggle-button>\n      <ic-toggle-button label="Third toggle"></ic-toggle-button>\n    </ic-toggle-button-group>\n    <br />\n    <ic-typography>Single and auto</ic-typography>\n    <ic-toggle-button-group\n      select-method="auto"\n      accessible-label="Single and auto select toggle group"\n    >\n      <ic-toggle-button label="First toggle"></ic-toggle-button>\n      <ic-toggle-button label="Second toggle"></ic-toggle-button>\n      <ic-toggle-button label="Third toggle"></ic-toggle-button>\n    </ic-toggle-button-group>\n    <br />\n    <ic-typography>Multi and manual</ic-typography>\n    <ic-toggle-button-group\n      select-type="multi"\n      accessible-label="Multi and manual select toggle group"\n    >\n      <ic-toggle-button label="First toggle"></ic-toggle-button>\n      <ic-toggle-button label="Second toggle"></ic-toggle-button>\n      <ic-toggle-button label="Third toggle"></ic-toggle-button>\n    </ic-toggle-button-group>\n  `,\n  name: "Select type"\n}',...SelectType.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-typography>Default</ic-typography>\n    <ic-toggle-button-group\n      label="Label for single and manual"\n      accessible-label="Single and manual select toggle group"\n    >\n      <ic-toggle-button label="First toggle"></ic-toggle-button>\n      <ic-toggle-button label="Second toggle"></ic-toggle-button>\n      <ic-toggle-button label="Third toggle"></ic-toggle-button>\n    </ic-toggle-button-group>\n    <br />\n    <ic-typography>Small</ic-typography>\n    <ic-toggle-button-group\n      size="small"\n      accessible-label="Single and manual select toggle group"\n    >\n      <ic-toggle-button label="First toggle"></ic-toggle-button>\n      <ic-toggle-button label="Second toggle"></ic-toggle-button>\n      <ic-toggle-button label="Third toggle"></ic-toggle-button>\n    </ic-toggle-button-group>\n    <br />\n    <ic-typography>Large</ic-typography>\n    <ic-toggle-button-group\n      size="large"\n      accessible-label="Single and manual select toggle group"\n    >\n      <ic-toggle-button label="First toggle"></ic-toggle-button>\n      <ic-toggle-button label="Second toggle"></ic-toggle-button>\n      <ic-toggle-button label="Third toggle"></ic-toggle-button>\n    </ic-toggle-button-group>\n    <br />\n    <ic-typography>Full width</ic-typography>\n    <ic-toggle-button-group\n      full-width="true"\n      accessible-label="Single and manual select toggle group"\n    >\n      <ic-toggle-button label="First toggle"></ic-toggle-button>\n      <ic-toggle-button label="Second toggle"></ic-toggle-button>\n      <ic-toggle-button label="Third toggle"></ic-toggle-button>\n    </ic-toggle-button-group>\n    <br />\n    <ic-typography>Custom width</ic-typography>\n    <ic-toggle-button-group\n      style="width: 75%;"\n      label="Label for single and manual"\n      accessible-label="Single and manual select toggle group"\n    >\n      <ic-toggle-button\n        label="First toggle"\n        class="expand-toggle-group-child"\n      ></ic-toggle-button>\n      <ic-toggle-button label="Second toggle"></ic-toggle-button>\n      <ic-toggle-button label="Third toggle"></ic-toggle-button>\n    </ic-toggle-button-group>\n    <br />\n    <ic-typography>Large label</ic-typography>\n    <ic-toggle-button-group\n      style="width: 40%;"\n      accessible-label="Single and manual select toggle group"\n    >\n      <ic-toggle-button label="Toggle"></ic-toggle-button>\n      <ic-toggle-button\n        label="Toggle with a very very long label"\n      ></ic-toggle-button>\n    </ic-toggle-button-group>\n  `,\n  name: "Sizes"\n}',...Sizes.parameters?.docs?.source}}},Monochrome.parameters={...Monochrome.parameters,docs:{...Monochrome.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-toggle-button-group\n      monochrome="true"\n      accessible-label="Single and manual select toggle group"\n    >\n      <ic-toggle-button label="First toggle"></ic-toggle-button>\n      <ic-toggle-button label="Second toggle"></ic-toggle-button>\n      <ic-toggle-button label="Third toggle"></ic-toggle-button>\n    </ic-toggle-button-group>`,\n  name: "Monochrome"\n}',...Monochrome.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-typography>Disabled</ic-typography>\n      <ic-toggle-button-group\n        disabled="true"\n        accessible-label="Single and manual select toggle group"\n      >\n        <ic-toggle-button label="First toggle"></ic-toggle-button>\n        <ic-toggle-button label="Second toggle"></ic-toggle-button>\n        <ic-toggle-button label="Third toggle"></ic-toggle-button>\n      </ic-toggle-button-group>`,\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-toggle-button-group\n        loading="true"\n        accessible-label="Single and manual select toggle group"\n      >\n        <ic-toggle-button label="First toggle"></ic-toggle-button>\n        <ic-toggle-button label="Second toggle"></ic-toggle-button>\n        <ic-toggle-button label="Third toggle"></ic-toggle-button>\n      </ic-toggle-button-group>\n      <br />\n      <ic-toggle-button-group\n        loading="true"\n        monochrome="true"\n        accessible-label="Single and manual select toggle group"\n      >\n        <ic-toggle-button label="First toggle"></ic-toggle-button>\n        <ic-toggle-button label="Second toggle"></ic-toggle-button>\n        <ic-toggle-button label="Third toggle"></ic-toggle-button>\n      </ic-toggle-button-group> `,\n  name: "Loading"\n}',...Loading.parameters?.docs?.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...WithIcons.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-typography>Icon only</ic-typography>\n      <ic-toggle-button-group\n        variant="icon"\n        accessible-label="A group of buttons"\n      >\n        <ic-toggle-button accessible-label="refresh">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-toggle-button>\n        <ic-toggle-button accessible-label="refresh">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-toggle-button>\n      </ic-toggle-button-group>\n      <br />\n      <span>Tooltip placement</span>\n      <ic-toggle-button-group\n        variant="icon"\n        accessible-label="A group of buttons"\n        tooltip-placement="right"\n      >\n        <ic-toggle-button variant="icon" accessible-label="refresh">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-toggle-button>\n        <ic-toggle-button variant="icon" accessible-label="refresh">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-toggle-button>\n      </ic-toggle-button-group>\n      <br />\n      <span>Icon right</span>\n      <ic-toggle-button-group\n        icon-placement="right"\n        accessible-label="Single and manual select toggle group"\n      >\n        <ic-toggle-button label="Toggle">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-toggle-button>\n        <ic-toggle-button label="Toggle">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-toggle-button>\n      </ic-toggle-button-group>\n      <br />\n      <ic-typography>Icon top</ic-typography>\n      <ic-toggle-button-group\n        icon-placement="top"\n        accessible-label="Single and manual select toggle group"\n      >\n        <ic-toggle-button label="Toggle">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-toggle-button>\n        <ic-toggle-button label="Toggle">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-toggle-button>\n      </ic-toggle-button-group>\n      <br />\n      <ic-typography>Icon left</ic-typography>\n      <ic-toggle-button-group\n        icon-placement="left"\n        accessible-label="Single and manual select toggle group"\n      >\n        <ic-toggle-button label="Toggle">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-toggle-button>\n        <ic-toggle-button label="Toggle">\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-toggle-button>\n      </ic-toggle-button-group> `,\n  name: "With icons"\n}',...WithIcons.parameters?.docs?.source}}},HideOutline.parameters={...HideOutline.parameters,docs:{...HideOutline.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-toggle-button-group\n      select-type="single"\n      accessible-label="Hide outline toggle group"\n      outline="false"\n    >\n      <ic-toggle-button label="First toggle"></ic-toggle-button>\n      <ic-toggle-button label="Second toggle"></ic-toggle-button>\n      <ic-toggle-button label="Third toggle"></ic-toggle-button>\n    </ic-toggle-button-group>`,\n  name: "Hide outline"\n}',...HideOutline.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-toggle-button-group\n      accessible-label=${args.accessibleLabel}\n      disabled=${args.disabled}\n      full-width=${args.fullWidth}\n      icon-placement=${args.iconPlacement}\n      loading=${args.loading}\n      monochrome=${args.monochrome}\n      outline=${args.outline}\n      select-method=${args.selectMethod}\n      select-type=${args.selectType}\n      size=${args.size}\n      theme=${args.theme}\n      variant=${args.variant}\n    >\n      <ic-toggle-button\n        accessible-label=${args.toggleAccessibleLabel}\n        disabled=${args.toggleDisabled}\n        full-width=${args.toggleFullWidth}\n        icon-placement=${args.toggleIconPlacement}\n        label=${args.toggleLabel}\n        loading=${args.toggleLoading}\n        monochrome=${args.toggleMonochrome}\n        size=${args.toggleSize}\n        theme=${args.toggleTheme}\n        checked=${args.toggleChecked}\n        variant=${args.toggleVariant}\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n          slot="icon"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-toggle-button>\n      <ic-toggle-button label="Second toggle"></ic-toggle-button>\n      <ic-toggle-button label="Third toggle"></ic-toggle-button>\n    </ic-toggle-button-group>`,\n  args: defaultArgs,\n  argTypes: {\n    accessibleLabel: {\n      control: {\n        type: "text"\n      }\n    },\n    disabled: {\n      control: {\n        type: "boolean"\n      }\n    },\n    fullWidth: {\n      control: {\n        type: "boolean"\n      }\n    },\n    iconPlacement: {\n      options: ["left", "right", "top"],\n      control: {\n        type: "radio"\n      }\n    },\n    loading: {\n      control: {\n        type: "boolean"\n      }\n    },\n    monochrome: {\n      control: {\n        type: "boolean"\n      }\n    },\n    selectMethod: {\n      options: ["manual", "auto"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    selectType: {\n      options: ["single", "multi"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    size: {\n      options: ["medium", "small", "large"],\n      control: {\n        type: "radio"\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    variant: {\n      options: ["default", "icon"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    toggleAccessibleLabel: {\n      control: {\n        type: "text"\n      }\n    },\n    toggleDisabled: {\n      control: {\n        type: "boolean"\n      }\n    },\n    toggleFullWidth: {\n      control: {\n        type: "boolean"\n      }\n    },\n    toggleIconPlacement: {\n      options: ["left", "right", "top"],\n      control: {\n        type: "radio"\n      }\n    },\n    toggleLabel: {\n      control: {\n        type: "text"\n      }\n    },\n    toggleLoading: {\n      control: {\n        type: "boolean"\n      }\n    },\n    toggleMonochrome: {\n      control: {\n        type: "boolean"\n      }\n    },\n    toggleSize: {\n      options: ["medium", "small", "large"],\n      control: {\n        type: "radio"\n      }\n    },\n    toggleTheme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    toggleChecked: {\n      control: {\n        type: "boolean"\n      }\n    },\n    toggleVariant: {\n      options: ["default", "icon"],\n      control: {\n        type: inlineRadioSelector\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-toggle-button-group-ic-toggle-button-group-mdx.f278b660.iframe.bundle.js.map