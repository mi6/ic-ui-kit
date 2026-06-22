import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{O as r,in as i,it as a,lt as o,rt as s,t as c,u as l,ut as u}from"./iframe-Cvj0onjK.js";var d=e({AutoDismiss:()=>x,CustomNeutralIcon:()=>S,Default:()=>_,DisplayOnPageLoad:()=>w,ExampleOnPage:()=>C,MultilineMessage:()=>y,Playground:()=>T,SlottedActionElements:()=>b,WithVariant:()=>v,__namedExportsOrder:()=>E,default:()=>g}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D=t((()=>{f=n(i()),u(),p=c(),m=()=>{let e=(0,f.useRef)(null),t=(0,f.useRef)(null);return(0,f.useEffect)(()=>{e.current&&t.current&&(e.current.openToast=t.current)},[]),(0,p.jsx)(a,{ref:e,children:(0,p.jsx)(s,{heading:`My toast heading`,ref:t})})},h={autoDismissTimeout:5e3,dismissButtonAriaLabel:`dismiss`,dismissMode:`manual`,heading:`This is the heading`,message:`This is the message`,neutralIconAriaLabel:``,variant:`neutral`,actionSlot:`action`,neutralIconSlot:`neutral-icon`},g={title:`Toast`,component:s},_={render:()=>{function e(){document.querySelector(`ic-toast-region`).openToast=document.getElementById(`toast1`)}return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`button`,{onClick:e,children:`Display toast`}),(0,p.jsx)(a,{children:(0,p.jsx)(s,{id:`toast1`,heading:`Your coffee is ready`})})]})},name:`Default`},v={render:()=>{function e(){document.querySelector(`ic-toast-region`).openToast=document.getElementById(`toast1`)}return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`button`,{onClick:e,children:`Display toast`}),(0,p.jsx)(a,{children:(0,p.jsx)(s,{id:`toast1`,heading:`Your coffee is ready`,message:`Please dismiss and collect`,variant:`success`})})]})},name:`With variant`},y={render:()=>{function e(){document.querySelector(`ic-toast-region`).openToast=document.getElementById(`toast1`)}return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`button`,{onClick:e,children:`Display toast`}),(0,p.jsx)(a,{children:(0,p.jsx)(s,{id:`toast1`,heading:`Your coffee is ready`,message:`Please dismiss and come to collect your delicious coffee from the barista right away before it gets cold. Don't delay! We wouldn't want you to lose out on your fantastic coffee now would we?`})})]})},name:`Multiline message`},b={render:()=>{function e(){document.querySelector(`ic-toast-region`).openToast=document.getElementById(`toast1`)}function t(){document.querySelector(`ic-toast-region`).openToast=document.getElementById(`toast2`)}return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`button`,{onClick:e,children:`Display toast 1`}),(0,p.jsx)(`button`,{onClick:t,children:`Display toast 2`}),(0,p.jsxs)(a,{children:[(0,p.jsx)(s,{id:`toast1`,heading:`Your coffee had issues`,message:`Please dismiss and try again`,variant:`warning`,children:(0,p.jsx)(l,{slot:`action`,appearance:`light`,children:`Click Me`})}),(0,p.jsx)(s,{id:`toast2`,heading:`Your coffee was lost`,message:`Please dismiss and try again`,variant:`error`,children:(0,p.jsx)(r,{slot:`action`,href:`/`,theme:`dark`,children:`Click Me`})})]})]})},name:`Slotted action elements`},x={render:()=>{function e(){document.querySelector(`ic-toast-region`).openToast=document.getElementById(`toast1`)}return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`button`,{onClick:e,children:`Display toast`}),(0,p.jsx)(a,{children:(0,p.jsx)(s,{id:`toast1`,heading:`Your coffee is ready`,message:`This alert will dismiss itself, please collect your java`,variant:`info`,dismissMode:`automatic`,autoDismissTimeout:1e4})})]})},name:`Auto dismiss`},S={render:()=>{function e(){document.querySelector(`ic-toast-region`).openToast=document.getElementById(`toast1`)}return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`button`,{onClick:e,children:`Display toast`}),(0,p.jsx)(a,{children:(0,p.jsx)(s,{id:`toast1`,heading:`Your coffee is ready`,message:`Please dismiss and collect`,variant:`neutral`,neutralIconAltText:`Hello world`,children:(0,p.jsx)(`svg`,{slot:`neutral-icon`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,p.jsx)(`path`,{d:`M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z`})})})})]})},name:`Custom neutral icon`},C={render:()=>{function e(){document.querySelector(`ic-toast-region`).openToast=document.getElementById(`toast1`)}return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a,{children:(0,p.jsx)(s,{id:`toast1`,heading:`Your coffee is ready`})}),(0,p.jsx)(`div`,{id:`header`,style:{width:`100%`,height:`80px`,backgroundColor:`#23508e`,color:`var(--ic-architectural-white)`},children:(0,p.jsx)(o,{variant:`h1`,children:`Header`})}),(0,p.jsx)(`div`,{id:`topPageEl`,children:(0,p.jsx)(o,{variant:`h2`,children:`Top of the page`})}),(0,p.jsx)(o,{variant:`h3`,children:`Some content`}),(0,p.jsx)(`button`,{onClick:e,children:`Display toast`}),(0,p.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit turpis. Cras ac ligula et lectus mollis molestie in a enim. In ac turpis in leo rutrum eleifend. Fusce consectetur posuere ligula, vitae semper lorem mollis vitae. Fusce vel blandit turpis. Nulla justo ligula, egestas quis rutrum id, vulputate eget diam. Integer mattis quis nisi id blandit. Duis nisi lectus, suscipit elementum iaculis sed, porta et risus.`}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(o,{variant:`h3`,children:`More content`}),(0,p.jsx)(`p`,{children:`Phasellus accumsan ligula enim, a iaculis sapien rhoncus vitae. Curabitur pulvinar posuere diam in luctus. Sed blandit diam id odio aliquam aliquet. Pellentesque eros enim, tristique vel mattis eu, blandit at enim. Pellentesque sollicitudin pellentesque tellus vel eleifend. Nulla mauris lorem, porttitor vel orci eu, iaculis maximus nunc. Ut rhoncus ex ipsum. Mauris ultricies, augue sed eleifend pellentesque, leo purus efficitur orci, sit amet volutpat tortor diam non lorem. Morbi venenatis neque vel accumsan sagittis. Nunc rutrum augue non urna tincidunt auctor in at libero. Sed in risus sit amet nisl tempor viverra. Phasellus maximus sapien eu erat maximus iaculis. Praesent ultricies id orci eu euismod. Fusce eu urna turpis. Praesent ut neque tincidunt, porta sem id, accumsan massa.`}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(o,{variant:`h3`,children:`Some other content`}),(0,p.jsx)(`p`,{children:`Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi enim, viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur volutpat augue eget sollicitudin. Pellentesque eget pharetra ligula. Integer finibus feugiat sapien a pulvinar. Phasellus fermentum est lacus, quis volutpat justo pellentesque vitae. Sed vitae diam porta, facilisis metus ut, dictum lorem. Proin sed bibendum libero. Maecenas justo neque, ultricies sed magna ac, mattis vehicula elit. Donec ac lacus eget sapien luctus ultricies in in nibh.`}),(0,p.jsx)(`p`,{children:`Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc, ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra semper arcu nec semper. Sed non magna purus. Integer accumsan dui et volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu, placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam non elit in sem vestibulum molestie tempor eget augue. Sed neque ligula, tempus ac mollis bibendum, ultrices suscipit risus. Duis suscipit pulvinar varius.`}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(o,{variant:`h3`,children:`Some more`}),(0,p.jsx)(`p`,{children:`Etiam accumsan nibh erat, condimentum tempus metus suscipit nec. Duis placerat varius dolor eget ornare. Vestibulum egestas tellus non tellus ornare, eu scelerisque erat pulvinar. Nam tempus lacus eu libero consequat, in elementum magna ultricies. Etiam at suscipit odio. Duis quis quam vitae quam varius luctus. Aliquam erat volutpat. Fusce laoreet consectetur tortor, ac suscipit sem feugiat non. Etiam tempus tellus aliquet orci pretium, nec pretium nulla faucibus`}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(o,{variant:`h3`,children:`Nearly there`}),(0,p.jsx)(`p`,{children:`Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas massa enim, tincidunt consequat maximus at, fermentum vel lectus. Curabitur at ligula tellus. Ut a elit sit amet augue sagittis feugiat. Mauris mi enim, viverra id turpis ac, auctor vulputate ipsum. Nunc efficitur volutpat augue eget sollicitudin. Pellentesque eget pharetra ligula. Integer finibus feugiat sapien a pulvinar. Phasellus fermentum est lacus, quis volutpat justo pellentesque vitae. Sed vitae diam porta, facilisis metus ut, dictum lorem. Proin sed bibendum libero. Maecenas justo neque, ultricies sed magna ac, mattis vehicula elit. Donec ac lacus eget sapien luctus ultricies in in nibh.`}),(0,p.jsx)(`p`,{children:`Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc, ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra semper arcu nec semper. Sed non magna purus. Integer accumsan dui et volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu, placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam non elit in sem vestibulum molestie tempor eget augue. Sed neque ligula, tempus ac mollis bibendum, ultrices suscipit risus. Duis suscipit pulvinar varius.`}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(o,{variant:`h3`,children:`The end`}),(0,p.jsx)(`br`,{})]})},name:`Example on page`},w={render:()=>(0,p.jsx)(m,{}),name:`Display on page load`},T={render:e=>{function t(){document.querySelector(`ic-toast-region`).openToast=document.getElementById(`toast1`)}return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`button`,{onClick:t,children:`Display toast`}),(0,p.jsx)(a,{children:(0,p.jsxs)(s,{id:`toast1`,heading:e.heading,message:e.message,variant:e.variant,dismissMode:e.dismissMode,autoDismissTimeout:e.autoDismissTimeout,neutralIconAriaLabel:e.neutralIconAriaLabel,dismissButtonAriaLabel:e.dismissButtonAriaLabel,children:[(0,p.jsx)(l,{slot:e.actionSlot,appearance:`light`,children:`Click me`}),(0,p.jsx)(`svg`,{slot:e.neutralIconSlot,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,p.jsx)(`path`,{d:`M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z`})})]})})]})},args:h,argTypes:{dismissMode:{options:[`manual`,`automatic`],control:{type:`inline-radio`}},variant:{options:[`neutral`,`info`,`warning`,`error`,`success`,`ai`,``],control:{type:`inline-radio`}},actionSlot:{options:[`action`,``],control:{type:`select`}},neutralIconSlot:{options:[`neutral-icon`,``],control:{type:`select`}}},name:`Playground`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    function func() {
      document.querySelector("ic-toast-region").openToast = document.getElementById("toast1");
    }
    return <>
        <button onClick={func}>Display toast</button>
        <IcToastRegion>
          <IcToast id="toast1" heading="Your coffee is ready" />
        </IcToastRegion>
      </>;
  },
  name: "Default"
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    function func() {
      document.querySelector("ic-toast-region").openToast = document.getElementById("toast1");
    }
    return <>
        <button onClick={func}>Display toast</button>
        <IcToastRegion>
          <IcToast id="toast1" heading="Your coffee is ready" message="Please dismiss and collect" variant="success" />
        </IcToastRegion>
      </>;
  },
  name: "With variant"
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    function func() {
      document.querySelector("ic-toast-region").openToast = document.getElementById("toast1");
    }
    return <>
        <button onClick={func}>Display toast</button>
        <IcToastRegion>
          <IcToast id="toast1" heading="Your coffee is ready" message="Please dismiss and come to collect your delicious coffee from the barista right away before it gets cold. Don't delay! We wouldn't want you to lose out on your fantastic coffee now would we?" />
        </IcToastRegion>
      </>;
  },
  name: "Multiline message"
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    function func() {
      document.querySelector("ic-toast-region").openToast = document.getElementById("toast1");
    }
    function func2() {
      document.querySelector("ic-toast-region").openToast = document.getElementById("toast2");
    }
    return <>
        <button onClick={func}>Display toast 1</button>
        <button onClick={func2}>Display toast 2</button>
        <IcToastRegion>
          <IcToast id="toast1" heading="Your coffee had issues" message="Please dismiss and try again" variant="warning">
            <IcButton slot="action" appearance="light">
              Click Me
            </IcButton>
          </IcToast>
          <IcToast id="toast2" heading="Your coffee was lost" message="Please dismiss and try again" variant="error">
            <IcLink slot="action" href="/" theme="dark">
              Click Me
            </IcLink>
          </IcToast>
        </IcToastRegion>
      </>;
  },
  name: "Slotted action elements"
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    function func() {
      document.querySelector("ic-toast-region").openToast = document.getElementById("toast1");
    }
    return <>
        <button onClick={func}>Display toast</button>
        <IcToastRegion>
          <IcToast id="toast1" heading="Your coffee is ready" message="This alert will dismiss itself, please collect your java" variant="info" dismissMode="automatic" autoDismissTimeout={10000} />
        </IcToastRegion>
      </>;
  },
  name: "Auto dismiss"
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    function func() {
      document.querySelector("ic-toast-region").openToast = document.getElementById("toast1");
    }
    return <>
        <button onClick={func}>Display toast</button>
        <IcToastRegion>
          <IcToast id="toast1" heading="Your coffee is ready" message="Please dismiss and collect" variant="neutral" neutralIconAltText="Hello world">
            <svg slot="neutral-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z" />
            </svg>
          </IcToast>
        </IcToastRegion>
      </>;
  },
  name: "Custom neutral icon"
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    function func() {
      document.querySelector("ic-toast-region").openToast = document.getElementById("toast1");
    }
    return <>
        <IcToastRegion>
          <IcToast id="toast1" heading="Your coffee is ready" />
        </IcToastRegion>
        <div id="header" style={{
        width: "100%",
        height: "80px",
        backgroundColor: "#23508e",
        color: "var(--ic-architectural-white)"
      }}>
          <IcTypography variant="h1">Header</IcTypography>
        </div>
        <div id="topPageEl">
          <IcTypography variant="h2">Top of the page</IcTypography>
        </div>
        <IcTypography variant="h3">Some content</IcTypography>
        <button onClick={func}>Display toast</button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit
          turpis. Cras ac ligula et lectus mollis molestie in a enim. In ac
          turpis in leo rutrum eleifend. Fusce consectetur posuere ligula, vitae
          semper lorem mollis vitae. Fusce vel blandit turpis. Nulla justo
          ligula, egestas quis rutrum id, vulputate eget diam. Integer mattis
          quis nisi id blandit. Duis nisi lectus, suscipit elementum iaculis
          sed, porta et risus.
        </p>
        <br />
        <br />
        <br />
        <IcTypography variant="h3">More content</IcTypography>
        <p>
          Phasellus accumsan ligula enim, a iaculis sapien rhoncus vitae.
          Curabitur pulvinar posuere diam in luctus. Sed blandit diam id odio
          aliquam aliquet. Pellentesque eros enim, tristique vel mattis eu,
          blandit at enim. Pellentesque sollicitudin pellentesque tellus vel
          eleifend. Nulla mauris lorem, porttitor vel orci eu, iaculis maximus
          nunc. Ut rhoncus ex ipsum. Mauris ultricies, augue sed eleifend
          pellentesque, leo purus efficitur orci, sit amet volutpat tortor diam
          non lorem. Morbi venenatis neque vel accumsan sagittis. Nunc rutrum
          augue non urna tincidunt auctor in at libero. Sed in risus sit amet
          nisl tempor viverra. Phasellus maximus sapien eu erat maximus iaculis.
          Praesent ultricies id orci eu euismod. Fusce eu urna turpis. Praesent
          ut neque tincidunt, porta sem id, accumsan massa.
        </p>
        <br />
        <br />
        <br />
        <IcTypography variant="h3">Some other content</IcTypography>
        <p>
          Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas
          massa enim, tincidunt consequat maximus at, fermentum vel lectus.
          Curabitur at ligula tellus. Ut a elit sit amet augue sagittis feugiat.
          Mauris mi enim, viverra id turpis ac, auctor vulputate ipsum. Nunc
          efficitur volutpat augue eget sollicitudin. Pellentesque eget pharetra
          ligula. Integer finibus feugiat sapien a pulvinar. Phasellus fermentum
          est lacus, quis volutpat justo pellentesque vitae. Sed vitae diam
          porta, facilisis metus ut, dictum lorem. Proin sed bibendum libero.
          Maecenas justo neque, ultricies sed magna ac, mattis vehicula elit.
          Donec ac lacus eget sapien luctus ultricies in in nibh.
        </p>
        <p>
          Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada
          vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc,
          ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra
          semper arcu nec semper. Sed non magna purus. Integer accumsan dui et
          volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu,
          placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse
          semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam
          non elit in sem vestibulum molestie tempor eget augue. Sed neque
          ligula, tempus ac mollis bibendum, ultrices suscipit risus. Duis
          suscipit pulvinar varius.
        </p>
        <br />
        <br />
        <br />
        <IcTypography variant="h3">Some more</IcTypography>
        <p>
          Etiam accumsan nibh erat, condimentum tempus metus suscipit nec. Duis
          placerat varius dolor eget ornare. Vestibulum egestas tellus non
          tellus ornare, eu scelerisque erat pulvinar. Nam tempus lacus eu
          libero consequat, in elementum magna ultricies. Etiam at suscipit
          odio. Duis quis quam vitae quam varius luctus. Aliquam erat volutpat.
          Fusce laoreet consectetur tortor, ac suscipit sem feugiat non. Etiam
          tempus tellus aliquet orci pretium, nec pretium nulla faucibus
        </p>
        <br />
        <br />
        <br />
        <IcTypography variant="h3">Nearly there</IcTypography>
        <p>
          Curabitur eu tempor justo. Nunc congue viverra tristique. Maecenas
          massa enim, tincidunt consequat maximus at, fermentum vel lectus.
          Curabitur at ligula tellus. Ut a elit sit amet augue sagittis feugiat.
          Mauris mi enim, viverra id turpis ac, auctor vulputate ipsum. Nunc
          efficitur volutpat augue eget sollicitudin. Pellentesque eget pharetra
          ligula. Integer finibus feugiat sapien a pulvinar. Phasellus fermentum
          est lacus, quis volutpat justo pellentesque vitae. Sed vitae diam
          porta, facilisis metus ut, dictum lorem. Proin sed bibendum libero.
          Maecenas justo neque, ultricies sed magna ac, mattis vehicula elit.
          Donec ac lacus eget sapien luctus ultricies in in nibh.
        </p>
        <p>
          Curabitur in nulla urna. Donec ligula est, suscipit eget malesuada
          vitae, elementum et quam. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla eu dui a quam mollis porta. Nulla ante nunc,
          ultrices luctus dolor at, ullamcorper convallis erat. Aenean viverra
          semper arcu nec semper. Sed non magna purus. Integer accumsan dui et
          volutpat auctor. Phasellus nec risus ultricies, maximus nunc eu,
          placerat diam. Etiam pulvinar lacinia urna eget molestie. Suspendisse
          semper hendrerit ipsum, vel porttitor lacus venenatis sit amet. Nullam
          non elit in sem vestibulum molestie tempor eget augue. Sed neque
          ligula, tempus ac mollis bibendum, ultrices suscipit risus. Duis
          suscipit pulvinar varius.
        </p>
        <br />
        <br />
        <br />
        <IcTypography variant="h3">The end</IcTypography>
        <br />
      </>;
  },
  name: "Example on page"
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <AutoLoadToast />,
  name: "Display on page load"
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    function func() {
      document.querySelector("ic-toast-region").openToast = document.getElementById("toast1");
    }
    return <>
        <button onClick={func}>Display toast</button>
        <IcToastRegion>
          <IcToast id="toast1" heading={args.heading} message={args.message} variant={args.variant} dismissMode={args.dismissMode} autoDismissTimeout={args.autoDismissTimeout} neutralIconAriaLabel={args.neutralIconAriaLabel} dismissButtonAriaLabel={args.dismissButtonAriaLabel}>
            <IcButton slot={args.actionSlot} appearance="light">
              Click me
            </IcButton>
            <svg slot={args.neutralIconSlot} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.70501L19.385 5.29501L8.79502 15.875Z" />
            </svg>
          </IcToast>
        </IcToastRegion>
      </>;
  },
  args: defaultArgs,
  argTypes: {
    dismissMode: {
      options: ["manual", "automatic"],
      control: {
        type: "inline-radio"
      }
    },
    variant: {
      options: ["neutral", "info", "warning", "error", "success", "ai", ""],
      control: {
        type: "inline-radio"
      }
    },
    actionSlot: {
      options: ["action", ""],
      control: {
        type: "select"
      }
    },
    neutralIconSlot: {
      options: ["neutral-icon", ""],
      control: {
        type: "select"
      }
    }
  },
  name: "Playground"
}`,...T.parameters?.docs?.source}}},E=[`Default`,`WithVariant`,`MultilineMessage`,`SlottedActionElements`,`AutoDismiss`,`CustomNeutralIcon`,`ExampleOnPage`,`DisplayOnPageLoad`,`Playground`]}));D();export{x as AutoDismiss,S as CustomNeutralIcon,_ as Default,w as DisplayOnPageLoad,C as ExampleOnPage,y as MultilineMessage,T as Playground,b as SlottedActionElements,v as WithVariant,E as __namedExportsOrder,g as default,D as n,d as t};