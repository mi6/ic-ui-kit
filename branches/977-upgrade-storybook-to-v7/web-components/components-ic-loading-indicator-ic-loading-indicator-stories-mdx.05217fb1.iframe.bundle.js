/*! For license information please see components-ic-loading-indicator-ic-loading-indicator-stories-mdx.05217fb1.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[2717],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-loading-indicator/ic-loading-indicator.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,changingLabel:()=>changingLabel,circularDeterminate:()=>circularDeterminate,circularIndeterminate:()=>circularIndeterminate,circularLight:()=>circularLight,circularVariantsDeterminate:()=>circularVariantsDeterminate,circularVariantsIndeterminate:()=>circularVariantsIndeterminate,default:()=>ic_loading_indicator_stories,icon:()=>icon,iconLight:()=>iconLight,linearDeterminate:()=>linearDeterminate,linearIndeterminate:()=>linearIndeterminate,linearLight:()=>linearLight,linearVariantsDeterminate:()=>linearVariantsDeterminate,linearVariantsIndeterminate:()=>linearVariantsIndeterminate,noLabel:()=>noLabel,progressIndicatorForCompactStep:()=>progressIndicatorForCompactStep});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-loading\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property        | Attribute        | Description                                                                                                                             | Type                                        | Default      |\n| --------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | ------------ |\n| `appearance`    | `appearance`     | The appearance of the loading indicator, e.g. dark or light.                                                                            | `"dark" \\| "light"`                         | `"dark"`     |\n| `description`   | `description`    | The description that will be set as the aria-label of the loading indicator when not using a visible label.                             | `string`                                    | `"Loading"`  |\n| `fullWidth`     | `full-width`     | If `true`, when linear, the full-width variant (i.e. without a border radius) will be displayed.                                        | `boolean`                                   | `false`      |\n| `label`         | `label`          | The label to be displayed beneath the loading indicator. Display a changing label by separating multiple messages with forward slashes. | `string`                                    | `undefined`  |\n| `labelDuration` | `label-duration` | The time in milliseconds before the label changes.                                                                                      | `number`                                    | `8000`       |\n| `max`           | `max`            | The maximum value that the progress value can take. Used to calculate the proportional width of the progress bar.                       | `number`                                    | `100`        |\n| `min`           | `min`            | The minimum value that the progress value can take. Used to calculate the proportional width of the progress bar.                       | `number`                                    | `0`          |\n| `progress`      | `progress`       | The current amount of progress made. If not provided, component acts as an indeterminate loading indicator.                             | `number`                                    | `undefined`  |\n| `size`          | `size`           | The size of the loading indicator.                                                                                                      | `"default" \\| "icon" \\| "large" \\| "small"` | `"default"`  |\n| `type`          | `type`           | The type of indicator, either linear or circular.                                                                                       | `"circular" \\| "linear"`                    | `"circular"` |\n\n\n## Shadow Parts\n\n| Part                     | Description |\n| ------------------------ | ----------- |\n| `"ic-loading-container"` |             |\n\n\n## CSS Custom Properties\n\n| Name                  | Description                        |\n| --------------------- | ---------------------------------- |\n| `--circular-diameter` | Diameter of the circular-indicator |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-button](../ic-button)\n - [ic-menu](../ic-menu)\n - [ic-step](../ic-step)\n - [ic-toast](../ic-toast)\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-loading-indicator --\x3e ic-typography\n  ic-button --\x3e ic-loading-indicator\n  ic-menu --\x3e ic-loading-indicator\n  ic-step --\x3e ic-loading-indicator\n  ic-toast --\x3e ic-loading-indicator\n  style ic-loading-indicator fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3",blockquote:"blockquote"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Loading",component:"ic-loading-indicator"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-indeterminate",children:"Circular (indeterminate)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Circular (indeterminate)",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-loading-indicator label="Loading..."></ic-loading-indicator>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-determinate",children:"Circular (determinate)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Circular (determinate)",argTypes:{progress:{type:{name:"number"},defaultValue:30},min:{type:{name:"number"},defaultValue:0},max:{type:{name:"number"},defaultValue:100}},parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-loading-indicator
        progress="${args.progress}"
        min="${args.min}"
        max="${args.max}"
        label="Loading..."
      ></ic-loading-indicator>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-variants-indeterminate",children:"Circular variants (indeterminate)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Circular variants (indeterminate)",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<div style="display: grid; gap: 50px;">
        <ic-loading-indicator label="Small" size="small"></ic-loading-indicator>
        <ic-loading-indicator label="Default"></ic-loading-indicator>
        <ic-loading-indicator label="Large" size="large"></ic-loading-indicator>
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-variants-determinate",children:"Circular variants (determinate)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Circular variants (determinate)",argTypes:{progress:{type:{name:"number"},defaultValue:30},min:{type:{name:"number"},defaultValue:0},max:{type:{name:"number"},defaultValue:100}},parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<div style="display: grid; gap: 50px;">
        <ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          label="Small"
          size="small"
        ></ic-loading-indicator>
        <ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          label="Default"
        ></ic-loading-indicator>
        <ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          label="Large"
          size="large"
        ></ic-loading-indicator>
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon",children:"Icon"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Icon",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-loading-indicator size="icon"></ic-loading-indicator>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-indeterminate",children:"Linear (indeterminate)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Linear (indeterminate)",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-loading-indicator
        label="Loading..."
        type="linear"
      ></ic-loading-indicator>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-determinate",children:"Linear (determinate)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Linear (determinate)",argTypes:{progress:{type:{name:"number"},defaultValue:30},min:{type:{name:"number"},defaultValue:0},max:{type:{name:"number"},defaultValue:100}},parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-loading-indicator
        progress="${args.progress}"
        min="${args.min}"
        max="${args.max}"
        label="Progress"
        type="linear"
      ></ic-loading-indicator>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-variants-indeterminate",children:"Linear variants (indeterminate)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Linear variants (indeterminate)",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<div style="display: grid; gap: 50px;">
        <ic-loading-indicator
          label="Small"
          size="small"
          type="linear"
        ></ic-loading-indicator>
        <ic-loading-indicator
          label="Default"
          type="linear"
        ></ic-loading-indicator>
        <ic-loading-indicator
          label="Large"
          size="large"
          type="linear"
        ></ic-loading-indicator>
        <ic-loading-indicator
          label="Full-width"
          size="default"
          type="linear"
          variant="full-width"
        ></ic-loading-indicator>
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-variants-determinate",children:"Linear variants (determinate)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Linear variants (determinate)",argTypes:{progress:{type:{name:"number"},defaultValue:30},min:{type:{name:"number"},defaultValue:0},max:{type:{name:"number"},defaultValue:100}},parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<div style="display: grid; gap: 50px;">
        <ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          label="Small"
          size="small"
          type="linear"
        ></ic-loading-indicator>
        <ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          label="Default"
          type="linear"
        ></ic-loading-indicator>
        <ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          label="Large"
          size="large"
          type="linear"
        ></ic-loading-indicator>
        <ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          label="Full-width"
          size="default"
          type="linear"
          variant="full-width"
        ></ic-loading-indicator>
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-light",children:"Circular light"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Circular light",parameters:{backgrounds:{default:"dark"},loki:{skip:!0}},children:args=>lit_html.dy`<div style="display: grid; gap: 50px;">
        <ic-loading-indicator
          label="Small"
          size="small"
          appearance="light"
        ></ic-loading-indicator>
        <ic-loading-indicator
          label="Default"
          appearance="light"
        ></ic-loading-indicator>
        <ic-loading-indicator
          label="Large"
          size="large"
          appearance="light"
        ></ic-loading-indicator>
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon-light",children:"Icon light"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Icon light",parameters:{backgrounds:{default:"dark"},loki:{skip:!0}},children:args=>lit_html.dy`<ic-loading-indicator
        size="icon"
        appearance="light"
      ></ic-loading-indicator>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-light",children:"Linear light"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Linear light",parameters:{backgrounds:{default:"dark"},loki:{skip:!0}},argTypes:{progress:{type:{name:"number"},defaultValue:30},min:{type:{name:"number"},defaultValue:0},max:{type:{name:"number"},defaultValue:100}},children:args=>lit_html.dy`<div style="display: grid; gap: 50px;">
        <ic-loading-indicator
          label="Default"
          type="linear"
          appearance="light"
        ></ic-loading-indicator>
        <ic-loading-indicator
          label="Large"
          size="large"
          type="linear"
          appearance="light"
        ></ic-loading-indicator>
        <ic-loading-indicator
          label="Full-width"
          type="linear"
          variant="full-width"
          appearance="light"
        ></ic-loading-indicator>
        <ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          label="Default"
          type="linear"
          appearance="light"
        ></ic-loading-indicator>
        <ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          label="Large"
          size="large"
          type="linear"
          appearance="light"
        ></ic-loading-indicator>
        <ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          label="Full-width"
          type="linear"
          variant="full-width"
          appearance="light"
        ></ic-loading-indicator>
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"no-label",children:"No label"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"No label",parameters:{loki:{skip:!0}},argTypes:{progress:{type:{name:"number"},defaultValue:30},min:{type:{name:"number"},defaultValue:0},max:{type:{name:"number"},defaultValue:100}},children:args=>lit_html.dy`<div style="display: grid; gap: 50px;">
        <ic-loading-indicator name="Loading"></ic-loading-indicator
        ><ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          name="Loading"
        ></ic-loading-indicator
        ><ic-loading-indicator
          name="Loading"
          type="linear"
        ></ic-loading-indicator
        ><ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          name="Loading"
          type="linear"
        ></ic-loading-indicator>
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"changing-label",children:"Changing label"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Changing label",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-loading-indicator
        label="Loading.../Still loading..."
        label-duration="4000"
      ></ic-loading-indicator>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"progress-indicator-for-compact-step",children:"Progress indicator for compact step"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsxs)(dist.oG,{name:"Progress indicator for compact step",argTypes:{progress:{type:{name:"number"},defaultValue:30},min:{type:{name:"number"},defaultValue:0},max:{type:{name:"number"},defaultValue:100}},parameters:{loki:{skip:!0}},children:[(0,jsx_runtime.jsx)(_components.blockquote,{children:"\n"}),args=>lit_html.dy`<ic-loading-indicator
        size="small"
        inner-label="3"
        progress="${args.progress}"
        min="${args.min}"
        max="${args.max}"
      ></ic-loading-indicator>`]})})]})}const circularIndeterminate=args=>lit_html.dy`<ic-loading-indicator label="Loading..."></ic-loading-indicator>`;circularIndeterminate.storyName="Circular (indeterminate)",circularIndeterminate.parameters={storySource:{source:'args => html`<ic-loading-indicator label="Loading..."></ic-loading-indicator>`'},loki:{skip:!0}};const circularDeterminate=args=>lit_html.dy`<ic-loading-indicator
        progress="${args.progress}"
        min="${args.min}"
        max="${args.max}"
        label="Loading..."
      ></ic-loading-indicator>`;circularDeterminate.storyName="Circular (determinate)",circularDeterminate.argTypes={progress:{type:{name:"number"},defaultValue:30},min:{type:{name:"number"},defaultValue:0},max:{type:{name:"number"},defaultValue:100}},circularDeterminate.parameters={storySource:{source:'args => html`<ic-loading-indicator\n        progress="${args.progress}"\n        min="${args.min}"\n        max="${args.max}"\n        label="Loading..."\n      ></ic-loading-indicator>`'},loki:{skip:!0}};const circularVariantsIndeterminate=args=>lit_html.dy`<div style="display: grid; gap: 50px;">
        <ic-loading-indicator label="Small" size="small"></ic-loading-indicator>
        <ic-loading-indicator label="Default"></ic-loading-indicator>
        <ic-loading-indicator label="Large" size="large"></ic-loading-indicator>
      </div>`;circularVariantsIndeterminate.storyName="Circular variants (indeterminate)",circularVariantsIndeterminate.parameters={storySource:{source:'args => html`<div style="display: grid; gap: 50px;">\n        <ic-loading-indicator label="Small" size="small"></ic-loading-indicator>\n        <ic-loading-indicator label="Default"></ic-loading-indicator>\n        <ic-loading-indicator label="Large" size="large"></ic-loading-indicator>\n      </div>`'},loki:{skip:!0}};const circularVariantsDeterminate=args=>lit_html.dy`<div style="display: grid; gap: 50px;">
        <ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          label="Small"
          size="small"
        ></ic-loading-indicator>
        <ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          label="Default"
        ></ic-loading-indicator>
        <ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          label="Large"
          size="large"
        ></ic-loading-indicator>
      </div>`;circularVariantsDeterminate.storyName="Circular variants (determinate)",circularVariantsDeterminate.argTypes={progress:{type:{name:"number"},defaultValue:30},min:{type:{name:"number"},defaultValue:0},max:{type:{name:"number"},defaultValue:100}},circularVariantsDeterminate.parameters={storySource:{source:'args => html`<div style="display: grid; gap: 50px;">\n        <ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          label="Small"\n          size="small"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          label="Default"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          label="Large"\n          size="large"\n        ></ic-loading-indicator>\n      </div>`'},loki:{skip:!0}};const icon=args=>lit_html.dy`<ic-loading-indicator size="icon"></ic-loading-indicator>`;icon.storyName="Icon",icon.parameters={storySource:{source:'args => html`<ic-loading-indicator size="icon"></ic-loading-indicator>`'},loki:{skip:!0}};const linearIndeterminate=args=>lit_html.dy`<ic-loading-indicator
        label="Loading..."
        type="linear"
      ></ic-loading-indicator>`;linearIndeterminate.storyName="Linear (indeterminate)",linearIndeterminate.parameters={storySource:{source:'args => html`<ic-loading-indicator\n        label="Loading..."\n        type="linear"\n      ></ic-loading-indicator>`'},loki:{skip:!0}};const linearDeterminate=args=>lit_html.dy`<ic-loading-indicator
        progress="${args.progress}"
        min="${args.min}"
        max="${args.max}"
        label="Progress"
        type="linear"
      ></ic-loading-indicator>`;linearDeterminate.storyName="Linear (determinate)",linearDeterminate.argTypes={progress:{type:{name:"number"},defaultValue:30},min:{type:{name:"number"},defaultValue:0},max:{type:{name:"number"},defaultValue:100}},linearDeterminate.parameters={storySource:{source:'args => html`<ic-loading-indicator\n        progress="${args.progress}"\n        min="${args.min}"\n        max="${args.max}"\n        label="Progress"\n        type="linear"\n      ></ic-loading-indicator>`'},loki:{skip:!0}};const linearVariantsIndeterminate=args=>lit_html.dy`<div style="display: grid; gap: 50px;">
        <ic-loading-indicator
          label="Small"
          size="small"
          type="linear"
        ></ic-loading-indicator>
        <ic-loading-indicator
          label="Default"
          type="linear"
        ></ic-loading-indicator>
        <ic-loading-indicator
          label="Large"
          size="large"
          type="linear"
        ></ic-loading-indicator>
        <ic-loading-indicator
          label="Full-width"
          size="default"
          type="linear"
          variant="full-width"
        ></ic-loading-indicator>
      </div>`;linearVariantsIndeterminate.storyName="Linear variants (indeterminate)",linearVariantsIndeterminate.parameters={storySource:{source:'args => html`<div style="display: grid; gap: 50px;">\n        <ic-loading-indicator\n          label="Small"\n          size="small"\n          type="linear"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          label="Default"\n          type="linear"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          label="Large"\n          size="large"\n          type="linear"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          label="Full-width"\n          size="default"\n          type="linear"\n          variant="full-width"\n        ></ic-loading-indicator>\n      </div>`'},loki:{skip:!0}};const linearVariantsDeterminate=args=>lit_html.dy`<div style="display: grid; gap: 50px;">
        <ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          label="Small"
          size="small"
          type="linear"
        ></ic-loading-indicator>
        <ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          label="Default"
          type="linear"
        ></ic-loading-indicator>
        <ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          label="Large"
          size="large"
          type="linear"
        ></ic-loading-indicator>
        <ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          label="Full-width"
          size="default"
          type="linear"
          variant="full-width"
        ></ic-loading-indicator>
      </div>`;linearVariantsDeterminate.storyName="Linear variants (determinate)",linearVariantsDeterminate.argTypes={progress:{type:{name:"number"},defaultValue:30},min:{type:{name:"number"},defaultValue:0},max:{type:{name:"number"},defaultValue:100}},linearVariantsDeterminate.parameters={storySource:{source:'args => html`<div style="display: grid; gap: 50px;">\n        <ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          label="Small"\n          size="small"\n          type="linear"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          label="Default"\n          type="linear"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          label="Large"\n          size="large"\n          type="linear"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          label="Full-width"\n          size="default"\n          type="linear"\n          variant="full-width"\n        ></ic-loading-indicator>\n      </div>`'},loki:{skip:!0}};const circularLight=args=>lit_html.dy`<div style="display: grid; gap: 50px;">
        <ic-loading-indicator
          label="Small"
          size="small"
          appearance="light"
        ></ic-loading-indicator>
        <ic-loading-indicator
          label="Default"
          appearance="light"
        ></ic-loading-indicator>
        <ic-loading-indicator
          label="Large"
          size="large"
          appearance="light"
        ></ic-loading-indicator>
      </div>`;circularLight.storyName="Circular light",circularLight.parameters={storySource:{source:'args => html`<div style="display: grid; gap: 50px;">\n        <ic-loading-indicator\n          label="Small"\n          size="small"\n          appearance="light"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          label="Default"\n          appearance="light"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          label="Large"\n          size="large"\n          appearance="light"\n        ></ic-loading-indicator>\n      </div>`'},backgrounds:{default:"dark"},loki:{skip:!0}};const iconLight=args=>lit_html.dy`<ic-loading-indicator
        size="icon"
        appearance="light"
      ></ic-loading-indicator>`;iconLight.storyName="Icon light",iconLight.parameters={storySource:{source:'args => html`<ic-loading-indicator\n        size="icon"\n        appearance="light"\n      ></ic-loading-indicator>`'},backgrounds:{default:"dark"},loki:{skip:!0}};const linearLight=args=>lit_html.dy`<div style="display: grid; gap: 50px;">
        <ic-loading-indicator
          label="Default"
          type="linear"
          appearance="light"
        ></ic-loading-indicator>
        <ic-loading-indicator
          label="Large"
          size="large"
          type="linear"
          appearance="light"
        ></ic-loading-indicator>
        <ic-loading-indicator
          label="Full-width"
          type="linear"
          variant="full-width"
          appearance="light"
        ></ic-loading-indicator>
        <ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          label="Default"
          type="linear"
          appearance="light"
        ></ic-loading-indicator>
        <ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          label="Large"
          size="large"
          type="linear"
          appearance="light"
        ></ic-loading-indicator>
        <ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          label="Full-width"
          type="linear"
          variant="full-width"
          appearance="light"
        ></ic-loading-indicator>
      </div>`;linearLight.storyName="Linear light",linearLight.argTypes={progress:{type:{name:"number"},defaultValue:30},min:{type:{name:"number"},defaultValue:0},max:{type:{name:"number"},defaultValue:100}},linearLight.parameters={storySource:{source:'args => html`<div style="display: grid; gap: 50px;">\n        <ic-loading-indicator\n          label="Default"\n          type="linear"\n          appearance="light"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          label="Large"\n          size="large"\n          type="linear"\n          appearance="light"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          label="Full-width"\n          type="linear"\n          variant="full-width"\n          appearance="light"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          label="Default"\n          type="linear"\n          appearance="light"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          label="Large"\n          size="large"\n          type="linear"\n          appearance="light"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          label="Full-width"\n          type="linear"\n          variant="full-width"\n          appearance="light"\n        ></ic-loading-indicator>\n      </div>`'},backgrounds:{default:"dark"},loki:{skip:!0}};const noLabel=args=>lit_html.dy`<div style="display: grid; gap: 50px;">
        <ic-loading-indicator name="Loading"></ic-loading-indicator
        ><ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          name="Loading"
        ></ic-loading-indicator
        ><ic-loading-indicator
          name="Loading"
          type="linear"
        ></ic-loading-indicator
        ><ic-loading-indicator
          progress="${args.progress}"
          min="${args.min}"
          max="${args.max}"
          name="Loading"
          type="linear"
        ></ic-loading-indicator>
      </div>`;noLabel.storyName="No label",noLabel.argTypes={progress:{type:{name:"number"},defaultValue:30},min:{type:{name:"number"},defaultValue:0},max:{type:{name:"number"},defaultValue:100}},noLabel.parameters={storySource:{source:'args => html`<div style="display: grid; gap: 50px;">\n        <ic-loading-indicator name="Loading"></ic-loading-indicator\n        ><ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          name="Loading"\n        ></ic-loading-indicator\n        ><ic-loading-indicator\n          name="Loading"\n          type="linear"\n        ></ic-loading-indicator\n        ><ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          name="Loading"\n          type="linear"\n        ></ic-loading-indicator>\n      </div>`'},loki:{skip:!0}};const changingLabel=args=>lit_html.dy`<ic-loading-indicator
        label="Loading.../Still loading..."
        label-duration="4000"
      ></ic-loading-indicator>`;changingLabel.storyName="Changing label",changingLabel.parameters={storySource:{source:'args => html`<ic-loading-indicator\n        label="Loading.../Still loading..."\n        label-duration="4000"\n      ></ic-loading-indicator>`'},loki:{skip:!0}};const progressIndicatorForCompactStep=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("blockquote",{children:"\n"}),"args => html`",(0,jsx_runtime.jsx)("ic-loading-indicator",{size:"small","inner-label":"3",progress:"${args.progress}",min:"${args.min}",max:"${args.max}"}),"`"]});progressIndicatorForCompactStep.storyName="Progress indicator for compact step",progressIndicatorForCompactStep.argTypes={progress:{type:{name:"number"},defaultValue:30},min:{type:{name:"number"},defaultValue:0},max:{type:{name:"number"},defaultValue:100}},progressIndicatorForCompactStep.parameters={storySource:{source:'<blockquote>{"\\n"}</blockquote>\nargs => html`<ic-loading-indicator\n        size="small"\n        inner-label="3"\n        progress="${args.progress}"\n        min="${args.min}"\n        max="${args.max}"\n      ></ic-loading-indicator>`'},loki:{skip:!0}};const componentMeta={title:"Web Components/Loading",tags:["stories-mdx"],includeStories:["circularIndeterminate","circularDeterminate","circularVariantsIndeterminate","circularVariantsDeterminate","icon","linearIndeterminate","linearDeterminate","linearVariantsIndeterminate","linearVariantsDeterminate","circularLight","iconLight","linearLight","noLabel","changingLabel","progressIndicatorForCompactStep"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_loading_indicator_stories=componentMeta,__namedExportsOrder=["circularIndeterminate","circularDeterminate","circularVariantsIndeterminate","circularVariantsDeterminate","icon","linearIndeterminate","linearDeterminate","linearVariantsIndeterminate","linearVariantsDeterminate","circularLight","iconLight","linearLight","noLabel","changingLabel","progressIndicatorForCompactStep"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-loading-indicator-ic-loading-indicator-stories-mdx.05217fb1.iframe.bundle.js.map