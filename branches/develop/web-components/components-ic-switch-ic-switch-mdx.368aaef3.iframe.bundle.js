/*! For license information please see components-ic-switch-ic-switch-mdx.368aaef3.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[7657,3707,6895,6591,3627],{"./src/components/ic-switch/ic-switch.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent,defaultArgs:()=>defaultArgs});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-switch\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute     | Description                                                                                                                                                                                                                                           | Type                   | Default        |\n| -------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | -------------- |\n| `checked`            | `checked`     | If `true`, the switch will display as checked.                                                                                                                                                                                                        | `boolean`              | `false`        |\n| `disabled`           | `disabled`    | If `true`, the disabled state will be set.                                                                                                                                                                                                            | `boolean`              | `false`        |\n| `helperText`         | `helper-text` | The helper text that will be displayed for additional field guidance.                                                                                                                                                                                 | `string`               | `""`           |\n| `hideLabel`          | `hide-label`  | If `true`, the label will be hidden and the required label value will be applied as an aria-label.                                                                                                                                                    | `boolean`              | `false`        |\n| `label` _(required)_ | `label`       | The aria-label applied to the switch when no visual \'name\' is provided.                                                                                                                                                                               | `string`               | `undefined`    |\n| `name`               | `name`        | The name of the control, which is submitted with the form data.                                                                                                                                                                                       | `string`               | `this.inputId` |\n| `showState`          | `show-state`  | If `true`, the switch will render the On/Off state text.                                                                                                                                                                                              | `boolean`              | `false`        |\n| `size`               | `size`        | The size of the switch component.                                                                                                                                                                                                                     | `"default" \\| "small"` | `"default"`    |\n| `small`              | `small`       | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Set prop `size` to "small" instead.<br/><br/>                                                                                                                   | `boolean`              | `false`        |\n| `value`              | `value`       | The value of the toggle does not mean if it\'s checked or not, use the `checked` property for that.  The value of a toggle is analogous to the value of a `<input type="checkbox">`, it\'s only used when the toggle participates in a native `<form>`. | `string`               | `"on"`         |\n\n\n## Events\n\n| Event      | Description                                  | Type                                     |\n| ---------- | -------------------------------------------- | ---------------------------------------- |\n| `icBlur`   | Emitted when the toggle loses focus.         | `CustomEvent<void>`                      |\n| `icChange` | Emitted when the value property has changed. | `CustomEvent<IcSwitchChangeEventDetail>` |\n| `icFocus`  | Emitted when the toggle has focus.           | `CustomEvent<void>`                      |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the switch.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot                | Description                                                  |\n| ------------------- | ------------------------------------------------------------ |\n| `"right-adornment"` | Content is placed to the right of switch before state label. |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-input-label](../ic-input-label)\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-switch --\x3e ic-input-label\n  ic-switch --\x3e ic-typography\n  ic-input-label --\x3e ic-typography\n  style ic-switch fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var ic_switch_stories=__webpack_require__("./src/components/ic-switch/ic-switch.stories.js");const defaultArgs={label:"Custom Switch",helperText:"Custom helper text",disabled:!1,checked:!1,hideLabel:!1,showState:!1,size:"default"};function _createMdxContent(props){const _components={h3:"h3",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:ic_switch_stories}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_switch_stories.Default})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"label",children:"Label"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_switch_stories.Name})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"state",children:"State"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_switch_stories.State})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"checked",children:"Checked"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_switch_stories.Checked})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"small",children:"Small"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_switch_stories.Small})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"deprecated---small",children:"Deprecated - small"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_switch_stories.DeprecatedSmall})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_switch_stories.Disabled})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled-name-and-state",children:"Disabled, name and state"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_switch_stories.DisabledNameAndState})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled-name-state-and-checked",children:"Disabled, name, state and checked"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_switch_stories.DisabledNameStateAndChecked})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"hidden-label",children:"Hidden label"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_switch_stories.AriaLabel})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"helper-text",children:"Helper text"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_switch_stories.HelperText})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"right-adornment",children:"Right adornment"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_switch_stories.RightAdornment})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default-in-form",children:"Default in form"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_switch_stories.DefaultInForm})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{of:ic_switch_stories.Playground})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/ic-switch/ic-switch.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AriaLabel:()=>AriaLabel,Checked:()=>Checked,Default:()=>Default,DefaultInForm:()=>DefaultInForm,DeprecatedSmall:()=>DeprecatedSmall,Disabled:()=>Disabled,DisabledNameAndState:()=>DisabledNameAndState,DisabledNameStateAndChecked:()=>DisabledNameStateAndChecked,HelperText:()=>HelperText,Name:()=>Name,Playground:()=>Playground,RightAdornment:()=>RightAdornment,Small:()=>Small,State:()=>State,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Switch",component:"ic-switch"},Default={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-switch label="Label"></ic-switch> `,name:"Default"},Name={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-switch label="Label"></ic-switch> `,name:"Name"},State={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="display:flex; justify-content: center">
      <ic-switch show-state="true" label="Label"></ic-switch>
    </div>`,name:"State"},Checked={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-switch checked="true" label="Label" show-state="true"></ic-switch>
  `,name:"Checked"},Small={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-switch size="small" show-state="true" label="Label"></ic-switch>
  `,name:"Small"},DeprecatedSmall={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-switch small show-state="true" label="Label"></ic-switch>
  `,name:"Deprecated - small"},Disabled={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-switch disabled="true" label="Label"></ic-switch> `,name:"Disabled"},DisabledNameAndState={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-switch disabled="true" show-state="true" label="Label"></ic-switch>
  `,name:"Disabled, name and state"},DisabledNameStateAndChecked={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-switch
      disabled="true"
      show-state="true"
      label="Label"
      checked="true"
    ></ic-switch>
  `,name:"Disabled, name, state and checked"},AriaLabel={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-switch label="Custom label" hide-label="true"></ic-switch>
  `,name:"ARIA label"},HelperText={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-switch label="Label" helper-text="Helper Text"></ic-switch>`,name:"Helper text"},RightAdornment={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-switch label="Right adornment">
      <svg
        slot="right-adornment"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z"
        />
      </svg>
    </ic-switch>`,name:"Right adornment"},DefaultInForm={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <form id="form" aria-label="test form">
      <ic-switch id="switch" label="custom label" hide-label="true"></ic-switch>
      <br />
      <br />
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
      <form>
        <script>
          const tcForm = document.getElementById("form");
          tcForm.addEventListener("submit", handleSubmit);
          function handleSubmit(e) {
            e.preventDefault();
            var data = "HTML Form Data (name: value): \\n";
            for (const element of document.getElementById("form").elements) {
              data += element.name + ": " + element.value + "\\n";
            }
            alert(data);
          }
        </script>
      </form>
    </form>`,name:"Default in form"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-switch
      disabled=${args.disabled}
      show-state=${args.showState}
      label=${args.label}
      checked=${args.checked}
      hide-label=${args.hideLabel}
      helper-text=${args.helperText}
      size=${args.size}
    ></ic-switch>`,args:{label:"Custom Switch",helperText:"Custom helper text",disabled:!1,checked:!1,hideLabel:!1,showState:!1,size:"default"},argTypes:{size:{options:["default","small"],control:{type:"inline-radio"}}},name:"Playground"},__namedExportsOrder=["Default","Name","State","Checked","Small","DeprecatedSmall","Disabled","DisabledNameAndState","DisabledNameStateAndChecked","AriaLabel","HelperText","RightAdornment","DefaultInForm","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-switch label="Label"></ic-switch> `,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},Name.parameters={...Name.parameters,docs:{...Name.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-switch label="Label"></ic-switch> `,\n  name: "Name"\n}',...Name.parameters?.docs?.source}}},State.parameters={...State.parameters,docs:{...State.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="display:flex; justify-content: center">\n      <ic-switch show-state="true" label="Label"></ic-switch>\n    </div>`,\n  name: "State"\n}',...State.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-switch checked="true" label="Label" show-state="true"></ic-switch>\n  `,\n  name: "Checked"\n}',...Checked.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-switch size="small" show-state="true" label="Label"></ic-switch>\n  `,\n  name: "Small"\n}',...Small.parameters?.docs?.source}}},DeprecatedSmall.parameters={...DeprecatedSmall.parameters,docs:{...DeprecatedSmall.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-switch small show-state="true" label="Label"></ic-switch>\n  `,\n  name: "Deprecated - small"\n}',...DeprecatedSmall.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-switch disabled="true" label="Label"></ic-switch> `,\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source}}},DisabledNameAndState.parameters={...DisabledNameAndState.parameters,docs:{...DisabledNameAndState.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-switch disabled="true" show-state="true" label="Label"></ic-switch>\n  `,\n  name: "Disabled, name and state"\n}',...DisabledNameAndState.parameters?.docs?.source}}},DisabledNameStateAndChecked.parameters={...DisabledNameStateAndChecked.parameters,docs:{...DisabledNameStateAndChecked.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-switch\n      disabled="true"\n      show-state="true"\n      label="Label"\n      checked="true"\n    ></ic-switch>\n  `,\n  name: "Disabled, name, state and checked"\n}',...DisabledNameStateAndChecked.parameters?.docs?.source}}},AriaLabel.parameters={...AriaLabel.parameters,docs:{...AriaLabel.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-switch label="Custom label" hide-label="true"></ic-switch>\n  `,\n  name: "ARIA label"\n}',...AriaLabel.parameters?.docs?.source}}},HelperText.parameters={...HelperText.parameters,docs:{...HelperText.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-switch label="Label" helper-text="Helper Text"></ic-switch>`,\n  name: "Helper text"\n}',...HelperText.parameters?.docs?.source}}},RightAdornment.parameters={...RightAdornment.parameters,docs:{...RightAdornment.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-switch label="Right adornment">\n      <svg\n        slot="right-adornment"\n        width="16"\n        height="16"\n        viewBox="0 0 16 16"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n      >\n        <path\n          d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z"\n        />\n      </svg>\n    </ic-switch>`,\n  name: "Right adornment"\n}',...RightAdornment.parameters?.docs?.source}}},DefaultInForm.parameters={...DefaultInForm.parameters,docs:{...DefaultInForm.parameters?.docs,source:{originalSource:'{\n  render: () => html` <form id="form" aria-label="test form">\n      <ic-switch id="switch" label="custom label" hide-label="true"></ic-switch>\n      <br />\n      <br />\n      <input type="submit" value="Submit" />\n      <input type="reset" value="Reset" />\n      <form>\n        <script>\n          const tcForm = document.getElementById("form");\n          tcForm.addEventListener("submit", handleSubmit);\n          function handleSubmit(e) {\n            e.preventDefault();\n            var data = "HTML Form Data (name: value): \\\\n";\n            for (const element of document.getElementById("form").elements) {\n              data += element.name + ": " + element.value + "\\\\n";\n            }\n            alert(data);\n          }\n        <\/script>\n      </form>\n    </form>`,\n  name: "Default in form"\n}',...DefaultInForm.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-switch\n      disabled=${args.disabled}\n      show-state=${args.showState}\n      label=${args.label}\n      checked=${args.checked}\n      hide-label=${args.hideLabel}\n      helper-text=${args.helperText}\n      size=${args.size}\n    ></ic-switch>`,\n  args: defaultArgs,\n  argTypes: {\n    size: {\n      options: ["default", "small"],\n      control: {\n        type: "inline-radio"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-switch-ic-switch-mdx.368aaef3.iframe.bundle.js.map