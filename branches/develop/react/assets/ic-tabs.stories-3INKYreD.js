import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{$ as r,Q as i,Z as a,et as o,in as s,s as c,t as l,u,ut as d}from"./iframe-C08mFgC2.js";import{n as f,t as p}from"./slottedSVG-CGuuWAr5.js";var m=e({Controlled:()=>E,Default:()=>x,Disabled:()=>w,DynamicRendering:()=>k,Inline:()=>T,ManualActivation:()=>D,Playground:()=>A,Responsive:()=>O,WithIcons:()=>S,WithIconsAndBadges:()=>C,__namedExportsOrder:()=>j,default:()=>b}),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=t((()=>{h=n(s()),d(),f(),g=l(),_=()=>{let[e,t]=(0,h.useState)(0);return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(i,{selectedTabIndex:e,onIcTabSelect:e=>t(e.detail.tabIndex),children:[(0,g.jsxs)(r,{label:`Example tab group`,children:[(0,g.jsx)(a,{children:`One`}),(0,g.jsx)(a,{children:`Two`}),(0,g.jsx)(a,{children:`Three`})]}),(0,g.jsx)(o,{children:`Tab One`}),(0,g.jsx)(o,{children:`Tab Two`}),(0,g.jsx)(o,{children:`Tab Three`})]})})},v=()=>{let[e,t]=(0,h.useState)([]);(0,h.useEffect)(()=>{setTimeout(()=>{t([{label:`Ingredients`},{label:`Method`},{label:`History`}])},3e3)},[]);let n=()=>{let e=``;for(let t=0;t<3;t++)e+=`abcdefghijklmnopqrstuvwxyz`.charAt(Math.floor(Math.random()*26));return e};return(0,g.jsxs)(`div`,{className:`wrapper`,children:[(0,g.jsx)(u,{onClick:()=>{t([...e,{label:n()}])},children:`Add Tab`}),(0,g.jsx)(u,{onClick:()=>{e.pop(),t([...e])},children:`Remove Tab`}),(0,g.jsxs)(i,{onIcTabSelect:e=>console.log({tabIndex:e.detail.tabIndex,tabLabel:e.detail.tabLabel}),children:[(0,g.jsx)(r,{label:`Example tab group`,children:e.map((e,t)=>(0,g.jsxs)(a,{children:[t===2&&(0,g.jsx)(p,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:(0,g.jsx)(`path`,{d:`M9,21V22H7V21A2,2 0 0,1 5,19V4A2,2 0 0,1 7,2H17A2,2 0 0,1 19,4V19A2,2 0 0,1 17,21V22H15V21H9M7,4V9H17V4H7M7,19H17V11H7V19M8,12H10V15H8V12M8,6H10V8H8V6Z`})}),e.label]},`${e.label}-${t}`))}),(0,g.jsx)(`span`,{}),e.map((e,t)=>(0,g.jsx)(o,{children:(0,g.jsxs)(`p`,{children:[`Tab `,t,` - `,e.label]})},`${e.label}-${t}`))]})]})},y={activationType:`automatic`,disabled:!1,inline:!1,groupLabel:`Example tab group`,theme:`inherit`,monochrome:!1},b={title:`Tabs`,component:i},x={render:()=>(0,g.jsxs)(i,{onIcTabSelect:e=>console.log(e.detail),children:[(0,g.jsxs)(r,{label:`Example tab group`,children:[(0,g.jsx)(a,{children:`One`}),(0,g.jsx)(a,{children:`Two`}),(0,g.jsx)(a,{children:`Three`})]}),(0,g.jsx)(o,{children:`Tab One`}),(0,g.jsx)(o,{children:`Tab Two`}),(0,g.jsx)(o,{children:`Tab Three`})]}),name:`Default`},S={render:()=>(0,g.jsxs)(i,{children:[(0,g.jsxs)(r,{label:`Example tab group`,children:[(0,g.jsxs)(a,{children:[`One`,(0,g.jsxs)(`svg`,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,g.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,g.jsx)(`path`,{d:`M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z`})]})]}),(0,g.jsxs)(a,{children:[`Two`,(0,g.jsxs)(`svg`,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,g.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,g.jsx)(`path`,{d:`M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z`})]})]}),(0,g.jsxs)(a,{children:[`Three`,(0,g.jsx)(`svg`,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:(0,g.jsx)(`path`,{d:`M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z`})})]})]}),(0,g.jsx)(o,{children:`Tab One`}),(0,g.jsx)(o,{children:`Tab Two`}),(0,g.jsx)(o,{children:`Tab Three`})]}),name:`With icons`},C={render:()=>(0,g.jsxs)(i,{children:[(0,g.jsxs)(r,{label:`Example tab group`,children:[(0,g.jsxs)(a,{children:[`Near`,(0,g.jsx)(c,{label:`2`,slot:`badge`,variant:`info`,position:`near`})]}),(0,g.jsxs)(a,{children:[`Far`,(0,g.jsx)(c,{label:`2`,slot:`badge`,variant:`info`,position:`far`})]}),(0,g.jsxs)(a,{children:[`Inline`,(0,g.jsx)(c,{label:`2`,slot:`badge`,variant:`info`,position:`inline`})]}),(0,g.jsxs)(a,{children:[`Near`,(0,g.jsxs)(`svg`,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,g.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,g.jsx)(`path`,{d:`M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z`})]}),(0,g.jsx)(c,{label:`2`,slot:`badge`,variant:`info`,position:`near`})]}),(0,g.jsxs)(a,{children:[`Far`,(0,g.jsxs)(`svg`,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,g.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,g.jsx)(`path`,{d:`M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z`})]}),(0,g.jsx)(c,{label:`2`,slot:`badge`,variant:`info`,position:`far`})]}),(0,g.jsxs)(a,{children:[`Inline`,(0,g.jsx)(`svg`,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:(0,g.jsx)(`path`,{d:`M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z`})}),(0,g.jsx)(c,{label:`2`,slot:`badge`,variant:`info`,position:`inline`})]})]}),(0,g.jsx)(o,{children:`Tab Near`}),(0,g.jsx)(o,{children:`Tab Far`}),(0,g.jsx)(o,{children:`Tab Inline`}),(0,g.jsx)(o,{children:`Tab Near`}),(0,g.jsx)(o,{children:`Tab Far`}),(0,g.jsx)(o,{children:`Tab Inline`})]}),name:`With icons and badges`},w={render:()=>(0,g.jsxs)(i,{children:[(0,g.jsxs)(r,{label:`Example tab group`,children:[(0,g.jsx)(a,{children:`One`}),(0,g.jsx)(a,{disabled:!0,children:`Two`}),(0,g.jsx)(a,{children:`Three`})]}),(0,g.jsx)(o,{children:`Tab One`}),(0,g.jsx)(o,{children:`Tab Two`}),(0,g.jsx)(o,{children:`Tab Three`})]}),name:`Disabled`},T={render:()=>(0,g.jsxs)(i,{children:[(0,g.jsxs)(r,{label:`Example tab group`,inline:!0,children:[(0,g.jsx)(a,{children:`One`}),(0,g.jsx)(a,{children:`Two`}),(0,g.jsx)(a,{children:`Three`})]}),(0,g.jsx)(o,{children:`Tab One`}),(0,g.jsx)(o,{children:`Tab Two`}),(0,g.jsx)(o,{children:`Tab Three`})]}),name:`Inline`},E={render:()=>(0,g.jsx)(_,{}),name:`Controlled`},D={render:()=>(0,g.jsxs)(i,{activationType:`manual`,children:[(0,g.jsxs)(r,{label:`Example tab group`,children:[(0,g.jsx)(a,{children:`One`}),(0,g.jsx)(a,{children:`Two`}),(0,g.jsx)(a,{children:`Three`})]}),(0,g.jsx)(o,{children:`Tab One`}),(0,g.jsx)(o,{children:`Tab Two`}),(0,g.jsx)(o,{children:`Tab Three`})]}),name:`Manual activation`},O={render:()=>(0,g.jsxs)(i,{children:[(0,g.jsxs)(r,{label:`Example tab group`,children:[(0,g.jsx)(a,{children:`One`}),(0,g.jsx)(a,{children:`Two`}),(0,g.jsx)(a,{children:`Three`}),(0,g.jsx)(a,{children:`Four`}),(0,g.jsx)(a,{children:`Five`}),(0,g.jsx)(a,{children:`Six`}),(0,g.jsx)(a,{children:`Seven`}),(0,g.jsx)(a,{children:`Eight`}),(0,g.jsx)(a,{children:`Nine`}),(0,g.jsx)(a,{children:`Ten`}),(0,g.jsx)(a,{children:`Eleven`}),(0,g.jsx)(a,{children:`Twelve`})]}),(0,g.jsx)(o,{children:`Tab One`}),(0,g.jsx)(o,{children:`Tab Two`}),(0,g.jsx)(o,{children:`Tab Three`}),(0,g.jsx)(o,{children:`Tab Four`}),(0,g.jsx)(o,{children:`Tab Five`}),(0,g.jsx)(o,{children:`Tab Six`}),(0,g.jsx)(o,{children:`Tab Seven`}),(0,g.jsx)(o,{children:`Tab Eight`}),(0,g.jsx)(o,{children:`Tab Nine`}),(0,g.jsx)(o,{children:`Tab Ten`}),(0,g.jsx)(o,{children:`Tab Eleven`}),(0,g.jsx)(o,{children:`Tab Twelve`})]}),name:`Responsive`},k={render:()=>(0,g.jsx)(v,{}),name:`Dynamic rendering`},A={render:e=>(0,g.jsx)(`div`,{children:(0,g.jsxs)(i,{activationType:e.activationType,theme:e.theme,monochrome:e.monochrome,children:[(0,g.jsxs)(r,{label:e.groupLabel,inline:e.inline,children:[(0,g.jsx)(a,{disabled:e.disabled,children:`One`}),(0,g.jsxs)(a,{children:[`Two`,(0,g.jsx)(c,{label:`1`,slot:`badge`,position:`inline`,accessibleLabel:`1 notification found`})]}),(0,g.jsxs)(a,{children:[`Three`,(0,g.jsxs)(`svg`,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,g.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,g.jsx)(`path`,{d:`M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z`})]})]}),(0,g.jsx)(a,{children:`Four`})]}),(0,g.jsx)(o,{children:`Tab One`}),(0,g.jsx)(o,{children:`Tab Two`}),(0,g.jsx)(o,{children:`Tab Three`}),(0,g.jsx)(o,{children:`Tab Four`})]})}),args:y,argTypes:{activationType:{options:[`automatic`,`manual`],control:{type:`inline-radio`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}},name:`Playground`},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <IcTabContext onIcTabSelect={ev => console.log(ev.detail)}>
      <IcTabGroup label="Example tab group">
        <IcTab>One</IcTab>
        <IcTab>Two</IcTab>
        <IcTab>Three</IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One</IcTabPanel>
      <IcTabPanel>Tab Two</IcTabPanel>
      <IcTabPanel>Tab Three</IcTabPanel>
    </IcTabContext>,
  name: "Default"
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <IcTabContext>
      <IcTabGroup label="Example tab group">
        <IcTab>
          One
          <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
          </svg>
        </IcTab>
        <IcTab>
          Two
          <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z" />
          </svg>
        </IcTab>
        <IcTab>
          Three
          <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
        </IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One</IcTabPanel>
      <IcTabPanel>Tab Two</IcTabPanel>
      <IcTabPanel>Tab Three</IcTabPanel>
    </IcTabContext>,
  name: "With icons"
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <IcTabContext>
      <IcTabGroup label="Example tab group">
        <IcTab>
          Near
          <IcBadge label="2" slot="badge" variant="info" position="near" />
        </IcTab>
        <IcTab>
          Far
          <IcBadge label="2" slot="badge" variant="info" position="far" />
        </IcTab>
        <IcTab>
          Inline
          <IcBadge label="2" slot="badge" variant="info" position="inline" />
        </IcTab>
        <IcTab>
          Near
          <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
          </svg>
          <IcBadge label="2" slot="badge" variant="info" position="near" />
        </IcTab>
        <IcTab>
          Far
          <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z" />
          </svg>
          <IcBadge label="2" slot="badge" variant="info" position="far" />
        </IcTab>
        <IcTab>
          Inline
          <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
          <IcBadge label="2" slot="badge" variant="info" position="inline" />
        </IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab Near</IcTabPanel>
      <IcTabPanel>Tab Far</IcTabPanel>
      <IcTabPanel>Tab Inline</IcTabPanel>
      <IcTabPanel>Tab Near</IcTabPanel>
      <IcTabPanel>Tab Far</IcTabPanel>
      <IcTabPanel>Tab Inline</IcTabPanel>
    </IcTabContext>,
  name: "With icons and badges"
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <IcTabContext>
      <IcTabGroup label="Example tab group">
        <IcTab>One</IcTab>
        <IcTab disabled>Two</IcTab>
        <IcTab>Three</IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One</IcTabPanel>
      <IcTabPanel>Tab Two</IcTabPanel>
      <IcTabPanel>Tab Three</IcTabPanel>
    </IcTabContext>,
  name: "Disabled"
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <IcTabContext>
      <IcTabGroup label="Example tab group" inline>
        <IcTab>One</IcTab>
        <IcTab>Two</IcTab>
        <IcTab>Three</IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One</IcTabPanel>
      <IcTabPanel>Tab Two</IcTabPanel>
      <IcTabPanel>Tab Three</IcTabPanel>
    </IcTabContext>,
  name: "Inline"
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledTabsExample />,
  name: "Controlled"
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <IcTabContext activationType="manual">
      <IcTabGroup label="Example tab group">
        <IcTab>One</IcTab>
        <IcTab>Two</IcTab>
        <IcTab>Three</IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One</IcTabPanel>
      <IcTabPanel>Tab Two</IcTabPanel>
      <IcTabPanel>Tab Three</IcTabPanel>
    </IcTabContext>,
  name: "Manual activation"
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <IcTabContext>
      <IcTabGroup label="Example tab group">
        <IcTab>One</IcTab>
        <IcTab>Two</IcTab>
        <IcTab>Three</IcTab>
        <IcTab>Four</IcTab>
        <IcTab>Five</IcTab>
        <IcTab>Six</IcTab>
        <IcTab>Seven</IcTab>
        <IcTab>Eight</IcTab>
        <IcTab>Nine</IcTab>
        <IcTab>Ten</IcTab>
        <IcTab>Eleven</IcTab>
        <IcTab>Twelve</IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One</IcTabPanel>
      <IcTabPanel>Tab Two</IcTabPanel>
      <IcTabPanel>Tab Three</IcTabPanel>
      <IcTabPanel>Tab Four</IcTabPanel>
      <IcTabPanel>Tab Five</IcTabPanel>
      <IcTabPanel>Tab Six</IcTabPanel>
      <IcTabPanel>Tab Seven</IcTabPanel>
      <IcTabPanel>Tab Eight</IcTabPanel>
      <IcTabPanel>Tab Nine</IcTabPanel>
      <IcTabPanel>Tab Ten</IcTabPanel>
      <IcTabPanel>Tab Eleven</IcTabPanel>
      <IcTabPanel>Tab Twelve</IcTabPanel>
    </IcTabContext>,
  name: "Responsive"
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <DynamicRender />,
  name: "Dynamic rendering"
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <IcTabContext activationType={args.activationType} theme={args.theme} monochrome={args.monochrome}>
        <IcTabGroup label={args.groupLabel} inline={args.inline}>
          <IcTab disabled={args.disabled}>One</IcTab>
          <IcTab>
            Two
            <IcBadge label="1" slot="badge" position="inline" accessibleLabel="1 notification found" />
          </IcTab>
          <IcTab>
            Three
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
            </svg>
          </IcTab>
          <IcTab>Four</IcTab>
        </IcTabGroup>
        <IcTabPanel>Tab One</IcTabPanel>
        <IcTabPanel>Tab Two</IcTabPanel>
        <IcTabPanel>Tab Three</IcTabPanel>
        <IcTabPanel>Tab Four</IcTabPanel>
      </IcTabContext>
    </div>,
  args: defaultArgs,
  argTypes: {
    activationType: {
      options: ["automatic", "manual"],
      control: {
        type: "inline-radio"
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
}`,...A.parameters?.docs?.source}}},j=[`Default`,`WithIcons`,`WithIconsAndBadges`,`Disabled`,`Inline`,`Controlled`,`ManualActivation`,`Responsive`,`DynamicRendering`,`Playground`]}));M();export{E as Controlled,x as Default,w as Disabled,k as DynamicRendering,T as Inline,D as ManualActivation,A as Playground,O as Responsive,S as WithIcons,C as WithIconsAndBadges,j as __namedExportsOrder,b as default,M as n,m as t};