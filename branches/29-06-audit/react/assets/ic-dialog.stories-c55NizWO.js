import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{$ as r,A as i,B as a,O as ee,Q as o,R as s,U as c,V as l,X as te,Z as u,a as ne,et as d,h as f,in as re,j as p,lt as m,m as h,n as ie,p as g,st as _,t as ae,tt as v,u as y,ut as oe,y as b,z as se}from"./iframe-xO3e-qV4.js";import{t as x}from"./slottedSVG-Bc4P89sr.js";import{t as ce}from"./src-Dj50v36b.js";var le=e({AutoOpening:()=>X,BackgroundClosePrevented:()=>G,HiddenCloseButton:()=>Y,Playground:()=>Z,Popover:()=>q,Scrollable:()=>K,ShowHideInteractiveElements:()=>J,Sizes:()=>H,SlottedContent:()=>U,SlottedTabs:()=>W,__namedExportsOrder:()=>Q,default:()=>V}),S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{S=n(re()),ce(),oe(),C=ae(),w=[{label:`Cappuccino`,value:`Cap`},{label:`Latte`,value:`Lat`},{label:`Americano`,value:`Ame`}],T=()=>{let e=document.querySelector(`#small-dialog`);e.open=!0},E=()=>{let e=document.querySelector(`#medium-dialog`);e.open=!0},D=()=>{let e=document.querySelector(`#large-dialog`);e.open=!0},O=()=>{let e=document.querySelector(`ic-dialog`);e.open=!0},k=()=>{let e=document.querySelector(`ic-dialog`);e.open=!0},A=()=>{let e=document.querySelector(`ic-dialog`);e.open=!0},j=()=>{let e=document.querySelector(`#select-dialog`);e.open=!0},M=()=>{let e=document.querySelector(`#search-bar-dialog`);e.open=!0},N=()=>{let e=document.querySelector(`#tooltip-dialog`);e.open=!0},P=()=>{let e=document.querySelector(`#long-text-select-dialog`);e.open=!0},F=()=>Array.from(Array(10).keys()).map(e=>({label:`Item `+e,value:`item-`+e})),I=()=>{let e=document.querySelector(`#show-hide-content-dialog`);e.open=!0},L=()=>{let[e,t]=(0,S.useState)(!1),[n,r]=(0,S.useState)(!1),i=e=>{setTimeout(()=>{t(e)},2e3),r(e)};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(m,{children:[`Demonstrates changes to slotted elements happening after first load.`,(0,C.jsx)(`br`,{}),`The button which is a child of an already rendered slotted`,` `,(0,C.jsx)(`code`,{children:`<div>`}),` will show / hide after a 2s delay.`]}),(0,C.jsx)(`br`,{}),(0,C.jsx)(y,{onClick:()=>i(!0),children:`Show`}),(0,C.jsx)(y,{onClick:()=>i(!1),children:`Hide`}),(0,C.jsx)(`div`,{children:e&&(0,C.jsx)(y,{children:`Child of slotted element`})}),n&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(y,{children:`Slotted element`}),(0,C.jsx)(m,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})]})]})},R=()=>{let e=document.querySelector(`#hidden-close-button-dialog`);e.open=!0},z=()=>{let e=document.querySelector(`#auto-opening-dialog`);e.open=!0},B={closeOnBackdropClick:!0,destructive:!1,dismissLabel:`Dismiss`,disableHeightConstraint:!1,disableWidthConstraint:!1,hideCloseButton:!1,hideDefaultControls:!1,heading:`This is a dialog`,label:`Dialog`,open:!0,size:`medium`,theme:`inherit`},V={title:`Dialog`,component:b},H={render:()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(y,{variant:`primary`,onclick:T,children:`Launch small dialog`}),(0,C.jsx)(y,{variant:`primary`,onclick:E,children:`Launch medium dialog`}),(0,C.jsx)(y,{variant:`primary`,onclick:D,children:`Launch large dialog`}),(0,C.jsx)(b,{heading:`This is a small dialog`,label:`Small`,id:`small-dialog`,children:(0,C.jsx)(m,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})}),(0,C.jsx)(b,{heading:`This is a medium dialog`,label:`Medium`,size:`medium`,id:`medium-dialog`,children:(0,C.jsx)(m,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})}),(0,C.jsx)(b,{heading:`This is a large dialog`,label:`Large`,size:`large`,id:`large-dialog`,children:(0,C.jsx)(m,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})})]}),name:`Sizes`},U={render:()=>{let[e,t]=(0,S.useState)(!1);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(y,{variant:`primary`,onclick:O,children:`Launch dialog`}),(0,C.jsx)(b,{disableWidthConstraint:!0,size:`large`,children:(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.75rem`},children:[(0,C.jsx)(m,{slot:`heading`,variant:`h4`,children:`This is a slotted heading`}),(0,C.jsx)(m,{slot:`label`,variant:`label`,children:`Slotted label`}),(0,C.jsxs)(ne,{variant:`info`,heading:`Info`,message:`This alert is for displaying information`,slot:`alert`,children:[(0,C.jsxs)(m,{slot:`message`,children:[`This is some text and `,(0,C.jsx)(ee,{href:`/`,inline:!0,children:`this is an inline link`}),` within the text.`]}),(0,C.jsx)(y,{slot:`action`,variant:`secondary`,children:`Button`})]}),(0,C.jsx)(m,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}),(0,C.jsx)(_,{label:`This is a description of the button`,target:`test-button`,children:(0,C.jsx)(y,{id:`test-button`,children:`Button with tooltip`})}),(0,C.jsx)(y,{variant:`icon-primary`,"aria-label":`This is a description of the button`,children:(0,C.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,C.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,C.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})}),(0,C.jsxs)(ie,{heading:`This is an accordion`,children:[(0,C.jsx)(g,{label:`Confirm`,value:`confirm`,additionalFieldDisplay:`static`,children:(0,C.jsx)(v,{slot:`additional-field`,placeholder:`Placeholder`,label:`What's your favourite type of coffee?`})}),(0,C.jsxs)(se,{label:`This is a label`,name:`1`,children:[(0,C.jsx)(a,{value:`valueName1`,label:`Unselected / Default`,additionalFieldDisplay:`dynamic`,children:(0,C.jsx)(v,{slot:`additional-field`,placeholder:`Placeholder`,label:`What's your favourite type of coffee?`})}),(0,C.jsx)(a,{value:`valueName2`,label:`Selected / Default`,additionalFieldDisplay:`static`,selected:!0,children:(0,C.jsx)(v,{slot:`additional-field`,placeholder:`Placeholder`,label:`What's your favourite type of coffee?`})}),(0,C.jsx)(a,{value:`valueName3`,label:`Unselected / Disabled`,disabled:!0})]})]}),(0,C.jsx)(l,{label:`What is your favourite coffee?`}),(0,C.jsx)(v,{label:`What is your favourite coffee?`}),(0,C.jsx)(c,{label:`What is your favourite coffee?`,options:w}),(0,C.jsx)(y,{id:`button-1`,onclick:()=>t(!0),children:`Show popover`}),(0,C.jsxs)(`div`,{children:[(0,C.jsxs)(s,{anchor:`button-1`,"aria-label":`popover`,open:e,onIcPopoverClosed:()=>t(!1),children:[(0,C.jsx)(p,{label:`Copy code`,disabled:`true`}),(0,C.jsx)(i,{label:`View`,children:(0,C.jsx)(p,{label:`Zoom in`,"keyboard-shortcut-label":`Cmd+`})}),(0,C.jsx)(p,{label:`Actions`,"submenu-trigger-for":`abc`})]}),(0,C.jsx)(s,{"submenu-id":`abc`,children:(0,C.jsx)(p,{label:`Find`,"submenu-trigger-for":`abc123`})}),(0,C.jsxs)(s,{"submenu-id":`abc123`,children:[(0,C.jsx)(p,{disabled:`true`,label:`Search the web`,description:`This will search the web to find the thing you are looking for.`}),(0,C.jsx)(p,{label:`Find icons`,children:(0,C.jsxs)(`svg`,{slot:`icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,children:[(0,C.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,C.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})})]})]}),(0,C.jsxs)(h,{hideLabel:!0,label:`confirm`,name:`confirm-checkbox`,children:[(0,C.jsx)(g,{label:`Confirm`,value:`confirm`,additionalFieldDisplay:`static`,children:(0,C.jsx)(v,{slot:`additional-field`,placeholder:`Placeholder`,label:`What's your favourite type of coffee?`})}),(0,C.jsx)(g,{additionalFieldDisplay:`dynamic`,value:`disagree`,label:`Disagree`,children:(0,C.jsx)(v,{slot:`additional-field`,placeholder:`Placeholder`,label:`What's your favourite type of coffee?`})}),(0,C.jsx)(g,{label:`Disabled`,value:`disabled`,disabled:!0})]}),(0,C.jsx)(f,{label:`Default`,dismissible:`true`,children:(0,C.jsx)(x,{slot:`icon`,width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`currentColor`,xmlns:`http://www.w3.org/2000/svg`,children:(0,C.jsx)(`path`,{d:`M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z`})})}),(0,C.jsx)(te,{label:`Switch label`})]})})]})},name:`Slotted content`},W={render:()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(y,{variant:`primary`,onclick:O,children:`Launch dialog`}),(0,C.jsx)(b,{disableWidthConstraint:!0,size:`large`,children:(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.75rem`},children:[(0,C.jsx)(m,{slot:`heading`,variant:`h4`,children:`This is a slotted heading`}),(0,C.jsx)(m,{slot:`label`,variant:`label`,children:`Slotted label`}),(0,C.jsxs)(o,{onIcTabSelect:e=>console.log({tabIndex:e.detail.tabIndex,tabLabel:e.detail.tabLabel}),children:[(0,C.jsxs)(r,{label:`Example tab group`,children:[(0,C.jsx)(u,{children:`Ingredients`}),(0,C.jsx)(u,{children:`Method`}),(0,C.jsx)(u,{children:`History`})]}),(0,C.jsx)(d,{children:`Tab One - Ingredients`}),(0,C.jsx)(d,{children:`Tab Two - Method`}),(0,C.jsx)(d,{children:`Tab Three - History`})]})]})})]}),name:`Slotted tabs`},G={render:()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(y,{variant:`primary`,onclick:k,children:`Launch close prevented dialog`}),(0,C.jsx)(b,{heading:`This dialog can't be closed by clicking the background`,label:`Background close prevented`,closeOnBackdropClick:`false`,children:(0,C.jsx)(m,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})})]}),name:`Background close prevented`},K={render:()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(y,{variant:`primary`,onclick:A,children:`Launch scrollable dialog`}),(0,C.jsxs)(b,{heading:`This dialog has overflowing content`,label:`Scrollable`,children:[(0,C.jsxs)(m,{children:[`What is Lorem Ipsum?`,(0,C.jsx)(`br`,{}),(0,C.jsx)(`br`,{}),`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,(0,C.jsx)(`br`,{}),(0,C.jsx)(`br`,{})]}),(0,C.jsx)(c,{label:`What is your favourite coffee?`,options:w}),(0,C.jsxs)(m,{children:[(0,C.jsx)(`br`,{}),`Why do we use it?`,(0,C.jsx)(`br`,{}),(0,C.jsx)(`br`,{}),`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`]})]})]}),name:`Scrollable`},q={render:()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(y,{variant:`primary`,onclick:j,children:`Launch Select dialog`}),(0,C.jsx)(y,{variant:`primary`,onclick:M,children:`Launch Search dialog`}),(0,C.jsx)(y,{variant:`primary`,onclick:N,children:`Launch Tooltip dialog`}),(0,C.jsx)(y,{variant:`primary`,onclick:P,children:`Launch Long long text dialog`}),(0,C.jsxs)(b,{heading:`Select Dialog`,id:`select-dialog`,children:[(0,C.jsxs)(m,{children:[`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,(0,C.jsx)(`br`,{}),(0,C.jsx)(`br`,{}),`Why do we use it?`,(0,C.jsx)(`br`,{}),(0,C.jsx)(`br`,{}),`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`]}),(0,C.jsx)(c,{label:`What is your favourite coffee?`,options:F()})]}),(0,C.jsxs)(b,{heading:`Search`,id:`search-bar-dialog`,children:[(0,C.jsxs)(m,{children:[`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,(0,C.jsx)(`br`,{}),(0,C.jsx)(`br`,{}),`Why do we use it?`,(0,C.jsx)(`br`,{}),(0,C.jsx)(`br`,{}),`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`]}),(0,C.jsx)(l,{label:`What is your favourite coffee?`,options:F()})]}),(0,C.jsxs)(b,{heading:`Tooltip`,id:`tooltip-dialog`,children:[(0,C.jsxs)(m,{children:[`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,(0,C.jsx)(`br`,{}),(0,C.jsx)(`br`,{}),`Why do we use it?`,(0,C.jsx)(`br`,{}),(0,C.jsx)(`br`,{}),`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`]}),(0,C.jsx)(_,{label:`This is a description of the button`,target:`test-button-default`,children:(0,C.jsx)(`button`,{id:`test-button-default`,"aria-describedby":`ic-tooltip-test-button-default`,children:`Default`})}),(0,C.jsx)(y,{variant:`icon`,size:`small`,"aria-label":`refresh`,id:`testbutton`,children:(0,C.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,C.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,C.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})}),(0,C.jsx)(f,{label:`Small`,dismissible:`true`,size:`small`,children:(0,C.jsx)(x,{slot:`icon`,width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`currentColor`,xmlns:`http://www.w3.org/2000/svg`,children:(0,C.jsx)(`path`,{d:`M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z`})})})]}),(0,C.jsxs)(b,{heading:`Long Text Select`,id:`long-text-select-dialog`,children:[(0,C.jsxs)(m,{children:[`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,(0,C.jsx)(`br`,{}),(0,C.jsx)(`br`,{}),`Why do we use it?`,(0,C.jsx)(`br`,{}),(0,C.jsx)(`br`,{}),`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`]}),(0,C.jsxs)(m,{children:[`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,(0,C.jsx)(`br`,{}),(0,C.jsx)(`br`,{}),`Why do we use it?`,(0,C.jsx)(`br`,{}),(0,C.jsx)(`br`,{}),`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`]}),(0,C.jsxs)(m,{children:[`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,(0,C.jsx)(`br`,{}),(0,C.jsx)(`br`,{}),`Why do we use it?`,(0,C.jsx)(`br`,{}),(0,C.jsx)(`br`,{}),`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`]}),(0,C.jsx)(c,{label:`What is your favourite coffee?`,options:F()})]})]}),name:`Popover`},J={render:()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(y,{onClick:I,children:`Launch show / hide content dialog`}),(0,C.jsx)(b,{id:`show-hide-content-dialog`,heading:`This dialog allows showing and hiding of content`,children:(0,C.jsx)(L,{})})]}),name:`Show / hide interactive elements`},Y={render:()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(y,{variant:`primary`,onClick:R,children:`Launch dialog with hidden close button`}),(0,C.jsx)(b,{id:`hidden-close-button-dialog`,heading:`This dialog does not have a close button`,label:`Hidden Close Button Dialog`,hideCloseButton:!0,children:(0,C.jsx)(m,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})})]}),name:`Hidden close button`},X={render:()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(y,{variant:`primary`,onClick:z,children:`Launch auto opening dialog`}),(0,C.jsx)(b,{id:`auto-opening-dialog`,heading:`This dialog opens automatically using the open prop`,label:`Auto opening dialog`,open:!0,children:(0,C.jsx)(m,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})})]}),name:`Auto Opening`},Z={render:e=>(0,C.jsx)(b,{heading:e.heading,label:e.label,size:e.size,open:e.open,closeOnBackdropClick:e.closeOnBackdropClick,destructive:e.destructive,dismissLabel:e.dismissLabel,disableHeightConstraint:e.disableHeightConstraint,disableWidthConstraint:e.disableWidthConstraint,hideCloseButton:e.hideCloseButton,hideDefaultControls:e.hideDefaultControls,theme:e.theme,id:`medium-dialog`,children:(0,C.jsx)(m,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})}),args:B,argTypes:{size:{options:[`small`,`medium`,`large`],control:{type:`radio`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}},name:`Playground`},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcButton onClick={showShowHideContentDialog}>Launch show / hide content dialog</IcButton>
      <IcDialog id="show-hide-content-dialog" heading="This dialog allows showing and hiding of content">
        <ShowHideContent />
      </IcDialog>
    </>,
  name: "Show / hide interactive elements"
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Sizes`,`SlottedContent`,`SlottedTabs`,`BackgroundClosePrevented`,`Scrollable`,`Popover`,`ShowHideInteractiveElements`,`HiddenCloseButton`,`AutoOpening`,`Playground`]}));$();export{X as AutoOpening,G as BackgroundClosePrevented,Y as HiddenCloseButton,Z as Playground,q as Popover,K as Scrollable,J as ShowHideInteractiveElements,H as Sizes,U as SlottedContent,W as SlottedTabs,Q as __namedExportsOrder,V as default,$ as n,le as t};