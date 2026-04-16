import{d as e,R as t,f as g,r as y,a as v,L as x}from"./iframe-Y9BvcS-5.js";const I={disableClick:!1,disableHover:!1,maxLines:3,placement:"bottom",label:"This is a description of the button",theme:"inherit",fixedPositioning:!1},E={title:"Tooltip",component:e},i={render:()=>t.createElement(t.Fragment,null,t.createElement(e,{label:"This is a description of the button",id:"ic-tooltip-test-button"},t.createElement("button",{"aria-describedby":"ic-tooltip-test-button"},"Default")),t.createElement(e,{label:"This is a description of the button",id:"ic-tooltip-test-button-1"},t.createElement(g,{"aria-describedby":"ic-tooltip-test-button-1"},"Default"))),name:"Default"},a={render:()=>{let o=!0;function n(){document.querySelector("ic-tooltip").displayTooltip(o,!0),o=!o}return t.createElement(t.Fragment,null,t.createElement("button",{onClick:n},"Show tooltip"),t.createElement(e,{label:"This is a description of the button",id:"ic-tooltip-test-button-default"},t.createElement("button",{"aria-describedby":"ic-tooltip-test-button-default"},"Default")))},name:"Using external method"},r={render:()=>t.createElement(e,{label:"This shows 'Code' has been copied",id:"ic-tooltip-test-button-disable-hover",disableHover:!0},t.createElement("button",{"aria-describedby":"ic-tooltip-test-button-disable-hover",onClick:()=>navigator.clipboard.writeText("Code")},"Show tooltip")),name:"Disabled Hover"},l={render:()=>t.createElement("div",{style:{margin:"40px"}},t.createElement(e,{placement:"top-start",label:"This is a description of the button",id:"ic-tooltip-test-button-top-start"},t.createElement("button",{"aria-describedby":"ic-tooltip-test-button-top-start"},"Top start")),t.createElement(e,{placement:"top",label:"This is a description of the button",id:"ic-tooltip-test-button-top"},t.createElement("button",{"aria-describedby":"ic-tooltip-test-button-top"},"Top")),t.createElement(e,{placement:"top-end",label:"This is a description of the button",id:"ic-tooltip-test-button-top-end"},t.createElement("button",{"aria-describedby":"ic-tooltip-test-button-top-end"},"Top end"))),name:"Top placements"},s={render:()=>t.createElement("div",{style:{margin:"40px"}},t.createElement(e,{placement:"bottom-start",label:"This is a description of the button",id:"ic-tooltip-test-button-bottom-start"},t.createElement("button",{"aria-describedby":"ic-tooltip-test-button-bottom-start"},"Bottom start")),t.createElement(e,{placement:"bottom",label:"This is a description of the button",id:"ic-tooltip-test-button-bottom"},t.createElement("button",{"aria-describedby":"ic-tooltip-test-button-bottom"},"Bottom")),t.createElement(e,{placement:"bottom-end",label:"This is a description of the button",id:"ic-tooltip-test-button-bottom-end"},t.createElement("button",{"aria-describedby":"ic-tooltip-test-button-bottom-end"},"Bottom end"))),name:"Bottom placements"},c={render:()=>t.createElement("div",{style:{margin:"40px"}},t.createElement(e,{placement:"right-start",label:"This is a description of the button",id:"ic-tooltip-test-button-right-start"},t.createElement("button",{"aria-describedby":"ic-tooltip-test-button-right-start"},"Right start")),t.createElement(e,{placement:"right",label:"This is a description of the button",id:"ic-tooltip-test-button-right"},t.createElement("button",{"aria-describedby":"ic-tooltip-test-button-right"},"Right")),t.createElement(e,{placement:"right-end",label:"This is a description of the button",id:"ic-tooltip-test-button-right-end"},t.createElement("button",{"aria-describedby":"ic-tooltip-test-button-right-end"},"Right end"))),name:"Right placements"},d={render:()=>t.createElement("div",{style:{marginLeft:"40px"}},t.createElement(e,{placement:"left-start",label:"This is a description of the button",id:"ic-tooltip-test-button-left-start"},t.createElement("button",{"aria-describedby":"ic-tooltip-test-button-left-start"},"Left start")),t.createElement(e,{placement:"left",label:"This is a description of the button",id:"ic-tooltip-test-button-left"},t.createElement("button",{"aria-describedby":"ic-tooltip-test-button-left"},"Left")),t.createElement(e,{placement:"left-end",label:"This is a description of the button",id:"ic-tooltip-test-button-left-end"},t.createElement("button",{"aria-describedby":"ic-tooltip-test-button-left-end"},"Left end"))),name:"Left placements"},p={render:()=>t.createElement(e,{label:"This is a body of text that is truncated to three lines within a tooltip. It has been truncated based on the maxLines prop. The number of lines in the text is clamped to the number passed through the maxLines prop.",maxLines:3,id:"ic-tooltip-test-button-truncation"},t.createElement("button",{"aria-describedby":"ic-tooltip-test-button-truncation"},"Default")),name:"Truncation"},b={render:()=>t.createElement("div",{style:{backgroundColor:"#333333",height:"100px"}},t.createElement(e,{label:"This is a description of the button",id:"ic-tooltip-test-button-dark"},t.createElement("button",{"aria-describedby":"ic-tooltip-test-button-dark"},"Default"))),name:"Dark background"},u={render:()=>{const[o,n]=t.useState("refresh");return t.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},t.createElement(g,{"aria-label":o,variant:"icon-primary",onClick:()=>n("really long message")},t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},t.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t.createElement("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}))))},name:"Changing label"},m={render:()=>{const[o,n]=y.useState(!1);return t.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--ic-space-xs)"}},t.createElement(v,null,"Choose the tooltip position strategy and hover over the button to see it take effect"),t.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"var(--ic-space-xs)",padding:"var(--ic-space-md)",border:"1px solid var(--ic-color-text-primary)",overflow:"hidden",width:"100px",position:"relative"}},t.createElement(e,{label:"This is a tooltip with a long label",id:"ic-tooltip-test-button-1",fixedPositioning:o},t.createElement(g,{"aria-describedby":"ic-tooltip-test-button-1"},"Button"))),t.createElement(x,{label:"Fixed tooltip positioning",onIcChange:T=>n(T.detail.checked)}))},name:"Positioning strategy"},h={render:()=>t.createElement(t.Fragment,null,t.createElement(e,{label:"This is a description of the button",id:"ic-tooltip-test-button-event",onIcTooltipShow:o=>console.log("tooltip shown")},t.createElement("button",{"aria-describedby":"ic-tooltip-test-button-event"},"Default")),t.createElement(e,{label:"This is a description of the button",id:"ic-tooltip-test-button-event-1",onIcTooltipShow:()=>console.log("tooltip shown")},t.createElement(g,{"aria-describedby":"ic-tooltip-test-button-event-1"},"Default"))),name:"IcShowTooltip event"},f={render:o=>t.createElement("div",{style:{margin:"250px"}},t.createElement(e,{label:o.label,placement:o.placement,maxLines:o.maxLines,disableClick:o.disableClick,disableHover:o.disableHover,id:"ic-tooltip-1",theme:o.theme,fixedPositioning:o.fixedPositioning},t.createElement("button",{"aria-describedby":"ic-tooltip-1"},"Native")),t.createElement(e,{label:o.label,placement:o.placement,maxLines:o.maxLines,disableClick:o.disableClick,disableHover:o.disableHover,id:"ic-tooltip-2",theme:o.theme,fixedPositioning:o.fixedPositioning},t.createElement(g,{"aria-describedby":"ic-tooltip-2"},"ICDS"))),args:I,argTypes:{placement:{options:["bottom","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom-start","left-end","left","left-start"],control:{type:"select"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTooltip label="This is a description of the button" id="ic-tooltip-test-button">
        <button aria-describedby="ic-tooltip-test-button">
          Default
        </button>
      </IcTooltip>
      <IcTooltip label="This is a description of the button" id="ic-tooltip-test-button-1">
        <IcButton aria-describedby="ic-tooltip-test-button-1">
          Default
        </IcButton>
      </IcTooltip>
    </>,
  name: "Default"
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    let display = true;
    function func() {
      document.querySelector("ic-tooltip").displayTooltip(display, true);
      display = !display;
    }
    return <>
        <button onClick={func}>Show tooltip</button>
        <IcTooltip label="This is a description of the button" id="ic-tooltip-test-button-default">
          <button aria-describedby="ic-tooltip-test-button-default">
            Default
          </button>
        </IcTooltip>
      </>;
  },
  name: "Using external method"
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <IcTooltip label="This shows 'Code' has been copied" id="ic-tooltip-test-button-disable-hover" disableHover>
      <button aria-describedby="ic-tooltip-test-button-disable-hover" onClick={() => navigator.clipboard.writeText("Code")}>
        Show tooltip
      </button>
    </IcTooltip>,
  name: "Disabled Hover"
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    margin: "40px"
  }}>
      <IcTooltip placement="top-start" label="This is a description of the button" id="ic-tooltip-test-button-top-start">
        <button aria-describedby="ic-tooltip-test-button-top-start">
          Top start
        </button>
      </IcTooltip>
      <IcTooltip placement="top" label="This is a description of the button" id="ic-tooltip-test-button-top">
        <button aria-describedby="ic-tooltip-test-button-top">
          Top
        </button>
      </IcTooltip>
      <IcTooltip placement="top-end" label="This is a description of the button" id="ic-tooltip-test-button-top-end">
        <button aria-describedby="ic-tooltip-test-button-top-end">
          Top end
        </button>
      </IcTooltip>
    </div>,
  name: "Top placements"
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    margin: "40px"
  }}>
      <IcTooltip placement="bottom-start" label="This is a description of the button" id="ic-tooltip-test-button-bottom-start">
        <button aria-describedby="ic-tooltip-test-button-bottom-start">
          Bottom start
        </button>
      </IcTooltip>
      <IcTooltip placement="bottom" label="This is a description of the button" id="ic-tooltip-test-button-bottom">
        <button aria-describedby="ic-tooltip-test-button-bottom">
          Bottom
        </button>
      </IcTooltip>
      <IcTooltip placement="bottom-end" label="This is a description of the button" id="ic-tooltip-test-button-bottom-end">
        <button aria-describedby="ic-tooltip-test-button-bottom-end">
          Bottom end
        </button>
      </IcTooltip>
    </div>,
  name: "Bottom placements"
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    margin: "40px"
  }}>
      <IcTooltip placement="right-start" label="This is a description of the button" id="ic-tooltip-test-button-right-start">
        <button aria-describedby="ic-tooltip-test-button-right-start">
          Right start
        </button>
      </IcTooltip>
      <IcTooltip placement="right" label="This is a description of the button" id="ic-tooltip-test-button-right">
        <button aria-describedby="ic-tooltip-test-button-right">
          Right
        </button>
      </IcTooltip>
      <IcTooltip placement="right-end" label="This is a description of the button" id="ic-tooltip-test-button-right-end">
        <button aria-describedby="ic-tooltip-test-button-right-end">
          Right end
        </button>
      </IcTooltip>
    </div>,
  name: "Right placements"
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    marginLeft: "40px"
  }}>
      <IcTooltip placement="left-start" label="This is a description of the button" id="ic-tooltip-test-button-left-start">
        <button aria-describedby="ic-tooltip-test-button-left-start">
          Left start
        </button>
      </IcTooltip>
      <IcTooltip placement="left" label="This is a description of the button" id="ic-tooltip-test-button-left">
        <button aria-describedby="ic-tooltip-test-button-left">
          Left
        </button>
      </IcTooltip>
      <IcTooltip placement="left-end" label="This is a description of the button" id="ic-tooltip-test-button-left-end">
        <button aria-describedby="ic-tooltip-test-button-left-end">
          Left end
        </button>
      </IcTooltip>
    </div>,
  name: "Left placements"
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <IcTooltip label="This is a body of text that is truncated to three lines within a tooltip. It has been truncated based on the maxLines prop. The number of lines in the text is clamped to the number passed through the maxLines prop." maxLines={3} id="ic-tooltip-test-button-truncation">
      <button aria-describedby="ic-tooltip-test-button-truncation">
        Default
      </button>
    </IcTooltip>,
  name: "Truncation"
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    backgroundColor: "#333333",
    height: "100px"
  }}>
      <IcTooltip label="This is a description of the button" id="ic-tooltip-test-button-dark">
        <button aria-describedby="ic-tooltip-test-button-dark">
          Default
        </button>
      </IcTooltip>
    </div>,
  name: "Dark background"
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [label, setLabel] = React.useState("refresh");
    return <div style={{
      display: "flex",
      justifyContent: "flex-end"
    }}>
        <IcButton aria-label={label} variant="icon-primary" onClick={() => setLabel("really long message")}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcButton>
      </div>;
  },
  name: "Changing label"
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [fixed, setFixed] = useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--ic-space-xs)"
    }}>
        <IcTypography>Choose the tooltip position strategy and hover over the button to see it take effect</IcTypography>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--ic-space-xs)",
        padding: "var(--ic-space-md)",
        border: "1px solid var(--ic-color-text-primary)",
        overflow: "hidden",
        width: "100px",
        position: "relative"
      }}>
          <IcTooltip label="This is a tooltip with a long label" id="ic-tooltip-test-button-1" fixedPositioning={fixed}>
            <IcButton aria-describedby="ic-tooltip-test-button-1">
              Button
            </IcButton>
          </IcTooltip>          
        </div>
        <IcSwitch label="Fixed tooltip positioning" onIcChange={ev => setFixed(ev.detail.checked)}>
        </IcSwitch>
      </div>;
  },
  name: "Positioning strategy"
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcTooltip label="This is a description of the button" id="ic-tooltip-test-button-event" onIcTooltipShow={ev => console.log("tooltip shown")}>
        <button aria-describedby="ic-tooltip-test-button-event">
          Default
        </button>
      </IcTooltip>
      <IcTooltip label="This is a description of the button" id="ic-tooltip-test-button-event-1" onIcTooltipShow={() => console.log("tooltip shown")}>
        <IcButton aria-describedby="ic-tooltip-test-button-event-1">
          Default
        </IcButton>
      </IcTooltip>
    </>,
  name: "IcShowTooltip event"
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    margin: "250px"
  }}>
      <IcTooltip label={args.label} placement={args.placement} maxLines={args.maxLines} disableClick={args.disableClick} disableHover={args.disableHover} id="ic-tooltip-1" theme={args.theme} fixedPositioning={args.fixedPositioning}>
        <button aria-describedby="ic-tooltip-1">
          Native
        </button>
      </IcTooltip>
      <IcTooltip label={args.label} placement={args.placement} maxLines={args.maxLines} disableClick={args.disableClick} disableHover={args.disableHover} id="ic-tooltip-2" theme={args.theme} fixedPositioning={args.fixedPositioning}>
        <IcButton aria-describedby="ic-tooltip-2">
          ICDS
        </IcButton>
      </IcTooltip>
    </div>,
  args: defaultArgs,
  argTypes: {
    placement: {
      options: ["bottom", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom-start", "left-end", "left", "left-start"],
      control: {
        type: "select"
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: "inline-radio"
      }
    }
  },
  name: "Playground"
}`,...f.parameters?.docs?.source}}};const w=["Default","UsingExternalMethod","DisabledHover","TopPlacements","BottomPlacements","RightPlacements","LeftPlacements","Truncation","DarkBackground","ChangingLabel","PositioningStrategy","IcShowTooltipEvent","Playground"],k=Object.freeze(Object.defineProperty({__proto__:null,BottomPlacements:s,ChangingLabel:u,DarkBackground:b,Default:i,DisabledHover:r,IcShowTooltipEvent:h,LeftPlacements:d,Playground:f,PositioningStrategy:m,RightPlacements:c,TopPlacements:l,Truncation:p,UsingExternalMethod:a,__namedExportsOrder:w,default:E},Symbol.toStringTag,{value:"Module"}));export{k as I};
