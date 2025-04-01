(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[6472,1402,2917,6394,70],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/ic-alert.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const readme_namespaceObject='# ic-alert\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property          | Attribute           | Description                                                                                                                             | Type                                                                    | Default     |\n| ----------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------- |\n| `announced`       | `announced`         | If `true`, the alert will have the \'alert\' ARIA role and will be announced to screen readers.                                           | `boolean \\| undefined`                                                  | `true`      |\n| `dismissible`     | `dismissible`       | If `true`, the alert will have a close icon at the end to dismiss it.                                                                   | `boolean \\| undefined`                                                  | `false`     |\n| `heading`         | `heading`           | The optional title to display at the start of the alert.                                                                                | `string \\| undefined`                                                   | `""`        |\n| `message`         | `message`           | The main body message of the alert.                                                                                                     | `string \\| undefined`                                                   | `undefined` |\n| `showDefaultIcon` | `show-default-icon` | If `true`, the default icon for the neutral variant will appear on the left of the alert.                                               | `boolean \\| undefined`                                                  | `true`      |\n| `theme`           | `theme`             | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \\| "inherit" \\| "light" \\| undefined`                           | `"inherit"` |\n| `titleAbove`      | `title-above`       | If `true`, the title and message will appear above and below instead of inline.                                                         | `boolean \\| undefined`                                                  | `false`     |\n| `variant`         | `variant`           | The variant of the alert which will be rendered.                                                                                        | `"error" \\| "info" \\| "neutral" \\| "success" \\| "warning" \\| undefined` | `"neutral"` |\n\n\n## Events\n\n| Event       | Description                                   | Type                |\n| ----------- | --------------------------------------------- | ------------------- |\n| `icDismiss` | Is emitted when the user dismisses the alert. | `CustomEvent<void>` |\n\n\n## Slots\n\n| Slot             | Description                                                                                            |\n| ---------------- | ------------------------------------------------------------------------------------------------------ |\n| `"action"`       | Content is placed to the right of the message.                                                         |\n| `"message"`      | Content is placed to the right of the title.                                                           |\n| `"neutral-icon"` | A custom neutral icon is placed to the left of the title. This will override the default icon if used. |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n- [ic-button](../ic-button)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-alert --\x3e ic-typography\n  ic-alert --\x3e ic-button\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-alert fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var ic_alert_stories=__webpack_require__("./src/stories/ic-alert.stories.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_alert_stories}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.om,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./src/react-component-lib/slottedSVG.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>SlottedSVG});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_excluded=["path","slot","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var defaultProps={xmlns:"http://www.w3.org/2000/svg"};var SlottedSVG=function SlottedSVG(_ref){var path=_ref.path,slotName=_ref.slot,children=_ref.children,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({},function slot(){var name=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{ref:function ref(e){return e?e.setAttribute("slot",name):null}}}(slotName),props,defaultProps),!!path&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:path}),children)};try{SlottedSVG.displayName="SlottedSVG",SlottedSVG.__docgenInfo={description:"",displayName:"SlottedSVG",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/react-component-lib/slottedSVG.tsx#SlottedSVG"]={docgenInfo:SlottedSVG.__docgenInfo,name:"SlottedSVG",path:"src/react-component-lib/slottedSVG.tsx#SlottedSVG"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/stories/ic-alert.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomMessage:()=>CustomMessage,CustomMessageAndTitleAbove:()=>CustomMessageAndTitleAbove,Dismissible:()=>Dismissible,DismissibleWithAction:()=>DismissibleWithAction,MessageOnly:()=>MessageOnly,NoIcon:()=>NoIcon,Playground:()=>Playground,ResponsiveTitle:()=>ResponsiveTitle,SlottedIcon:()=>SlottedIcon,TitleAbove:()=>TitleAbove,Variants:()=>Variants,WithAction:()=>WithAction,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components.ts"),_react_component_lib_slottedSVG__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/react-component-lib/slottedSVG.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Alert",component:_components__WEBPACK_IMPORTED_MODULE_1__.LP};var Variants={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.LP,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.LP,{variant:"info",heading:"Info",message:"This alert is for displaying information"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.LP,{variant:"error",heading:"Error",message:"This alert is for displaying errors"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.LP,{variant:"warning",heading:"Warning",message:"This alert is for displaying warnings"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.LP,{variant:"success",heading:"Success",message:"This alert is for displaying success messages. It has a very long message with lots of text which goes over multiple lines so the alert should expand as well to make sure it doesn't overflow"}))},name:"Variants"},MessageOnly={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.LP,{message:"This alert is for displaying miscellaneous messages"})},name:"Message only"},Dismissible={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.LP,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages",dismissible:!0})},name:"Dismissible"},WithAction={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.LP,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,{slot:"action",variant:"secondary",monochrome:"true"},"Button"))},name:"With action"},DismissibleWithAction={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.LP,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages",dismissible:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,{slot:"action",variant:"secondary",monochrome:"true"},"Button"))},name:"Dismissible with action"},TitleAbove={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.LP,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages",titleAbove:!0})},name:"Title above"},ResponsiveTitle={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.LP,{heading:"This title is very long so should force the alert to add 'title-above'",message:"This alert does not have 'title-above' added as a prop but it is forced to add it due to the length of the title"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.LP,{variant:"success",heading:"Shorter title",message:"Neither of these has 'title-above' set to true"}))},name:"Responsive title"},CustomMessage={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.LP,{heading:"This alert uses a custom message slot"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{slot:"message"},"This is some text and "," ",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.D9,{href:"/",inline:!0},"this is an inline link")," ","within the text."))},name:"Custom message"},CustomMessageAndTitleAbove={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.LP,{heading:"Want to know more about our coffee?",titleAbove:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Cu,{slot:"message"},"Go to our ",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.D9,{href:"/"},"coffee page")," to learn more."))},name:"Custom message and title above"},SlottedIcon={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.LP,{id:"alert",heading:"Neutral",message:"This alert contains a slotted icon",showDefaultIcon:"false"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_component_lib_slottedSVG__WEBPACK_IMPORTED_MODULE_2__.k,{slot:"neutral-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})))},name:"Slotted icon"},NoIcon={render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.LP,{id:"alert",heading:"Neutral",message:"This alert has no icon",showDefaultIcon:"false"})},name:"No icon"},Playground={render:function render(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.LP,{dismissible:args.dismissible,variant:args.variant,heading:args.heading,message:args.message,titleAbove:args.titleAbove,showDefaultIcon:args.showDefaultIcon,theme:args.theme},args.showAction&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.nP,{slot:"action",variant:"secondary",monochrome:"true"},"Button"),args.showSlottedIcon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_component_lib_slottedSVG__WEBPACK_IMPORTED_MODULE_2__.k,{slot:"neutral-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})))},args:{dismissible:!1,heading:"Heading",message:"Message",titleAbove:!1,variant:"neutral",showAction:!1,showDefaultIcon:!0,showSlottedIcon:!1,theme:"inherit"},argTypes:{variant:{options:["neutral","info","warning","error","success"],control:{type:"select"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};const __namedExportsOrder=["Variants","MessageOnly","Dismissible","WithAction","DismissibleWithAction","TitleAbove","ResponsiveTitle","CustomMessage","CustomMessageAndTitleAbove","SlottedIcon","NoIcon","Playground"];Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcAlert heading="Neutral" message="This alert is for displaying miscellaneous messages" />\n    <IcAlert variant="info" heading="Info" message="This alert is for displaying information" />\n    <IcAlert variant="error" heading="Error" message="This alert is for displaying errors" />\n    <IcAlert variant="warning" heading="Warning" message="This alert is for displaying warnings" />\n    <IcAlert variant="success" heading="Success" message="This alert is for displaying success messages. It has a very long message with lots of text which goes over multiple lines so the alert should expand as well to make sure it doesn\'t overflow" />\n    </>,\n  name: "Variants"\n}',...Variants.parameters?.docs?.source}}},MessageOnly.parameters={...MessageOnly.parameters,docs:{...MessageOnly.parameters?.docs,source:{originalSource:'{\n  render: () => <IcAlert message="This alert is for displaying miscellaneous messages" />,\n  name: "Message only"\n}',...MessageOnly.parameters?.docs?.source}}},Dismissible.parameters={...Dismissible.parameters,docs:{...Dismissible.parameters?.docs,source:{originalSource:'{\n  render: () => <IcAlert heading="Neutral" message="This alert is for displaying miscellaneous messages" dismissible />,\n  name: "Dismissible"\n}',...Dismissible.parameters?.docs?.source}}},WithAction.parameters={...WithAction.parameters,docs:{...WithAction.parameters?.docs,source:{originalSource:'{\n  render: () => <IcAlert heading="Neutral" message="This alert is for displaying miscellaneous messages">\n      <IcButton slot="action" variant="secondary" monochrome="true">\n        Button\n      </IcButton>\n    </IcAlert>,\n  name: "With action"\n}',...WithAction.parameters?.docs?.source}}},DismissibleWithAction.parameters={...DismissibleWithAction.parameters,docs:{...DismissibleWithAction.parameters?.docs,source:{originalSource:'{\n  render: () => <IcAlert heading="Neutral" message="This alert is for displaying miscellaneous messages" dismissible>\n      <IcButton slot="action" variant="secondary" monochrome="true">\n        Button\n      </IcButton>\n    </IcAlert>,\n  name: "Dismissible with action"\n}',...DismissibleWithAction.parameters?.docs?.source}}},TitleAbove.parameters={...TitleAbove.parameters,docs:{...TitleAbove.parameters?.docs,source:{originalSource:'{\n  render: () => <IcAlert heading="Neutral" message="This alert is for displaying miscellaneous messages" titleAbove />,\n  name: "Title above"\n}',...TitleAbove.parameters?.docs?.source}}},ResponsiveTitle.parameters={...ResponsiveTitle.parameters,docs:{...ResponsiveTitle.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <IcAlert heading="This title is very long so should force the alert to add \'title-above\'" message="This alert does not have \'title-above\' added as a prop but it is forced to add it due to the length of the title" />\n    <IcAlert variant="success" heading="Shorter title" message="Neither of these has \'title-above\' set to true" />\n    </>,\n  name: "Responsive title"\n}',...ResponsiveTitle.parameters?.docs?.source}}},CustomMessage.parameters={...CustomMessage.parameters,docs:{...CustomMessage.parameters?.docs,source:{originalSource:'{\n  render: () => <IcAlert heading="This alert uses a custom message slot">\n      <IcTypography slot="message">\n        This is some text and {" "}\n        <IcLink href="/" inline>\n          this is an inline link\n        </IcLink>\n        {" "}within the text.\n      </IcTypography>\n    </IcAlert>,\n  name: "Custom message"\n}',...CustomMessage.parameters?.docs?.source}}},CustomMessageAndTitleAbove.parameters={...CustomMessageAndTitleAbove.parameters,docs:{...CustomMessageAndTitleAbove.parameters?.docs,source:{originalSource:'{\n  render: () => <IcAlert heading="Want to know more about our coffee?" titleAbove>\n      <IcTypography slot="message">\n        Go to our <IcLink href="/">coffee page</IcLink> to learn more.\n      </IcTypography>\n    </IcAlert>,\n  name: "Custom message and title above"\n}',...CustomMessageAndTitleAbove.parameters?.docs?.source}}},SlottedIcon.parameters={...SlottedIcon.parameters,docs:{...SlottedIcon.parameters?.docs,source:{originalSource:'{\n  render: () => <IcAlert id="alert" heading="Neutral" message="This alert contains a slotted icon" showDefaultIcon="false">\n      <SlottedSVG slot="neutral-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />\n      </SlottedSVG>\n    </IcAlert>,\n  name: "Slotted icon"\n}',...SlottedIcon.parameters?.docs?.source}}},NoIcon.parameters={...NoIcon.parameters,docs:{...NoIcon.parameters?.docs,source:{originalSource:'{\n  render: () => <IcAlert id="alert" heading="Neutral" message="This alert has no icon" showDefaultIcon="false" />,\n  name: "No icon"\n}',...NoIcon.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => <IcAlert dismissible={args.dismissible} variant={args.variant} heading={args.heading} message={args.message} titleAbove={args.titleAbove} showDefaultIcon={args.showDefaultIcon} theme={args.theme}>\n      {args.showAction && <IcButton slot="action" variant="secondary" monochrome="true">\n          Button\n        </IcButton>}\n      {args.showSlottedIcon && <SlottedSVG slot="neutral-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />\n        </SlottedSVG>}\n    </IcAlert>,\n  args: defaultArgs,\n  argTypes: {\n    variant: {\n      options: ["neutral", "info", "warning", "error", "success"],\n      control: {\n        type: "select"\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: "inline-radio"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}}}]);