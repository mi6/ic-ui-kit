import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{R as r,X as i,in as a,j as o,lt as s,s as c,st as l,t as u,u as d,ut as f}from"./iframe-CBY1Fz5o.js";import{n as p,t as m}from"./slottedSVG-fl0Wk3iV.js";import{r as h,t as g}from"./mdi-iOn3FSFp.js";var _,v=t((()=>{a(),_={iconDefault:{title:`Default`,size:`medium`,theme:`light`,loading:!1,disabled:!1,monochrome:!1},iconLarge:{title:`Large`,size:`large`,theme:`light`,loading:!1,disabled:!1,monochrome:!1},iconSmall:{title:`Small`,size:`small`,theme:`light`,loading:!1,disabled:!1,monochrome:!1},iconLoading:{title:`Default`,size:`medium`,theme:`light`,loading:!0,disabled:!1,monochrome:!1},iconLoadingSmall:{title:`Small`,size:`small`,theme:`light`,loading:!0,disabled:!1,monochrome:!1},iconLoadingLarge:{title:`Large`,size:`large`,theme:`light`,loading:!0,disabled:!1,monochrome:!1},iconDisabled:{title:`Disabled`,size:`medium`,theme:`light`,loading:!1,disabled:!0,monochrome:!1},iconDark:{title:`Dark`,size:`medium`,theme:`dark`,loading:!1,disabled:!1,monochrome:!0},iconDarkLoading:{title:`Dark`,size:`medium`,theme:`dark`,loading:!0,disabled:!1,monochrome:!1},iconDarkLoadingMonochrome:{title:`Dark`,size:`medium`,theme:`dark`,loading:!0,disabled:!1,monochrome:!0},iconLight:{title:`Light`,size:`medium`,theme:`light`,loading:!1,disabled:!1,monochrome:!0},iconLightLoadingMonochrome:{title:`Light`,size:`medium`,theme:`light`,loading:!0,disabled:!1,monochrome:!0}}})),y=e({AriaDescribedby:()=>U,Destructive:()=>j,Dropdown:()=>N,DropdownExample:()=>P,FileUpload_:()=>q,FullWidth:()=>z,IconOnly:()=>B,IconVariants:()=>V,Playground:()=>W,PlaygroundIconOnly:()=>K,PlaygroundWithIcon:()=>G,PositioningStrategy:()=>H,Primary:()=>O,Router:()=>I,RouterLinkWithSlottedContent:()=>L,Secondary:()=>k,Size:()=>F,Tertiary:()=>A,WithIcon:()=>M,WithMdiIcons:()=>R,__namedExportsOrder:()=>J,default:()=>D}),b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y=t((()=>{g(),b=n(a()),v(),f(),p(),x=u(),S={message:`Custom Button`,disabled:!1,loading:!1,theme:`inherit`,size:`medium`,variant:`secondary`,fullWidth:!1,monochrome:!1,dropdown:!1,transparentBackground:!0,iconPlacement:`left-icon`},C=()=>(0,x.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]}),w=()=>{let e=(0,b.useRef)(),t=(0,b.useRef)(),n=()=>{t.current.open=e.current.dropdownExpanded},i=()=>{e.current.dropdownExpanded=t.current.open};return(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{id:`popover-button`,dropdown:!0,variant:`primary`,onClick:()=>n(),ref:e,children:`Button`}),(0,x.jsxs)(r,{anchor:`popover-button`,ariaLabel:`popover`,onIcPopoverClosed:()=>i(),ref:t,children:[(0,x.jsx)(o,{label:`Copy code`}),(0,x.jsx)(o,{label:`Paste code`}),(0,x.jsx)(o,{label:`Actions`})]})]})},T=e=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`h1`,{style:{color:`var(--ic-typography-color)`},children:e.title}),(0,x.jsxs)(`div`,{style:{backgroundColor:e.theme===`dark`?`var(--ic-color-page-background-dark)`:`var(--ic-color-page-background-light)`,display:`flex`,gap:`0.5rem`,marginBottom:`1rem`,width:`fit-content`,padding:e.theme===`dark`?`6px 10px`:`none`},children:[(0,x.jsx)(d,{variant:`icon-primary`,size:e.size,theme:e.theme,loading:e.loading,disabled:e.disabled,monochrome:e.monochrome,"aria-label":`refresh`,id:`testButton`,children:C()}),(0,x.jsx)(d,{variant:`icon-secondary`,size:e.size,theme:e.theme,loading:e.loading,disabled:e.disabled,monochrome:e.monochrome,"aria-label":`refresh`,id:`testButton`,children:C()}),(0,x.jsx)(d,{variant:`icon-tertiary`,size:e.size,theme:e.theme,loading:e.loading,disabled:e.disabled,monochrome:e.monochrome,"aria-label":`refresh`,id:`testButton`,children:C()}),(0,x.jsx)(d,{variant:`icon-destructive`,size:e.size,theme:e.theme,loading:e.loading,disabled:e.disabled,monochrome:e.monochrome,"aria-label":`refresh`,id:`testButton`,children:C()})]})]}),E=()=>{function e(e){let t=[];return Array.from(e).forEach(e=>{t.push(e.name)}),t.join(`, `)}return(0,x.jsx)(`div`,{children:(0,x.jsx)(d,{variant:`primary`,fileUpload:`true`,accept:`.doc, text/plain, .json`,onClick:()=>document.addEventListener(`icFileSelection`,t=>alert(`Files Selected: ${e(t.detail)}`)),children:`Upload File`})})},D={title:`Button`,component:d},O={render:()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,width:`fit-content`,backgroundColor:`#ececec`},children:[(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,children:` Light theme `}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`primary`,theme:`light`,id:`mybuttonid`,children:`Primary`}),(0,x.jsx)(d,{variant:`primary`,theme:`light`,disabled:!0,children:`Disabled`})]})]}),(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,children:`Light theme - monochrome`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`primary`,monochrome:!0,theme:`light`,children:` Monochrome `}),(0,x.jsx)(d,{variant:`primary`,disabled:!0,monochrome:!0,theme:`light`,children:`Disabled`})]})]})]}),(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,marginTop:`1rem`,backgroundColor:`#474A48`,borderRadius:`5px`,width:`fit-content`},children:[(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,style:{color:`white`},children:`Dark theme`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`primary`,theme:`dark`,id:`mybuttonid`,children:`Primary`}),(0,x.jsx)(d,{variant:`primary`,theme:`dark`,disabled:!0,children:`Disabled`})]})]}),(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,style:{color:`white`},children:`Dark theme - monochrome`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`primary`,monochrome:!0,theme:`dark`,children:`Monochrome`}),(0,x.jsx)(d,{variant:`primary`,disabled:!0,monochrome:!0,theme:`dark`,children:`Disabled`})]})]})]})]}),name:`Primary`},k={render:()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,width:`fit-content`,backgroundColor:`#ececec`},children:[(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,children:` Light theme `}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`secondary`,theme:`light`,id:`mybuttonid`,children:`Secondary`}),(0,x.jsx)(d,{variant:`secondary`,theme:`light`,disabled:!0,children:`Disabled`})]})]}),(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,children:`Light theme - monochrome`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`secondary`,monochrome:!0,theme:`light`,children:` Monochrome `}),(0,x.jsx)(d,{variant:`secondary`,disabled:!0,monochrome:!0,theme:`light`,children:`Disabled`})]})]}),(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,children:` Light theme - non-transparent `}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`secondary`,theme:`light`,id:`mybuttonid`,transparentBackground:!1,children:`Solid`}),(0,x.jsx)(d,{variant:`secondary`,theme:`light`,disabled:!0,transparentBackground:!1,children:`Disabled`})]})]}),(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,children:`Light theme - monochrome, non-transparent`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`secondary`,monochrome:!0,theme:`light`,transparentBackground:!1,children:` Mono-solid `}),(0,x.jsx)(d,{variant:`secondary`,disabled:!0,monochrome:!0,theme:`light`,transparentBackground:!1,children:`Disabled`})]})]})]}),(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,marginTop:`1rem`,backgroundColor:`#232629`,borderRadius:`5px`,width:`fit-content`},children:[(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,style:{color:`white`},children:`Dark theme`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`secondary`,theme:`dark`,id:`mybuttonid`,children:`Secondary`}),(0,x.jsx)(d,{variant:`secondary`,theme:`dark`,disabled:!0,children:`Disabled`})]})]}),(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,style:{color:`white`},children:`Dark theme - monochrome`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`secondary`,monochrome:!0,theme:`dark`,children:`Monochrome`}),(0,x.jsx)(d,{variant:`secondary`,disabled:!0,monochrome:!0,theme:`dark`,children:`Disabled`})]})]}),(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,style:{color:`white`},children:`Dark theme - non-transparent`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`secondary`,theme:`dark`,id:`mybuttonid`,transparentBackground:!1,children:`Solid`}),(0,x.jsx)(d,{variant:`secondary`,theme:`dark`,disabled:!0,transparentBackground:!1,children:`Disabled`})]})]}),(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,style:{color:`white`},children:`Dark theme - monochrome, non-transparent`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`secondary`,monochrome:!0,theme:`dark`,transparentBackground:!1,children:`Mono-solid`}),(0,x.jsx)(d,{variant:`secondary`,disabled:!0,monochrome:!0,theme:`dark`,transparentBackground:!1,children:`Disabled`})]})]})]})]}),name:`Secondary`},A={render:()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,width:`fit-content`,backgroundColor:`#ececec`},children:[(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,children:` Light theme `}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`tertiary`,theme:`light`,id:`mybuttonid`,children:`Tertiary`}),(0,x.jsx)(d,{variant:`tertiary`,theme:`light`,disabled:!0,children:`Disabled`})]})]}),(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,children:`Light theme - monochrome`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`tertiary`,monochrome:!0,theme:`light`,children:` Monochrome `}),(0,x.jsx)(d,{variant:`tertiary`,disabled:!0,monochrome:!0,theme:`light`,children:`Disabled`})]})]}),(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,children:` Light theme - non-transparent `}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`tertiary`,theme:`light`,id:`mybuttonid`,transparentBackground:!1,children:`Solid`}),(0,x.jsx)(d,{variant:`tertiary`,theme:`light`,disabled:!0,transparentBackground:!1,children:`Disabled`})]})]}),(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,children:`Light theme - monochrome, non-transparent`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`tertiary`,monochrome:!0,theme:`light`,transparentBackground:!1,children:` Mono-solid `}),(0,x.jsx)(d,{variant:`tertiary`,disabled:!0,monochrome:!0,theme:`light`,transparentBackground:!1,children:`Disabled`})]})]})]}),(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,marginTop:`1rem`,backgroundColor:`#232629`,borderRadius:`5px`,width:`fit-content`},children:[(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,style:{color:`white`},children:`Dark theme`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`tertiary`,theme:`dark`,id:`mybuttonid`,children:`Tertiary`}),(0,x.jsx)(d,{variant:`tertiary`,theme:`dark`,disabled:!0,children:`Disabled`})]})]}),(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,style:{color:`white`},children:`Dark theme - monochrome`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`tertiary`,monochrome:!0,theme:`dark`,children:`Monochrome`}),(0,x.jsx)(d,{variant:`tertiary`,disabled:!0,monochrome:!0,theme:`dark`,children:`Disabled`})]})]}),(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,style:{color:`white`},children:`Dark theme - non-transparent`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`tertiary`,theme:`dark`,id:`mybuttonid`,transparentBackground:!1,children:`Solid`}),(0,x.jsx)(d,{variant:`tertiary`,theme:`dark`,disabled:!0,transparentBackground:!1,children:`Disabled`})]})]}),(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,style:{color:`white`},children:`Dark theme - monochrome, non-transparent`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`tertiary`,monochrome:!0,theme:`dark`,transparentBackground:!1,children:`Mono-solid`}),(0,x.jsx)(d,{variant:`tertiary`,disabled:!0,monochrome:!0,theme:`dark`,transparentBackground:!1,children:`Disabled`})]})]})]})]}),name:`Tertiary`},j={render:()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,width:`fit-content`,backgroundColor:`#ececec`},children:[(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,children:` Light theme `}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`destructive`,theme:`light`,id:`mybuttonid`,children:`Destructive`}),(0,x.jsx)(d,{variant:`destructive`,theme:`light`,disabled:!0,children:`Disabled`})]})]}),(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,children:`Light theme - monochrome`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`destructive`,monochrome:!0,theme:`light`,children:` Monochrome `}),(0,x.jsx)(d,{variant:`destructive`,disabled:!0,monochrome:!0,theme:`light`,children:`Disabled`})]})]})]}),(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,marginTop:`1rem`,backgroundColor:`#474A48`,borderRadius:`5px`,width:`fit-content`},children:[(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,style:{color:`white`},children:`Dark theme`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`destructive`,theme:`dark`,id:`mybuttonid`,children:`Destructive`}),(0,x.jsx)(d,{variant:`destructive`,theme:`dark`,disabled:!0,children:`Disabled`})]})]}),(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,x.jsx)(s,{variant:`subtitle-large`,style:{color:`white`},children:`Dark theme - monochrome`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(d,{variant:`destructive`,monochrome:!0,theme:`dark`,children:`Monochrome`}),(0,x.jsx)(d,{variant:`destructive`,disabled:!0,monochrome:!0,theme:`dark`,children:`Disabled`})]})]})]})]}),name:`Destructive`},M={render:()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,gap:`1rem`},children:[(0,x.jsxs)(d,{variant:`primary`,children:[`Primary`,(0,x.jsxs)(`svg`,{slot:`left-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]}),(0,x.jsxs)(d,{variant:`secondary`,children:[`Secondary`,(0,x.jsxs)(`svg`,{slot:`left-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]}),(0,x.jsxs)(d,{variant:`tertiary`,children:[`Tertiary`,(0,x.jsxs)(`svg`,{slot:`left-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]}),(0,x.jsxs)(d,{variant:`destructive`,children:[`Destructive`,(0,x.jsxs)(`svg`,{slot:`left-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]})]}),(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,gap:`1rem`},children:[(0,x.jsxs)(d,{variant:`primary`,children:[`Primary`,(0,x.jsxs)(`svg`,{slot:`right-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]}),(0,x.jsxs)(d,{variant:`secondary`,children:[`Secondary`,(0,x.jsxs)(`svg`,{slot:`right-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]}),(0,x.jsxs)(d,{variant:`tertiary`,children:[`Tertiary`,(0,x.jsxs)(`svg`,{slot:`right-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]}),(0,x.jsxs)(d,{variant:`destructive`,children:[`Destructive`,(0,x.jsxs)(`svg`,{slot:`right-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]})]})]}),name:`With icon`},N={render:()=>(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`div`,{style:{padding:`6px`},children:[(0,x.jsx)(d,{dropdown:!0,variant:`primary`,children:`Button`}),(0,x.jsxs)(d,{dropdown:!0,variant:`primary`,children:[`Button`,(0,x.jsxs)(`svg`,{slot:`left-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]}),(0,x.jsx)(d,{dropdown:!0,variant:`secondary`,children:`Button`}),(0,x.jsx)(d,{dropdown:!0,variant:`tertiary`,children:`Button`})]}),(0,x.jsxs)(`div`,{style:{padding:`6px`},children:[(0,x.jsx)(d,{dropdown:!0,disabled:`true`,variant:`primary`,children:`Button`}),(0,x.jsxs)(d,{dropdown:!0,disabled:`true`,variant:`primary`,children:[`Button`,(0,x.jsxs)(`svg`,{slot:`left-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]}),(0,x.jsx)(d,{dropdown:!0,disabled:`true`,variant:`secondary`,children:`Button`}),(0,x.jsx)(d,{dropdown:!0,disabled:`true`,variant:`tertiary`,children:`Button`})]}),(0,x.jsxs)(`div`,{style:{padding:`6px`},children:[(0,x.jsx)(d,{dropdown:!0,variant:`primary`,theme:`dark`,children:`Button`}),(0,x.jsxs)(d,{dropdown:!0,theme:`dark`,variant:`primary`,children:[`Button`,(0,x.jsxs)(`svg`,{slot:`left-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]}),(0,x.jsx)(d,{dropdown:!0,variant:`secondary`,theme:`dark`,children:`Button`}),(0,x.jsx)(d,{dropdown:!0,variant:`tertiary`,theme:`dark`,children:`Button`})]}),(0,x.jsxs)(`div`,{style:{backgroundColor:`var(--ic-color-page-background-dark)`,padding:`6px 10px`,width:`fit-content`},children:[(0,x.jsx)(d,{dropdown:!0,variant:`primary`,theme:`light`,children:`Button`}),(0,x.jsxs)(d,{dropdown:!0,theme:`light`,variant:`primary`,children:[`Button`,(0,x.jsxs)(`svg`,{slot:`left-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]}),(0,x.jsx)(d,{dropdown:!0,variant:`secondary`,theme:`light`,children:`Button`}),(0,x.jsx)(d,{dropdown:!0,variant:`tertiary`,theme:`light`,id:`mybuttonid`,onClick:()=>alert(`test`),children:`Button`})]}),(0,x.jsxs)(`div`,{style:{padding:`6px`},children:[(0,x.jsx)(d,{dropdown:!0,variant:`primary`,size:`small`,children:`Button`}),(0,x.jsxs)(d,{dropdown:!0,size:`small`,variant:`primary`,children:[`Button`,(0,x.jsxs)(`svg`,{slot:`left-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]}),(0,x.jsx)(d,{dropdown:!0,variant:`secondary`,size:`small`,children:`Button`}),(0,x.jsx)(d,{dropdown:!0,variant:`tertiary`,size:`small`,children:`Button`})]}),(0,x.jsxs)(`div`,{style:{padding:`6px`},children:[(0,x.jsx)(d,{dropdown:!0,variant:`primary`,size:`large`,children:`Button`}),(0,x.jsxs)(d,{dropdown:!0,size:`large`,variant:`primary`,children:[`Button`,(0,x.jsxs)(`svg`,{slot:`left-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]}),(0,x.jsx)(d,{dropdown:!0,variant:`secondary`,size:`large`,children:`Button`}),(0,x.jsx)(d,{dropdown:!0,variant:`tertiary`,size:`large`,children:`Button`})]})]}),name:`Dropdown`},P={render:()=>(0,x.jsx)(w,{}),name:`Dropdown example`},F={render:()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d,{variant:`primary`,size:`small`,children:`Small`}),(0,x.jsx)(d,{variant:`primary`,children:`Default`}),(0,x.jsx)(d,{variant:`primary`,size:`large`,children:`Large`}),(0,x.jsxs)(d,{variant:`primary`,size:`small`,children:[`Small`,(0,x.jsxs)(`svg`,{slot:`left-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]}),(0,x.jsxs)(d,{variant:`primary`,children:[`Default`,(0,x.jsxs)(`svg`,{slot:`left-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]}),(0,x.jsxs)(d,{variant:`primary`,size:`large`,children:[`Large`,(0,x.jsxs)(`svg`,{slot:`left-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]})]}),name:`Size`},I={render:()=>(0,x.jsx)(d,{children:(0,x.jsx)(`a`,{slot:`router-item`,href:`/`,children:`Slotted link`})}),name:`Router`},L={render:()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,gap:`1rem`,alignItems:`center`},children:[(0,x.jsx)(d,{size:`small`,children:(0,x.jsxs)(`a`,{slot:`router-item`,href:`/`,children:[(0,x.jsx)(`svg`,{slot:`left-icon`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,x.jsx)(`path`,{d:`M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z`,fill:`currentColor`})}),`Slotted link`]})}),(0,x.jsx)(d,{children:(0,x.jsxs)(`a`,{slot:`router-item`,href:`/`,children:[(0,x.jsx)(`svg`,{slot:`left-icon`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,x.jsx)(`path`,{d:`M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z`,fill:`currentColor`})}),`Slotted link`]})}),(0,x.jsx)(d,{size:`large`,children:(0,x.jsxs)(`a`,{slot:`router-item`,href:`/`,children:[(0,x.jsx)(`svg`,{slot:`left-icon`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,x.jsx)(`path`,{d:`M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z`,fill:`currentColor`})}),(0,x.jsx)(c,{slot:`badge`,label:`1`,position:`near`}),`Slotted link`]})})]}),(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,gap:`1rem`},children:[(0,x.jsx)(d,{disabled:!0,children:(0,x.jsxs)(`a`,{slot:`router-item`,href:`/`,children:[(0,x.jsx)(`svg`,{slot:`right-icon`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,x.jsx)(`path`,{d:`M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z`,fill:`currentColor`})}),`Slotted link`]})}),(0,x.jsx)(d,{variant:`secondary`,children:(0,x.jsxs)(`a`,{slot:`router-item`,href:`/`,children:[(0,x.jsx)(`svg`,{slot:`right-icon`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,x.jsx)(`path`,{d:`M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z`,fill:`currentColor`})}),`Slotted link`]})}),(0,x.jsx)(d,{variant:`tertiary`,children:(0,x.jsxs)(`a`,{slot:`router-item`,href:`/`,children:[(0,x.jsx)(`svg`,{slot:`right-icon`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,x.jsx)(`path`,{d:`M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z`,fill:`currentColor`})}),`Slotted link`]})}),(0,x.jsx)(d,{variant:`destructive`,children:(0,x.jsxs)(`a`,{slot:`router-item`,href:`/`,children:[(0,x.jsx)(`svg`,{slot:`right-icon`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,x.jsx)(`path`,{d:`M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z`,fill:`currentColor`})}),`Slotted link`]})})]}),(0,x.jsxs)(`div`,{style:{padding:`1rem`,display:`flex`,gap:`1rem`},children:[(0,x.jsx)(d,{theme:`light`,monochrome:!0,children:(0,x.jsxs)(`a`,{slot:`router-item`,href:`/`,children:[(0,x.jsx)(`svg`,{slot:`top-icon`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,x.jsx)(`path`,{d:`M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z`,fill:`currentColor`})}),`Slotted link`]})}),(0,x.jsx)(d,{theme:`dark`,monochrome:!0,children:(0,x.jsxs)(`a`,{slot:`router-item`,href:`/`,children:[(0,x.jsx)(`svg`,{slot:`top-icon`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,x.jsx)(`path`,{d:`M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z`,fill:`currentColor`})}),`Slotted link`]})})]})]}),name:`Router link - with slotted content`},R={render:()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(d,{variant:`primary`,size:`small`,children:[`Small`,(0,x.jsx)(m,{slot:`left-icon`,path:h})]}),(0,x.jsxs)(d,{variant:`primary`,children:[`Default`,(0,x.jsx)(m,{slot:`left-icon`,path:h})]}),(0,x.jsxs)(d,{variant:`primary`,size:`large`,children:[`Large`,(0,x.jsx)(m,{slot:`left-icon`,path:h})]})]}),name:`With mdi icons`},z={render:()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(d,{variant:`primary`,fullWidth:!0,children:[`Button`,(0,x.jsxs)(`svg`,{slot:`left-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]}),(0,x.jsxs)(d,{variant:`secondary`,fullWidth:!0,children:[`Button`,(0,x.jsxs)(`svg`,{slot:`left-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]}),(0,x.jsxs)(d,{variant:`tertiary`,fullWidth:!0,children:[`Button`,(0,x.jsxs)(`svg`,{slot:`left-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]}),(0,x.jsxs)(d,{theme:`dark`,fullWidth:!0,children:[`Button`,(0,x.jsxs)(`svg`,{slot:`left-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]}),(0,x.jsxs)(d,{variant:`destructive`,fullWidth:!0,children:[`Button`,(0,x.jsxs)(`svg`,{slot:`left-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]}),(0,x.jsxs)(d,{variant:`destructive`,disabled:!0,fullWidth:!0,children:[`Button`,(0,x.jsxs)(`svg`,{slot:`left-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]}),(0,x.jsxs)(`div`,{style:{backgroundColor:`var(--ic-color-page-background-dark)`,padding:`6px 10px`},children:[(0,x.jsxs)(d,{variant:`primary`,theme:`light`,fullWidth:!0,children:[`Button`,(0,x.jsxs)(`svg`,{slot:`left-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]}),(0,x.jsxs)(d,{variant:`secondary`,theme:`light`,fullWidth:!0,children:[`Button`,(0,x.jsxs)(`svg`,{slot:`left-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]}),(0,x.jsxs)(d,{variant:`tertiary`,theme:`light`,fullWidth:!0,children:[`Button`,(0,x.jsxs)(`svg`,{slot:`left-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]})]})]}),name:`Full width`},B={render:()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d,{variant:`icon`,size:`small`,"aria-label":`refresh`,children:(0,x.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})}),(0,x.jsx)(d,{variant:`icon`,"aria-label":`refresh`,children:(0,x.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})}),(0,x.jsx)(d,{variant:`icon`,size:`large`,"aria-label":`refresh`,children:(0,x.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})}),(0,x.jsx)(d,{variant:`icon`,size:`large`,"aria-label":`refresh`,disabled:!0,children:(0,x.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})}),(0,x.jsx)(d,{variant:`icon`,theme:`dark`,size:`large`,"aria-label":`refresh`,children:(0,x.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})}),(0,x.jsxs)(`div`,{style:{backgroundColor:`var(--ic-color-page-background-dark)`,display:`inline-block`,padding:`6px 10px`},children:[(0,x.jsx)(d,{variant:`icon`,size:`large`,"aria-label":`refresh`,theme:`light`,children:(0,x.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})}),(0,x.jsx)(d,{variant:`icon`,size:`large`,"aria-label":`refresh`,theme:`light`,disabled:!0,children:(0,x.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})})]})]}),name:`Icon only`},V={render:()=>[T(_.iconDefault),T(_.iconSmall),T(_.iconLarge),T(_.iconLoadingSmall),T(_.iconLoading),T(_.iconLoadingLarge),T(_.iconDisabled),T(_.iconLight),T(_.iconDark)],name:`Icon variants`},H={render:()=>{let[e,t]=(0,b.useState)(!1);return(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--ic-space-xs)`},children:[(0,x.jsx)(s,{children:`Choose the tooltip position strategy and hover over the button to see it take effect`}),(0,x.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--ic-space-xs)`,padding:`var(--ic-space-md)`,border:`1px solid var(--ic-color-text-primary)`,overflow:`hidden`,width:`100px`,position:`relative`},children:(0,x.jsx)(d,{title:`This is a tooltip with a long label`,id:`button-1`,tooltipFixedPositioning:e,children:`Button`})}),(0,x.jsx)(i,{label:`Fixed tooltip positioning`,onIcChange:e=>t(e.detail.checked)})]})},name:`Tooltip positioning strategy`},U={render:()=>{let e=[`I'm a dynamic accessible description`,`I can change`],[t,n]=(0,b.useState)(0);return(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--ic-space-xs)`},children:[(0,x.jsx)(`p`,{id:`desc`,children:`I'm the accessible description`}),(0,x.jsx)(d,{"aria-describedby":`desc`,children:`Button with aria-describedby`}),(0,x.jsx)(s,{id:`desc-2`,children:e[t]}),(0,x.jsx)(d,{variant:`secondary`,onClick:()=>n(e=>+!e),children:`Update description`}),(0,x.jsx)(d,{"aria-describedby":`desc-2`,children:`Button with dynamic aria-describedby`}),(0,x.jsxs)(`div`,{id:`tooltip`,role:`tooltip`,children:[(0,x.jsx)(`p`,{children:`I'm a more complex accessible description`}),(0,x.jsx)(`p`,{children:`In two parts`})]}),(0,x.jsx)(d,{"aria-describedby":`tooltip`,children:`Button with more complex description`}),(0,x.jsx)(l,{id:`test-ic-tooltip`,label:`I'm the accessible description`,children:(0,x.jsx)(d,{"aria-describedby":`test-ic-tooltip`,children:`Button with ic-tooltip`})}),(0,x.jsx)(d,{variant:`icon-primary`,"aria-label":`refresh`,children:C()}),(0,x.jsx)(l,{id:`test-ic-tooltip-1`,label:`This is an accessible description`,children:(0,x.jsx)(d,{variant:`icon-primary`,"aria-label":`refresh`,"aria-describedby":`test-ic-tooltip-1`,disableTooltip:!0,children:C()})})]})},name:`Aria describedby`},W={render:e=>(0,x.jsx)(d,{disabled:e.disabled,variant:e.variant,size:e.size,loading:e.loading,theme:e.theme,fullWidth:e.fullWidth,monochrome:e.monochrome,dropdown:e.dropdown,transparentBackground:e.transparentBackground,children:e.message}),args:S,argTypes:{variant:{options:[`primary`,`secondary`,`tertiary`,`destructive`],control:{type:`select`}},size:{options:[`medium`,`large`,`small`],control:{type:`inline-radio`}},theme:{options:[`inherit`,`dark`,`light`],control:{type:`inline-radio`}},fullWidth:{control:{type:`boolean`}},monochrome:{control:{type:`boolean`}},dropdown:{control:{type:`boolean`}}},name:`Playground`},G={render:e=>(0,x.jsxs)(d,{disabled:e.disabled,variant:e.variant,size:e.size,loading:e.loading,theme:e.theme,fullWidth:e.fullWidth,monochrome:e.monochrome,transparentBackground:e.transparentBackground,children:[e.message,(0,x.jsxs)(`svg`,{slot:e.iconPlacement,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})]}),args:{...S},argTypes:{variant:{options:[`primary`,`secondary`,`tertiary`,`destructive`],control:{type:`select`}},size:{options:[`medium`,`large`,`small`],control:{type:`inline-radio`}},theme:{options:[`inherit`,`dark`,`light`],control:{type:`inline-radio`}},fullWidth:{control:{type:`boolean`}},monochrome:{control:{type:`boolean`}},iconPlacement:{options:[`left-icon`,`right-icon`,`top-icon`],control:{type:`inline-radio`}}},name:`Playground with icon`},K={render:e=>(0,x.jsx)(d,{disableTooltip:e.disableTooltip,disabled:e.disabled,fullWidth:e.fullWidth,href:e.href,loading:e.loading,monochrome:e.monochrome,size:e.size,theme:e.theme,tooltipPlacement:e.tooltipPlacement,transparentBackground:e.transparentBackground,variant:e.variant,"aria-label":`refresh`,children:(0,x.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,x.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,x.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`})]})}),args:{disableTooltip:!1,disabled:!1,fullWidth:!1,href:``,loading:!1,monochrome:!1,size:`medium`,theme:`inherit`,tooltipPlacement:`bottom`,transparentBackground:!1,variant:`icon-primary`},argTypes:{variant:{options:[`icon-primary`,`icon-secondary`,`icon-tertiary`,`icon-destructive`],control:{type:`select`}},size:{options:[`medium`,`large`,`small`],control:{type:`inline-radio`}},theme:{options:[`inherit`,`dark`,`light`],control:{type:`inline-radio`}},tooltipPlacement:{options:[`top`,`right`,`bottom`,`left`],control:{type:`inline-radio`}}},name:`Playground - icon only`},q={render:()=>(0,x.jsx)(E,{}),name:`File Upload`},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <div style={{
      display: "flex",
      flexDirection: "row",
      width: "fit-content",
      backgroundColor: "#ececec"
    }}>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large"> Light theme </IcTypography>
          <div>
            <IcButton variant="primary" theme="light" id="mybuttonid">
              Primary
            </IcButton>
            <IcButton variant="primary" theme="light" disabled>
              Disabled
            </IcButton>
          </div>
        </div>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large">
            Light theme - monochrome
          </IcTypography>
          <div>
            <IcButton variant="primary" monochrome theme="light"> Monochrome </IcButton>
            <IcButton variant="primary" disabled monochrome theme="light">
              Disabled
            </IcButton>
          </div>
        </div>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "row",
      marginTop: "1rem",
      backgroundColor: "#474A48",
      borderRadius: "5px",
      width: "fit-content"
    }}>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large" style={{
          color: "white"
        }}>
            Dark theme
          </IcTypography>
          <div>
            <IcButton variant="primary" theme="dark" id="mybuttonid">
              Primary
            </IcButton>
            <IcButton variant="primary" theme="dark" disabled>
              Disabled
            </IcButton>
          </div>
        </div>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large" style={{
          color: "white"
        }}>
            Dark theme - monochrome
          </IcTypography>
          <div>
            <IcButton variant="primary" monochrome theme="dark">
              Monochrome
            </IcButton>
            <IcButton variant="primary" disabled monochrome theme="dark">
              Disabled
            </IcButton>
          </div>
        </div>
      </div>
    </>,
  name: "Primary"
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <div style={{
      display: "flex",
      flexDirection: "row",
      width: "fit-content",
      backgroundColor: "#ececec"
    }}>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large"> Light theme </IcTypography>
          <div>
            <IcButton variant="secondary" theme="light" id="mybuttonid">
              Secondary
            </IcButton>
            <IcButton variant="secondary" theme="light" disabled>
              Disabled
            </IcButton>
          </div>
        </div>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large">
            Light theme - monochrome
          </IcTypography>
          <div>
            <IcButton variant="secondary" monochrome theme="light"> Monochrome </IcButton>
            <IcButton variant="secondary" disabled monochrome theme="light">
              Disabled
            </IcButton>
          </div>
        </div>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large"> Light theme - non-transparent </IcTypography>
          <div>
            <IcButton variant="secondary" theme="light" id="mybuttonid" transparentBackground={false}>
              Solid
            </IcButton>
            <IcButton variant="secondary" theme="light" disabled transparentBackground={false}>
              Disabled
            </IcButton>
          </div>
        </div>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large">
            Light theme - monochrome, non-transparent
          </IcTypography>
          <div>
            <IcButton variant="secondary" monochrome theme="light" transparentBackground={false}> Mono-solid </IcButton>
            <IcButton variant="secondary" disabled monochrome theme="light" transparentBackground={false}>
              Disabled
            </IcButton>
          </div>
        </div>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "row",
      marginTop: "1rem",
      backgroundColor: "#232629",
      borderRadius: "5px",
      width: "fit-content"
    }}>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large" style={{
          color: "white"
        }}>
            Dark theme
          </IcTypography>
          <div>
            <IcButton variant="secondary" theme="dark" id="mybuttonid">
              Secondary
            </IcButton>
            <IcButton variant="secondary" theme="dark" disabled>
              Disabled
            </IcButton>
          </div>
        </div>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large" style={{
          color: "white"
        }}>
            Dark theme - monochrome
          </IcTypography>
          <div>
            <IcButton variant="secondary" monochrome theme="dark">
              Monochrome
            </IcButton>
            <IcButton variant="secondary" disabled monochrome theme="dark">
              Disabled
            </IcButton>
          </div>
        </div>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large" style={{
          color: "white"
        }}>
            Dark theme - non-transparent
          </IcTypography>
          <div>
            <IcButton variant="secondary" theme="dark" id="mybuttonid" transparentBackground={false}>
              Solid
            </IcButton>
            <IcButton variant="secondary" theme="dark" disabled transparentBackground={false}>
              Disabled
            </IcButton>
          </div>
        </div>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large" style={{
          color: "white"
        }}>
            Dark theme - monochrome, non-transparent
          </IcTypography>
          <div>
            <IcButton variant="secondary" monochrome theme="dark" transparentBackground={false}>
              Mono-solid
            </IcButton>
            <IcButton variant="secondary" disabled monochrome theme="dark" transparentBackground={false}>
              Disabled
            </IcButton>
          </div>
        </div>
      </div>
    </>,
  name: "Secondary"
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <div style={{
      display: "flex",
      flexDirection: "row",
      width: "fit-content",
      backgroundColor: "#ececec"
    }}>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large"> Light theme </IcTypography>
          <div>
            <IcButton variant="tertiary" theme="light" id="mybuttonid">
              Tertiary
            </IcButton>
            <IcButton variant="tertiary" theme="light" disabled>
              Disabled
            </IcButton>
          </div>
        </div>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large">
            Light theme - monochrome
          </IcTypography>
          <div>
            <IcButton variant="tertiary" monochrome theme="light"> Monochrome </IcButton>
            <IcButton variant="tertiary" disabled monochrome theme="light">
              Disabled
            </IcButton>
          </div>
        </div>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large"> Light theme - non-transparent </IcTypography>
          <div>
            <IcButton variant="tertiary" theme="light" id="mybuttonid" transparentBackground={false}>
              Solid
            </IcButton>
            <IcButton variant="tertiary" theme="light" disabled transparentBackground={false}>
              Disabled
            </IcButton>
          </div>
        </div>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large">
            Light theme - monochrome, non-transparent
          </IcTypography>
          <div>
            <IcButton variant="tertiary" monochrome theme="light" transparentBackground={false}> Mono-solid </IcButton>
            <IcButton variant="tertiary" disabled monochrome theme="light" transparentBackground={false}>
              Disabled
            </IcButton>
          </div>
        </div>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "row",
      marginTop: "1rem",
      backgroundColor: "#232629",
      borderRadius: "5px",
      width: "fit-content"
    }}>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large" style={{
          color: "white"
        }}>
            Dark theme
          </IcTypography>
          <div>
            <IcButton variant="tertiary" theme="dark" id="mybuttonid">
              Tertiary
            </IcButton>
            <IcButton variant="tertiary" theme="dark" disabled>
              Disabled
            </IcButton>
          </div>
        </div>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large" style={{
          color: "white"
        }}>
            Dark theme - monochrome
          </IcTypography>
          <div>
            <IcButton variant="tertiary" monochrome theme="dark">
              Monochrome
            </IcButton>
            <IcButton variant="tertiary" disabled monochrome theme="dark">
              Disabled
            </IcButton>
          </div>
        </div>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large" style={{
          color: "white"
        }}>
            Dark theme - non-transparent
          </IcTypography>
          <div>
            <IcButton variant="tertiary" theme="dark" id="mybuttonid" transparentBackground={false}>
              Solid
            </IcButton>
            <IcButton variant="tertiary" theme="dark" disabled transparentBackground={false}>
              Disabled
            </IcButton>
          </div>
        </div>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large" style={{
          color: "white"
        }}>
            Dark theme - monochrome, non-transparent
          </IcTypography>
          <div>
            <IcButton variant="tertiary" monochrome theme="dark" transparentBackground={false}>
              Mono-solid
            </IcButton>
            <IcButton variant="tertiary" disabled monochrome theme="dark" transparentBackground={false}>
              Disabled
            </IcButton>
          </div>
        </div>
      </div>
    </>,
  name: "Tertiary"
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <div style={{
      display: "flex",
      flexDirection: "row",
      width: "fit-content",
      backgroundColor: "#ececec"
    }}>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large"> Light theme </IcTypography>
          <div>
            <IcButton variant="destructive" theme="light" id="mybuttonid">
              Destructive
            </IcButton>
            <IcButton variant="destructive" theme="light" disabled>
              Disabled
            </IcButton>
          </div>
        </div>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large">
            Light theme - monochrome
          </IcTypography>
          <div>
            <IcButton variant="destructive" monochrome theme="light"> Monochrome </IcButton>
            <IcButton variant="destructive" disabled monochrome theme="light">
              Disabled
            </IcButton>
          </div>
        </div>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "row",
      marginTop: "1rem",
      backgroundColor: "#474A48",
      borderRadius: "5px",
      width: "fit-content"
    }}>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large" style={{
          color: "white"
        }}>
            Dark theme
          </IcTypography>
          <div>
            <IcButton variant="destructive" theme="dark" id="mybuttonid">
              Destructive
            </IcButton>
            <IcButton variant="destructive" theme="dark" disabled>
              Disabled
            </IcButton>
          </div>
        </div>
        <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
          <IcTypography variant="subtitle-large" style={{
          color: "white"
        }}>
            Dark theme - monochrome
          </IcTypography>
          <div>
            <IcButton variant="destructive" monochrome theme="dark">
              Monochrome
            </IcButton>
            <IcButton variant="destructive" disabled monochrome theme="dark">
              Disabled
            </IcButton>
          </div>
        </div>
      </div>
    </>,
  name: "Destructive"
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <div style={{
      padding: "1rem",
      display: "flex",
      gap: "1rem"
    }}>
      <IcButton variant="primary">
        Primary
        <svg slot="left-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </svg>
      </IcButton>
      <IcButton variant="secondary">
        Secondary
        <svg slot="left-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </svg>
      </IcButton>
      <IcButton variant="tertiary">
        Tertiary
        <svg slot="left-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </svg>
      </IcButton>
      <IcButton variant="destructive">
        Destructive
        <svg slot="left-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </svg>
      </IcButton>
    </div>
    <div style={{
      padding: "1rem",
      display: "flex",
      gap: "1rem"
    }}>
      <IcButton variant="primary">
        Primary
        <svg slot="right-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </svg>
      </IcButton>
      <IcButton variant="secondary">
        Secondary
        <svg slot="right-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </svg>
      </IcButton>
      <IcButton variant="tertiary">
        Tertiary
        <svg slot="right-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </svg>
      </IcButton>
      <IcButton variant="destructive">
        Destructive
        <svg slot="right-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </svg>
      </IcButton>
    </div>
    </>,
  name: "With icon"
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <div style={{
      padding: "6px"
    }}>
        <IcButton dropdown={true} variant="primary">
          Button
        </IcButton>
        <IcButton dropdown={true} variant="primary">
          Button
          <svg slot="left-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcButton>
        <IcButton dropdown={true} variant="secondary">
          Button
        </IcButton>
        <IcButton dropdown={true} variant="tertiary">
          Button
        </IcButton>
      </div>
      <div style={{
      padding: "6px"
    }}>
        <IcButton dropdown={true} disabled="true" variant="primary">
          Button
        </IcButton>
        <IcButton dropdown={true} disabled="true" variant="primary">
          Button
          <svg slot="left-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcButton>
        <IcButton dropdown={true} disabled="true" variant="secondary">
          Button
        </IcButton>
        <IcButton dropdown={true} disabled="true" variant="tertiary">
          Button
        </IcButton>
      </div>
      <div style={{
      padding: "6px"
    }}>
        <IcButton dropdown={true} variant="primary" theme="dark">
          Button
        </IcButton>
        <IcButton dropdown={true} theme="dark" variant="primary">
          Button
          <svg slot="left-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcButton>
        <IcButton dropdown={true} variant="secondary" theme="dark">
          Button
        </IcButton>
        <IcButton dropdown={true} variant="tertiary" theme="dark">
          Button
        </IcButton>
      </div>
      <div style={{
      backgroundColor: "var(--ic-color-page-background-dark)",
      padding: "6px 10px",
      width: "fit-content"
    }}>
        <IcButton dropdown={true} variant="primary" theme="light">
          Button
        </IcButton>
        <IcButton dropdown={true} theme="light" variant="primary">
          Button
          <svg slot="left-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcButton>
        <IcButton dropdown={true} variant="secondary" theme="light">
          Button
        </IcButton>
        <IcButton dropdown={true} variant="tertiary" theme="light" id="mybuttonid" onClick={() => alert("test")}>
          Button
        </IcButton>
      </div>
      <div style={{
      padding: "6px"
    }}>
        <IcButton dropdown={true} variant="primary" size="small">
          Button
        </IcButton>
        <IcButton dropdown={true} size="small" variant="primary">
          Button
          <svg slot="left-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcButton>
        <IcButton dropdown={true} variant="secondary" size="small">
          Button
        </IcButton>
        <IcButton dropdown={true} variant="tertiary" size="small">
          Button
        </IcButton>
      </div>
      <div style={{
      padding: "6px"
    }}>
        <IcButton dropdown={true} variant="primary" size="large">
          Button
        </IcButton>
        <IcButton dropdown={true} size="large" variant="primary">
          Button
          <svg slot="left-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
        </IcButton>
        <IcButton dropdown={true} variant="secondary" size="large">
          Button
        </IcButton>
        <IcButton dropdown={true} variant="tertiary" size="large">
          Button
        </IcButton>
      </div>
    </div>,
  name: "Dropdown"
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <PopoverDropdown />,
  name: "Dropdown example"
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcButton variant="primary" size="small">
      Small
    </IcButton>
    <IcButton variant="primary">Default</IcButton>
    <IcButton variant="primary" size="large">
      Large
    </IcButton>
    <IcButton variant="primary" size="small">
      Small
      <svg slot="left-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    </IcButton>
    <IcButton variant="primary">
      Default
      <svg slot="left-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    </IcButton>
    <IcButton variant="primary" size="large">
      Large
      <svg slot="left-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    </IcButton>
    </>,
  name: "Size"
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <IcButton>
      <a slot="router-item" href="/">
        Slotted link
      </a>
    </IcButton>,
  name: "Router"
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <div style={{
      padding: "1rem",
      display: "flex",
      gap: "1rem",
      alignItems: "center"
    }}>
        <IcButton size="small">
          <a slot="router-item" href="/">
            <svg slot="left-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z" fill="currentColor" />
            </svg>
            Slotted link
          </a>
        </IcButton>
        <IcButton>
          <a slot="router-item" href="/">
            <svg slot="left-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z" fill="currentColor" />
            </svg>
            Slotted link
          </a>
        </IcButton>
        <IcButton size="large">
          <a slot="router-item" href="/">
            <svg slot="left-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z" fill="currentColor" />
            </svg>
            <IcBadge slot="badge" label="1" position="near" />
            Slotted link
          </a>
        </IcButton>
      </div>
      <div style={{
      padding: "1rem",
      display: "flex",
      gap: "1rem"
    }}>
        <IcButton disabled>
          <a slot="router-item" href="/">
            <svg slot="right-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z" fill="currentColor" />
            </svg>
            Slotted link
          </a>
        </IcButton>
        <IcButton variant="secondary">
          <a slot="router-item" href="/">
            <svg slot="right-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z" fill="currentColor" />
            </svg>
            Slotted link
          </a>
        </IcButton>
        <IcButton variant="tertiary">
          <a slot="router-item" href="/">
            <svg slot="right-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z" fill="currentColor" />
            </svg>
            Slotted link
          </a>
        </IcButton>
        <IcButton variant="destructive">
          <a slot="router-item" href="/">
            <svg slot="right-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z" fill="currentColor" />
            </svg>
            Slotted link
          </a>
        </IcButton>
      </div>
      <div style={{
      padding: "1rem",
      display: "flex",
      gap: "1rem"
    }}>
        <IcButton theme="light" monochrome>
          <a slot="router-item" href="/">
            <svg slot="top-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z" fill="currentColor" />
            </svg>
            Slotted link
          </a>
        </IcButton>
        <IcButton theme="dark" monochrome>
          <a slot="router-item" href="/">
            <svg slot="top-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z" fill="currentColor" />
            </svg>
            Slotted link
          </a>
        </IcButton>
      </div>
      </>,
  name: "Router link - with slotted content"
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcButton variant="primary" size="small">
      Small
      <SlottedSVG slot="left-icon" path={mdiAccountGroup} />
    </IcButton>
    <IcButton variant="primary">
      Default
      <SlottedSVG slot="left-icon" path={mdiAccountGroup} />
    </IcButton>
    <IcButton variant="primary" size="large">
      Large
      <SlottedSVG slot="left-icon" path={mdiAccountGroup} />
    </IcButton>
    </>,
  name: "With mdi icons"
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcButton variant="primary" fullWidth={true}>
      Button
      <svg slot="left-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    </IcButton>
    <IcButton variant="secondary" fullWidth={true}>
      Button
      <svg slot="left-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    </IcButton>
    <IcButton variant="tertiary" fullWidth={true}>
      Button
      <svg slot="left-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    </IcButton>
    <IcButton theme="dark" fullWidth={true}>
      Button
      <svg slot="left-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    </IcButton>
    <IcButton variant="destructive" fullWidth={true}>
      Button
      <svg slot="left-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    </IcButton>
    <IcButton variant="destructive" disabled fullWidth={true}>
      Button
      <svg slot="left-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    </IcButton>
    <div style={{
      backgroundColor: "var(--ic-color-page-background-dark)",
      padding: "6px 10px"
    }}>
      <IcButton variant="primary" theme="light" fullWidth={true}>
        Button
        <svg slot="left-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </svg>
      </IcButton>
      <IcButton variant="secondary" theme="light" fullWidth={true}>
        Button
        <svg slot="left-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </svg>
      </IcButton>
      <IcButton variant="tertiary" theme="light" fullWidth={true}>
        Button
        <svg slot="left-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </svg>
      </IcButton>
    </div>
    </>,
  name: "Full width"
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <IcButton variant="icon" size="small" aria-label="refresh">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    </IcButton>
    <IcButton variant="icon" aria-label="refresh">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    </IcButton>
    <IcButton variant="icon" size="large" aria-label="refresh">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    </IcButton>
    <IcButton variant="icon" size="large" aria-label="refresh" disabled>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    </IcButton>
    <IcButton variant="icon" theme="dark" size="large" aria-label="refresh">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    </IcButton>
    <div style={{
      backgroundColor: "var(--ic-color-page-background-dark)",
      display: "inline-block",
      padding: "6px 10px"
    }}>
      <IcButton variant="icon" size="large" aria-label="refresh" theme="light">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </svg>
      </IcButton>
      <IcButton variant="icon" size="large" aria-label="refresh" theme="light" disabled>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        </svg>
      </IcButton>
    </div>
    </>,
  name: "Icon only"
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => [IconBtnGroup(iconProps.iconDefault), IconBtnGroup(iconProps.iconSmall), IconBtnGroup(iconProps.iconLarge), IconBtnGroup(iconProps.iconLoadingSmall), IconBtnGroup(iconProps.iconLoading), IconBtnGroup(iconProps.iconLoadingLarge), IconBtnGroup(iconProps.iconDisabled), IconBtnGroup(iconProps.iconLight), IconBtnGroup(iconProps.iconDark)],
  name: "Icon variants"
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
          <IcButton title="This is a tooltip with a long label" id="button-1" tooltipFixedPositioning={fixed}>
            Button
          </IcButton>
        </div>
        <IcSwitch label="Fixed tooltip positioning" onIcChange={ev => setFixed(ev.detail.checked)}>
        </IcSwitch>
      </div>;
  },
  name: "Tooltip positioning strategy"
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    const accessibleDescription = ["I'm a dynamic accessible description", "I can change"];
    const [option, setOption] = useState(0);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--ic-space-xs)"
    }}>
        <p id="desc">I'm the accessible description</p>
        <IcButton aria-describedby="desc">Button with aria-describedby</IcButton>

        <IcTypography id="desc-2">{accessibleDescription[option]}</IcTypography>
        <IcButton variant="secondary" onClick={() => setOption(prev => prev ? 0 : 1)}>Update description</IcButton>
        <IcButton aria-describedby="desc-2">Button with dynamic aria-describedby</IcButton>

        <div id="tooltip" role="tooltip">
          <p>I'm a more complex accessible description</p>
          <p>In two parts</p>
        </div>
        <IcButton aria-describedby="tooltip">Button with more complex description</IcButton>

        <IcTooltip id="test-ic-tooltip" label="I'm the accessible description">
          <IcButton aria-describedby="test-ic-tooltip">Button with ic-tooltip</IcButton>
        </IcTooltip>

        <IcButton variant="icon-primary" aria-label="refresh">
          {customSVG()}
        </IcButton>

        <IcTooltip id="test-ic-tooltip-1" label="This is an accessible description">
          <IcButton variant="icon-primary" aria-label="refresh" aria-describedby="test-ic-tooltip-1" disableTooltip>
            {customSVG()}
          </IcButton>
        </IcTooltip>
      </div>;
  },
  name: "Aria describedby"
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <IcButton disabled={args.disabled} variant={args.variant} size={args.size} loading={args.loading} theme={args.theme} fullWidth={args.fullWidth} monochrome={args.monochrome} dropdown={args.dropdown} transparentBackground={args.transparentBackground}>
      {args.message}
    </IcButton>,
  args: defaultArgs,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary", "destructive"],
      control: {
        type: "select"
      }
    },
    size: {
      options: ["medium", "large", "small"],
      control: {
        type: "inline-radio"
      }
    },
    theme: {
      options: ["inherit", "dark", "light"],
      control: {
        type: "inline-radio"
      }
    },
    fullWidth: {
      control: {
        type: "boolean"
      }
    },
    monochrome: {
      control: {
        type: "boolean"
      }
    },
    dropdown: {
      control: {
        type: "boolean"
      }
    }
  },
  name: "Playground"
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <IcButton disabled={args.disabled} variant={args.variant} size={args.size} loading={args.loading} theme={args.theme} fullWidth={args.fullWidth} monochrome={args.monochrome} transparentBackground={args.transparentBackground}>
      {args.message}
      <svg slot={args.iconPlacement} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    </IcButton>,
  args: {
    ...defaultArgs
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary", "destructive"],
      control: {
        type: "select"
      }
    },
    size: {
      options: ["medium", "large", "small"],
      control: {
        type: "inline-radio"
      }
    },
    theme: {
      options: ["inherit", "dark", "light"],
      control: {
        type: "inline-radio"
      }
    },
    fullWidth: {
      control: {
        type: "boolean"
      }
    },
    monochrome: {
      control: {
        type: "boolean"
      }
    },
    iconPlacement: {
      options: ["left-icon", "right-icon", "top-icon"],
      control: {
        type: "inline-radio"
      }
    }
  },
  name: "Playground with icon"
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <IcButton disableTooltip={args.disableTooltip} disabled={args.disabled} fullWidth={args.fullWidth} href={args.href} loading={args.loading} monochrome={args.monochrome} size={args.size} theme={args.theme} tooltipPlacement={args.tooltipPlacement} transparentBackground={args.transparentBackground} variant={args.variant} aria-label="refresh">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    </IcButton>,
  args: {
    disableTooltip: false,
    disabled: false,
    fullWidth: false,
    href: "",
    loading: false,
    monochrome: false,
    size: "medium",
    theme: "inherit",
    tooltipPlacement: "bottom",
    transparentBackground: false,
    variant: "icon-primary"
  },
  argTypes: {
    variant: {
      options: ["icon-primary", "icon-secondary", "icon-tertiary", "icon-destructive"],
      control: {
        type: "select"
      }
    },
    size: {
      options: ["medium", "large", "small"],
      control: {
        type: "inline-radio"
      }
    },
    theme: {
      options: ["inherit", "dark", "light"],
      control: {
        type: "inline-radio"
      }
    },
    tooltipPlacement: {
      options: ["top", "right", "bottom", "left"],
      control: {
        type: "inline-radio"
      }
    }
  },
  name: "Playground - icon only"
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <FileUpload />,
  name: "File Upload"
}`,...q.parameters?.docs?.source}}},J=[`Primary`,`Secondary`,`Tertiary`,`Destructive`,`WithIcon`,`Dropdown`,`DropdownExample`,`Size`,`Router`,`RouterLinkWithSlottedContent`,`WithMdiIcons`,`FullWidth`,`IconOnly`,`IconVariants`,`PositioningStrategy`,`AriaDescribedby`,`Playground`,`PlaygroundWithIcon`,`PlaygroundIconOnly`,`FileUpload_`]}));Y();export{U as AriaDescribedby,j as Destructive,N as Dropdown,P as DropdownExample,q as FileUpload_,z as FullWidth,B as IconOnly,V as IconVariants,W as Playground,K as PlaygroundIconOnly,G as PlaygroundWithIcon,H as PositioningStrategy,O as Primary,I as Router,L as RouterLinkWithSlottedContent,k as Secondary,F as Size,A as Tertiary,M as WithIcon,R as WithMdiIcons,J as __namedExportsOrder,D as default,Y as n,y as t};