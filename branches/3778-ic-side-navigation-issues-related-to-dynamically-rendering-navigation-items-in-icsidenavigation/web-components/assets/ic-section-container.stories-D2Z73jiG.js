import{x as a}from"./lit-html-CWQq0DyO.js";const l={title:"Web Components/Section container",component:"ic-section-container"},c={aligned:null,fullHeight:!1},n={render:()=>a`<ic-section-container>
      <main>
        <div style="display: flex; justify-content: space-between">
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </ic-section-container>`,name:"Left aligned"},t={render:()=>a`<ic-section-container aligned="center">
      <main>
        <div style="display: flex; justify-content: space-between">
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </ic-section-container>`,name:"Center alignment"},e={render:()=>a`<ic-section-container aligned="full-width">
      <main>
        <div style="display: flex; justify-content: space-between">
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </ic-section-container>`,name:"Full-width alignment"},i={render:()=>a`<ic-section-container aligned="full-width" full-height>
      <main>
        <div style="display: flex; justify-content: space-between">
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </ic-section-container>`,name:"Full-height"},o={render:r=>a`
    <ic-section-container
      aligned=${r.aligned}
      full-height=${r.fullHeight}
      style="border: 1px solid black;"
    >
      <main>
        <div
          style="
            display: flex;
            justify-content: space-between;
          "
        >
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </IcSectionContainer>`,name:"Playground",args:c,argTypes:{aligned:{options:[null,"left","center","full-width"],control:{type:"inline-radio"}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-section-container>
      <main>
        <div style="display: flex; justify-content: space-between">
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </ic-section-container>\`,
  name: "Left aligned"
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-section-container aligned="center">
      <main>
        <div style="display: flex; justify-content: space-between">
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </ic-section-container>\`,
  name: "Center alignment"
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-section-container aligned="full-width">
      <main>
        <div style="display: flex; justify-content: space-between">
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </ic-section-container>\`,
  name: "Full-width alignment"
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-section-container aligned="full-width" full-height>
      <main>
        <div style="display: flex; justify-content: space-between">
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </ic-section-container>\`,
  name: "Full-height"
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <ic-section-container
      aligned=\${args.aligned}
      full-height=\${args.fullHeight}
      style="border: 1px solid black;"
    >
      <main>
        <div
          style="
            display: flex;
            justify-content: space-between;
          "
        >
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </IcSectionContainer>\`,
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
}`,...o.parameters?.docs?.source}}};const s=["LeftAligned","CenterAlignment","FullWidthAlignment","FullHeight","Playground"],u=Object.freeze(Object.defineProperty({__proto__:null,CenterAlignment:t,FullHeight:i,FullWidthAlignment:e,LeftAligned:n,Playground:o,__namedExportsOrder:s,default:l},Symbol.toStringTag,{value:"Module"}));export{u as I};
