/*! For license information please see components-ic-back-to-top-ic-back-to-top-mdx.852ea402.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[3611,6637,582,6199,6763],{"./src/components/ic-back-to-top/ic-back-to-top.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const readme_namespaceObject='# ic-back-to-top\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property              | Attribute  | Description                                                                                                                             | Type                                          | Default     |\n| --------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------- |\n| `position`            | `position` | The horizontal position of the element.                                                                                                 | `"center" \\| "left" \\| "right" \\| undefined`  | `"right"`   |\n| `target` _(required)_ | `target`   | The ID of the element to jump back to when the link is clicked.                                                                         | `string`                                      | `undefined` |\n| `theme`               | `theme`    | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \\| "inherit" \\| "light" \\| undefined` | `"inherit"` |\n| `variant`             | `variant`  | The variant of the button to render                                                                                                     | `"default" \\| "icon" \\| undefined`            | `"default"` |\n\n\n## CSS Custom Properties\n\n| Name                       | Description                      |\n| -------------------------- | -------------------------------- |\n| `--footer-offset`          | offset of x-position from footer |\n| `--ic-z-index-back-to-top` | z-index of back to top           |\n| `--margin-left`            | left y-position of back to top   |\n| `--margin-right`           | right y-position of back to top  |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-button](../ic-button)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-back-to-top --\x3e ic-button\n  ic-button --\x3e ic-typography\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-back-to-top fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var ic_back_to_top_stories=__webpack_require__("./src/components/ic-back-to-top/ic-back-to-top.stories.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_back_to_top_stories}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.om,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/ic-back-to-top/ic-back-to-top.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,IconOnly:()=>IconOnly,PageExample:()=>PageExample,Playground:()=>Playground,PositionCenter:()=>PositionCenter,PositionLeft:()=>PositionLeft,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Back to top",component:"ic-back-to-top"},Default={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div id="topEl" style="margin-top:-20px;">
      <ic-typography variant="h2">Top of the page</ic-typography>
    </div>
    <div style="height:1200px;"></div>
    <ic-back-to-top target="topEl"></ic-back-to-top>
    <footer style="margin-bottom: 24px;">
      <div
        id="footer"
        style="width: 100%; height: 200px; background-color: #23508e;"
      >
        <ic-typography variant="h3">Footer</ic-typography>
      </div>
    </footer>
    <ic-classification-banner
      classification="official"
    ></ic-classification-banner>
  `,name:"Default"},PositionLeft={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div id="topEl" style="margin-top:-20px;">
      <ic-typography variant="h2">Top of the page</ic-typography>
    </div>
    <div style="height:1200px;"></div>
    <ic-back-to-top target="topEl" position="left"></ic-back-to-top>
    <footer style="margin-bottom: 24px;">
      <div
        id="footer"
        style="width: 100%; height: 200px; background-color: #23508e;"
      >
        <ic-typography variant="h3">Footer</ic-typography>
      </div>
    </footer>
    <ic-classification-banner
      classification="official"
    ></ic-classification-banner>
  `,name:"Position left"},PositionCenter={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div id="topEl" style="margin-top:-20px;">
      <ic-typography variant="h2">Top of the page</ic-typography>
    </div>
    <div style="height:1200px;"></div>
    <ic-back-to-top target="topEl" position="center"></ic-back-to-top>
    <footer style="margin-bottom: 24px;">
      <div id="footer" style="height: 200px; background-color: #23508e;">
        <ic-typography variant="h3">Footer</ic-typography>
      </div>
    </footer>
    <ic-classification-banner
      classification="official"
    ></ic-classification-banner>
  `,name:"Position center"},IconOnly={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div id="topEl" style="margin-top:-20px;">
      <ic-typography variant="h2">Top of the page</ic-typography>
    </div>
    <div style="height:1200px;"></div>
    <ic-back-to-top target="topEl" variant="icon"></ic-back-to-top>
  `,name:"Icon Only"},PageExample={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div
      id="header"
      style="width:100%;height:100px;background-color:#23508e;color:var(--ic-architectural-white)"
    >
      <ic-typography variant="h1">Header</ic-typography>
      <ic-button variant="secondary" appearance="light">Button</ic-button>
    </div>
    <div id="topPageEl">
      <ic-typography variant="h2">Top of the page</ic-typography>
    </div>
    <ic-typography variant="h3">Some content</ic-typography>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit
      turpis. Cras ac ligula et lectus mollis molestie in a enim. In ac turpis
      in leo rutrum eleifend. Fusce consectetur posuere ligula, vitae semper
      lorem mollis vitae. Fusce vel blandit turpis. Nulla justo ligula, egestas
      quis rutrum id, vulputate eget diam. Integer mattis quis nisi id blandit.
      Duis nisi lectus, suscipit elementum iaculis sed, porta et risus.
    </p>
    <br />
    <br />
    <br />
    <ic-typography variant="h3">More content</ic-typography>
    <p>
      Phasellus accumsan ligula enim, a iaculis sapien rhoncus vitae. Curabitur
      pulvinar posuere diam in luctus. Sed blandit diam id odio aliquam aliquet.
      Pellentesque eros enim, tristique vel mattis eu, blandit at enim.
      Pellentesque sollicitudin pellentesque tellus vel eleifend. Nulla mauris
      lorem, porttitor vel orci eu, iaculis maximus nunc. Ut rhoncus ex ipsum.
      Mauris ultricies, augue sed eleifend pellentesque, leo purus efficitur
      orci, sit amet volutpat tortor diam non lorem. Morbi venenatis neque vel
      accumsan sagittis. Nunc rutrum augue non urna tincidunt auctor in at
      libero. Sed in risus sit amet nisl tempor viverra. Phasellus maximus
      sapien eu erat maximus iaculis. Praesent ultricies id orci eu euismod.
      Fusce eu urna turpis. Praesent ut neque tincidunt, porta sem id, accumsan
      massa.
    </p>
    <br />
    <br />
    <br />
    <ic-typography variant="h3">Some other content</ic-typography>
    <p>
      Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa
      enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at
      ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi enim,
      viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur volutpat
      augue eget sollicitudin. Pellentesque eget pharetra ligula. Integer
      finibus feugiat sapien a pulvinar. Phasellus fermentum est lacus, quis
      volutpat justo pellentesque vitae. Sed vitae diam porta, facilisis metus
      ut, dictum lorem. Proin sed bibendum libero. Maecenas justo neque,
      ultricies sed magna ac, mattis vehicula elit. Donec ac lacus eget sapien
      luctus ultricies in in nibh.
    </p>
    <p>
      Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada vitae,
      elementum et quam. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Nulla eu dui a quam mollis porta. Nulla ante nunc, ultrices luctus
      dolor at, ullamcorper convallis erat. Aenean viverra semper arcu nec
      semper. Sed non magna purus. Integer accumsan dui et volutpat auctor.
      Phasellus nec risus ultricies, maximus nunc eu, placerat diam. Etiam
      pulvinar lacinia urna eget molestie. Suspendisse semper hendrerit ipsum,
      vel porttitor lacus venenatis sit amet. Nullam non elit in sem vestibulum
      molestie tempor eget augue. Sed neque ligula, tempus ac mollis bibendum,
      ultrices suscipit risus. Duis suscipit pulvinar varius.
    </p>
    <br />
    <br />
    <br />
    <ic-typography variant="h3">Some more</ic-typography>
    <p>
      Etiam accumsan nibh erat, condimentum tempus metus suscipit nec. Duis
      placerat varius dolor eget ornare. Vestibulum egestas tellus non tellus
      ornare, eu scelerisque erat pulvinar. Nam tempus lacus eu libero
      consequat, in elementum magna ultricies. Etiam at suscipit odio. Duis quis
      quam vitae quam varius luctus. Aliquam erat volutpat. Fusce laoreet
      consectetur tortor, ac suscipit sem feugiat non. Etiam tempus tellus
      aliquet orci pretium, nec pretium nulla faucibus
    </p>
    <br />
    <ic-button>Button</ic-button>
    <br />
    <br />
    <br />
    <ic-typography variant="h3">Nearly there</ic-typography>
    <p>
      Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa
      enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at
      ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi enim,
      viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur volutpat
      augue eget sollicitudin. Pellentesque eget pharetra ligula. Integer
      finibus feugiat sapien a pulvinar. Phasellus fermentum est lacus, quis
      volutpat justo pellentesque vitae. Sed vitae diam porta, facilisis metus
      ut, dictum lorem. Proin sed bibendum libero. Maecenas justo neque,
      ultricies sed magna ac, mattis vehicula elit. Donec ac lacus eget sapien
      luctus ultricies in in nibh.
    </p>
    <p>
      Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada vitae,
      elementum et quam. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Nulla eu dui a quam mollis porta. Nulla ante nunc, ultrices luctus
      dolor at, ullamcorper convallis erat. Aenean viverra semper arcu nec
      semper. Sed non magna purus. Integer accumsan dui et volutpat auctor.
      Phasellus nec risus ultricies, maximus nunc eu, placerat diam. Etiam
      pulvinar lacinia urna eget molestie. Suspendisse semper hendrerit ipsum,
      vel porttitor lacus venenatis sit amet. Nullam non elit in sem vestibulum
      molestie tempor eget augue. Sed neque ligula, tempus ac mollis bibendum,
      ultrices suscipit risus. Duis suscipit pulvinar varius.
    </p>
    <br />
    <br />
    <br />
    <ic-typography variant="h3">The end</ic-typography>
    <br />
    <ic-back-to-top target="topPageEl"></ic-back-to-top>
    <footer>
      <div
        id="footer"
        style="width:100%;height:200px;background-color:#23508e;color:var(--ic-architectural-white)"
      >
        <ic-typography variant="h3">Footer</ic-typography>
      </div>
    </footer>
    <ic-classification-banner
      classification="official"
    ></ic-classification-banner>
  `,name:"Page example"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div
      id="header"
      style="width:100%;height:100px;background-color:#23508e;color:var(--ic-architectural-white)"
    >
      <ic-typography variant="h1">Header</ic-typography>
      <ic-button variant="secondary" appearance="light">Button</ic-button>
    </div>
    <div id="topEl">
      <ic-typography variant="h2">Top of the page</ic-typography>
    </div>
    <ic-typography variant="h3">Some content</ic-typography>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit
      turpis. Cras ac ligula et lectus mollis molestie in a enim. In ac turpis
      in leo rutrum eleifend. Fusce consectetur posuere ligula, vitae semper
      lorem mollis vitae. Fusce vel blandit turpis. Nulla justo ligula, egestas
      quis rutrum id, vulputate eget diam. Integer mattis quis nisi id blandit.
      Duis nisi lectus, suscipit elementum iaculis sed, porta et risus.
    </p>
    <br />
    <br />
    <br />
    <ic-typography variant="h3">More content</ic-typography>
    <p>
      Phasellus accumsan ligula enim, a iaculis sapien rhoncus vitae. Curabitur
      pulvinar posuere diam in luctus. Sed blandit diam id odio aliquam aliquet.
      Pellentesque eros enim, tristique vel mattis eu, blandit at enim.
      Pellentesque sollicitudin pellentesque tellus vel eleifend. Nulla mauris
      lorem, porttitor vel orci eu, iaculis maximus nunc. Ut rhoncus ex ipsum.
      Mauris ultricies, augue sed eleifend pellentesque, leo purus efficitur
      orci, sit amet volutpat tortor diam non lorem. Morbi venenatis neque vel
      accumsan sagittis. Nunc rutrum augue non urna tincidunt auctor in at
      libero. Sed in risus sit amet nisl tempor viverra. Phasellus maximus
      sapien eu erat maximus iaculis. Praesent ultricies id orci eu euismod.
      Fusce eu urna turpis. Praesent ut neque tincidunt, porta sem id, accumsan
      massa.
    </p>
    <br />
    <br />
    <br />
    <ic-typography variant="h3">Some other content</ic-typography>
    <p>
      Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa
      enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at
      ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi enim,
      viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur volutpat
      augue eget sollicitudin. Pellentesque eget pharetra ligula. Integer
      finibus feugiat sapien a pulvinar. Phasellus fermentum est lacus, quis
      volutpat justo pellentesque vitae. Sed vitae diam porta, facilisis metus
      ut, dictum lorem. Proin sed bibendum libero. Maecenas justo neque,
      ultricies sed magna ac, mattis vehicula elit. Donec ac lacus eget sapien
      luctus ultricies in in nibh.
    </p>
    <p>
      Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada vitae,
      elementum et quam. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Nulla eu dui a quam mollis porta. Nulla ante nunc, ultrices luctus
      dolor at, ullamcorper convallis erat. Aenean viverra semper arcu nec
      semper. Sed non magna purus. Integer accumsan dui et volutpat auctor.
      Phasellus nec risus ultricies, maximus nunc eu, placerat diam. Etiam
      pulvinar lacinia urna eget molestie. Suspendisse semper hendrerit ipsum,
      vel porttitor lacus venenatis sit amet. Nullam non elit in sem vestibulum
      molestie tempor eget augue. Sed neque ligula, tempus ac mollis bibendum,
      ultrices suscipit risus. Duis suscipit pulvinar varius.
    </p>
    <br />
    <br />
    <br />
    <ic-typography variant="h3">Some more</ic-typography>
    <p>
      Etiam accumsan nibh erat, condimentum tempus metus suscipit nec. Duis
      placerat varius dolor eget ornare. Vestibulum egestas tellus non tellus
      ornare, eu scelerisque erat pulvinar. Nam tempus lacus eu libero
      consequat, in elementum magna ultricies. Etiam at suscipit odio. Duis quis
      quam vitae quam varius luctus. Aliquam erat volutpat. Fusce laoreet
      consectetur tortor, ac suscipit sem feugiat non. Etiam tempus tellus
      aliquet orci pretium, nec pretium nulla faucibus
    </p>
    <br />
    <ic-button>Button</ic-button>
    <br />
    <br />
    <br />
    <ic-typography variant="h3">Nearly there</ic-typography>
    <p>
      Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa
      enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at
      ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi enim,
      viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur volutpat
      augue eget sollicitudin. Pellentesque eget pharetra ligula. Integer
      finibus feugiat sapien a pulvinar. Phasellus fermentum est lacus, quis
      volutpat justo pellentesque vitae. Sed vitae diam porta, facilisis metus
      ut, dictum lorem. Proin sed bibendum libero. Maecenas justo neque,
      ultricies sed magna ac, mattis vehicula elit. Donec ac lacus eget sapien
      luctus ultricies in in nibh.
    </p>
    <p>
      Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada vitae,
      elementum et quam. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Nulla eu dui a quam mollis porta. Nulla ante nunc, ultrices luctus
      dolor at, ullamcorper convallis erat. Aenean viverra semper arcu nec
      semper. Sed non magna purus. Integer accumsan dui et volutpat auctor.
      Phasellus nec risus ultricies, maximus nunc eu, placerat diam. Etiam
      pulvinar lacinia urna eget molestie. Suspendisse semper hendrerit ipsum,
      vel porttitor lacus venenatis sit amet. Nullam non elit in sem vestibulum
      molestie tempor eget augue. Sed neque ligula, tempus ac mollis bibendum,
      ultrices suscipit risus. Duis suscipit pulvinar varius.
    </p>
    <br />
    <br />
    <br />
    <ic-typography variant="h3">The end</ic-typography>
    <br />
    <ic-back-to-top
      target=${args.target}
      variant=${args.variant}
      theme=${args.theme}
      position=${args.position}
    ></ic-back-to-top>
    <footer>
      <div
        id="footer"
        style="width:100%;height:200px;background-color:#23508e;color:var(--ic-architectural-white)"
      >
        <ic-typography variant="h3">Footer</ic-typography>
      </div>
    </footer>
    <ic-classification-banner
      classification="official"
    ></ic-classification-banner>
  `,args:{target:"topEl",theme:"inherit",variant:"default",position:"right"},argTypes:{target:{table:{disable:!0}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}},variant:{options:["default","icon"],control:{type:"inline-radio"}},position:{options:["left","center","right"],control:{type:"inline-radio"}}},name:"Playground"},__namedExportsOrder=["Default","PositionLeft","PositionCenter","IconOnly","PageExample","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div id="topEl" style="margin-top:-20px;">\n      <ic-typography variant="h2">Top of the page</ic-typography>\n    </div>\n    <div style="height:1200px;"></div>\n    <ic-back-to-top target="topEl"></ic-back-to-top>\n    <footer style="margin-bottom: 24px;">\n      <div\n        id="footer"\n        style="width: 100%; height: 200px; background-color: #23508e;"\n      >\n        <ic-typography variant="h3">Footer</ic-typography>\n      </div>\n    </footer>\n    <ic-classification-banner\n      classification="official"\n    ></ic-classification-banner>\n  `,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},PositionLeft.parameters={...PositionLeft.parameters,docs:{...PositionLeft.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div id="topEl" style="margin-top:-20px;">\n      <ic-typography variant="h2">Top of the page</ic-typography>\n    </div>\n    <div style="height:1200px;"></div>\n    <ic-back-to-top target="topEl" position="left"></ic-back-to-top>\n    <footer style="margin-bottom: 24px;">\n      <div\n        id="footer"\n        style="width: 100%; height: 200px; background-color: #23508e;"\n      >\n        <ic-typography variant="h3">Footer</ic-typography>\n      </div>\n    </footer>\n    <ic-classification-banner\n      classification="official"\n    ></ic-classification-banner>\n  `,\n  name: "Position left"\n}',...PositionLeft.parameters?.docs?.source}}},PositionCenter.parameters={...PositionCenter.parameters,docs:{...PositionCenter.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div id="topEl" style="margin-top:-20px;">\n      <ic-typography variant="h2">Top of the page</ic-typography>\n    </div>\n    <div style="height:1200px;"></div>\n    <ic-back-to-top target="topEl" position="center"></ic-back-to-top>\n    <footer style="margin-bottom: 24px;">\n      <div id="footer" style="height: 200px; background-color: #23508e;">\n        <ic-typography variant="h3">Footer</ic-typography>\n      </div>\n    </footer>\n    <ic-classification-banner\n      classification="official"\n    ></ic-classification-banner>\n  `,\n  name: "Position center"\n}',...PositionCenter.parameters?.docs?.source}}},IconOnly.parameters={...IconOnly.parameters,docs:{...IconOnly.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div id="topEl" style="margin-top:-20px;">\n      <ic-typography variant="h2">Top of the page</ic-typography>\n    </div>\n    <div style="height:1200px;"></div>\n    <ic-back-to-top target="topEl" variant="icon"></ic-back-to-top>\n  `,\n  name: "Icon Only"\n}',...IconOnly.parameters?.docs?.source}}},PageExample.parameters={...PageExample.parameters,docs:{...PageExample.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div\n      id="header"\n      style="width:100%;height:100px;background-color:#23508e;color:var(--ic-architectural-white)"\n    >\n      <ic-typography variant="h1">Header</ic-typography>\n      <ic-button variant="secondary" appearance="light">Button</ic-button>\n    </div>\n    <div id="topPageEl">\n      <ic-typography variant="h2">Top of the page</ic-typography>\n    </div>\n    <ic-typography variant="h3">Some content</ic-typography>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit\n      turpis. Cras ac ligula et lectus mollis molestie in a enim. In ac turpis\n      in leo rutrum eleifend. Fusce consectetur posuere ligula, vitae semper\n      lorem mollis vitae. Fusce vel blandit turpis. Nulla justo ligula, egestas\n      quis rutrum id, vulputate eget diam. Integer mattis quis nisi id blandit.\n      Duis nisi lectus, suscipit elementum iaculis sed, porta et risus.\n    </p>\n    <br />\n    <br />\n    <br />\n    <ic-typography variant="h3">More content</ic-typography>\n    <p>\n      Phasellus accumsan ligula enim, a iaculis sapien rhoncus vitae. Curabitur\n      pulvinar posuere diam in luctus. Sed blandit diam id odio aliquam aliquet.\n      Pellentesque eros enim, tristique vel mattis eu, blandit at enim.\n      Pellentesque sollicitudin pellentesque tellus vel eleifend. Nulla mauris\n      lorem, porttitor vel orci eu, iaculis maximus nunc. Ut rhoncus ex ipsum.\n      Mauris ultricies, augue sed eleifend pellentesque, leo purus efficitur\n      orci, sit amet volutpat tortor diam non lorem. Morbi venenatis neque vel\n      accumsan sagittis. Nunc rutrum augue non urna tincidunt auctor in at\n      libero. Sed in risus sit amet nisl tempor viverra. Phasellus maximus\n      sapien eu erat maximus iaculis. Praesent ultricies id orci eu euismod.\n      Fusce eu urna turpis. Praesent ut neque tincidunt, porta sem id, accumsan\n      massa.\n    </p>\n    <br />\n    <br />\n    <br />\n    <ic-typography variant="h3">Some other content</ic-typography>\n    <p>\n      Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa\n      enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at\n      ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi enim,\n      viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur volutpat\n      augue eget sollicitudin. Pellentesque eget pharetra ligula. Integer\n      finibus feugiat sapien a pulvinar. Phasellus fermentum est lacus, quis\n      volutpat justo pellentesque vitae. Sed vitae diam porta, facilisis metus\n      ut, dictum lorem. Proin sed bibendum libero. Maecenas justo neque,\n      ultricies sed magna ac, mattis vehicula elit. Donec ac lacus eget sapien\n      luctus ultricies in in nibh.\n    </p>\n    <p>\n      Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada vitae,\n      elementum et quam. Lorem ipsum dolor sit amet, consectetur adipiscing\n      elit. Nulla eu dui a quam mollis porta. Nulla ante nunc, ultrices luctus\n      dolor at, ullamcorper convallis erat. Aenean viverra semper arcu nec\n      semper. Sed non magna purus. Integer accumsan dui et volutpat auctor.\n      Phasellus nec risus ultricies, maximus nunc eu, placerat diam. Etiam\n      pulvinar lacinia urna eget molestie. Suspendisse semper hendrerit ipsum,\n      vel porttitor lacus venenatis sit amet. Nullam non elit in sem vestibulum\n      molestie tempor eget augue. Sed neque ligula, tempus ac mollis bibendum,\n      ultrices suscipit risus. Duis suscipit pulvinar varius.\n    </p>\n    <br />\n    <br />\n    <br />\n    <ic-typography variant="h3">Some more</ic-typography>\n    <p>\n      Etiam accumsan nibh erat, condimentum tempus metus suscipit nec. Duis\n      placerat varius dolor eget ornare. Vestibulum egestas tellus non tellus\n      ornare, eu scelerisque erat pulvinar. Nam tempus lacus eu libero\n      consequat, in elementum magna ultricies. Etiam at suscipit odio. Duis quis\n      quam vitae quam varius luctus. Aliquam erat volutpat. Fusce laoreet\n      consectetur tortor, ac suscipit sem feugiat non. Etiam tempus tellus\n      aliquet orci pretium, nec pretium nulla faucibus\n    </p>\n    <br />\n    <ic-button>Button</ic-button>\n    <br />\n    <br />\n    <br />\n    <ic-typography variant="h3">Nearly there</ic-typography>\n    <p>\n      Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa\n      enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at\n      ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi enim,\n      viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur volutpat\n      augue eget sollicitudin. Pellentesque eget pharetra ligula. Integer\n      finibus feugiat sapien a pulvinar. Phasellus fermentum est lacus, quis\n      volutpat justo pellentesque vitae. Sed vitae diam porta, facilisis metus\n      ut, dictum lorem. Proin sed bibendum libero. Maecenas justo neque,\n      ultricies sed magna ac, mattis vehicula elit. Donec ac lacus eget sapien\n      luctus ultricies in in nibh.\n    </p>\n    <p>\n      Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada vitae,\n      elementum et quam. Lorem ipsum dolor sit amet, consectetur adipiscing\n      elit. Nulla eu dui a quam mollis porta. Nulla ante nunc, ultrices luctus\n      dolor at, ullamcorper convallis erat. Aenean viverra semper arcu nec\n      semper. Sed non magna purus. Integer accumsan dui et volutpat auctor.\n      Phasellus nec risus ultricies, maximus nunc eu, placerat diam. Etiam\n      pulvinar lacinia urna eget molestie. Suspendisse semper hendrerit ipsum,\n      vel porttitor lacus venenatis sit amet. Nullam non elit in sem vestibulum\n      molestie tempor eget augue. Sed neque ligula, tempus ac mollis bibendum,\n      ultrices suscipit risus. Duis suscipit pulvinar varius.\n    </p>\n    <br />\n    <br />\n    <br />\n    <ic-typography variant="h3">The end</ic-typography>\n    <br />\n    <ic-back-to-top target="topPageEl"></ic-back-to-top>\n    <footer>\n      <div\n        id="footer"\n        style="width:100%;height:200px;background-color:#23508e;color:var(--ic-architectural-white)"\n      >\n        <ic-typography variant="h3">Footer</ic-typography>\n      </div>\n    </footer>\n    <ic-classification-banner\n      classification="official"\n    ></ic-classification-banner>\n  `,\n  name: "Page example"\n}',...PageExample.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`\n    <div\n      id="header"\n      style="width:100%;height:100px;background-color:#23508e;color:var(--ic-architectural-white)"\n    >\n      <ic-typography variant="h1">Header</ic-typography>\n      <ic-button variant="secondary" appearance="light">Button</ic-button>\n    </div>\n    <div id="topEl">\n      <ic-typography variant="h2">Top of the page</ic-typography>\n    </div>\n    <ic-typography variant="h3">Some content</ic-typography>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit\n      turpis. Cras ac ligula et lectus mollis molestie in a enim. In ac turpis\n      in leo rutrum eleifend. Fusce consectetur posuere ligula, vitae semper\n      lorem mollis vitae. Fusce vel blandit turpis. Nulla justo ligula, egestas\n      quis rutrum id, vulputate eget diam. Integer mattis quis nisi id blandit.\n      Duis nisi lectus, suscipit elementum iaculis sed, porta et risus.\n    </p>\n    <br />\n    <br />\n    <br />\n    <ic-typography variant="h3">More content</ic-typography>\n    <p>\n      Phasellus accumsan ligula enim, a iaculis sapien rhoncus vitae. Curabitur\n      pulvinar posuere diam in luctus. Sed blandit diam id odio aliquam aliquet.\n      Pellentesque eros enim, tristique vel mattis eu, blandit at enim.\n      Pellentesque sollicitudin pellentesque tellus vel eleifend. Nulla mauris\n      lorem, porttitor vel orci eu, iaculis maximus nunc. Ut rhoncus ex ipsum.\n      Mauris ultricies, augue sed eleifend pellentesque, leo purus efficitur\n      orci, sit amet volutpat tortor diam non lorem. Morbi venenatis neque vel\n      accumsan sagittis. Nunc rutrum augue non urna tincidunt auctor in at\n      libero. Sed in risus sit amet nisl tempor viverra. Phasellus maximus\n      sapien eu erat maximus iaculis. Praesent ultricies id orci eu euismod.\n      Fusce eu urna turpis. Praesent ut neque tincidunt, porta sem id, accumsan\n      massa.\n    </p>\n    <br />\n    <br />\n    <br />\n    <ic-typography variant="h3">Some other content</ic-typography>\n    <p>\n      Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa\n      enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at\n      ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi enim,\n      viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur volutpat\n      augue eget sollicitudin. Pellentesque eget pharetra ligula. Integer\n      finibus feugiat sapien a pulvinar. Phasellus fermentum est lacus, quis\n      volutpat justo pellentesque vitae. Sed vitae diam porta, facilisis metus\n      ut, dictum lorem. Proin sed bibendum libero. Maecenas justo neque,\n      ultricies sed magna ac, mattis vehicula elit. Donec ac lacus eget sapien\n      luctus ultricies in in nibh.\n    </p>\n    <p>\n      Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada vitae,\n      elementum et quam. Lorem ipsum dolor sit amet, consectetur adipiscing\n      elit. Nulla eu dui a quam mollis porta. Nulla ante nunc, ultrices luctus\n      dolor at, ullamcorper convallis erat. Aenean viverra semper arcu nec\n      semper. Sed non magna purus. Integer accumsan dui et volutpat auctor.\n      Phasellus nec risus ultricies, maximus nunc eu, placerat diam. Etiam\n      pulvinar lacinia urna eget molestie. Suspendisse semper hendrerit ipsum,\n      vel porttitor lacus venenatis sit amet. Nullam non elit in sem vestibulum\n      molestie tempor eget augue. Sed neque ligula, tempus ac mollis bibendum,\n      ultrices suscipit risus. Duis suscipit pulvinar varius.\n    </p>\n    <br />\n    <br />\n    <br />\n    <ic-typography variant="h3">Some more</ic-typography>\n    <p>\n      Etiam accumsan nibh erat, condimentum tempus metus suscipit nec. Duis\n      placerat varius dolor eget ornare. Vestibulum egestas tellus non tellus\n      ornare, eu scelerisque erat pulvinar. Nam tempus lacus eu libero\n      consequat, in elementum magna ultricies. Etiam at suscipit odio. Duis quis\n      quam vitae quam varius luctus. Aliquam erat volutpat. Fusce laoreet\n      consectetur tortor, ac suscipit sem feugiat non. Etiam tempus tellus\n      aliquet orci pretium, nec pretium nulla faucibus\n    </p>\n    <br />\n    <ic-button>Button</ic-button>\n    <br />\n    <br />\n    <br />\n    <ic-typography variant="h3">Nearly there</ic-typography>\n    <p>\n      Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa\n      enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at\n      ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi enim,\n      viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur volutpat\n      augue eget sollicitudin. Pellentesque eget pharetra ligula. Integer\n      finibus feugiat sapien a pulvinar. Phasellus fermentum est lacus, quis\n      volutpat justo pellentesque vitae. Sed vitae diam porta, facilisis metus\n      ut, dictum lorem. Proin sed bibendum libero. Maecenas justo neque,\n      ultricies sed magna ac, mattis vehicula elit. Donec ac lacus eget sapien\n      luctus ultricies in in nibh.\n    </p>\n    <p>\n      Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada vitae,\n      elementum et quam. Lorem ipsum dolor sit amet, consectetur adipiscing\n      elit. Nulla eu dui a quam mollis porta. Nulla ante nunc, ultrices luctus\n      dolor at, ullamcorper convallis erat. Aenean viverra semper arcu nec\n      semper. Sed non magna purus. Integer accumsan dui et volutpat auctor.\n      Phasellus nec risus ultricies, maximus nunc eu, placerat diam. Etiam\n      pulvinar lacinia urna eget molestie. Suspendisse semper hendrerit ipsum,\n      vel porttitor lacus venenatis sit amet. Nullam non elit in sem vestibulum\n      molestie tempor eget augue. Sed neque ligula, tempus ac mollis bibendum,\n      ultrices suscipit risus. Duis suscipit pulvinar varius.\n    </p>\n    <br />\n    <br />\n    <br />\n    <ic-typography variant="h3">The end</ic-typography>\n    <br />\n    <ic-back-to-top\n      target=${args.target}\n      variant=${args.variant}\n      theme=${args.theme}\n      position=${args.position}\n    ></ic-back-to-top>\n    <footer>\n      <div\n        id="footer"\n        style="width:100%;height:200px;background-color:#23508e;color:var(--ic-architectural-white)"\n      >\n        <ic-typography variant="h3">Footer</ic-typography>\n      </div>\n    </footer>\n    <ic-classification-banner\n      classification="official"\n    ></ic-classification-banner>\n  `,\n  args: defaultArgs,\n  argTypes: {\n    target: {\n      table: {\n        disable: true\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: INLINE_RADIO\n      }\n    },\n    variant: {\n      options: ["default", "icon"],\n      control: {\n        type: INLINE_RADIO\n      }\n    },\n    position: {\n      options: ["left", "center", "right"],\n      control: {\n        type: INLINE_RADIO\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-back-to-top-ic-back-to-top-mdx.852ea402.iframe.bundle.js.map