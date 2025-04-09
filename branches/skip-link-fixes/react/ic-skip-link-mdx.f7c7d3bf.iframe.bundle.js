(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[6224,2917,6394,70,1138],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/ic-skip-link.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),ic_skip_link_stories=__webpack_require__("./src/stories/ic-skip-link.stories.js");const readme_namespaceObject='# ic-skip-link\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                | Attribute                | Description                                                                                                                             | Type                             | Default                  |\n| ----------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------ |\n| `fullWidth`             | `full-width`             | If `true`, the link will fill the width of the page.                                                                                    | `boolean`                        | `false`                  |\n| `inline`                | `inline`                 | If `true`, the link will appear inline with surrounding page content when focused.                                                      | `boolean`                        | `false`                  |\n| `label`                 | `label`                  | The label displayed when the link is focused.                                                                                           | `string`                         | `"Skip to main content"` |\n| `monochrome`            | `monochrome`             | If `true`, the link will display as black in the light theme, and white in the dark theme.                                              | `boolean`                        | `false`                  |\n| `target` _(required)_   | `target`                 | The target ID for the element which should receive focus when triggering the skip link.                                                 | `string`                         | `undefined`              |\n| `theme`                 | `theme`                  | Sets the theme color to the dark or light theme color. `inherit` will set the color based on the system settings or ic-theme component. | `"dark" \\| "inherit" \\| "light"` | `"inherit"`              |\n| `transparentBackground` | `transparent-background` | If `true`, the background will be hidden.                                                                                               | `boolean`                        | `false`                  |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-link](../ic-link)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-skip-link --\x3e ic-link\n  style ic-skip-link fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_skip_link_stories}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.om,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./src/react-component-lib/slottedSVG.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>SlottedSVG});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_excluded=["path","slot","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var defaultProps={xmlns:"http://www.w3.org/2000/svg"};var SlottedSVG=function SlottedSVG(_ref){var path=_ref.path,slotName=_ref.slot,children=_ref.children,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({},function slot(){var name=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{ref:function ref(e){return e?e.setAttribute("slot",name):null}}}(slotName),props,defaultProps),!!path&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:path}),children)};try{SlottedSVG.displayName="SlottedSVG",SlottedSVG.__docgenInfo={description:"",displayName:"SlottedSVG",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/react-component-lib/slottedSVG.tsx#SlottedSVG"]={docgenInfo:SlottedSVG.__docgenInfo,name:"SlottedSVG",path:"src/react-component-lib/slottedSVG.tsx#SlottedSVG"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/stories/ic-skip-link.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,FullWidth:()=>FullWidth,HideBackground:()=>HideBackground,Inline:()=>Inline,Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components.ts"),_react_component_lib_slottedSVG__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/react-component-lib/slottedSVG.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Skip link",component:_components__WEBPACK_IMPORTED_MODULE_1__.QE};var Default={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.QE,{target:"page-content"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.ok,{"app-title":"Application Name"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_component_lib_slottedSVG__WEBPACK_IMPORTED_MODULE_2__.k,{slot:"app-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",{id:"page-content"},"Target element"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,null,"Should receive next focus"))},name:"Default"},FullWidth={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.QE,{target:"page-content",fullWidth:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.ok,{"app-title":"Application Name"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_component_lib_slottedSVG__WEBPACK_IMPORTED_MODULE_2__.k,{slot:"app-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",{id:"page-content"},"Target element"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,null,"Should receive next focus"))},name:"Full width"},Inline={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.QE,{target:"page-content"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.ok,{"app-title":"Application Name"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_component_lib_slottedSVG__WEBPACK_IMPORTED_MODULE_2__.k,{slot:"app-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.GJ,{slot:"search",placeholder:"Search",label:"Search"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.P0,{label:"button1",slot:"buttons",onclick:"alert('test')"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Wc,{slot:"navigation",label:"Navigation",href:"/"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.yP,{slot:"navigation",label:"Navigation group",expandable:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Wc,{label:"Navigation",href:"/"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Wc,{label:"Navigation",href:"/"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",{style:{height:"100%"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.vU,{aligned:"center",id:"page-content"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin sit amet augue sit amet dui suscipit lobortis. Nullam at consectetur ante. Suspendisse mollis ultricies porttitor. Nunc laoreet leo tortor, ut tristique odio finibus a. In rutrum convallis purus, vitae tristique tortor sagittis vel. Donec dictum nunc a elit tristique, et facilisis est condimentum. Pellentesque maximus nulla libero, nec auctor urna consequat nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In maximus velit a erat volutpat, sit amet consequat velit rhoncus. Mauris pretium neque eget ante consectetur consectetur. Morbi a consequat lectus. Donec venenatis ultricies sem nec pulvinar. Fusce lacus augue, laoreet id pretium id, efficitur nec leo."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.QE,{label:"Skip to options",target:"page-content",inline:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin sit amet augue sit amet dui suscipit lobortis. Nullam at consectetur ante. Suspendisse mollis ultricies porttitor. Nunc laoreet leo tortor, ut tristique odio finibus a. In rutrum convallis purus, vitae tristique tortor sagittis vel. Donec dictum nunc a elit tristique, et facilisis est condimentum. Pellentesque maximus nulla libero, nec auctor urna consequat nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In maximus velit a erat volutpat, sit amet consequat velit rhoncus. Mauris pretium neque eget ante consectetur consectetur. Morbi a consequat lectus. Donec venenatis ultricies sem nec pulvinar. Fusce lacus augue, laoreet id pretium id, efficitur nec leo."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:"options"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.rG,{label:"This is a label",required:!0,name:"group1"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.sz,{value:"valueName1",label:"Unselected / Default"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.sz,{value:"valueName2",label:"Selected / Default",checked:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.sz,{value:"valueName3",label:"Unselected / Disabled",disabled:!0})))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.so,{aligned:"full-width",description:"The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, please get in touch.",caption:"All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."})))},name:"Inline",parameters:{layout:"fullscreen"}},HideBackground={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.QE,{target:"page-content",transparentBackground:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.ok,{"app-title":"Application Name"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_component_lib_slottedSVG__WEBPACK_IMPORTED_MODULE_2__.k,{slot:"app-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",{id:"page-content"},"Target element"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,null,"Should receive next focus"))},name:"Hide background"},Playground={render:function render(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.QE,{fullWidth:args.fullWidth,inline:args.inline,label:args.label,monochrome:args.monochrome,target:args.target,theme:args.theme,transparentBackground:args.transparentBackground}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.ok,{"app-title":"Application Name"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_component_lib_slottedSVG__WEBPACK_IMPORTED_MODULE_2__.k,{slot:"app-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",{id:args.target},"Target element"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,null,"Should receive next focus"))},args:{fullWidth:!1,inline:!1,label:"Skip to main content",monochrome:!1,target:"",theme:"inherit",transparentBackground:!1},argTypes:{theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};const __namedExportsOrder=["Default","FullWidth","Inline","HideBackground","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcSkipLink target="page-content" />\n      <IcTopNavigation app-title="Application Name">\n        <SlottedSVG slot="app-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />\n        </SlottedSVG>\n      </IcTopNavigation>\n      <main id="page-content">Target element</main>\n      <IcButton>Should receive next focus</IcButton>\n    </>,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},FullWidth.parameters={...FullWidth.parameters,docs:{...FullWidth.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcSkipLink target="page-content" fullWidth />\n      <IcTopNavigation app-title="Application Name">\n        <SlottedSVG slot="app-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />\n        </SlottedSVG>\n      </IcTopNavigation>\n      <main id="page-content">Target element</main>\n      <IcButton>Should receive next focus</IcButton>\n    </>,\n  name: "Full width"\n}',...FullWidth.parameters?.docs?.source}}},Inline.parameters={...Inline.parameters,docs:{...Inline.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcSkipLink target="page-content" />\n      <div>\n        <div style={{\n        display: "flex",\n        flexDirection: "column",\n        minHeight: "100vh"\n      }}>\n        <IcTopNavigation app-title="Application Name">\n          <SlottedSVG slot="app-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />\n          </SlottedSVG>\n          <IcSearchBar slot="search" placeholder="Search" label="Search"></IcSearchBar>\n            <IcNavigationButton label="button1" slot="buttons" onclick="alert(\'test\')">\n              <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n                <path d="M0 0h24v24H0V0z" fill="none" />\n                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />\n              </svg>\n            </IcNavigationButton>\n            <IcNavigationItem slot="navigation" label="Navigation" href="/"></IcNavigationItem>\n            <IcNavigationGroup slot="navigation" label="Navigation group" expandable>\n              <IcNavigationItem label="Navigation" href="/"></IcNavigationItem>\n              <IcNavigationItem label="Navigation" href="/"></IcNavigationItem>\n            </IcNavigationGroup>\n        </IcTopNavigation>\n        <main style={{\n          height: "100%"\n        }}>\n            <IcSectionContainer aligned="center" id="page-content">\n              <IcTypography>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus\n                ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin\n                sit amet augue sit amet dui suscipit lobortis. Nullam at\n                consectetur ante. Suspendisse mollis ultricies porttitor. Nunc\n                laoreet leo tortor, ut tristique odio finibus a. In rutrum\n                convallis purus, vitae tristique tortor sagittis vel. Donec dictum\n                nunc a elit tristique, et facilisis est condimentum. Pellentesque\n                maximus nulla libero, nec auctor urna consequat nec. Class aptent\n                taciti sociosqu ad litora torquent per conubia nostra, per\n                inceptos himenaeos. In maximus velit a erat volutpat, sit amet\n                consequat velit rhoncus. Mauris pretium neque eget ante\n                consectetur consectetur. Morbi a consequat lectus. Donec venenatis\n                ultricies sem nec pulvinar. Fusce lacus augue, laoreet id pretium\n                id, efficitur nec leo.\n              </IcTypography>\n              <br />\n              <IcSkipLink label="Skip to options" target="page-content" inline />\n              <br />\n              <IcTypography>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Vestibulum pharetra scelerisque arcu, vitae semper nisl rhoncus\n                ut. Vestibulum molestie enim at sollicitudin pellentesque. Proin\n                sit amet augue sit amet dui suscipit lobortis. Nullam at\n                consectetur ante. Suspendisse mollis ultricies porttitor. Nunc\n                laoreet leo tortor, ut tristique odio finibus a. In rutrum\n                convallis purus, vitae tristique tortor sagittis vel. Donec dictum\n                nunc a elit tristique, et facilisis est condimentum. Pellentesque\n                maximus nulla libero, nec auctor urna consequat nec. Class aptent\n                taciti sociosqu ad litora torquent per conubia nostra, per\n                inceptos himenaeos. In maximus velit a erat volutpat, sit amet\n                consequat velit rhoncus. Mauris pretium neque eget ante\n                consectetur consectetur. Morbi a consequat lectus. Donec venenatis\n                ultricies sem nec pulvinar. Fusce lacus augue, laoreet id pretium\n                id, efficitur nec leo.\n              </IcTypography>\n              <div id="options">\n              <IcCheckboxGroup label="This is a label" required name="group1">\n                  <IcCheckbox value="valueName1" label="Unselected / Default"></IcCheckbox>\n                  <IcCheckbox value="valueName2" label="Selected / Default" checked></IcCheckbox>\n                  <IcCheckbox value="valueName3" label="Unselected / Disabled" disabled></IcCheckbox>\n                </IcCheckboxGroup>\n              </div>\n            </IcSectionContainer>\n          </main>\n        </div>\n        <IcFooter aligned="full-width" description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback,\n            please get in touch." caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence." />\n      </div>\n    </>,\n  name: "Inline",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...Inline.parameters?.docs?.source}}},HideBackground.parameters={...HideBackground.parameters,docs:{...HideBackground.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcSkipLink target="page-content" transparentBackground />\n      <IcTopNavigation app-title="Application Name">\n        <SlottedSVG slot="app-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />\n        </SlottedSVG>\n      </IcTopNavigation>\n      <main id="page-content">Target element</main>\n      <IcButton>Should receive next focus</IcButton>\n    </>,\n  name: "Hide background"\n}',...HideBackground.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => <>\n      <IcSkipLink fullWidth={args.fullWidth} inline={args.inline} label={args.label} monochrome={args.monochrome} target={args.target} theme={args.theme} transparentBackground={args.transparentBackground} />\n      <IcTopNavigation app-title="Application Name">\n        <SlottedSVG slot="app-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />\n        </SlottedSVG>\n      </IcTopNavigation>\n      <main id={args.target}>Target element</main>\n      <IcButton>Should receive next focus</IcButton>\n    </>,\n  args: defaultArgs,\n  argTypes: {\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: "inline-radio"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}}}]);