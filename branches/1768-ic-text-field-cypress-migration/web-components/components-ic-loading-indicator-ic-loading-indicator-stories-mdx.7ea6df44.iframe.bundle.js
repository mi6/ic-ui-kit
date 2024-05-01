/*! For license information please see components-ic-loading-indicator-ic-loading-indicator-stories-mdx.7ea6df44.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[2717],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-loading-indicator/ic-loading-indicator.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,changingLabel:()=>changingLabel,circularDeterminate:()=>circularDeterminate,circularIndeterminate:()=>circularIndeterminate,circularLight:()=>circularLight,circularVariantsDeterminate:()=>circularVariantsDeterminate,circularVariantsIndeterminate:()=>circularVariantsIndeterminate,default:()=>ic_loading_indicator_stories,defaultArgTypes:()=>defaultArgTypes,defaultArgs:()=>defaultArgs,icon:()=>icon,iconLight:()=>iconLight,linearDeterminate:()=>linearDeterminate,linearIndeterminate:()=>linearIndeterminate,linearLight:()=>linearLight,linearVariantsDeterminate:()=>linearVariantsDeterminate,linearVariantsIndeterminate:()=>linearVariantsIndeterminate,noLabel:()=>noLabel,progressIndicatorForCompactStep:()=>progressIndicatorForCompactStep});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-loading\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property        | Attribute        | Description                                                                                                                             | Type                                        | Default      |\n| --------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | ------------ |\n| `appearance`    | `appearance`     | The appearance of the loading indicator, e.g. dark or light.                                                                            | `"dark" \\| "light"`                         | `"dark"`     |\n| `description`   | `description`    | The description that will be set as the aria-label of the loading indicator when not using a visible label.                             | `string`                                    | `"Loading"`  |\n| `fullWidth`     | `full-width`     | If `true`, when linear, the full-width variant (i.e. without a border radius) will be displayed.                                        | `boolean`                                   | `false`      |\n| `label`         | `label`          | The label to be displayed beneath the loading indicator. Display a changing label by separating multiple messages with forward slashes. | `string`                                    | `undefined`  |\n| `labelDuration` | `label-duration` | The time in milliseconds before the label changes.                                                                                      | `number`                                    | `8000`       |\n| `max`           | `max`            | The maximum value that the progress value can take. Used to calculate the proportional width of the progress bar.                       | `number`                                    | `100`        |\n| `min`           | `min`            | The minimum value that the progress value can take. Used to calculate the proportional width of the progress bar.                       | `number`                                    | `0`          |\n| `progress`      | `progress`       | The current amount of progress made. If not provided, component acts as an indeterminate loading indicator.                             | `number`                                    | `undefined`  |\n| `size`          | `size`           | The size of the loading indicator.                                                                                                      | `"default" \\| "icon" \\| "large" \\| "small"` | `"default"`  |\n| `type`          | `type`           | The type of indicator, either linear or circular.                                                                                       | `"circular" \\| "linear"`                    | `"circular"` |\n\n\n## Shadow Parts\n\n| Part                     | Description |\n| ------------------------ | ----------- |\n| `"ic-loading-container"` |             |\n\n\n## CSS Custom Properties\n\n| Name                  | Description                        |\n| --------------------- | ---------------------------------- |\n| `--circular-diameter` | Diameter of the circular-indicator |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-button](../ic-button)\n - [ic-menu](../ic-menu)\n - [ic-step](../ic-step)\n - [ic-toast](../ic-toast)\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-loading-indicator --\x3e ic-typography\n  ic-button --\x3e ic-loading-indicator\n  ic-menu --\x3e ic-loading-indicator\n  ic-step --\x3e ic-loading-indicator\n  ic-toast --\x3e ic-loading-indicator\n  style ic-loading-indicator fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={progress:30,min:0,max:100},defaultArgTypes={progress:{type:{name:"number",min:1,max:100}},min:{type:{name:"number",min:1,max:100}},max:{type:{name:"number",min:1,max:100}}};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Loading",component:"ic-loading-indicator"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n","\n","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-indeterminate",children:"Circular (indeterminate)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Circular (indeterminate)",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-loading-indicator label="Loading..."></ic-loading-indicator>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-determinate",children:"Circular (determinate)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Circular (determinate)",args:defaultArgs,argTypes:defaultArgTypes,parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-loading-indicator
        progress="${args.progress}"
        min="${args.min}"
        max="${args.max}"
        label="Loading..."
      ></ic-loading-indicator>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-variants-indeterminate",children:"Circular variants (indeterminate)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Circular variants (indeterminate)",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<div style="display: grid; gap: 50px;">
        <ic-loading-indicator label="Small" size="small"></ic-loading-indicator>
        <ic-loading-indicator label="Default"></ic-loading-indicator>
        <ic-loading-indicator label="Large" size="large"></ic-loading-indicator>
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-variants-determinate",children:"Circular variants (determinate)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Circular variants (determinate)",args:defaultArgs,argTypes:defaultArgTypes,parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<div style="display: grid; gap: 50px;">
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
      ></ic-loading-indicator>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-determinate",children:"Linear (determinate)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Linear (determinate)",args:defaultArgs,argTypes:defaultArgTypes,parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-loading-indicator
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
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-variants-determinate",children:"Linear variants (determinate)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Linear variants (determinate)",args:defaultArgs,argTypes:defaultArgTypes,parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<div style="display: grid; gap: 50px;">
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
      ></ic-loading-indicator>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-light",children:"Linear light"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Linear light",parameters:{backgrounds:{default:"dark"},loki:{skip:!0}},args:defaultArgs,argTypes:defaultArgTypes,children:args=>lit_html.dy`<div style="display: grid; gap: 50px;">
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
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"no-label",children:"No label"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"No label",parameters:{loki:{skip:!0}},args:defaultArgs,argTypes:defaultArgTypes,children:args=>lit_html.dy`<div style="display: grid; gap: 50px;">
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
      ></ic-loading-indicator>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"progress-indicator-for-compact-step",children:"Progress indicator for compact step"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Progress indicator for compact step",args:defaultArgs,argTypes:defaultArgTypes,parameters:{loki:{skip:!0}},children:args=>lit_html.dy`<ic-loading-indicator
        size="small"
        inner-label="3"
        progress="${args.progress}"
        min="${args.min}"
        max="${args.max}"
      ></ic-loading-indicator>`})})]})}const circularIndeterminate=args=>lit_html.dy`<ic-loading-indicator label="Loading..."></ic-loading-indicator>`;circularIndeterminate.storyName="Circular (indeterminate)",circularIndeterminate.parameters={storySource:{source:'args => html`<ic-loading-indicator label="Loading..."></ic-loading-indicator>`'},loki:{skip:!0}};const circularDeterminate=args=>lit_html.dy`<ic-loading-indicator
        progress="${args.progress}"
        min="${args.min}"
        max="${args.max}"
        label="Loading..."
      ></ic-loading-indicator>`;circularDeterminate.storyName="Circular (determinate)",circularDeterminate.argTypes=defaultArgTypes,circularDeterminate.args=defaultArgs,circularDeterminate.parameters={storySource:{source:'args => html`<ic-loading-indicator\n        progress="${args.progress}"\n        min="${args.min}"\n        max="${args.max}"\n        label="Loading..."\n      ></ic-loading-indicator>`'},loki:{skip:!0}};const circularVariantsIndeterminate=args=>lit_html.dy`<div style="display: grid; gap: 50px;">
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
      </div>`;circularVariantsDeterminate.storyName="Circular variants (determinate)",circularVariantsDeterminate.argTypes=defaultArgTypes,circularVariantsDeterminate.args=defaultArgs,circularVariantsDeterminate.parameters={storySource:{source:'args => html`<div style="display: grid; gap: 50px;">\n        <ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          label="Small"\n          size="small"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          label="Default"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          label="Large"\n          size="large"\n        ></ic-loading-indicator>\n      </div>`'},loki:{skip:!0}};const icon=args=>lit_html.dy`<ic-loading-indicator size="icon"></ic-loading-indicator>`;icon.storyName="Icon",icon.parameters={storySource:{source:'args => html`<ic-loading-indicator size="icon"></ic-loading-indicator>`'},loki:{skip:!0}};const linearIndeterminate=args=>lit_html.dy`<ic-loading-indicator
        label="Loading..."
        type="linear"
      ></ic-loading-indicator>`;linearIndeterminate.storyName="Linear (indeterminate)",linearIndeterminate.parameters={storySource:{source:'args => html`<ic-loading-indicator\n        label="Loading..."\n        type="linear"\n      ></ic-loading-indicator>`'},loki:{skip:!0}};const linearDeterminate=args=>lit_html.dy`<ic-loading-indicator
        progress="${args.progress}"
        min="${args.min}"
        max="${args.max}"
        label="Progress"
        type="linear"
      ></ic-loading-indicator>`;linearDeterminate.storyName="Linear (determinate)",linearDeterminate.argTypes=defaultArgTypes,linearDeterminate.args=defaultArgs,linearDeterminate.parameters={storySource:{source:'args => html`<ic-loading-indicator\n        progress="${args.progress}"\n        min="${args.min}"\n        max="${args.max}"\n        label="Progress"\n        type="linear"\n      ></ic-loading-indicator>`'},loki:{skip:!0}};const linearVariantsIndeterminate=args=>lit_html.dy`<div style="display: grid; gap: 50px;">
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
      </div>`;linearVariantsDeterminate.storyName="Linear variants (determinate)",linearVariantsDeterminate.argTypes=defaultArgTypes,linearVariantsDeterminate.args=defaultArgs,linearVariantsDeterminate.parameters={storySource:{source:'args => html`<div style="display: grid; gap: 50px;">\n        <ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          label="Small"\n          size="small"\n          type="linear"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          label="Default"\n          type="linear"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          label="Large"\n          size="large"\n          type="linear"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          label="Full-width"\n          size="default"\n          type="linear"\n          variant="full-width"\n        ></ic-loading-indicator>\n      </div>`'},loki:{skip:!0}};const circularLight=args=>lit_html.dy`<div style="display: grid; gap: 50px;">
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
      </div>`;linearLight.storyName="Linear light",linearLight.argTypes=defaultArgTypes,linearLight.args=defaultArgs,linearLight.parameters={storySource:{source:'args => html`<div style="display: grid; gap: 50px;">\n        <ic-loading-indicator\n          label="Default"\n          type="linear"\n          appearance="light"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          label="Large"\n          size="large"\n          type="linear"\n          appearance="light"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          label="Full-width"\n          type="linear"\n          variant="full-width"\n          appearance="light"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          label="Default"\n          type="linear"\n          appearance="light"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          label="Large"\n          size="large"\n          type="linear"\n          appearance="light"\n        ></ic-loading-indicator>\n        <ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          label="Full-width"\n          type="linear"\n          variant="full-width"\n          appearance="light"\n        ></ic-loading-indicator>\n      </div>`'},backgrounds:{default:"dark"},loki:{skip:!0}};const noLabel=args=>lit_html.dy`<div style="display: grid; gap: 50px;">
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
      </div>`;noLabel.storyName="No label",noLabel.argTypes=defaultArgTypes,noLabel.args=defaultArgs,noLabel.parameters={storySource:{source:'args => html`<div style="display: grid; gap: 50px;">\n        <ic-loading-indicator name="Loading"></ic-loading-indicator\n        ><ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          name="Loading"\n        ></ic-loading-indicator\n        ><ic-loading-indicator\n          name="Loading"\n          type="linear"\n        ></ic-loading-indicator\n        ><ic-loading-indicator\n          progress="${args.progress}"\n          min="${args.min}"\n          max="${args.max}"\n          name="Loading"\n          type="linear"\n        ></ic-loading-indicator>\n      </div>`'},loki:{skip:!0}};const changingLabel=args=>lit_html.dy`<ic-loading-indicator
        label="Loading.../Still loading..."
        label-duration="4000"
      ></ic-loading-indicator>`;changingLabel.storyName="Changing label",changingLabel.parameters={storySource:{source:'args => html`<ic-loading-indicator\n        label="Loading.../Still loading..."\n        label-duration="4000"\n      ></ic-loading-indicator>`'},loki:{skip:!0}};const progressIndicatorForCompactStep=args=>lit_html.dy`<ic-loading-indicator
        size="small"
        inner-label="3"
        progress="${args.progress}"
        min="${args.min}"
        max="${args.max}"
      ></ic-loading-indicator>`;progressIndicatorForCompactStep.storyName="Progress indicator for compact step",progressIndicatorForCompactStep.argTypes=defaultArgTypes,progressIndicatorForCompactStep.args=defaultArgs,progressIndicatorForCompactStep.parameters={storySource:{source:'args => html`<ic-loading-indicator\n        size="small"\n        inner-label="3"\n        progress="${args.progress}"\n        min="${args.min}"\n        max="${args.max}"\n      ></ic-loading-indicator>`'},loki:{skip:!0}};const componentMeta={title:"Web Components/Loading",tags:["stories-mdx"],includeStories:["circularIndeterminate","circularDeterminate","circularVariantsIndeterminate","circularVariantsDeterminate","icon","linearIndeterminate","linearDeterminate","linearVariantsIndeterminate","linearVariantsDeterminate","circularLight","iconLight","linearLight","noLabel","changingLabel","progressIndicatorForCompactStep"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_loading_indicator_stories=componentMeta,__namedExportsOrder=["defaultArgs","defaultArgTypes","circularIndeterminate","circularDeterminate","circularVariantsIndeterminate","circularVariantsDeterminate","icon","linearIndeterminate","linearDeterminate","linearVariantsIndeterminate","linearVariantsDeterminate","circularLight","iconLight","linearLight","noLabel","changingLabel","progressIndicatorForCompactStep"]},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _t$litHtmlVersions;__webpack_require__.d(__webpack_exports__,{dy:()=>x});var t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h="lit$".concat((Math.random()+"").slice(9),"$"),o="?"+h,n="<".concat(o,">"),r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(">|".concat(d,"(?:([^\\s\"'>=/]+)(").concat(d,"*=").concat(d,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>function(i){for(var _len=arguments.length,s=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)s[_key-1]=arguments[_key];return{_$litType$:t,strings:i,values:s}},x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}var P=(t,i)=>{for(var r,s=t.length-1,o=[],l=2===i?"<svg>":"",c=f,_i=0;_i<s;_i++){for(var _s=t[_i],_a=void 0,_u=void 0,_d=-1,_y=0;_y<_s.length&&(c.lastIndex=_y,null!==(_u=c.exec(_s)));){var _r;_y=c.lastIndex,c===f?"!--"===_u[1]?c=v:void 0!==_u[1]?c=_:void 0!==_u[2]?($.test(_u[2])&&(r=RegExp("</"+_u[2],"g")),c=m):void 0!==_u[3]&&(c=m):c===m?">"===_u[0]?(c=null!==(_r=r)&&void 0!==_r?_r:f,_d=-1):void 0===_u[1]?_d=-2:(_d=c.lastIndex-_u[2].length,_a=_u[1],c=void 0===_u[3]?m:'"'===_u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0)}var _x=c===m&&t[_i+1].startsWith("/>")?" ":"";l+=c===f?_s+n:_d>=0?(o.push(_a),_s.slice(0,_d)+e+_s.slice(_d)+h+_x):_s+h+(-2===_d?_i:_x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor(_ref,n){var r,{strings:t,_$litType$:s}=_ref;this.parts=[];var c=0,a=0,u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){var _t=this.el.content.firstChild;_t.replaceWith(..._t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(var _t2 of r.getAttributeNames())if(_t2.endsWith(e)){var _i2=v[a++],_s2=r.getAttribute(_t2).split(h),_e=/([.?@])?(.*)/.exec(_i2);d.push({type:1,index:c,name:_e[2],strings:_s2,ctor:"."===_e[1]?k:"?"===_e[1]?H:"@"===_e[1]?I:R}),r.removeAttribute(_t2)}else _t2.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(_t2));if($.test(r.tagName)){var _t3=r.textContent.split(h),_s3=_t3.length-1;if(_s3>0){r.textContent=i?i.emptyScript:"";for(var _i3=0;_i3<_s3;_i3++)r.append(_t3[_i3],l()),E.nextNode(),d.push({type:2,index:++c});r.append(_t3[_s3],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else for(var _t4=-1;-1!==(_t4=r.data.indexOf(h,_t4+1));)d.push({type:7,index:c}),_t4+=h.length-1;c++}}static createElement(t,i){var s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i){var _s$_$Co,_h,_h2,_h2$_$AO,_s$_$Co2,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,e=arguments.length>3?arguments[3]:void 0;if(i===w)return i;var h=void 0!==e?null===(_s$_$Co=s._$Co)||void 0===_s$_$Co?void 0:_s$_$Co[e]:s._$Cl,o=c(i)?void 0:i._$litDirective$;return(null===(_h=h)||void 0===_h?void 0:_h.constructor)!==o&&(null!==(_h2=h)&&void 0!==_h2&&null!==(_h2$_$AO=_h2._$AO)&&void 0!==_h2$_$AO&&_h2$_$AO.call(_h2,!1),void 0===o?h=void 0:(h=new o(t))._$AT(t,s,e),void 0!==e?(null!==(_s$_$Co2=s._$Co)&&void 0!==_s$_$Co2?_s$_$Co2:s._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var _t$creationScope,{el:{content:i},parts:s}=this._$AD,e=(null!==(_t$creationScope=null==t?void 0:t.creationScope)&&void 0!==_t$creationScope?_t$creationScope:r).importNode(i,!0);E.currentNode=e;for(var h=E.nextNode(),o=0,n=0,l=s[0];void 0!==l;){var _l;if(o===l.index){var _i4=void 0;2===l.type?_i4=new M(h,h.nextSibling,this,t):1===l.type?_i4=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(_i4=new L(h,this,t)),this._$AV.push(_i4),l=s[++n]}o!==(null===(_l=l)||void 0===_l?void 0:_l.index)&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){var i=0;for(var _s4 of this._$AV)void 0!==_s4&&(void 0!==_s4.strings?(_s4._$AI(t,_s4,i),i+=_s4.strings.length-2):_s4._$AI(t[i])),i++}}class M{get _$AU(){var _this$_$AM$_$AU,_this$_$AM;return null!==(_this$_$AM$_$AU=null===(_this$_$AM=this._$AM)||void 0===_this$_$AM?void 0:_this$_$AM._$AU)&&void 0!==_this$_$AM$_$AU?_this$_$AM$_$AU:this._$Cv}constructor(t,i,s,e){var _e$isConnected;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=null===(_e$isConnected=null==e?void 0:e.isConnected)||void 0===_e$isConnected||_e$isConnected}get parentNode(){var _t5,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(_t5=t)||void 0===_t5?void 0:_t5.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){var _this$_$AH,{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if((null===(_this$_$AH=this._$AH)||void 0===_this$_$AH?void 0:_this$_$AH._$AD)===e)this._$AH.p(i);else{var _t6=new S(e,this),_s5=_t6.u(this.options);_t6.p(i),this.$(_s5),this._$AH=_t6}}_$AC(t){var i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());var s,i=this._$AH,e=0;for(var _h3 of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(_h3),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(_this$_$AP=this._$AP)||void 0===_this$_$AP||_this$_$AP.call(this,!1,!0,i);t&&t!==this._$AB;){var _this$_$AP,_i5=t.nextSibling;t.remove(),t=_i5}}setConnected(t){var _this$_$AP2;void 0===this._$AM&&(this._$Cv=t,null===(_this$_$AP2=this._$AP)||void 0===_this$_$AP2||_this$_$AP2.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,s=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,h=this.strings,o=!1;if(void 0===h)t=N(this,t,i,0),(o=!c(t)||t!==this._$AH&&t!==w)&&(this._$AH=t);else{var _n,_r2,_e2=t;for(t=h[0],_n=0;_n<h.length-1;_n++){var _r3;(_r2=N(this,_e2[s+_n],i,_n))===w&&(_r2=this._$AH[_n]),o||(o=!c(_r2)||_r2!==this._$AH[_n]),_r2===T?t=T:t!==T&&(t+=(null!==(_r3=_r2)&&void 0!==_r3?_r3:"")+h[_n+1]),this._$AH[_n]=_r2}}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t){var _N;if((t=null!==(_N=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==_N?_N:T)!==w){var s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var _this$options$host,_this$options;"function"==typeof this._$AH?this._$AH.call(null!==(_this$options$host=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.host)&&void 0!==_this$options$host?_this$options$host:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}var Z=t.litHtmlPolyfillSupport;null!=Z&&Z(V,M),(null!==(_t$litHtmlVersions=t.litHtmlVersions)&&void 0!==_t$litHtmlVersions?_t$litHtmlVersions:t.litHtmlVersions=[]).push("3.1.1")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-loading-indicator-ic-loading-indicator-stories-mdx.7ea6df44.iframe.bundle.js.map