import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{X as r,in as i,lt as a,st as o,t as s,u as c,ut as l}from"./iframe-CBY1Fz5o.js";var u=e({BottomPlacements:()=>b,ChangingLabel:()=>E,DarkBackground:()=>T,Default:()=>g,DisabledHover:()=>v,IcShowTooltipEvent:()=>O,LeftPlacements:()=>S,Playground:()=>k,PlaygroundWithIcon:()=>A,PositioningStrategy:()=>D,RightPlacements:()=>x,TooltipWithSlottedIcon:()=>C,TopPlacements:()=>y,Truncation:()=>w,UsingExternalMethod:()=>_,__namedExportsOrder:()=>j,default:()=>h}),d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=t((()=>{d=n(i()),l(),f=s(),p={disableClick:!1,disableHover:!1,maxLines:3,placement:`bottom`,label:`This is a description of the button`,theme:`inherit`,fixedPositioning:!1},m={...p,iconSlot:`icon`,tooltipIconAltText:`Check mark icon`},h={title:`Tooltip`,component:o},g={render:()=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{label:`This is a description of the button`,id:`ic-tooltip-test-button`,children:(0,f.jsx)(`button`,{"aria-describedby":`ic-tooltip-test-button`,children:`Default`})}),(0,f.jsx)(o,{label:`This is a description of the button`,id:`ic-tooltip-test-button-1`,children:(0,f.jsx)(c,{"aria-describedby":`ic-tooltip-test-button-1`,children:`Default`})})]}),name:`Default`},_={render:()=>{let e=!0;function t(){document.querySelector(`ic-tooltip`).displayTooltip(e,!0),e=!e}return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`button`,{onClick:t,children:`Show tooltip`}),(0,f.jsx)(o,{label:`This is a description of the button`,id:`ic-tooltip-test-button-default`,children:(0,f.jsx)(`button`,{"aria-describedby":`ic-tooltip-test-button-default`,children:`Default`})})]})},name:`Using external method`},v={render:()=>(0,f.jsx)(o,{label:`This shows 'Code' has been copied`,id:`ic-tooltip-test-button-disable-hover`,disableHover:!0,children:(0,f.jsx)(`button`,{"aria-describedby":`ic-tooltip-test-button-disable-hover`,onClick:()=>navigator.clipboard.writeText(`Code`),children:`Show tooltip`})}),name:`Disabled Hover`},y={render:()=>(0,f.jsxs)(`div`,{style:{margin:`40px`},children:[(0,f.jsx)(o,{placement:`top-start`,label:`This is a description of the button`,id:`ic-tooltip-test-button-top-start`,children:(0,f.jsx)(`button`,{"aria-describedby":`ic-tooltip-test-button-top-start`,children:`Top start`})}),(0,f.jsx)(o,{placement:`top`,label:`This is a description of the button`,id:`ic-tooltip-test-button-top`,children:(0,f.jsx)(`button`,{"aria-describedby":`ic-tooltip-test-button-top`,children:`Top`})}),(0,f.jsx)(o,{placement:`top-end`,label:`This is a description of the button`,id:`ic-tooltip-test-button-top-end`,children:(0,f.jsx)(`button`,{"aria-describedby":`ic-tooltip-test-button-top-end`,children:`Top end`})})]}),name:`Top placements`},b={render:()=>(0,f.jsxs)(`div`,{style:{margin:`40px`},children:[(0,f.jsx)(o,{placement:`bottom-start`,label:`This is a description of the button`,id:`ic-tooltip-test-button-bottom-start`,children:(0,f.jsx)(`button`,{"aria-describedby":`ic-tooltip-test-button-bottom-start`,children:`Bottom start`})}),(0,f.jsx)(o,{placement:`bottom`,label:`This is a description of the button`,id:`ic-tooltip-test-button-bottom`,children:(0,f.jsx)(`button`,{"aria-describedby":`ic-tooltip-test-button-bottom`,children:`Bottom`})}),(0,f.jsx)(o,{placement:`bottom-end`,label:`This is a description of the button`,id:`ic-tooltip-test-button-bottom-end`,children:(0,f.jsx)(`button`,{"aria-describedby":`ic-tooltip-test-button-bottom-end`,children:`Bottom end`})})]}),name:`Bottom placements`},x={render:()=>(0,f.jsxs)(`div`,{style:{margin:`40px`},children:[(0,f.jsx)(o,{placement:`right-start`,label:`This is a description of the button`,id:`ic-tooltip-test-button-right-start`,children:(0,f.jsx)(`button`,{"aria-describedby":`ic-tooltip-test-button-right-start`,children:`Right start`})}),(0,f.jsx)(o,{placement:`right`,label:`This is a description of the button`,id:`ic-tooltip-test-button-right`,children:(0,f.jsx)(`button`,{"aria-describedby":`ic-tooltip-test-button-right`,children:`Right`})}),(0,f.jsx)(o,{placement:`right-end`,label:`This is a description of the button`,id:`ic-tooltip-test-button-right-end`,children:(0,f.jsx)(`button`,{"aria-describedby":`ic-tooltip-test-button-right-end`,children:`Right end`})})]}),name:`Right placements`},S={render:()=>(0,f.jsxs)(`div`,{style:{marginLeft:`40px`},children:[(0,f.jsx)(o,{placement:`left-start`,label:`This is a description of the button`,id:`ic-tooltip-test-button-left-start`,children:(0,f.jsx)(`button`,{"aria-describedby":`ic-tooltip-test-button-left-start`,children:`Left start`})}),(0,f.jsx)(o,{placement:`left`,label:`This is a description of the button`,id:`ic-tooltip-test-button-left`,children:(0,f.jsx)(`button`,{"aria-describedby":`ic-tooltip-test-button-left`,children:`Left`})}),(0,f.jsx)(o,{placement:`left-end`,label:`This is a description of the button`,id:`ic-tooltip-test-button-left-end`,children:(0,f.jsx)(`button`,{"aria-describedby":`ic-tooltip-test-button-left-end`,children:`Left end`})})]}),name:`Left placements`},C={render:()=>(0,f.jsxs)(o,{label:`This is a tooltip with a longer label and an icon to show how the text is aligned when there is an icon present.`,id:`ic-tooltip-with-icon`,"icon-alt-text":`Check mark icon`,children:[(0,f.jsx)(`svg`,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`currentColor`,children:(0,f.jsx)(`path`,{d:`M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z`})}),(0,f.jsx)(`button`,{"aria-describedby":`ic-tooltip-with-icon`,children:`Icon on Tooltip`})]}),name:`With Icon`},w={render:()=>(0,f.jsx)(o,{label:`This is a body of text that is truncated to three lines within a tooltip. It has been truncated based on the maxLines prop. The number of lines in the text is clamped to the number passed through the maxLines prop.`,maxLines:3,id:`ic-tooltip-test-button-truncation`,children:(0,f.jsx)(`button`,{"aria-describedby":`ic-tooltip-test-button-truncation`,children:`Default`})}),name:`Truncation`},T={render:()=>(0,f.jsx)(`div`,{style:{backgroundColor:`#333333`,height:`100px`},children:(0,f.jsx)(o,{label:`This is a description of the button`,id:`ic-tooltip-test-button-dark`,children:(0,f.jsx)(`button`,{"aria-describedby":`ic-tooltip-test-button-dark`,children:`Default`})})}),name:`Dark background`},E={render:()=>{let[e,t]=d.useState(`refresh`);return(0,f.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`},children:(0,f.jsx)(c,{"aria-label":e,variant:`icon-primary`,onClick:()=>t(`really long message`),children:(0,f.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,f.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,f.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})})})},name:`Changing label`},D={render:()=>{let[e,t]=(0,d.useState)(!1);return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--ic-space-xs)`},children:[(0,f.jsx)(a,{children:`Choose the tooltip position strategy and hover over the button to see it take effect`}),(0,f.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--ic-space-xs)`,padding:`var(--ic-space-md)`,border:`1px solid var(--ic-color-text-primary)`,overflow:`hidden`,width:`100px`,position:`relative`},children:(0,f.jsx)(o,{label:`This is a tooltip with a long label`,id:`ic-tooltip-test-button-1`,fixedPositioning:e,children:(0,f.jsx)(c,{"aria-describedby":`ic-tooltip-test-button-1`,children:`Button`})})}),(0,f.jsx)(r,{label:`Fixed tooltip positioning`,onIcChange:e=>t(e.detail.checked)})]})},name:`Positioning strategy`},O={render:()=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{label:`This is a description of the button`,id:`ic-tooltip-test-button-event`,onIcTooltipShow:e=>console.log(`tooltip shown`),children:(0,f.jsx)(`button`,{"aria-describedby":`ic-tooltip-test-button-event`,children:`Default`})}),(0,f.jsx)(o,{label:`This is a description of the button`,id:`ic-tooltip-test-button-event-1`,onIcTooltipShow:()=>console.log(`tooltip shown`),children:(0,f.jsx)(c,{"aria-describedby":`ic-tooltip-test-button-event-1`,children:`Default`})})]}),name:`IcShowTooltip event`},k={render:e=>(0,f.jsxs)(`div`,{style:{margin:`250px`},children:[(0,f.jsx)(o,{label:e.label,placement:e.placement,maxLines:e.maxLines,disableClick:e.disableClick,disableHover:e.disableHover,id:`ic-tooltip-1`,theme:e.theme,fixedPositioning:e.fixedPositioning,children:(0,f.jsx)(`button`,{"aria-describedby":`ic-tooltip-1`,children:`Native`})}),(0,f.jsx)(o,{label:e.label,placement:e.placement,maxLines:e.maxLines,disableClick:e.disableClick,disableHover:e.disableHover,id:`ic-tooltip-2`,theme:e.theme,fixedPositioning:e.fixedPositioning,children:(0,f.jsx)(c,{"aria-describedby":`ic-tooltip-2`,children:`ICDS`})})]}),args:p,argTypes:{placement:{options:[`bottom`,`top-start`,`top`,`top-end`,`right-start`,`right`,`right-end`,`bottom-end`,`bottom-start`,`left-end`,`left`,`left-start`],control:{type:`select`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}},name:`Playground`},A={render:e=>(0,f.jsxs)(`div`,{style:{margin:`250px`},children:[(0,f.jsxs)(o,{label:e.label,"icon-alt-text":e.tooltipIconAltText,"icon-slot":e.iconSlot,placement:e.placement,"max-lines":e.maxLines,"disable-hover":e.disableHover,id:`ic-tooltip-1`,theme:e.theme,"fixed-positioning":e.fixedPositioning,children:[(0,f.jsx)(`svg`,{slot:e.iconSlot,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`currentColor`,xmlns:`http://www.w3.org/2000/svg`,children:(0,f.jsx)(`path`,{d:`M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z`})}),(0,f.jsx)(`button`,{"aria-describedby":`ic-tooltip-1`,children:`Native`})]}),(0,f.jsxs)(o,{label:e.label,"icon-alt-text":e.tooltipIconAltText,"icon-slot":e.iconSlot,placement:e.placement,"max-lines":e.maxLines,"disable-hover":e.disableHover,id:`ic-tooltip-2`,theme:e.theme,"fixed-positioning":e.fixedPositioning,children:[(0,f.jsx)(`svg`,{slot:e.iconSlot,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`currentColor`,xmlns:`http://www.w3.org/2000/svg`,children:(0,f.jsx)(`path`,{d:`M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z`})}),(0,f.jsx)(c,{"aria-describedby":`ic-tooltip-2`,children:` ICDS `})]})]}),args:m,argTypes:{placement:{options:[`bottom`,`top-start`,`top`,`top-end`,`right-start`,`right`,`right-end`,`bottom-end`,`bottom-start`,`left-end`,`left`,`left-start`],control:{type:`select`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}},iconSlot:{options:[`icon`,``],control:{type:`select`}},tooltipIconAltText:{control:{type:`text`}}},name:`Playground With Icon`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <IcTooltip label="This shows 'Code' has been copied" id="ic-tooltip-test-button-disable-hover" disableHover>
      <button aria-describedby="ic-tooltip-test-button-disable-hover" onClick={() => navigator.clipboard.writeText("Code")}>
        Show tooltip
      </button>
    </IcTooltip>,
  name: "Disabled Hover"
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <IcTooltip label="This is a tooltip with a longer label and an icon to show how the text is aligned when there is an icon present." id="ic-tooltip-with-icon" icon-alt-text="Check mark icon">
      <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
      </svg>
      <button aria-describedby="ic-tooltip-with-icon">
        Icon on Tooltip
      </button>
    </IcTooltip>,
  name: "With Icon"
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <IcTooltip label="This is a body of text that is truncated to three lines within a tooltip. It has been truncated based on the maxLines prop. The number of lines in the text is clamped to the number passed through the maxLines prop." maxLines={3} id="ic-tooltip-test-button-truncation">
      <button aria-describedby="ic-tooltip-test-button-truncation">
        Default
      </button>
    </IcTooltip>,
  name: "Truncation"
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    margin: "250px"
  }}>
      <IcTooltip label={args.label} icon-alt-text={args.tooltipIconAltText} icon-slot={args.iconSlot} placement={args.placement} max-lines={args.maxLines} disable-hover={args.disableHover} id="ic-tooltip-1" theme={args.theme} fixed-positioning={args.fixedPositioning}>
        <svg slot={args.iconSlot} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z" />
        </svg>
        <button aria-describedby="ic-tooltip-1">Native</button>
      </IcTooltip>
      <IcTooltip label={args.label} icon-alt-text={args.tooltipIconAltText} icon-slot={args.iconSlot} placement={args.placement} max-lines={args.maxLines} disable-hover={args.disableHover} id="ic-tooltip-2" theme={args.theme} fixed-positioning={args.fixedPositioning}>
        <svg slot={args.iconSlot} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z" />
        </svg>
        <IcButton aria-describedby="ic-tooltip-2"> ICDS </IcButton>
      </IcTooltip>
    </div>,
  args: defaultWithIconArgs,
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
    },
    iconSlot: {
      options: ["icon", ""],
      control: {
        type: "select"
      }
    },
    tooltipIconAltText: {
      control: {
        type: "text"
      }
    }
  },
  name: "Playground With Icon"
}`,...A.parameters?.docs?.source}}},j=[`Default`,`UsingExternalMethod`,`DisabledHover`,`TopPlacements`,`BottomPlacements`,`RightPlacements`,`LeftPlacements`,`TooltipWithSlottedIcon`,`Truncation`,`DarkBackground`,`ChangingLabel`,`PositioningStrategy`,`IcShowTooltipEvent`,`Playground`,`PlaygroundWithIcon`]}));M();export{b as BottomPlacements,E as ChangingLabel,T as DarkBackground,g as Default,v as DisabledHover,O as IcShowTooltipEvent,S as LeftPlacements,k as Playground,A as PlaygroundWithIcon,D as PositioningStrategy,x as RightPlacements,C as TooltipWithSlottedIcon,y as TopPlacements,w as Truncation,_ as UsingExternalMethod,j as __namedExportsOrder,h as default,M as n,u as t};