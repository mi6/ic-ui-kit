"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[1749],{"./src/stories/ic-tooltip.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BottomPlacements:()=>BottomPlacements,DarkBackground:()=>DarkBackground,Default:()=>Default,DisabledHover:()=>DisabledHover,LeftPlacements:()=>LeftPlacements,Playground:()=>Playground,RightPlacements:()=>RightPlacements,TopPlacements:()=>TopPlacements,Truncation:()=>Truncation,UsingExternalMethod:()=>UsingExternalMethod,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ic_tooltip_stories});var react=__webpack_require__("./node_modules/react/index.js"),components=__webpack_require__("./src/components.ts");const ic_tooltip_stories={title:"Tooltip",component:components.sL};var Default={render:function render(){return react.createElement(components.sL,{label:"This is a description of the button",id:"ic-tooltip-test-button-default",target:"test-button-default"},react.createElement("button",{"aria-describedby":"ic-tooltip-test-button-default",id:"test-button-default"},"Default"))},name:"Default"},UsingExternalMethod={render:function render(){var display=!0;return react.createElement(react.Fragment,null,react.createElement("button",{onClick:function func(){document.querySelector("ic-tooltip").displayTooltip(display,!0),display=!display}},"Show tooltip"),react.createElement(components.sL,{label:"This is a description of the button",id:"ic-tooltip-test-button-default",target:"test-button-default"},react.createElement("button",{"aria-describedby":"ic-tooltip-test-button-default",id:"test-button-default"},"Default")))},name:"Using external method"},DisabledHover={render:function render(){return react.createElement(components.sL,{label:"This shows 'Code' has been copied",id:"ic-tooltip-test-button-disable-hover",target:"test-button-disable-hover",disableHover:!0},react.createElement("button",{"aria-describedby":"ic-tooltip-test-button-disable-hover",id:"test-button-disable-hover",onClick:function onClick(){return navigator.clipboard.writeText("Code")}},"Show tooltip"))},name:"Disabled Hover"},TopPlacements={render:function render(args){return react.createElement("div",{style:{margin:"40px"}},react.createElement(components.sL,{placement:"top-start",label:"This is a description of the button",id:"ic-tooltip-test-button-top-start",target:"test-button-top-start"},react.createElement("button",{id:"test-button-top-start","aria-describedby":"ic-tooltip-test-button-top-start"},"Top start")),react.createElement(components.sL,{placement:"top",label:"This is a description of the button",id:"ic-tooltip-test-button-top",target:"test-button-top"},react.createElement("button",{id:"test-button-top","aria-describedby":"ic-tooltip-test-button-top"},"Top")),react.createElement(components.sL,{placement:"top-end",label:"This is a description of the button",id:"ic-tooltip-test-button-top-end",target:"test-button-top-end"},react.createElement("button",{id:"test-button-top-end","aria-describedby":"ic-tooltip-test-button-top-end"},"Top end")))},name:"Top placements"},BottomPlacements={render:function render(args){return react.createElement("div",{style:{margin:"40px"}},react.createElement(components.sL,{placement:"bottom-start",label:"This is a description of the button",id:"ic-tooltip-test-button-bottom-start",target:"test-button-bottom-start"},react.createElement("button",{id:"test-button-bottom-start","aria-describedby":"ic-tooltip-test-button-bottom-start"},"Bottom start")),react.createElement(components.sL,{placement:"bottom",label:"This is a description of the button",id:"ic-tooltip-test-button-bottom",target:"test-button-bottom"},react.createElement("button",{id:"test-button-bottom","aria-describedby":"ic-tooltip-test-button-bottom"},"Bottom")),react.createElement(components.sL,{placement:"bottom-end",label:"This is a description of the button",id:"ic-tooltip-test-button-bottom-end",target:"test-button-bottom-end"},react.createElement("button",{id:"test-button-bottom-end","aria-describedby":"ic-tooltip-test-button-bottom-end"},"Bottom end")))},name:"Bottom placements"},RightPlacements={render:function render(args){return react.createElement("div",{style:{margin:"40px"}},react.createElement(components.sL,{placement:"right-start",label:"This is a description of the button",id:"ic-tooltip-test-button-right-start",target:"test-button-right-start"},react.createElement("button",{id:"test-button-right-start","aria-describedby":"ic-tooltip-test-button-right-start"},"Right start")),react.createElement(components.sL,{placement:"right",label:"This is a description of the button",id:"ic-tooltip-test-button-right",target:"test-button-right"},react.createElement("button",{id:"test-button-right","aria-describedby":"ic-tooltip-test-button-right"},"Right")),react.createElement(components.sL,{placement:"right-end",label:"This is a description of the button",id:"ic-tooltip-test-button-right-end",target:"test-button-right-end"},react.createElement("button",{id:"test-button-right-end","aria-describedby":"ic-tooltip-test-button-right-end"},"Right end")))},name:"Right placements"},LeftPlacements={render:function render(args){return react.createElement("div",{style:{marginLeft:"40px"}},react.createElement(components.sL,{placement:"left-start",label:"This is a description of the button",id:"ic-tooltip-test-button-left-start",target:"test-button-left-start"},react.createElement("button",{id:"test-button-left-start","aria-describedby":"ic-tooltip-test-button-left-start"},"Left start")),react.createElement(components.sL,{placement:"left",label:"This is a description of the button",id:"ic-tooltip-test-button-left",target:"test-button-left"},react.createElement("button",{id:"test-button-left","aria-describedby":"ic-tooltip-test-button-left"},"Left")),react.createElement(components.sL,{placement:"left-end",label:"This is a description of the button",id:"ic-tooltip-test-button-left-end",target:"test-button-left-end"},react.createElement("button",{id:"test-button-left-end","aria-describedby":"ic-tooltip-test-button-left-end"},"Left end")))},name:"Left placements"},Truncation={render:function render(){return react.createElement(components.sL,{label:"This is a body of text that is truncated to three lines within a tooltip. It has been truncated based on the maxLines prop. The number of lines in the text is clamped to the number passed through the maxLines prop.",maxLines:3,id:"ic-tooltip-test-button-truncation",target:"test-button-truncation"},react.createElement("button",{"aria-describedby":"ic-tooltip-test-button-truncation",id:"test-button-truncation"},"Default"))},name:"Truncation"},DarkBackground={render:function render(){return react.createElement("div",{style:{backgroundColor:"#333333",height:"100px"}},react.createElement(components.sL,{label:"This is a description of the button",id:"ic-tooltip-test-button-dark",target:"test-button-dark"},react.createElement("button",{"aria-describedby":"ic-tooltip-test-button-dark",id:"test-button-dark"},"Default")))},name:"Dark background"},Playground={render:function render(args){return react.createElement("div",{style:{margin:"250px"}},react.createElement(components.sL,{label:args.label,placement:args.placement,maxLines:args.maxLines,disableHover:args.disableHover,id:"ic-tooltip-test-button-default",target:"button-id"},react.createElement("button",{id:"button-id","aria-describedby":"ic-tooltip-test-button-default"},"Button 1")))},args:{disableHover:!1,maxLines:3,placement:"bottom",label:"This is a description of the button"},argTypes:{placement:{options:["bottom","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom-start","left-end","left","left-start"],control:{type:"select"}}},name:"Playground"};const __namedExportsOrder=["Default","UsingExternalMethod","DisabledHover","TopPlacements","BottomPlacements","RightPlacements","LeftPlacements","Truncation","DarkBackground","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => <IcTooltip label="This is a description of the button" id="ic-tooltip-test-button-default" target="test-button-default">\n      <button aria-describedby="ic-tooltip-test-button-default" id="test-button-default">\n        Default\n      </button>\n    </IcTooltip>,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},UsingExternalMethod.parameters={...UsingExternalMethod.parameters,docs:{...UsingExternalMethod.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    let display = true;\n    function func() {\n      document.querySelector("ic-tooltip").displayTooltip(display, true);\n      display = !display;\n    }\n    return <>\n        <button onClick={func}>Show tooltip</button>\n        <IcTooltip label="This is a description of the button" id="ic-tooltip-test-button-default" target="test-button-default">\n          <button aria-describedby="ic-tooltip-test-button-default" id="test-button-default">\n            Default\n          </button>\n        </IcTooltip>\n      </>;\n  },\n  name: "Using external method"\n}',...UsingExternalMethod.parameters?.docs?.source}}},DisabledHover.parameters={...DisabledHover.parameters,docs:{...DisabledHover.parameters?.docs,source:{originalSource:'{\n  render: () => <IcTooltip label="This shows \'Code\' has been copied" id="ic-tooltip-test-button-disable-hover" target="test-button-disable-hover" disableHover>\n      <button aria-describedby="ic-tooltip-test-button-disable-hover" id="test-button-disable-hover" onClick={() => navigator.clipboard.writeText("Code")}>\n        Show tooltip\n      </button>\n    </IcTooltip>,\n  name: "Disabled Hover"\n}',...DisabledHover.parameters?.docs?.source}}},TopPlacements.parameters={...TopPlacements.parameters,docs:{...TopPlacements.parameters?.docs,source:{originalSource:'{\n  render: args => <div style={{\n    margin: "40px"\n  }}>\n      <IcTooltip placement="top-start" label="This is a description of the button" id="ic-tooltip-test-button-top-start" target="test-button-top-start">\n        <button id="test-button-top-start" aria-describedby="ic-tooltip-test-button-top-start">\n          Top start\n        </button>\n      </IcTooltip>\n      <IcTooltip placement="top" label="This is a description of the button" id="ic-tooltip-test-button-top" target="test-button-top">\n        <button id="test-button-top" aria-describedby="ic-tooltip-test-button-top">\n          Top\n        </button>\n      </IcTooltip>\n      <IcTooltip placement="top-end" label="This is a description of the button" id="ic-tooltip-test-button-top-end" target="test-button-top-end">\n        <button id="test-button-top-end" aria-describedby="ic-tooltip-test-button-top-end">\n          Top end\n        </button>\n      </IcTooltip>\n    </div>,\n  name: "Top placements"\n}',...TopPlacements.parameters?.docs?.source}}},BottomPlacements.parameters={...BottomPlacements.parameters,docs:{...BottomPlacements.parameters?.docs,source:{originalSource:'{\n  render: args => <div style={{\n    margin: "40px"\n  }}>\n      <IcTooltip placement="bottom-start" label="This is a description of the button" id="ic-tooltip-test-button-bottom-start" target="test-button-bottom-start">\n        <button id="test-button-bottom-start" aria-describedby="ic-tooltip-test-button-bottom-start">\n          Bottom start\n        </button>\n      </IcTooltip>\n      <IcTooltip placement="bottom" label="This is a description of the button" id="ic-tooltip-test-button-bottom" target="test-button-bottom">\n        <button id="test-button-bottom" aria-describedby="ic-tooltip-test-button-bottom">\n          Bottom\n        </button>\n      </IcTooltip>\n      <IcTooltip placement="bottom-end" label="This is a description of the button" id="ic-tooltip-test-button-bottom-end" target="test-button-bottom-end">\n        <button id="test-button-bottom-end" aria-describedby="ic-tooltip-test-button-bottom-end">\n          Bottom end\n        </button>\n      </IcTooltip>\n    </div>,\n  name: "Bottom placements"\n}',...BottomPlacements.parameters?.docs?.source}}},RightPlacements.parameters={...RightPlacements.parameters,docs:{...RightPlacements.parameters?.docs,source:{originalSource:'{\n  render: args => <div style={{\n    margin: "40px"\n  }}>\n      <IcTooltip placement="right-start" label="This is a description of the button" id="ic-tooltip-test-button-right-start" target="test-button-right-start">\n        <button id="test-button-right-start" aria-describedby="ic-tooltip-test-button-right-start">\n          Right start\n        </button>\n      </IcTooltip>\n      <IcTooltip placement="right" label="This is a description of the button" id="ic-tooltip-test-button-right" target="test-button-right">\n        <button id="test-button-right" aria-describedby="ic-tooltip-test-button-right">\n          Right\n        </button>\n      </IcTooltip>\n      <IcTooltip placement="right-end" label="This is a description of the button" id="ic-tooltip-test-button-right-end" target="test-button-right-end">\n        <button id="test-button-right-end" aria-describedby="ic-tooltip-test-button-right-end">\n          Right end\n        </button>\n      </IcTooltip>\n    </div>,\n  name: "Right placements"\n}',...RightPlacements.parameters?.docs?.source}}},LeftPlacements.parameters={...LeftPlacements.parameters,docs:{...LeftPlacements.parameters?.docs,source:{originalSource:'{\n  render: args => <div style={{\n    marginLeft: "40px"\n  }}>\n      <IcTooltip placement="left-start" label="This is a description of the button" id="ic-tooltip-test-button-left-start" target="test-button-left-start">\n        <button id="test-button-left-start" aria-describedby="ic-tooltip-test-button-left-start">\n          Left start\n        </button>\n      </IcTooltip>\n      <IcTooltip placement="left" label="This is a description of the button" id="ic-tooltip-test-button-left" target="test-button-left">\n        <button id="test-button-left" aria-describedby="ic-tooltip-test-button-left">\n          Left\n        </button>\n      </IcTooltip>\n      <IcTooltip placement="left-end" label="This is a description of the button" id="ic-tooltip-test-button-left-end" target="test-button-left-end">\n        <button id="test-button-left-end" aria-describedby="ic-tooltip-test-button-left-end">\n          Left end\n        </button>\n      </IcTooltip>\n    </div>,\n  name: "Left placements"\n}',...LeftPlacements.parameters?.docs?.source}}},Truncation.parameters={...Truncation.parameters,docs:{...Truncation.parameters?.docs,source:{originalSource:'{\n  render: () => <IcTooltip label="This is a body of text that is truncated to three lines within a tooltip. It has been truncated based on the maxLines prop. The number of lines in the text is clamped to the number passed through the maxLines prop." maxLines={3} id="ic-tooltip-test-button-truncation" target="test-button-truncation">\n      <button aria-describedby="ic-tooltip-test-button-truncation" id="test-button-truncation">\n        Default\n      </button>\n    </IcTooltip>,\n  name: "Truncation"\n}',...Truncation.parameters?.docs?.source}}},DarkBackground.parameters={...DarkBackground.parameters,docs:{...DarkBackground.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    backgroundColor: "#333333",\n    height: "100px"\n  }}>\n      <IcTooltip label="This is a description of the button" id="ic-tooltip-test-button-dark" target="test-button-dark">\n        <button aria-describedby="ic-tooltip-test-button-dark" id="test-button-dark">\n          Default\n        </button>\n      </IcTooltip>\n    </div>,\n  name: "Dark background"\n}',...DarkBackground.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => <div style={{\n    margin: "250px"\n  }}>\n      <IcTooltip label={args.label} placement={args.placement} maxLines={args.maxLines} disableHover={args.disableHover} id="ic-tooltip-test-button-default" target="button-id">\n        <button id="button-id" aria-describedby="ic-tooltip-test-button-default">\n          Button 1\n        </button>\n      </IcTooltip>\n    </div>,\n  args: defaultArgs,\n  argTypes: {\n    placement: {\n      options: ["bottom", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom-start", "left-end", "left", "left-start"],\n      control: {\n        type: "select"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}}}]);