/*! For license information please see components-ic-divider-ic-divider-stories-mdx.4aae1901.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[75],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-divider/ic-divider.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,appearance:()=>appearance,borderStyle:()=>borderStyle,default:()=>ic_divider_stories,defaultArgs:()=>defaultArgs,labelPlacement:()=>labelPlacement,playground:()=>playground,vertical:()=>vertical,weight:()=>weight});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readmeraw_namespaceObject='# ic-divider\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property         | Attribute         | Description                                                                                                                                                                                                                                                                              | Type                                                 | Default        |\n| ---------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | -------------- |\n| `appearance`     | `appearance`      | The appearance of the divider.                                                                                                                                                                                                                                                           | `"dark" \\| "default" \\| "light" \\| "theme"`          | `"default"`    |\n| `borderStyle`    | `border-style`    | The line style of the divider.                                                                                                                                                                                                                                                           | `"dashed" \\| "solid"`                                | `"solid"`      |\n| `label`          | `label`           | The label for the divider.                                                                                                                                                                                                                                                               | `string`                                             | `undefined`    |\n| `labelPlacement` | `label-placement` | The position the label is placed on the divider. `Left` and `right` placement is only applicable when orientation is set to `horizontal`. `Top` and `bottom` placement is only applicable when orientation is set to `vertical`. `Center` placement is applicable for both orientations. | `"bottom" \\| "center" \\| "left" \\| "right" \\| "top"` | `"center"`     |\n| `orientation`    | `orientation`     | The orientation of the divider.                                                                                                                                                                                                                                                          | `"horizontal" \\| "vertical"`                         | `"horizontal"` |\n| `weight`         | `weight`          | The thickness of the divider.                                                                                                                                                                                                                                                            | `"medium" \\| "thick" \\| "thin" \\| "very-thick"`      | `"thin"`       |\n\n\n## CSS Custom Properties\n\n| Name                            | Description                                                        |\n| ------------------------------- | ------------------------------------------------------------------ |\n| `--ic-divider-horizontal-width` | The width of a horizontal divider. The default value is `inherit`. |\n| `--ic-divider-vertical-height`  | The height of a vertical divider. The default value is `inherit`.  |\n| `--ic-divider-weight`           | The thickness of the divider.                                      |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-side-navigation](../ic-side-navigation)\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-divider --\x3e ic-typography\n  ic-side-navigation --\x3e ic-divider\n  style ic-divider fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={orientation:"horizontal",appearance:"default","border-style":"solid",weight:"thin",label:"","label-placement":"none","--ic-divider-horizontal-width":"100%","--ic-divider-vertical-height":"400px"};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Web Components/Divider",component:"ic-divider",parameters:{loki:{skip:!0}}}),"\n",(0,jsx_runtime.jsx)(blocks_dist.oz,{children:readmeraw_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"appearance",children:"Appearance"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Appearance",children:lit_html.qy` <div
      style="display: flex; flex-direction: column; gap: var(--ic-space-xs)"
    >
      <ic-divider appearance="default" weight="medium"></ic-divider>
      <ic-divider appearance="dark" weight="medium"></ic-divider>
      <div
        style="display:flex; align-items: center; background-color: #121212; height: var(--ic-space-md); width: 100%"
      >
        <ic-divider appearance="light" weight="medium"></ic-divider>
      </div>
      <ic-divider appearance="theme" weight="medium"></ic-divider>
    </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"weight",children:"Weight"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Weight",children:lit_html.qy` <div
      style="display: flex; flex-direction: column; gap: var(--ic-space-md)"
    >
      <ic-divider weight="thin"></ic-divider>
      <ic-divider weight="thin" border-style="dashed"></ic-divider>
      <ic-divider
        weight="thin"
        label="End of section"
        label-placement="center"
      ></ic-divider>
      <ic-divider weight="medium"></ic-divider>
      <ic-divider weight="medium" border-style="dashed"></ic-divider>
      <ic-divider
        weight="medium"
        label="End of section"
        label-placement="center"
      ></ic-divider>
      <ic-divider weight="thick"></ic-divider>
      <ic-divider weight="thick" border-style="dashed"></ic-divider>
      <ic-divider
        weight="thick"
        label="End of section"
        label-placement="center"
      ></ic-divider>
      <ic-divider weight="very-thick"></ic-divider>
      <ic-divider weight="very-thick" border-style="dashed"></ic-divider>
      <ic-divider
        weight="very-thick"
        label="End of section"
        label-placement="center"
      ></ic-divider>
    </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"border-style",children:"Border style"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Border style",children:lit_html.qy` <div
      style="display: flex; flex-direction: column; gap: var(--ic-space-md)"
    >
      <ic-divider border-style="solid"></ic-divider>
      <ic-divider border-style="dashed"></ic-divider>
    </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"vertical",children:"Vertical"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Vertical",children:lit_html.qy`
      <div style="display: flex; gap: var(--ic-space-lg); height: 400px">
        <ic-divider orientation="vertical" weight="thin"></ic-divider>
        <ic-divider
          orientation="vertical"
          weight="thin"
          border-style="dashed"
        ></ic-divider>
        <ic-divider orientation="vertical" weight="medium"></ic-divider>
        <ic-divider
          orientation="vertical"
          weight="medium"
          border-style="dashed"
        ></ic-divider>
        <ic-divider orientation="vertical" weight="thick"></ic-divider>
        <ic-divider
          orientation="vertical"
          weight="thick"
          border-style="dashed"
        ></ic-divider>
        <ic-divider orientation="vertical" weight="very-thick"></ic-divider>
        <ic-divider
          orientation="vertical"
          weight="very-thick"
          border-style="dashed"
        ></ic-divider>
      </div>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"label-placement",children:"Label placement"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Label placement",children:lit_html.qy` <div
        style="display: flex; flex-direction: column; gap: var(--ic-space-lg)"
      >
        <ic-divider label="Label left" label-placement="left"></ic-divider>
        <ic-divider label="Label center" label-placement="center"></ic-divider>
        <ic-divider label="Label right" label-placement="right"></ic-divider>
        <ic-divider label-placement="left">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label left</p>
          </ic-typography></ic-divider
        >
        <ic-divider label-placement="center">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label center</p>
          </ic-typography></ic-divider
        >
        <ic-divider label-placement="right">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label right</p>
          </ic-typography></ic-divider
        >
      </div>
      <div
        style="display: flex; gap: var(--ic-space-lg); height: 200px; margin-top: var(--ic-space-lg)"
      >
        <ic-divider
          label="Label top"
          label-placement="top"
          orientation="vertical"
        ></ic-divider>
        <ic-divider
          label="Label center"
          label-placement="center"
          orientation="vertical"
        ></ic-divider>
        <ic-divider
          label="Label bottom"
          label-placement="bottom"
          orientation="vertical"
        ></ic-divider>
        <ic-divider label-placement="top" orientation="vertical">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label top</p>
          </ic-typography></ic-divider
        >
        <ic-divider label-placement="center" orientation="vertical">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label center</p>
          </ic-typography></ic-divider
        >
        <ic-divider label-placement="bottom" orientation="vertical">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label bottom</p>
          </ic-typography></ic-divider
        >
      </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,parameters:{loki:{skip:!0}},argTypes:{orientation:{options:["horizontal","vertical"],control:{type:"inline-radio"}},appearance:{options:["default","dark","light","theme"],control:{type:"radio"}},"border-style":{options:["solid","dashed"],control:{type:"inline-radio"}},weight:{options:["thin","medium","thick","very-thick"],control:{type:"radio"}},label:{mapping:{none:""}},"label-placement":{options:["none","left","center","right","top","bottom"],mapping:{none:""},control:{type:"radio"}}},name:"Playground",children:args=>{const backgroundColor="light"===args.appearance?"#121212":"transparent";return lit_html.qy`<div
        style="display: flex; width: 100%; height: 100%; padding: var(--ic-space-md); background-color: ${backgroundColor}; box-sizing: border-box;"
      >
        <ic-divider
          orientation=${args.orientation}
          appearance=${args.appearance}
          border-style=${args["border-style"]}
          weight=${args.weight}
          label=${args.label}
          label-placement=${args["label-placement"]}
          style="--ic-divider-horizontal-width: ${args["--ic-divider-horizontal-width"]}; --ic-divider-vertical-height: ${args["--ic-divider-vertical-height"]}"
        ></ic-divider>
      </div>`}})})]})}const appearance=()=>lit_html.qy` <div
      style="display: flex; flex-direction: column; gap: var(--ic-space-xs)"
    >
      <ic-divider appearance="default" weight="medium"></ic-divider>
      <ic-divider appearance="dark" weight="medium"></ic-divider>
      <div
        style="display:flex; align-items: center; background-color: #121212; height: var(--ic-space-md); width: 100%"
      >
        <ic-divider appearance="light" weight="medium"></ic-divider>
      </div>
      <ic-divider appearance="theme" weight="medium"></ic-divider>
    </div>`;appearance.storyName="Appearance",appearance.parameters={storySource:{source:'html` <div\n      style="display: flex; flex-direction: column; gap: var(--ic-space-xs)"\n    >\n      <ic-divider appearance="default" weight="medium"></ic-divider>\n      <ic-divider appearance="dark" weight="medium"></ic-divider>\n      <div\n        style="display:flex; align-items: center; background-color: #121212; height: var(--ic-space-md); width: 100%"\n      >\n        <ic-divider appearance="light" weight="medium"></ic-divider>\n      </div>\n      <ic-divider appearance="theme" weight="medium"></ic-divider>\n    </div>`'}};const weight=()=>lit_html.qy` <div
      style="display: flex; flex-direction: column; gap: var(--ic-space-md)"
    >
      <ic-divider weight="thin"></ic-divider>
      <ic-divider weight="thin" border-style="dashed"></ic-divider>
      <ic-divider
        weight="thin"
        label="End of section"
        label-placement="center"
      ></ic-divider>
      <ic-divider weight="medium"></ic-divider>
      <ic-divider weight="medium" border-style="dashed"></ic-divider>
      <ic-divider
        weight="medium"
        label="End of section"
        label-placement="center"
      ></ic-divider>
      <ic-divider weight="thick"></ic-divider>
      <ic-divider weight="thick" border-style="dashed"></ic-divider>
      <ic-divider
        weight="thick"
        label="End of section"
        label-placement="center"
      ></ic-divider>
      <ic-divider weight="very-thick"></ic-divider>
      <ic-divider weight="very-thick" border-style="dashed"></ic-divider>
      <ic-divider
        weight="very-thick"
        label="End of section"
        label-placement="center"
      ></ic-divider>
    </div>`;weight.storyName="Weight",weight.parameters={storySource:{source:'html` <div\n      style="display: flex; flex-direction: column; gap: var(--ic-space-md)"\n    >\n      <ic-divider weight="thin"></ic-divider>\n      <ic-divider weight="thin" border-style="dashed"></ic-divider>\n      <ic-divider\n        weight="thin"\n        label="End of section"\n        label-placement="center"\n      ></ic-divider>\n      <ic-divider weight="medium"></ic-divider>\n      <ic-divider weight="medium" border-style="dashed"></ic-divider>\n      <ic-divider\n        weight="medium"\n        label="End of section"\n        label-placement="center"\n      ></ic-divider>\n      <ic-divider weight="thick"></ic-divider>\n      <ic-divider weight="thick" border-style="dashed"></ic-divider>\n      <ic-divider\n        weight="thick"\n        label="End of section"\n        label-placement="center"\n      ></ic-divider>\n      <ic-divider weight="very-thick"></ic-divider>\n      <ic-divider weight="very-thick" border-style="dashed"></ic-divider>\n      <ic-divider\n        weight="very-thick"\n        label="End of section"\n        label-placement="center"\n      ></ic-divider>\n    </div>`'}};const borderStyle=()=>lit_html.qy` <div
      style="display: flex; flex-direction: column; gap: var(--ic-space-md)"
    >
      <ic-divider border-style="solid"></ic-divider>
      <ic-divider border-style="dashed"></ic-divider>
    </div>`;borderStyle.storyName="Border style",borderStyle.parameters={storySource:{source:'html` <div\n      style="display: flex; flex-direction: column; gap: var(--ic-space-md)"\n    >\n      <ic-divider border-style="solid"></ic-divider>\n      <ic-divider border-style="dashed"></ic-divider>\n    </div>`'}};const vertical=()=>lit_html.qy`
      <div style="display: flex; gap: var(--ic-space-lg); height: 400px">
        <ic-divider orientation="vertical" weight="thin"></ic-divider>
        <ic-divider
          orientation="vertical"
          weight="thin"
          border-style="dashed"
        ></ic-divider>
        <ic-divider orientation="vertical" weight="medium"></ic-divider>
        <ic-divider
          orientation="vertical"
          weight="medium"
          border-style="dashed"
        ></ic-divider>
        <ic-divider orientation="vertical" weight="thick"></ic-divider>
        <ic-divider
          orientation="vertical"
          weight="thick"
          border-style="dashed"
        ></ic-divider>
        <ic-divider orientation="vertical" weight="very-thick"></ic-divider>
        <ic-divider
          orientation="vertical"
          weight="very-thick"
          border-style="dashed"
        ></ic-divider>
      </div>
    `;vertical.storyName="Vertical",vertical.parameters={storySource:{source:'html`\n      <div style="display: flex; gap: var(--ic-space-lg); height: 400px">\n        <ic-divider orientation="vertical" weight="thin"></ic-divider>\n        <ic-divider\n          orientation="vertical"\n          weight="thin"\n          border-style="dashed"\n        ></ic-divider>\n        <ic-divider orientation="vertical" weight="medium"></ic-divider>\n        <ic-divider\n          orientation="vertical"\n          weight="medium"\n          border-style="dashed"\n        ></ic-divider>\n        <ic-divider orientation="vertical" weight="thick"></ic-divider>\n        <ic-divider\n          orientation="vertical"\n          weight="thick"\n          border-style="dashed"\n        ></ic-divider>\n        <ic-divider orientation="vertical" weight="very-thick"></ic-divider>\n        <ic-divider\n          orientation="vertical"\n          weight="very-thick"\n          border-style="dashed"\n        ></ic-divider>\n      </div>\n    `'}};const labelPlacement=()=>lit_html.qy` <div
        style="display: flex; flex-direction: column; gap: var(--ic-space-lg)"
      >
        <ic-divider label="Label left" label-placement="left"></ic-divider>
        <ic-divider label="Label center" label-placement="center"></ic-divider>
        <ic-divider label="Label right" label-placement="right"></ic-divider>
        <ic-divider label-placement="left">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label left</p>
          </ic-typography></ic-divider
        >
        <ic-divider label-placement="center">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label center</p>
          </ic-typography></ic-divider
        >
        <ic-divider label-placement="right">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label right</p>
          </ic-typography></ic-divider
        >
      </div>
      <div
        style="display: flex; gap: var(--ic-space-lg); height: 200px; margin-top: var(--ic-space-lg)"
      >
        <ic-divider
          label="Label top"
          label-placement="top"
          orientation="vertical"
        ></ic-divider>
        <ic-divider
          label="Label center"
          label-placement="center"
          orientation="vertical"
        ></ic-divider>
        <ic-divider
          label="Label bottom"
          label-placement="bottom"
          orientation="vertical"
        ></ic-divider>
        <ic-divider label-placement="top" orientation="vertical">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label top</p>
          </ic-typography></ic-divider
        >
        <ic-divider label-placement="center" orientation="vertical">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label center</p>
          </ic-typography></ic-divider
        >
        <ic-divider label-placement="bottom" orientation="vertical">
          <ic-typography variant="label" slot="label">
            <p style="width: max-content;">Slotted label bottom</p>
          </ic-typography></ic-divider
        >
      </div>`;labelPlacement.storyName="Label placement",labelPlacement.parameters={storySource:{source:'html` <div\n        style="display: flex; flex-direction: column; gap: var(--ic-space-lg)"\n      >\n        <ic-divider label="Label left" label-placement="left"></ic-divider>\n        <ic-divider label="Label center" label-placement="center"></ic-divider>\n        <ic-divider label="Label right" label-placement="right"></ic-divider>\n        <ic-divider label-placement="left">\n          <ic-typography variant="label" slot="label">\n            <p style="width: max-content;">Slotted label left</p>\n          </ic-typography></ic-divider\n        >\n        <ic-divider label-placement="center">\n          <ic-typography variant="label" slot="label">\n            <p style="width: max-content;">Slotted label center</p>\n          </ic-typography></ic-divider\n        >\n        <ic-divider label-placement="right">\n          <ic-typography variant="label" slot="label">\n            <p style="width: max-content;">Slotted label right</p>\n          </ic-typography></ic-divider\n        >\n      </div>\n      <div\n        style="display: flex; gap: var(--ic-space-lg); height: 200px; margin-top: var(--ic-space-lg)"\n      >\n        <ic-divider\n          label="Label top"\n          label-placement="top"\n          orientation="vertical"\n        ></ic-divider>\n        <ic-divider\n          label="Label center"\n          label-placement="center"\n          orientation="vertical"\n        ></ic-divider>\n        <ic-divider\n          label="Label bottom"\n          label-placement="bottom"\n          orientation="vertical"\n        ></ic-divider>\n        <ic-divider label-placement="top" orientation="vertical">\n          <ic-typography variant="label" slot="label">\n            <p style="width: max-content;">Slotted label top</p>\n          </ic-typography></ic-divider\n        >\n        <ic-divider label-placement="center" orientation="vertical">\n          <ic-typography variant="label" slot="label">\n            <p style="width: max-content;">Slotted label center</p>\n          </ic-typography></ic-divider\n        >\n        <ic-divider label-placement="bottom" orientation="vertical">\n          <ic-typography variant="label" slot="label">\n            <p style="width: max-content;">Slotted label bottom</p>\n          </ic-typography></ic-divider\n        >\n      </div>`'}};const playground=args=>{const backgroundColor="light"===args.appearance?"#121212":"transparent";return lit_html.qy`<div
        style="display: flex; width: 100%; height: 100%; padding: var(--ic-space-md); background-color: ${backgroundColor}; box-sizing: border-box;"
      >
        <ic-divider
          orientation=${args.orientation}
          appearance=${args.appearance}
          border-style=${args["border-style"]}
          weight=${args.weight}
          label=${args.label}
          label-placement=${args["label-placement"]}
          style="--ic-divider-horizontal-width: ${args["--ic-divider-horizontal-width"]}; --ic-divider-vertical-height: ${args["--ic-divider-vertical-height"]}"
        ></ic-divider>
      </div>`};playground.storyName="Playground",playground.argTypes={orientation:{options:["horizontal","vertical"],control:{type:"inline-radio"}},appearance:{options:["default","dark","light","theme"],control:{type:"radio"}},"border-style":{options:["solid","dashed"],control:{type:"inline-radio"}},weight:{options:["thin","medium","thick","very-thick"],control:{type:"radio"}},label:{mapping:{none:""}},"label-placement":{options:["none","left","center","right","top","bottom"],mapping:{none:""},control:{type:"radio"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => {\n  const backgroundColor = args.appearance === "light" ? "#121212" : "transparent";\n  return html`<div\n        style="display: flex; width: 100%; height: 100%; padding: var(--ic-space-md); background-color: ${backgroundColor}; box-sizing: border-box;"\n      >\n        <ic-divider\n          orientation=${args.orientation}\n          appearance=${args.appearance}\n          border-style=${args["border-style"]}\n          weight=${args.weight}\n          label=${args.label}\n          label-placement=${args["label-placement"]}\n          style="--ic-divider-horizontal-width: ${args["--ic-divider-horizontal-width"]}; --ic-divider-vertical-height: ${args["--ic-divider-vertical-height"]}"\n        ></ic-divider>\n      </div>`;\n}'},loki:{skip:!0}};const componentMeta={title:"Web Components/Divider",parameters:{loki:{skip:!0}},tags:["stories-mdx"],includeStories:["appearance","weight","borderStyle","vertical","labelPlacement","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_divider_stories=componentMeta,__namedExportsOrder=["defaultArgs","appearance","weight","borderStyle","vertical","labelPlacement","playground"]},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _t$litHtmlVersions;__webpack_require__.d(__webpack_exports__,{qy:()=>x});var t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h="lit$".concat((Math.random()+"").slice(9),"$"),o="?"+h,n="<".concat(o,">"),r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(">|".concat(d,"(?:([^\\s\"'>=/]+)(").concat(d,"*=").concat(d,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>function(i){for(var _len=arguments.length,s=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)s[_key-1]=arguments[_key];return{_$litType$:t,strings:i,values:s}},x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}var P=(t,i)=>{for(var r,s=t.length-1,o=[],l=2===i?"<svg>":"",c=f,_i=0;_i<s;_i++){for(var _s=t[_i],_a=void 0,_u=void 0,_d=-1,_y=0;_y<_s.length&&(c.lastIndex=_y,null!==(_u=c.exec(_s)));){var _r;_y=c.lastIndex,c===f?"!--"===_u[1]?c=v:void 0!==_u[1]?c=_:void 0!==_u[2]?($.test(_u[2])&&(r=RegExp("</"+_u[2],"g")),c=m):void 0!==_u[3]&&(c=m):c===m?">"===_u[0]?(c=null!==(_r=r)&&void 0!==_r?_r:f,_d=-1):void 0===_u[1]?_d=-2:(_d=c.lastIndex-_u[2].length,_a=_u[1],c=void 0===_u[3]?m:'"'===_u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0)}var _x=c===m&&t[_i+1].startsWith("/>")?" ":"";l+=c===f?_s+n:_d>=0?(o.push(_a),_s.slice(0,_d)+e+_s.slice(_d)+h+_x):_s+h+(-2===_d?_i:_x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor(_ref,n){var r,{strings:t,_$litType$:s}=_ref;this.parts=[];var c=0,a=0,u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){var _t=this.el.content.firstChild;_t.replaceWith(..._t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(var _t2 of r.getAttributeNames())if(_t2.endsWith(e)){var _i2=v[a++],_s2=r.getAttribute(_t2).split(h),_e=/([.?@])?(.*)/.exec(_i2);d.push({type:1,index:c,name:_e[2],strings:_s2,ctor:"."===_e[1]?k:"?"===_e[1]?H:"@"===_e[1]?I:R}),r.removeAttribute(_t2)}else _t2.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(_t2));if($.test(r.tagName)){var _t3=r.textContent.split(h),_s3=_t3.length-1;if(_s3>0){r.textContent=i?i.emptyScript:"";for(var _i3=0;_i3<_s3;_i3++)r.append(_t3[_i3],l()),E.nextNode(),d.push({type:2,index:++c});r.append(_t3[_s3],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else for(var _t4=-1;-1!==(_t4=r.data.indexOf(h,_t4+1));)d.push({type:7,index:c}),_t4+=h.length-1;c++}}static createElement(t,i){var s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i){var _s$_$Co,_h,_h2,_h2$_$AO,_s$_$Co2,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,e=arguments.length>3?arguments[3]:void 0;if(i===w)return i;var h=void 0!==e?null===(_s$_$Co=s._$Co)||void 0===_s$_$Co?void 0:_s$_$Co[e]:s._$Cl,o=c(i)?void 0:i._$litDirective$;return(null===(_h=h)||void 0===_h?void 0:_h.constructor)!==o&&(null!==(_h2=h)&&void 0!==_h2&&null!==(_h2$_$AO=_h2._$AO)&&void 0!==_h2$_$AO&&_h2$_$AO.call(_h2,!1),void 0===o?h=void 0:(h=new o(t))._$AT(t,s,e),void 0!==e?(null!==(_s$_$Co2=s._$Co)&&void 0!==_s$_$Co2?_s$_$Co2:s._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var _t$creationScope,{el:{content:i},parts:s}=this._$AD,e=(null!==(_t$creationScope=null==t?void 0:t.creationScope)&&void 0!==_t$creationScope?_t$creationScope:r).importNode(i,!0);E.currentNode=e;for(var h=E.nextNode(),o=0,n=0,l=s[0];void 0!==l;){var _l;if(o===l.index){var _i4=void 0;2===l.type?_i4=new M(h,h.nextSibling,this,t):1===l.type?_i4=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(_i4=new L(h,this,t)),this._$AV.push(_i4),l=s[++n]}o!==(null===(_l=l)||void 0===_l?void 0:_l.index)&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){var i=0;for(var _s4 of this._$AV)void 0!==_s4&&(void 0!==_s4.strings?(_s4._$AI(t,_s4,i),i+=_s4.strings.length-2):_s4._$AI(t[i])),i++}}class M{get _$AU(){var _this$_$AM$_$AU,_this$_$AM;return null!==(_this$_$AM$_$AU=null===(_this$_$AM=this._$AM)||void 0===_this$_$AM?void 0:_this$_$AM._$AU)&&void 0!==_this$_$AM$_$AU?_this$_$AM$_$AU:this._$Cv}constructor(t,i,s,e){var _e$isConnected;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=null===(_e$isConnected=null==e?void 0:e.isConnected)||void 0===_e$isConnected||_e$isConnected}get parentNode(){var _t5,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(_t5=t)||void 0===_t5?void 0:_t5.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){var _this$_$AH,{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if((null===(_this$_$AH=this._$AH)||void 0===_this$_$AH?void 0:_this$_$AH._$AD)===e)this._$AH.p(i);else{var _t6=new S(e,this),_s5=_t6.u(this.options);_t6.p(i),this.$(_s5),this._$AH=_t6}}_$AC(t){var i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());var s,i=this._$AH,e=0;for(var _h3 of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(_h3),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(_this$_$AP=this._$AP)||void 0===_this$_$AP||_this$_$AP.call(this,!1,!0,i);t&&t!==this._$AB;){var _this$_$AP,_i5=t.nextSibling;t.remove(),t=_i5}}setConnected(t){var _this$_$AP2;void 0===this._$AM&&(this._$Cv=t,null===(_this$_$AP2=this._$AP)||void 0===_this$_$AP2||_this$_$AP2.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,s=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,h=this.strings,o=!1;if(void 0===h)t=N(this,t,i,0),(o=!c(t)||t!==this._$AH&&t!==w)&&(this._$AH=t);else{var _n,_r2,_e2=t;for(t=h[0],_n=0;_n<h.length-1;_n++){var _r3;(_r2=N(this,_e2[s+_n],i,_n))===w&&(_r2=this._$AH[_n]),o||(o=!c(_r2)||_r2!==this._$AH[_n]),_r2===T?t=T:t!==T&&(t+=(null!==(_r3=_r2)&&void 0!==_r3?_r3:"")+h[_n+1]),this._$AH[_n]=_r2}}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t){var _N;if((t=null!==(_N=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==_N?_N:T)!==w){var s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var _this$options$host,_this$options;"function"==typeof this._$AH?this._$AH.call(null!==(_this$options$host=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.host)&&void 0!==_this$options$host?_this$options$host:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}var Z=t.litHtmlPolyfillSupport;null!=Z&&Z(V,M),(null!==(_t$litHtmlVersions=t.litHtmlVersions)&&void 0!==_t$litHtmlVersions?_t$litHtmlVersions:t.litHtmlVersions=[]).push("3.1.1")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-divider-ic-divider-stories-mdx.4aae1901.iframe.bundle.js.map