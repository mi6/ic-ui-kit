import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./lit-html-CwvQb_NC.js";var i=e({CenterAlignment:()=>c,FullHeight:()=>u,FullWidthAlignment:()=>l,LeftAligned:()=>s,Playground:()=>d,__namedExportsOrder:()=>f,default:()=>a}),a,o,s,c,l,u,d,f,p=t((()=>{n(),a={title:`Web Components/Section container`,component:`ic-section-container`},o={aligned:null,fullHeight:!1},s={render:()=>r`<ic-section-container>
      <main>
        <div style="display: flex; justify-content: space-between">
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </ic-section-container>`,name:`Left aligned`},c={render:()=>r`<ic-section-container aligned="center">
      <main>
        <div style="display: flex; justify-content: space-between">
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </ic-section-container>`,name:`Center alignment`},l={render:()=>r`<ic-section-container aligned="full-width">
      <main>
        <div style="display: flex; justify-content: space-between">
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </ic-section-container>`,name:`Full-width alignment`},u={render:()=>r`<ic-section-container aligned="full-width" full-height>
      <main>
        <div style="display: flex; justify-content: space-between">
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </ic-section-container>`,name:`Full-height`},d={render:e=>r`
    <ic-section-container
      aligned=${e.aligned}
      full-height=${e.fullHeight}
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
    </IcSectionContainer>`,name:`Playground`,args:o,argTypes:{aligned:{options:[null,`left`,`center`,`full-width`],control:{type:`inline-radio`}}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-section-container>
      <main>
        <div style="display: flex; justify-content: space-between">
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </ic-section-container>\`,
  name: "Left aligned"
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-section-container aligned="center">
      <main>
        <div style="display: flex; justify-content: space-between">
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </ic-section-container>\`,
  name: "Center alignment"
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-section-container aligned="full-width">
      <main>
        <div style="display: flex; justify-content: space-between">
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </ic-section-container>\`,
  name: "Full-width alignment"
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-section-container aligned="full-width" full-height>
      <main>
        <div style="display: flex; justify-content: space-between">
          <button>Start</button>
          <button>End</button>
        </div>
      </main>
    </ic-section-container>\`,
  name: "Full-height"
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`LeftAligned`,`CenterAlignment`,`FullWidthAlignment`,`FullHeight`,`Playground`]}));p();export{c as CenterAlignment,u as FullHeight,l as FullWidthAlignment,s as LeftAligned,d as Playground,f as __namedExportsOrder,a as default,p as n,i as t};