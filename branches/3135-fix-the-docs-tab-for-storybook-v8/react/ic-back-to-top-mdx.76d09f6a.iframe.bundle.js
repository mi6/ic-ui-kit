(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[4573,7975],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/ic-back-to-top.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),ic_back_to_top_stories=__webpack_require__("./src/stories/ic-back-to-top.stories.js");const readme_namespaceObject='# ic-back-to-top\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property              | Attribute | Description                                                     | Type                  | Default     |\n| --------------------- | --------- | --------------------------------------------------------------- | --------------------- | ----------- |\n| `target` _(required)_ | `target`  | The ID of the element to jump back to when the link is clicked. | `string`              | `undefined` |\n| `variant`             | `variant` | The variant of the button to render                             | `"default" \\| "icon"` | `"default"` |\n\n\n## CSS Custom Properties\n\n| Name                       | Description            |\n| -------------------------- | ---------------------- |\n| `--ic-z-index-back-to-top` | z-index of back to top |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n- [ic-tooltip](../ic-tooltip)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-back-to-top --\x3e ic-typography\n  ic-back-to-top --\x3e ic-tooltip\n  ic-tooltip --\x3e ic-typography\n  style ic-back-to-top fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_back_to_top_stories}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.om,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/stories/ic-back-to-top.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,PageExample:()=>PageExample,Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Back to top",component:_components__WEBPACK_IMPORTED_MODULE_1__.mj};var Default={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:"topEl",style:{marginTop:"-20px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"h2"},"Top of the page")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{height:"1200px"}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mj,{target:"topEl"}))},name:"Default"},PageExample={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:"header",style:{width:"100%",height:"100px",backgroundColor:"#23508e",color:"var(--ic-architectural-white)"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"h1"},"Header"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,{variant:"secondary",appearance:"light"},"Button")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:"topPageEl"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"h2"},"Top of the page")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"h3"},"Some content"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit turpis. Cras ac ligula et lectus mollis molestie in a enim. In ac turpis in leo rutrum eleifend. Fusce consectetur posuere ligula, vitae semper lorem mollis vitae. Fusce vel blandit turpis. Nulla justo ligula, egestas quis rutrum id, vulputate eget diam. Integer mattis quis nisi id blandit. Duis nisi lectus, suscipit elementum iaculis sed, porta et risus."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"h3"},"More content"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Phasellus accumsan ligula enim, a iaculis sapien rhoncus vitae. Curabitur pulvinar posuere diam in luctus. Sed blandit diam id odio aliquam aliquet. Pellentesque eros enim, tristique vel mattis eu, blandit at enim. Pellentesque sollicitudin pellentesque tellus vel eleifend. Nulla mauris lorem, porttitor vel orci eu, iaculis maximus nunc. Ut rhoncus ex ipsum. Mauris ultricies, augue sed eleifend pellentesque, leo purus efficitur orci, sit amet volutpat tortor diam non lorem. Morbi venenatis neque vel accumsan sagittis. Nunc rutrum augue non urna tincidunt auctor in at libero. Sed in risus sit amet nisl tempor viverra. Phasellus maximus sapien eu erat maximus iaculis. Praesent ultricies id orci eu euismod. Fusce eu urna turpis. Praesent ut neque tincidunt, porta sem id, accumsan massa."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"h3"},"Some other content"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi enim, viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur volutpat augue eget sollicitudin. Pellentesque eget pharetra ligula. Integer finibus feugiat sapien a pulvinar. Phasellus fermentum est lacus, quis volutpat justo pellentesque vitae. Sed vitae diam porta, facilisis metus ut, dictum lorem. Proin sed bibendum libero. Maecenas justo neque, ultricies sed magna ac, mattis vehicula elit. Donec ac lacus eget sapien luctus ultricies in in nibh."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc, ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra semper arcu nec semper. Sed non magna purus. Integer accumsan dui et volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu, placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam non elit in sem vestibulum molestie tempor eget augue. Sed neque ligula, tempus ac mollis bibendum, ultrices suscipit risus. Duis suscipit pulvinar varius."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"h3"},"Some more"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Etiam accumsan nibh erat, condimentum tempus metus suscipit nec. Duis placerat varius dolor eget ornare. Vestibulum egestas tellus non tellus ornare, eu scelerisque erat pulvinar. Nam tempus lacus eu libero consequat, in elementum magna ultricies. Etiam at suscipit odio. Duis quis quam vitae quam varius luctus. Aliquam erat volutpat. Fusce laoreet consectetur tortor, ac suscipit sem feugiat non. Etiam tempus tellus aliquet orci pretium, nec pretium nulla faucibus"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,null,"Button"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"h3"},"Nearly there"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi enim, viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur volutpat augue eget sollicitudin. Pellentesque eget pharetra ligula. Integer finibus feugiat sapien a pulvinar. Phasellus fermentum est lacus, quis volutpat justo pellentesque vitae. Sed vitae diam porta, facilisis metus ut, dictum lorem. Proin sed bibendum libero. Maecenas justo neque, ultricies sed magna ac, mattis vehicula elit. Donec ac lacus eget sapien luctus ultricies in in nibh."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc, ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra semper arcu nec semper. Sed non magna purus. Integer accumsan dui et volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu, placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam non elit in sem vestibulum molestie tempor eget augue. Sed neque ligula, tempus ac mollis bibendum, ultrices suscipit risus. Duis suscipit pulvinar varius."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"h3"},"The end"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mj,{target:"topPageEl"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer",{style:{marginBottom:"24px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:"footer",style:{width:"100%",height:"200px",backgroundColor:"#23508e",color:"var(--ic-architectural-white)"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"h3"},"Footer"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"official"}))},name:"Page Example"},Playground={render:function render(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:"header",style:{width:"100%",height:"100px",backgroundColor:"#23508e",color:"var(--ic-architectural-white)"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"h1"},"Header"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,{variant:"secondary",appearance:"light"},"Button")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:"topPageEl"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"h2"},"Top of the page")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"h3"},"Some content"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit turpis. Cras ac ligula et lectus mollis molestie in a enim. In ac turpis in leo rutrum eleifend. Fusce consectetur posuere ligula, vitae semper lorem mollis vitae. Fusce vel blandit turpis. Nulla justo ligula, egestas quis rutrum id, vulputate eget diam. Integer mattis quis nisi id blandit. Duis nisi lectus, suscipit elementum iaculis sed, porta et risus."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"h3"},"More content"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Phasellus accumsan ligula enim, a iaculis sapien rhoncus vitae. Curabitur pulvinar posuere diam in luctus. Sed blandit diam id odio aliquam aliquet. Pellentesque eros enim, tristique vel mattis eu, blandit at enim. Pellentesque sollicitudin pellentesque tellus vel eleifend. Nulla mauris lorem, porttitor vel orci eu, iaculis maximus nunc. Ut rhoncus ex ipsum. Mauris ultricies, augue sed eleifend pellentesque, leo purus efficitur orci, sit amet volutpat tortor diam non lorem. Morbi venenatis neque vel accumsan sagittis. Nunc rutrum augue non urna tincidunt auctor in at libero. Sed in risus sit amet nisl tempor viverra. Phasellus maximus sapien eu erat maximus iaculis. Praesent ultricies id orci eu euismod. Fusce eu urna turpis. Praesent ut neque tincidunt, porta sem id, accumsan massa."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"h3"},"Some other content"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi enim, viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur volutpat augue eget sollicitudin. Pellentesque eget pharetra ligula. Integer finibus feugiat sapien a pulvinar. Phasellus fermentum est lacus, quis volutpat justo pellentesque vitae. Sed vitae diam porta, facilisis metus ut, dictum lorem. Proin sed bibendum libero. Maecenas justo neque, ultricies sed magna ac, mattis vehicula elit. Donec ac lacus eget sapien luctus ultricies in in nibh."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc, ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra semper arcu nec semper. Sed non magna purus. Integer accumsan dui et volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu, placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam non elit in sem vestibulum molestie tempor eget augue. Sed neque ligula, tempus ac mollis bibendum, ultrices suscipit risus. Duis suscipit pulvinar varius."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"h3"},"Some more"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Etiam accumsan nibh erat, condimentum tempus metus suscipit nec. Duis placerat varius dolor eget ornare. Vestibulum egestas tellus non tellus ornare, eu scelerisque erat pulvinar. Nam tempus lacus eu libero consequat, in elementum magna ultricies. Etiam at suscipit odio. Duis quis quam vitae quam varius luctus. Aliquam erat volutpat. Fusce laoreet consectetur tortor, ac suscipit sem feugiat non. Etiam tempus tellus aliquet orci pretium, nec pretium nulla faucibus"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,null,"Button"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"h3"},"Nearly there"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi enim, viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur volutpat augue eget sollicitudin. Pellentesque eget pharetra ligula. Integer finibus feugiat sapien a pulvinar. Phasellus fermentum est lacus, quis volutpat justo pellentesque vitae. Sed vitae diam porta, facilisis metus ut, dictum lorem. Proin sed bibendum libero. Maecenas justo neque, ultricies sed magna ac, mattis vehicula elit. Donec ac lacus eget sapien luctus ultricies in in nibh."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc, ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra semper arcu nec semper. Sed non magna purus. Integer accumsan dui et volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu, placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam non elit in sem vestibulum molestie tempor eget augue. Sed neque ligula, tempus ac mollis bibendum, ultrices suscipit risus. Duis suscipit pulvinar varius."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"h3"},"The end"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.mj,{target:args.target,variant:args.variant}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer",{style:{marginBottom:"24px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:"footer",style:{width:"100%",height:"200px",backgroundColor:"#23508e",color:"var(--ic-architectural-white)"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{variant:"h3"},"Footer"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.tb,{classification:"official"}))},args:{target:"topEl",variant:"default"},argTypes:{target:{table:{disable:!0}},variant:{options:["default","icon"],control:{type:"inline-radio"}}},name:"Playground"};const __namedExportsOrder=["Default","PageExample","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n    <div id="topEl" style={{\n      marginTop: "-20px"\n    }}>\n      <IcTypography variant="h2">Top of the page</IcTypography>\n    </div>\n    <div style={{\n      height: "1200px"\n    }}></div>\n    <IcBackToTop target="topEl" />\n    </>,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},PageExample.parameters={...PageExample.parameters,docs:{...PageExample.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n    <div id="header" style={{\n      width: "100%",\n      height: "100px",\n      backgroundColor: "#23508e",\n      color: "var(--ic-architectural-white)"\n    }}>\n      <IcTypography variant="h1">Header</IcTypography>\n      <IcButton variant="secondary" appearance="light">Button</IcButton>\n    </div>\n    <div id="topPageEl">\n      <IcTypography variant="h2">Top of the page</IcTypography>\n    </div>\n    <IcTypography variant="h3">Some content</IcTypography>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit\n      turpis. Cras ac ligula et lectus mollis molestie in a enim. In ac turpis\n      in leo rutrum eleifend. Fusce consectetur posuere ligula, vitae semper\n      lorem mollis vitae. Fusce vel blandit turpis. Nulla justo ligula, egestas\n      quis rutrum id, vulputate eget diam. Integer mattis quis nisi id blandit.\n      Duis nisi lectus, suscipit elementum iaculis sed, porta et risus.\n    </p>\n    <br />\n    <br />\n    <br />\n    <IcTypography variant="h3">More content</IcTypography>\n    <p>\n      Phasellus accumsan ligula enim, a iaculis sapien rhoncus vitae. Curabitur\n      pulvinar posuere diam in luctus. Sed blandit diam id odio aliquam aliquet.\n      Pellentesque eros enim, tristique vel mattis eu, blandit at enim.\n      Pellentesque sollicitudin pellentesque tellus vel eleifend. Nulla mauris\n      lorem, porttitor vel orci eu, iaculis maximus nunc. Ut rhoncus ex ipsum.\n      Mauris ultricies, augue sed eleifend pellentesque, leo purus efficitur\n      orci, sit amet volutpat tortor diam non lorem. Morbi venenatis neque vel\n      accumsan sagittis. Nunc rutrum augue non urna tincidunt auctor in at\n      libero. Sed in risus sit amet nisl tempor viverra. Phasellus maximus\n      sapien eu erat maximus iaculis. Praesent ultricies id orci eu euismod.\n      Fusce eu urna turpis. Praesent ut neque tincidunt, porta sem id, accumsan\n      massa.\n    </p>\n    <br />\n    <br />\n    <br />\n    <IcTypography variant="h3">Some other content</IcTypography>\n    <p>\n      Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa\n      enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at\n      ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi enim,\n      viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur volutpat\n      augue eget sollicitudin. Pellentesque eget pharetra ligula. Integer\n      finibus feugiat sapien a pulvinar. Phasellus fermentum est lacus, quis\n      volutpat justo pellentesque vitae. Sed vitae diam porta, facilisis metus\n      ut, dictum lorem. Proin sed bibendum libero. Maecenas justo neque,\n      ultricies sed magna ac, mattis vehicula elit. Donec ac lacus eget sapien\n      luctus ultricies in in nibh.\n    </p>\n    <p>\n      Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada vitae,\n      elementum et quam. Lorem ipsum dolor sit amet, consectetur adipiscing\n      elit. Nulla eu dui a quam mollis porta. Nulla ante nunc, ultrices luctus\n      dolor at, ullamcorper convallis erat. Aenean viverra semper arcu nec\n      semper. Sed non magna purus. Integer accumsan dui et volutpat auctor.\n      Phasellus nec risus ultricies, maximus nunc eu, placerat diam. Etiam\n      pulvinar lacinia urna eget molestie. Suspendisse semper hendrerit ipsum,\n      vel porttitor lacus venenatis sit amet. Nullam non elit in sem vestibulum\n      molestie tempor eget augue. Sed neque ligula, tempus ac mollis bibendum,\n      ultrices suscipit risus. Duis suscipit pulvinar varius.\n    </p>\n    <br />\n    <br />\n    <br />\n    <IcTypography variant="h3">Some more</IcTypography>\n    <p>\n      Etiam accumsan nibh erat, condimentum tempus metus suscipit nec. Duis\n      placerat varius dolor eget ornare. Vestibulum egestas tellus non tellus\n      ornare, eu scelerisque erat pulvinar. Nam tempus lacus eu libero\n      consequat, in elementum magna ultricies. Etiam at suscipit odio. Duis quis\n      quam vitae quam varius luctus. Aliquam erat volutpat. Fusce laoreet\n      consectetur tortor, ac suscipit sem feugiat non. Etiam tempus tellus\n      aliquet orci pretium, nec pretium nulla faucibus\n    </p>\n    <br />\n    <IcButton>Button</IcButton>\n    <br />\n    <br />\n    <br />\n    <IcTypography variant="h3">Nearly there</IcTypography>\n    <p>\n      Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa\n      enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at\n      ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi enim,\n      viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur volutpat\n      augue eget sollicitudin. Pellentesque eget pharetra ligula. Integer\n      finibus feugiat sapien a pulvinar. Phasellus fermentum est lacus, quis\n      volutpat justo pellentesque vitae. Sed vitae diam porta, facilisis metus\n      ut, dictum lorem. Proin sed bibendum libero. Maecenas justo neque,\n      ultricies sed magna ac, mattis vehicula elit. Donec ac lacus eget sapien\n      luctus ultricies in in nibh.\n    </p>\n    <p>\n      Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada vitae,\n      elementum et quam. Lorem ipsum dolor sit amet, consectetur adipiscing\n      elit. Nulla eu dui a quam mollis porta. Nulla ante nunc, ultrices luctus\n      dolor at, ullamcorper convallis erat. Aenean viverra semper arcu nec\n      semper. Sed non magna purus. Integer accumsan dui et volutpat auctor.\n      Phasellus nec risus ultricies, maximus nunc eu, placerat diam. Etiam\n      pulvinar lacinia urna eget molestie. Suspendisse semper hendrerit ipsum,\n      vel porttitor lacus venenatis sit amet. Nullam non elit in sem vestibulum\n      molestie tempor eget augue. Sed neque ligula, tempus ac mollis bibendum,\n      ultrices suscipit risus. Duis suscipit pulvinar varius.\n    </p>\n    <br />\n    <br />\n    <br />\n    <IcTypography variant="h3">The end</IcTypography>\n    <br />\n    <IcBackToTop target="topPageEl" />\n    <footer style={{\n      marginBottom: "24px"\n    }}>\n      <div id="footer" style={{\n        width: "100%",\n        height: "200px",\n        backgroundColor: "#23508e",\n        color: "var(--ic-architectural-white)"\n      }}>\n        <IcTypography variant="h3">Footer</IcTypography>\n      </div>\n    </footer>\n    <IcClassificationBanner classification="official" />\n    </>,\n  name: "Page Example"\n}',...PageExample.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => <>\n      <div id="header" style={{\n      width: "100%",\n      height: "100px",\n      backgroundColor: "#23508e",\n      color: "var(--ic-architectural-white)"\n    }}>\n        <IcTypography variant="h1">Header</IcTypography>\n        <IcButton variant="secondary" appearance="light">\n          Button\n        </IcButton>\n      </div>\n      <div id="topPageEl">\n        <IcTypography variant="h2">Top of the page</IcTypography>\n      </div>\n      <IcTypography variant="h3">Some content</IcTypography>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit\n        turpis. Cras ac ligula et lectus mollis molestie in a enim. In ac turpis\n        in leo rutrum eleifend. Fusce consectetur posuere ligula, vitae semper\n        lorem mollis vitae. Fusce vel blandit turpis. Nulla justo ligula,\n        egestas quis rutrum id, vulputate eget diam. Integer mattis quis nisi id\n        blandit. Duis nisi lectus, suscipit elementum iaculis sed, porta et\n        risus.\n      </p>\n      <br />\n      <br />\n      <br />\n      <IcTypography variant="h3">More content</IcTypography>\n      <p>\n        Phasellus accumsan ligula enim, a iaculis sapien rhoncus vitae.\n        Curabitur pulvinar posuere diam in luctus. Sed blandit diam id odio\n        aliquam aliquet. Pellentesque eros enim, tristique vel mattis eu,\n        blandit at enim. Pellentesque sollicitudin pellentesque tellus vel\n        eleifend. Nulla mauris lorem, porttitor vel orci eu, iaculis maximus\n        nunc. Ut rhoncus ex ipsum. Mauris ultricies, augue sed eleifend\n        pellentesque, leo purus efficitur orci, sit amet volutpat tortor diam\n        non lorem. Morbi venenatis neque vel accumsan sagittis. Nunc rutrum\n        augue non urna tincidunt auctor in at libero. Sed in risus sit amet nisl\n        tempor viverra. Phasellus maximus sapien eu erat maximus iaculis.\n        Praesent ultricies id orci eu euismod. Fusce eu urna turpis. Praesent ut\n        neque tincidunt, porta sem id, accumsan massa.\n      </p>\n      <br />\n      <br />\n      <br />\n      <IcTypography variant="h3">Some other content</IcTypography>\n      <p>\n        Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa\n        enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at\n        ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi\n        enim, viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur\n        volutpat augue eget sollicitudin. Pellentesque eget pharetra ligula.\n        Integer finibus feugiat sapien a pulvinar. Phasellus fermentum est\n        lacus, quis volutpat justo pellentesque vitae. Sed vitae diam porta,\n        facilisis metus ut, dictum lorem. Proin sed bibendum libero. Maecenas\n        justo neque, ultricies sed magna ac, mattis vehicula elit. Donec ac\n        lacus eget sapien luctus ultricies in in nibh.\n      </p>\n      <p>\n        Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada\n        vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur\n        adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc,\n        ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra\n        semper arcu nec semper. Sed non magna purus. Integer accumsan dui et\n        volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu,\n        placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse\n        semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam\n        non elit in sem vestibulum molestie tempor eget augue. Sed neque ligula,\n        tempus ac mollis bibendum, ultrices suscipit risus. Duis suscipit\n        pulvinar varius.\n      </p>\n      <br />\n      <br />\n      <br />\n      <IcTypography variant="h3">Some more</IcTypography>\n      <p>\n        Etiam accumsan nibh erat, condimentum tempus metus suscipit nec. Duis\n        placerat varius dolor eget ornare. Vestibulum egestas tellus non tellus\n        ornare, eu scelerisque erat pulvinar. Nam tempus lacus eu libero\n        consequat, in elementum magna ultricies. Etiam at suscipit odio. Duis\n        quis quam vitae quam varius luctus. Aliquam erat volutpat. Fusce laoreet\n        consectetur tortor, ac suscipit sem feugiat non. Etiam tempus tellus\n        aliquet orci pretium, nec pretium nulla faucibus\n      </p>\n      <br />\n      <IcButton>Button</IcButton>\n      <br />\n      <br />\n      <br />\n      <IcTypography variant="h3">Nearly there</IcTypography>\n      <p>\n        Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa\n        enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at\n        ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi\n        enim, viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur\n        volutpat augue eget sollicitudin. Pellentesque eget pharetra ligula.\n        Integer finibus feugiat sapien a pulvinar. Phasellus fermentum est\n        lacus, quis volutpat justo pellentesque vitae. Sed vitae diam porta,\n        facilisis metus ut, dictum lorem. Proin sed bibendum libero. Maecenas\n        justo neque, ultricies sed magna ac, mattis vehicula elit. Donec ac\n        lacus eget sapien luctus ultricies in in nibh.\n      </p>\n      <p>\n        Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada\n        vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur\n        adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc,\n        ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra\n        semper arcu nec semper. Sed non magna purus. Integer accumsan dui et\n        volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu,\n        placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse\n        semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam\n        non elit in sem vestibulum molestie tempor eget augue. Sed neque ligula,\n        tempus ac mollis bibendum, ultrices suscipit risus. Duis suscipit\n        pulvinar varius.\n      </p>\n      <br />\n      <br />\n      <br />\n      <IcTypography variant="h3">The end</IcTypography>\n      <br />\n      <IcBackToTop target={args.target} variant={args.variant} />\n      <footer style={{\n      marginBottom: "24px"\n    }}>\n        <div id="footer" style={{\n        width: "100%",\n        height: "200px",\n        backgroundColor: "#23508e",\n        color: "var(--ic-architectural-white)"\n      }}>\n          <IcTypography variant="h3">Footer</IcTypography>\n        </div>\n      </footer>\n      <IcClassificationBanner classification="official" />\n    </>,\n  args: defaultArgs,\n  argTypes: {\n    target: {\n      table: {\n        disable: true\n      }\n    },\n    variant: {\n      options: ["default", "icon"],\n      control: {\n        type: "inline-radio"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}}}]);