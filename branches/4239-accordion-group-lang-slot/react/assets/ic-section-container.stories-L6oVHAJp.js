import{z as n,R as e}from"./iframe-C85n4nVD.js";const s={aligned:null,fullHeight:!1},c={title:"Section container",component:n},t={render:()=>e.createElement(n,{style:{border:"1px solid black"}},e.createElement("main",null,e.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},e.createElement("button",null,"Start"),e.createElement("button",null,"End")))),name:"Left Aligned"},l={render:()=>e.createElement(n,{aligned:"center",style:{border:"1px solid black"}},e.createElement("main",null,e.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},e.createElement("button",null,"Start"),e.createElement("button",null,"End")))),name:"Center alignment"},a={render:()=>e.createElement(n,{aligned:"full-width",style:{border:"1px solid black"}},e.createElement("main",null,e.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},e.createElement("button",null,"Start"),e.createElement("button",null,"End")))),name:"Full-width alignment"},r={render:()=>e.createElement(n,{aligned:"full-width",fullHeight:"true",style:{border:"1px solid black"}},e.createElement("main",null,e.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},e.createElement("button",null,"Start"),e.createElement("button",null,"End")))),name:"Full-height"},o={render:i=>e.createElement(n,{aligned:i.aligned,fullHeight:i.fullHeight,style:{border:"1px solid black"}},e.createElement("main",null,e.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},e.createElement("button",null,"Start"),e.createElement("button",null,"End")))),name:"Playground",args:s,argTypes:{aligned:{options:[null,"left","center","full-width"],control:{type:"inline-radio"}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <IcSectionContainer style={{
    border: "1px solid black"
  }}>
      <main>
        <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </IcSectionContainer>,
  name: "Left Aligned"
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <IcSectionContainer aligned="center" style={{
    border: "1px solid black"
  }}>
      <main>
        <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </IcSectionContainer>,
  name: "Center alignment"
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <IcSectionContainer aligned="full-width" style={{
    border: "1px solid black"
  }}>
      <main>
        <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </IcSectionContainer>,
  name: "Full-width alignment"
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <IcSectionContainer aligned="full-width" fullHeight="true" style={{
    border: "1px solid black"
  }}>
      <main>
        <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </IcSectionContainer>,
  name: "Full-height"
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <IcSectionContainer aligned={args.aligned} fullHeight={args.fullHeight} style={{
    border: "1px solid black"
  }}>
      <main>
        <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </IcSectionContainer>,
  name: "Playground",
  args: defaultArgs,
  argTypes: {
    aligned: {
      options: [null, "left", "center", "full-width"],
      control: {
        type: "inline-radio"
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const d=["LeftAligned","CenterAlignment","FullWidthAlignment","FullHeight","Playground"],m=Object.freeze(Object.defineProperty({__proto__:null,CenterAlignment:l,FullHeight:r,FullWidthAlignment:a,LeftAligned:t,Playground:o,__namedExportsOrder:d,default:c},Symbol.toStringTag,{value:"Module"}));export{m as I};
