import{j as i,R as e,f as o,a,c as I,e as B,d as M,s as P,r as S,n as F,o as V,I as q,F as f,E as n,G as O,H as k,g as E,h as l,i as H,J as G,K as j,t as Z,u as R,v as C,w as T}from"./iframe-D9vSpFJ1.js";import{S as W}from"./slottedSVG-DUU_CPD2.js";const z=[{label:"Cappuccino",value:"Cap"},{label:"Latte",value:"Lat"},{label:"Americano",value:"Ame"}],_=()=>{const t=document.querySelector("#small-dialog");t.open=!0},N=()=>{const t=document.querySelector("#medium-dialog");t.open=!0},U=()=>{const t=document.querySelector("#large-dialog");t.open=!0},A=()=>{const t=document.querySelector("ic-dialog");t.open=!0},J=()=>{const t=document.querySelector("ic-dialog");t.open=!0},K=()=>{const t=document.querySelector("ic-dialog");t.open=!0},Q=()=>{const t=document.querySelector("#select-dialog");t.open=!0},X=()=>{const t=document.querySelector("#search-bar-dialog");t.open=!0},Y=()=>{const t=document.querySelector("#tooltip-dialog");t.open=!0},$=()=>{const t=document.querySelector("#long-text-select-dialog");t.open=!0},L=()=>Array.from(Array(10).keys()).map(t=>({label:"Item "+t,value:"item-"+t})),ee=()=>{const t=document.querySelector("#show-hide-content-dialog");t.open=!0},te=()=>{const[t,y]=S.useState(!1),[v,w]=S.useState(!1),x=D=>{setTimeout(()=>{y(D)},2e3),w(D)};return e.createElement(e.Fragment,null,e.createElement(a,null,"Demonstrates changes to slotted elements happening after first load.",e.createElement("br",null),"The button which is a child of an already rendered slotted"," ",e.createElement("code",null,"<div>")," will show / hide after a 2s delay."),e.createElement("br",null),e.createElement(o,{onClick:()=>x(!0)},"Show"),e.createElement(o,{onClick:()=>x(!1)},"Hide"),e.createElement("div",null,t&&e.createElement(o,null,"Child of slotted element")),v&&e.createElement(e.Fragment,null,e.createElement(o,null,"Slotted element"),e.createElement(a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))},ae=()=>{const t=document.querySelector("#hidden-close-button-dialog");t.open=!0},oe=()=>{const t=document.querySelector("#auto-opening-dialog");t.open=!0},ie={closeOnBackdropClick:!0,destructive:!1,dismissLabel:"Dismiss",disableHeightConstraint:!1,disableWidthConstraint:!1,hideCloseButton:!1,hideDefaultControls:!1,heading:"This is a dialog",label:"Dialog",open:!0,size:"medium",theme:"inherit"},ne={title:"Dialog",component:i},s={render:()=>e.createElement(e.Fragment,null,e.createElement(o,{variant:"primary",onclick:_},"Launch small dialog"),e.createElement(o,{variant:"primary",onclick:N},"Launch medium dialog"),e.createElement(o,{variant:"primary",onclick:U},"Launch large dialog"),e.createElement(i,{heading:"This is a small dialog",label:"Small",id:"small-dialog"},e.createElement(a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),e.createElement(i,{heading:"This is a medium dialog",label:"Medium",size:"medium",id:"medium-dialog"},e.createElement(a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),e.createElement(i,{heading:"This is a large dialog",label:"Large",size:"large",id:"large-dialog"},e.createElement(a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),name:"Sizes"},r={render:()=>{const[t,y]=S.useState(!1),v=()=>y(!0),w=()=>y(!1);return e.createElement(e.Fragment,null,e.createElement(o,{variant:"primary",onclick:A},"Launch dialog"),e.createElement(i,{disableWidthConstraint:!0,size:"large"},e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"}},e.createElement(a,{slot:"heading",variant:"h4"},"This is a slotted heading"),e.createElement(a,{slot:"label",variant:"label"},"Slotted label"),e.createElement(F,{variant:"info",heading:"Info",message:"This alert is for displaying information",slot:"alert"},e.createElement(a,{slot:"message"},"This is some text and ",e.createElement(V,{href:"/",inline:!0},"this is an inline link")," within the text."),e.createElement(o,{slot:"action",variant:"secondary"},"Button")),e.createElement(a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),e.createElement(M,{label:"This is a description of the button",target:"test-button"},e.createElement(o,{id:"test-button"},"Button with tooltip")),e.createElement(o,{variant:"icon-primary","aria-label":"This is a description of the button"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.createElement("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}))),e.createElement(q,{heading:"This is an accordion"},e.createElement(f,{label:"Confirm",value:"confirm",additionalFieldDisplay:"static"},e.createElement(n,{slot:"additional-field",placeholder:"Placeholder",label:"What's your favourite type of coffee?"})),e.createElement(O,{label:"This is a label",name:"1"},e.createElement(k,{value:"valueName1",label:"Unselected / Default",additionalFieldDisplay:"dynamic"},e.createElement(n,{slot:"additional-field",placeholder:"Placeholder",label:"What's your favourite type of coffee?"})),e.createElement(k,{value:"valueName2",label:"Selected / Default",additionalFieldDisplay:"static",selected:!0},e.createElement(n,{slot:"additional-field",placeholder:"Placeholder",label:"What's your favourite type of coffee?"})),e.createElement(k,{value:"valueName3",label:"Unselected / Disabled",disabled:!0}))),e.createElement(B,{label:"What is your favourite coffee?"}),e.createElement(n,{label:"What is your favourite coffee?"}),e.createElement(I,{label:"What is your favourite coffee?",options:z}),e.createElement(o,{id:"button-1",onclick:v},"Show popover"),e.createElement("div",null,e.createElement(E,{anchor:"button-1","aria-label":"popover",open:t,onIcPopoverClosed:w},e.createElement(l,{label:"Copy code",disabled:"true"}),e.createElement(H,{label:"View"},e.createElement(l,{label:"Zoom in","keyboard-shortcut-label":"Cmd+"})),e.createElement(l,{label:"Actions","submenu-trigger-for":"abc"})),e.createElement(E,{"submenu-id":"abc"},e.createElement(l,{label:"Find","submenu-trigger-for":"abc123"})),e.createElement(E,{"submenu-id":"abc123"},e.createElement(l,{disabled:"true",label:"Search the web",description:"This will search the web to find the thing you are looking for."}),e.createElement(l,{label:"Find icons"},e.createElement("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},e.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.createElement("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}))))),e.createElement(G,{hideLabel:!0,label:"confirm",name:"confirm-checkbox"},e.createElement(f,{label:"Confirm",value:"confirm",additionalFieldDisplay:"static"},e.createElement(n,{slot:"additional-field",placeholder:"Placeholder",label:"What's your favourite type of coffee?"})),e.createElement(f,{additionalFieldDisplay:"dynamic",value:"disagree",label:"Disagree"},e.createElement(n,{slot:"additional-field",placeholder:"Placeholder",label:"What's your favourite type of coffee?"})),e.createElement(f,{label:"Disabled",value:"disabled",disabled:!0})),e.createElement(P,{label:"Default",dismissible:"true"},e.createElement(W,{slot:"icon",width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"}))),e.createElement(j,{label:"Switch label"}))))},name:"Slotted content"},c={render:()=>e.createElement(e.Fragment,null,e.createElement(o,{variant:"primary",onclick:A},"Launch dialog"),e.createElement(i,{disableWidthConstraint:!0,size:"large"},e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"}},e.createElement(a,{slot:"heading",variant:"h4"},"This is a slotted heading"),e.createElement(a,{slot:"label",variant:"label"},"Slotted label"),e.createElement(Z,{onIcTabSelect:t=>console.log({tabIndex:t.detail.tabIndex,tabLabel:t.detail.tabLabel})},e.createElement(R,{label:"Example tab group"},e.createElement(C,null,"Ingredients"),e.createElement(C,null,"Method"),e.createElement(C,null,"History")),e.createElement(T,null,"Tab One - Ingredients"),e.createElement(T,null,"Tab Two - Method"),e.createElement(T,null,"Tab Three - History"))))),name:"Slotted tabs"},d={render:()=>e.createElement(e.Fragment,null,e.createElement(o,{variant:"primary",onclick:J},"Launch close prevented dialog"),e.createElement(i,{heading:"This dialog can't be closed by clicking the background",label:"Background close prevented",closeOnBackdropClick:"false"},e.createElement(a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),name:"Background close prevented"},u={render:()=>e.createElement(e.Fragment,null,e.createElement(o,{variant:"primary",onclick:K},"Launch scrollable dialog"),e.createElement(i,{heading:"This dialog has overflowing content",label:"Scrollable"},e.createElement(a,null,"What is Lorem Ipsum?",e.createElement("br",null),e.createElement("br",null),"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",e.createElement("br",null),e.createElement("br",null)),e.createElement(I,{label:"What is your favourite coffee?",options:z}),e.createElement(a,null,e.createElement("br",null),"Why do we use it?",e.createElement("br",null),e.createElement("br",null),"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."))),name:"Scrollable"},m={render:()=>e.createElement(e.Fragment,null,e.createElement(o,{variant:"primary",onclick:Q},"Launch Select dialog"),e.createElement(o,{variant:"primary",onclick:X},"Launch Search dialog"),e.createElement(o,{variant:"primary",onclick:Y},"Launch Tooltip dialog"),e.createElement(o,{variant:"primary",onclick:$},"Launch Long long text dialog"),e.createElement(i,{heading:"Select Dialog",id:"select-dialog"},e.createElement(a,null,"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",e.createElement("br",null),e.createElement("br",null),"Why do we use it?",e.createElement("br",null),e.createElement("br",null),"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."),e.createElement(I,{label:"What is your favourite coffee?",options:L()})),e.createElement(i,{heading:"Search",id:"search-bar-dialog"},e.createElement(a,null,"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",e.createElement("br",null),e.createElement("br",null),"Why do we use it?",e.createElement("br",null),e.createElement("br",null),"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."),e.createElement(B,{label:"What is your favourite coffee?",options:L()})),e.createElement(i,{heading:"Tooltip",id:"tooltip-dialog"},e.createElement(a,null,"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",e.createElement("br",null),e.createElement("br",null),"Why do we use it?",e.createElement("br",null),e.createElement("br",null),"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."),e.createElement(M,{label:"This is a description of the button",target:"test-button-default"},e.createElement("button",{id:"test-button-default","aria-describedby":"ic-tooltip-test-button-default"},"Default")),e.createElement(o,{variant:"icon",size:"small","aria-label":"refresh",id:"testbutton"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.createElement("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}))),e.createElement(P,{label:"Small",dismissible:"true",size:"small"},e.createElement(W,{slot:"icon",width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"})))),e.createElement(i,{heading:"Long Text Select",id:"long-text-select-dialog"},e.createElement(a,null,"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",e.createElement("br",null),e.createElement("br",null),"Why do we use it?",e.createElement("br",null),e.createElement("br",null),"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."),e.createElement(a,null,"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",e.createElement("br",null),e.createElement("br",null),"Why do we use it?",e.createElement("br",null),e.createElement("br",null),"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."),e.createElement(a,null,"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",e.createElement("br",null),e.createElement("br",null),"Why do we use it?",e.createElement("br",null),e.createElement("br",null),"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."),e.createElement(I,{label:"What is your favourite coffee?",options:L()}))),name:"Popover"},h={render:()=>e.createElement(e.Fragment,null,e.createElement(o,{onClick:ee},"Launch show / hide content dialog"),e.createElement(i,{id:"show-hide-content-dialog",heading:"This dialog allows showing and hiding of content"},e.createElement(te,null))),name:"Show / hide interactive elements"},p={render:()=>e.createElement(e.Fragment,null,e.createElement(o,{variant:"primary",onClick:ae},"Launch dialog with hidden close button"),e.createElement(i,{id:"hidden-close-button-dialog",heading:"This dialog does not have a close button",label:"Hidden Close Button Dialog",hideCloseButton:!0},e.createElement(a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),name:"Hidden close button"},g={render:()=>e.createElement(e.Fragment,null,e.createElement(o,{variant:"primary",onClick:oe},"Launch auto opening dialog"),e.createElement(i,{id:"auto-opening-dialog",heading:"This dialog opens automatically using the open prop",label:"Auto opening dialog",open:!0},e.createElement(a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),name:"Auto Opening"},b={render:t=>e.createElement(i,{heading:t.heading,label:t.label,size:t.size,open:t.open,closeOnBackdropClick:t.closeOnBackdropClick,destructive:t.destructive,dismissLabel:t.dismissLabel,disableHeightConstraint:t.disableHeightConstraint,disableWidthConstraint:t.disableWidthConstraint,hideCloseButton:t.hideCloseButton,hideDefaultControls:t.hideDefaultControls,theme:t.theme,id:"medium-dialog"},e.createElement(a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),args:ie,argTypes:{size:{options:["small","medium","large"],control:{type:"radio"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcButton variant="primary" onclick={showSmallDialog}>
      Launch small dialog
    </IcButton>
    <IcButton variant="primary" onclick={showMediumDialog}>
      Launch medium dialog
    </IcButton>
    <IcButton variant="primary" onclick={showLargeDialog}>
      Launch large dialog
    </IcButton>
    <IcDialog heading="This is a small dialog" label="Small" id="small-dialog">
      <IcTypography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </IcTypography>
    </IcDialog>
    <IcDialog heading="This is a medium dialog" label="Medium" size="medium" id="medium-dialog">
      <IcTypography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </IcTypography>
    </IcDialog>
    <IcDialog heading="This is a large dialog" label="Large" size="large" id="large-dialog">
      <IcTypography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </IcTypography>
    </IcDialog>
    </>,
  name: "Sizes"
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const showPopover = () => setPopoverOpen(true);
    const handlePopoverClosed = () => setPopoverOpen(false);
    return <>
      <IcButton variant="primary" onclick={showDialog}>
        Launch dialog
      </IcButton>
      <IcDialog disableWidthConstraint size="large">
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem"
        }}>
          <IcTypography slot="heading" variant="h4">
            This is a slotted heading
          </IcTypography>
          <IcTypography slot="label" variant="label">
            Slotted label
          </IcTypography>
          <IcAlert variant="info" heading="Info" message="This alert is for displaying information" slot="alert">
            <IcTypography slot="message">
              This is some text and <IcLink href="/" inline>this is an inline link</IcLink> within the text.
            </IcTypography>
            <IcButton slot="action" variant="secondary">Button</IcButton>
          </IcAlert>
          <IcTypography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </IcTypography>
          <IcTooltip label="This is a description of the button" target="test-button">
              <IcButton id="test-button">
                Button with tooltip
              </IcButton>
            </IcTooltip>
            <IcButton variant="icon-primary" aria-label="This is a description of the button">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
              </svg>
            </IcButton>
           <IcAccordion heading="This is an accordion">
            <IcCheckbox label="Confirm" value="confirm" additionalFieldDisplay="static">
              <IcTextField slot="additional-field" placeholder="Placeholder" label="What's your favourite type of coffee?" />
            </IcCheckbox>
            <IcRadioGroup label="This is a label" name="1">
              <IcRadioOption value="valueName1" label="Unselected / Default" additionalFieldDisplay="dynamic">
                <IcTextField slot="additional-field" placeholder="Placeholder" label="What's your favourite type of coffee?">
                </IcTextField>
              </IcRadioOption>
              <IcRadioOption value="valueName2" label="Selected / Default" additionalFieldDisplay="static" selected>
              <IcTextField slot="additional-field" placeholder="Placeholder" label="What's your favourite type of coffee?">
              </IcTextField>
            </IcRadioOption>
            <IcRadioOption value="valueName3" label="Unselected / Disabled" disabled></IcRadioOption>
          </IcRadioGroup>
          </IcAccordion>
          <IcSearchBar label="What is your favourite coffee?"></IcSearchBar>
          <IcTextField label="What is your favourite coffee?" />
          <IcSelect label="What is your favourite coffee?" options={options} />
          <IcButton id="button-1" onclick={showPopover}>Show popover</IcButton>
          <div>
            <IcPopoverMenu anchor="button-1" aria-label="popover" open={popoverOpen} onIcPopoverClosed={handlePopoverClosed}>
              <IcMenuItem label="Copy code" disabled="true"></IcMenuItem>
              <IcMenuGroup label="View">
                <IcMenuItem label="Zoom in" keyboard-shortcut-label="Cmd+"></IcMenuItem>
              </IcMenuGroup>
              <IcMenuItem label="Actions" submenu-trigger-for="abc"></IcMenuItem>
            </IcPopoverMenu>
            <IcPopoverMenu submenu-id="abc">
              <IcMenuItem label="Find" submenu-trigger-for="abc123"></IcMenuItem>
            </IcPopoverMenu>
            <IcPopoverMenu submenu-id="abc123">
              <IcMenuItem disabled="true" label="Search the web" description="This will search the web to find the thing you are looking for."></IcMenuItem>
              <IcMenuItem label="Find icons">
                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
                </svg>
              </IcMenuItem>
            </IcPopoverMenu>
          </div>
          <IcCheckboxGroup hideLabel label="confirm" name="confirm-checkbox">
            <IcCheckbox label="Confirm" value="confirm" additionalFieldDisplay="static">
              <IcTextField slot="additional-field" placeholder="Placeholder" label="What's your favourite type of coffee?" />
            </IcCheckbox>
            <IcCheckbox additionalFieldDisplay="dynamic" value="disagree" label="Disagree">
              <IcTextField slot="additional-field" placeholder="Placeholder" label="What's your favourite type of coffee?" />
            </IcCheckbox>
            <IcCheckbox label="Disabled" value="disabled" disabled></IcCheckbox>
          </IcCheckboxGroup>
          <IcChip label="Default" dismissible="true">
            <SlottedSVG slot="icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" />
            </SlottedSVG>
          </IcChip>
          <IcSwitch label="Switch label"></IcSwitch>
        </div>
      </IcDialog>
    </>;
  },
  name: "Slotted content"
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
      <IcButton variant="primary" onclick={showDialog}>
        Launch dialog
      </IcButton>
      <IcDialog disableWidthConstraint size="large">
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem"
        }}>
          <IcTypography slot="heading" variant="h4">
            This is a slotted heading
          </IcTypography>
          <IcTypography slot="label" variant="label">
            Slotted label
          </IcTypography>
           <IcTabContext onIcTabSelect={ev => console.log({
            tabIndex: ev.detail.tabIndex,
            tabLabel: ev.detail.tabLabel
          })}>
          <IcTabGroup label="Example tab group">
            <IcTab>Ingredients</IcTab>
            <IcTab>Method</IcTab>
            <IcTab>History</IcTab>
          </IcTabGroup>
          <IcTabPanel>Tab One - Ingredients</IcTabPanel>
          <IcTabPanel>Tab Two - Method</IcTabPanel>
          <IcTabPanel>Tab Three - History</IcTabPanel>
        </IcTabContext>
        </div>
      </IcDialog>
    </>;
  },
  name: "Slotted tabs"
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcButton variant="primary" onclick={showClosePreventedDialog}>
      Launch close prevented dialog
      </IcButton>
      <IcDialog heading="This dialog can't be closed by clicking the background" label="Background close prevented" closeOnBackdropClick="false">
        <IcTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </IcTypography>
      </IcDialog>
      </>,
  name: "Background close prevented"
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcButton variant="primary" onclick={showScrollableDialog}>
      Launch scrollable dialog
    </IcButton>
    <IcDialog heading="This dialog has overflowing content" label="Scrollable">
      <IcTypography>
        What is Lorem Ipsum?
        <br />
        <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing Lorem
        Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
        <br />
        <br />
      </IcTypography>
      <IcSelect label="What is your favourite coffee?" options={options} />
      <IcTypography>
        <br />
        Why do we use it?
        <br />
        <br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </IcTypography>
    </IcDialog>
    </>,
  name: "Scrollable"
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcButton variant="primary" onclick={showSelectDialog}>
      Launch Select dialog
    </IcButton>
    <IcButton variant="primary" onclick={showSearchBarDialog}>
      Launch Search dialog
    </IcButton>
    <IcButton variant="primary" onclick={showTooltipDialog}>
      Launch Tooltip dialog
    </IcButton>
    <IcButton variant="primary" onclick={showLongTextDialog}>
      Launch Long long text dialog
    </IcButton>
    <IcDialog heading="Select Dialog" id="select-dialog">
      <IcTypography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
        <br />
        <br />
        Why do we use it?
        <br />
        <br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </IcTypography>
      <IcSelect label="What is your favourite coffee?" options={dropdownItems()} />
    </IcDialog>
    <IcDialog heading="Search" id="search-bar-dialog">
      <IcTypography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
        <br />
        <br />
        Why do we use it?
        <br />
        <br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </IcTypography>
      <IcSearchBar label="What is your favourite coffee?" options={dropdownItems()} />
    </IcDialog>
    <IcDialog heading="Tooltip" id="tooltip-dialog">
      <IcTypography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
        <br />
        <br />
        Why do we use it?
        <br />
        <br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </IcTypography>
      <IcTooltip label="This is a description of the button" target="test-button-default">
        <button id="test-button-default" aria-describedby="ic-tooltip-test-button-default">
          Default
        </button>
      </IcTooltip>
      <IcButton variant="icon" size="small" aria-label="refresh" id="testbutton">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </svg>
      </IcButton>
      <IcChip label="Small" dismissible="true" size="small">
        <SlottedSVG slot="icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" />
        </SlottedSVG>
      </IcChip>
    </IcDialog>
    <IcDialog heading="Long Text Select" id="long-text-select-dialog">
      <IcTypography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
        <br />
        <br />
        Why do we use it?
        <br />
        <br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </IcTypography>
      <IcTypography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
        <br />
        <br />
        Why do we use it?
        <br />
        <br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </IcTypography>
      <IcTypography>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
        <br />
        <br />
        Why do we use it?
        <br />
        <br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </IcTypography>
      <IcSelect label="What is your favourite coffee?" options={dropdownItems()} />
    </IcDialog>
    </>,
  name: "Popover"
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcButton onClick={showShowHideContentDialog}>Launch show / hide content dialog</IcButton>
      <IcDialog id="show-hide-content-dialog" heading="This dialog allows showing and hiding of content">
        <ShowHideContent />
      </IcDialog>
    </>,
  name: "Show / hide interactive elements"
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcButton variant="primary" onClick={showHiddenCloseButtonDialog}>
      Launch dialog with hidden close button
    </IcButton>
    <IcDialog id="hidden-close-button-dialog" heading="This dialog does not have a close button" label="Hidden Close Button Dialog" hideCloseButton>
      <IcTypography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </IcTypography>
    </IcDialog>
    </>,
  name: "Hidden close button"
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcButton variant="primary" onClick={showAutoOpenCloseButtonDialog}>
      Launch auto opening dialog
    </IcButton>
    <IcDialog id="auto-opening-dialog" heading="This dialog opens automatically using the open prop" label="Auto opening dialog" open>
      <IcTypography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </IcTypography>
    </IcDialog>
    </>,
  name: "Auto Opening"
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <IcDialog heading={args.heading} label={args.label} size={args.size} open={args.open} closeOnBackdropClick={args.closeOnBackdropClick} destructive={args.destructive} dismissLabel={args.dismissLabel} disableHeightConstraint={args.disableHeightConstraint} disableWidthConstraint={args.disableWidthConstraint} hideCloseButton={args.hideCloseButton} hideDefaultControls={args.hideDefaultControls} theme={args.theme} id="medium-dialog">
      <IcTypography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </IcTypography>
    </IcDialog>,
  args: defaultArgs,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "radio"
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
}`,...b.parameters?.docs?.source}}};const le=["Sizes","SlottedContent","SlottedTabs","BackgroundClosePrevented","Scrollable","Popover","ShowHideInteractiveElements","HiddenCloseButton","AutoOpening","Playground"],ce=Object.freeze(Object.defineProperty({__proto__:null,AutoOpening:g,BackgroundClosePrevented:d,HiddenCloseButton:p,Playground:b,Popover:m,Scrollable:u,ShowHideInteractiveElements:h,Sizes:s,SlottedContent:r,SlottedTabs:c,__namedExportsOrder:le,default:ne},Symbol.toStringTag,{value:"Module"}));export{ce as I};
