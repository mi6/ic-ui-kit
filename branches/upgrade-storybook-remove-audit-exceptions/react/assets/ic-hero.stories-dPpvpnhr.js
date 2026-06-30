import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{O as r,T as i,V as a,f as o,in as s,lt as c,nt as l,t as u,tt as d,u as f,ut as p}from"./iframe-CBY1Fz5o.js";var m,h=t((()=>{m=``+new URL(`example-background-B9YauEB2.png`,import.meta.url).href})),g=e({Brand:()=>P,CardRightContent:()=>M,CenterAligned:()=>T,ContentCenterAligned:()=>O,FullWidth:()=>D,ImageRightContent:()=>N,LeftAligned:()=>w,Playground:()=>C,SearchBarInteraction:()=>j,SecondaryHeading:()=>A,SizeSmall:()=>k,SlottedHeadingAndSubheading:()=>E,WithBackgroundImageNoParallaxEffect:()=>I,WithBackgroundImageParallaxEffect:()=>F,__namedExportsOrder:()=>L,default:()=>S}),_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R=t((()=>{_=n(s()),p(),h(),v=u(),y=()=>{let[e,t]=(0,_.useState)(`rgb(255, 201, 60)`);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l,{brandColor:e}),(0,v.jsxs)(i,{heading:`Hero heading`,subheading:`Hero description. This is a Hero component, it should be used as a page heading.`,aligned:`center`,children:[(0,v.jsxs)(`div`,{slot:`interaction`,style:{display:`flex`},children:[(0,v.jsx)(d,{placeholder:`Filter display`,label:`Filter display`,"hide-label":!0,"full-width":`true`}),(0,v.jsx)(f,{variant:`primary`,style:{marginLeft:`var(--ic-space-md)`},children:`Filter`})]}),(0,v.jsx)(f,{variant:`secondary`,slot:`interaction`,children:`See all`}),(0,v.jsx)(r,{href:`https://google.com`,slot:`interaction`,style:{marginTop:`var(--ic-space-sm)`},children:`Help`}),(0,v.jsx)(o,{heading:`Latest announcement`,message:`This is some example text that can be included in the card copy.`,slot:`secondary`})]}),(0,v.jsx)(f,{variant:`primary`,onClick:()=>{t(`rgb(27, 60, 121)`)},children:`Default brand`}),(0,v.jsx)(f,{variant:`primary`,onClick:()=>{t(`rgb(255, 201, 60)`)},children:`Sunrise brand`})]})},b=()=>{let[e,t]=(0,_.useState)(`rgb(27, 60, 121)`);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l,{brandColor:e}),(0,v.jsx)(f,{variant:`primary`,onClick:()=>{t(`rgb(27, 60, 121)`)},children:`Reset theme`})]})},x={aligned:`left`,backgroundImage:m,contentAligned:`left`,disableBackgroundParallax:!1,heading:`Hero heading`,secondaryHeading:`Secondary Heading`,secondarySubheading:`This is a secondary description.`,size:`medium`,subheading:`Hero description. This is a Hero component, it should be used as a page heading.`,showSecondary:!1,theme:`inherit`},S={title:`Hero`,component:i},C={render:e=>(0,v.jsxs)(i,{aligned:e.aligned,backgroundImage:e.backgroundImage,contentAligned:e.contentAligned,disableBackgroundParallax:e.disableBackgroundParallax,heading:e.heading,secondaryHeading:e.secondaryHeading,secondarySubheading:e.secondarySubheading,size:e.size,subheading:e.subheading,theme:e.theme,children:[(0,v.jsx)(f,{variant:`primary`,slot:`interaction`,children:`Button`}),(0,v.jsx)(f,{variant:`secondary`,slot:`interaction`,children:`Button`}),e.showSecondary&&(0,v.jsx)(o,{heading:`Latest announcement`,message:`This is some example text that can be included in the card copy.`,slot:`secondary`}),(0,v.jsx)(d,{label:`What is your favourite coffee?`,placeholder:`Please enter…`,helperText:`Such as Arabica, Robusta or Liberica`,onIcChange:e=>console.log(e.detail.value),slot:`interaction`})]}),args:x,name:`Playground`,parameters:{layout:`fullscreen`},argTypes:{aligned:{options:[`center`,`full-width`,`left`],control:{type:`select`}},contentAligned:{options:[`center`,`left`],control:{type:`select`}},size:{options:[`medium`,`small`],control:{type:`select`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}}},w={render:()=>(0,v.jsxs)(i,{heading:`Hero heading`,subheading:`Hero description. This is a Hero component, it should be used as a page heading.`,children:[(0,v.jsx)(f,{variant:`primary`,slot:`interaction`,children:`Button`}),(0,v.jsx)(f,{variant:`secondary`,slot:`interaction`,children:`Button`})]}),name:`Left aligned`,parameters:{layout:`fullscreen`}},T={render:()=>(0,v.jsxs)(i,{heading:`Hero heading`,subheading:`Hero description. This is a Hero component, it should be used as a page heading.`,aligned:`center`,children:[(0,v.jsx)(f,{variant:`primary`,slot:`interaction`,children:`Button`}),(0,v.jsx)(f,{variant:`secondary`,slot:`interaction`,children:`Button`})]}),name:`Center aligned`,parameters:{layout:`fullscreen`}},E={render:()=>(0,v.jsxs)(i,{children:[(0,v.jsx)(c,{slot:`heading`,variant:`h1`,children:`Slotted heading`}),(0,v.jsx)(c,{slot:`subheading`,children:`Slotted subheading`}),(0,v.jsx)(f,{variant:`primary`,slot:`interaction`,children:`Button`}),(0,v.jsx)(f,{variant:`secondary`,slot:`interaction`,children:`Button`})]}),name:`Slotted heading and subheading`,parameters:{layout:`fullscreen`}},D={render:()=>(0,v.jsxs)(i,{heading:`Hero heading`,subheading:`Hero description. This is a Hero component, it should be used as a page heading.`,aligned:`full-width`,children:[(0,v.jsx)(f,{variant:`primary`,slot:`interaction`,children:`Button`}),(0,v.jsx)(f,{variant:`secondary`,slot:`interaction`,children:`Button`})]}),name:`Full width`,parameters:{layout:`fullscreen`}},O={render:()=>(0,v.jsxs)(i,{heading:`Hero heading`,subheading:`Hero description. This is a Hero component, it should be used as a page heading.`,aligned:`center`,contentAligned:`center`,children:[(0,v.jsx)(f,{variant:`primary`,slot:`interaction`,children:`Button`}),(0,v.jsx)(f,{variant:`secondary`,slot:`interaction`,children:`Button`})]}),name:`Content center aligned`,parameters:{layout:`fullscreen`}},k={render:()=>(0,v.jsxs)(i,{heading:`Hero heading`,subheading:`Hero description. This is a Hero component, it should be used as a page heading.`,size:`small`,aligned:`center`,children:[(0,v.jsx)(f,{variant:`primary`,slot:`interaction`,children:`Button`}),(0,v.jsx)(f,{variant:`secondary`,slot:`interaction`,children:`Button`})]}),name:`Size small`,parameters:{layout:`fullscreen`}},A={render:()=>(0,v.jsxs)(i,{heading:`Hero heading`,subheading:`Hero description. This is a Hero component, it should be used as a page heading.`,secondaryHeading:`Secondary Heading`,secondarySubheading:`This is a secondary description.`,aligned:`center`,children:[(0,v.jsx)(f,{variant:`primary`,slot:`interaction`,children:`Button`}),(0,v.jsx)(f,{variant:`secondary`,slot:`interaction`,children:`Button`})]}),name:`Secondary heading`,parameters:{layout:`fullscreen`}},j={render:()=>(0,v.jsx)(i,{heading:`Hero heading`,subheading:`Hero description. This is a Hero component, it should be used as a page heading.`,aligned:`center`,children:(0,v.jsx)(a,{slot:`interaction`})}),name:`Search bar interaction`,parameters:{layout:`fullscreen`}},M={render:()=>(0,v.jsxs)(i,{heading:`Hero heading`,subheading:`Hero description. This is a Hero component, it should be used as a page heading.`,aligned:`full-width`,children:[(0,v.jsx)(f,{variant:`primary`,slot:`interaction`,children:`Button`}),(0,v.jsx)(f,{variant:`secondary`,slot:`interaction`,children:`Button`}),(0,v.jsx)(o,{heading:`Latest announcement`,message:`This is some example text that can be included in the card copy.`,slot:`secondary`})]}),name:`Card right content`,parameters:{layout:`fullscreen`}},N={render:()=>(0,v.jsxs)(i,{heading:`Hero heading`,subheading:`Hero description. This is a Hero component, it should be used as a page heading.`,aligned:`center`,children:[(0,v.jsx)(f,{variant:`primary`,slot:`interaction`,children:`Button`}),(0,v.jsx)(f,{variant:`secondary`,slot:`interaction`,children:`Button`}),(0,v.jsxs)(`svg`,{slot:`secondary`,style:{width:`300px`},xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 1600 900`,children:[(0,v.jsx)(`rect`,{fill:`#ff7700`,width:`1600`,height:`900`}),(0,v.jsx)(`polygon`,{fill:`#cc0000`,points:`957 450 539 900 1396 900`}),(0,v.jsx)(`polygon`,{fill:`#aa0000`,points:`957 450 872.9 900 1396 900`}),(0,v.jsx)(`polygon`,{fill:`#c50022`,points:`-60 900 398 662 816 900`}),(0,v.jsx)(`polygon`,{fill:`#a3001b`,points:`337 900 398 662 816 900`}),(0,v.jsx)(`polygon`,{fill:`#be0044`,points:`1203 546 1552 900 876 900`}),(0,v.jsx)(`polygon`,{fill:`#9c0036`,points:`1203 546 1552 900 1162 900`}),(0,v.jsx)(`polygon`,{fill:`#b80066`,points:`641 695 886 900 367 900`}),(0,v.jsx)(`polygon`,{fill:`#960052`,points:`587 900 641 695 886 900`}),(0,v.jsx)(`polygon`,{fill:`#b10088`,points:`1710 900 1401 632 1096 900`}),(0,v.jsx)(`polygon`,{fill:`#8f006d`,points:`1710 900 1401 632 1365 900`}),(0,v.jsx)(`polygon`,{fill:`#aa00aa`,points:`1210 900 971 687 725 900`}),(0,v.jsx)(`polygon`,{fill:`#880088`,points:`943 900 1210 900 971 687`})]})]}),name:`Image right content`,parameters:{layout:`fullscreen`}},P={render:()=>(0,v.jsx)(y,{}),name:`Brand`,parameters:{layout:`fullscreen`}},F={render:()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(b,{}),(0,v.jsx)(IcTopNavigation,{"app-title":`Application Name`,children:(0,v.jsxs)(`svg`,{slot:`app-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,v.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,v.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z`})]})}),(0,v.jsx)(`ic-hero`,{heading:`Hero heading`,subheading:`Hero description. This is a Hero component, it should be used as a page heading.`,"background-image":m,children:(0,v.jsxs)(`div`,{slot:`interaction`,children:[(0,v.jsx)(f,{variant:`primary`,style:{marginRight:`var(--ic-space-md)`},children:`Button`}),(0,v.jsx)(f,{variant:`secondary`,style:{marginRight:`var(--ic-space-md)`},children:`Button`}),(0,v.jsx)(r,{href:`https://google.com`,style:{marginTop:`var(--ic-space-sm)`},children:`Help`})]})}),(0,v.jsx)(`br`,{}),(0,v.jsx)(c,{style:{marginBottom:1300},children:`You can scroll.`})]}),name:`With background image (parallax effect)`,parameters:{layout:`fullscreen`}},I={render:()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(b,{}),(0,v.jsx)(`ic-top-navigation`,{"app-title":`Application Name`,children:(0,v.jsxs)(`svg`,{slot:`app-icon`,xmlns:`http://www.w3.org/2000/svg`,height:`24px`,viewBox:`0 0 24 24`,width:`24px`,fill:`#000000`,children:[(0,v.jsx)(`path`,{d:`M0 0h24v24H0V0z`,fill:`none`}),(0,v.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z`})]})}),(0,v.jsx)(`ic-hero`,{heading:`Hero heading`,subheading:`Hero description. This is a Hero component, it should be used as a page heading.`,"background-image":m,"disable-background-parallax":!0,children:(0,v.jsxs)(`div`,{slot:`interaction`,children:[(0,v.jsx)(f,{variant:`primary`,style:{marginRight:`var(--ic-space-md)`},children:`Button`}),(0,v.jsx)(f,{variant:`secondary`,style:{marginRight:`var(--ic-space-md)`},children:`Button`}),(0,v.jsx)(r,{href:`https://google.com`,style:{marginTop:`var(--ic-space-sm)`},children:`Help`})]})}),(0,v.jsx)(`br`,{}),(0,v.jsx)(c,{style:{marginBottom:1300},children:`You can scroll.`})]}),name:`With background image (no parallax effect)`,parameters:{layout:`fullscreen`}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <IcHero aligned={args.aligned} backgroundImage={args.backgroundImage} contentAligned={args.contentAligned} disableBackgroundParallax={args.disableBackgroundParallax} heading={args.heading} secondaryHeading={args.secondaryHeading} secondarySubheading={args.secondarySubheading} size={args.size} subheading={args.subheading} theme={args.theme}>
      <IcButton variant="primary" slot="interaction">
        Button
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Button
      </IcButton>
      {args.showSecondary && <IcCardVertical heading="Latest announcement" message="This is some example text that can be included in the card copy." slot="secondary" />}
      <IcTextField label="What is your favourite coffee?" placeholder="Please enter…" helperText="Such as Arabica, Robusta or Liberica" onIcChange={ev => console.log(ev.detail.value)} slot="interaction" />
    </IcHero>,
  args: defaultArgs,
  name: "Playground",
  parameters: {
    layout: "fullscreen"
  },
  argTypes: {
    aligned: {
      options: ["center", "full-width", "left"],
      control: {
        type: "select"
      }
    },
    contentAligned: {
      options: ["center", "left"],
      control: {
        type: "select"
      }
    },
    size: {
      options: ["medium", "small"],
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
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <IcHero heading="Hero heading" subheading="Hero description. This is a Hero component, it should be used as a page heading.">
      <IcButton variant="primary" slot="interaction">
        Button
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Button
      </IcButton>
    </IcHero>,
  name: "Left aligned",
  parameters: {
    layout: "fullscreen"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <IcHero heading="Hero heading" subheading="Hero description. This is a Hero component, it should be used as a page heading." aligned="center">
      <IcButton variant="primary" slot="interaction">
        Button
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Button
      </IcButton>
    </IcHero>,
  name: "Center aligned",
  parameters: {
    layout: "fullscreen"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <IcHero>
      <IcTypography slot="heading" variant="h1">
        Slotted heading
      </IcTypography>
      <IcTypography slot="subheading">Slotted subheading</IcTypography>
      <IcButton variant="primary" slot="interaction">
        Button
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Button
      </IcButton>
    </IcHero>,
  name: "Slotted heading and subheading",
  parameters: {
    layout: "fullscreen"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <IcHero heading="Hero heading" subheading="Hero description. This is a Hero component, it should be used as a page heading." aligned="full-width">
      <IcButton variant="primary" slot="interaction">
        Button
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Button
      </IcButton>
    </IcHero>,
  name: "Full width",
  parameters: {
    layout: "fullscreen"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <IcHero heading="Hero heading" subheading="Hero description. This is a Hero component, it should be used as a page heading." aligned="center" contentAligned="center">
      <IcButton variant="primary" slot="interaction">
        Button
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Button
      </IcButton>
    </IcHero>,
  name: "Content center aligned",
  parameters: {
    layout: "fullscreen"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <IcHero heading="Hero heading" subheading="Hero description. This is a Hero component, it should be used as a page heading." size="small" aligned="center">
      <IcButton variant="primary" slot="interaction">
        Button
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Button
      </IcButton>
    </IcHero>,
  name: "Size small",
  parameters: {
    layout: "fullscreen"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <IcHero heading="Hero heading" subheading="Hero description. This is a Hero component, it should be used as a page heading." secondaryHeading="Secondary Heading" secondarySubheading="This is a secondary description." aligned="center">
      <IcButton variant="primary" slot="interaction">
        Button
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Button
      </IcButton>
    </IcHero>,
  name: "Secondary heading",
  parameters: {
    layout: "fullscreen"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <IcHero heading="Hero heading" subheading="Hero description. This is a Hero component, it should be used as a page heading." aligned="center">
      <IcSearchBar slot="interaction" />
    </IcHero>,
  name: "Search bar interaction",
  parameters: {
    layout: "fullscreen"
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <IcHero heading="Hero heading" subheading="Hero description. This is a Hero component, it should be used as a page heading." aligned="full-width">
      <IcButton variant="primary" slot="interaction">
        Button
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Button
      </IcButton>
      <IcCardVertical heading="Latest announcement" message="This is some example text that can be included in the card copy." slot="secondary" />
    </IcHero>,
  name: "Card right content",
  parameters: {
    layout: "fullscreen"
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <IcHero heading="Hero heading" subheading="Hero description. This is a Hero component, it should be used as a page heading." aligned="center">
      <IcButton variant="primary" slot="interaction">
        Button
      </IcButton>
      <IcButton variant="secondary" slot="interaction">
        Button
      </IcButton>
      <svg slot="secondary" style={{
      width: "300px"
    }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">
        <rect fill="#ff7700" width="1600" height="900" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" />
      </svg>
    </IcHero>,
  name: "Image right content",
  parameters: {
    layout: "fullscreen"
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled />,
  name: "Brand",
  parameters: {
    layout: "fullscreen"
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <ControlledReset />
    <IcTopNavigation app-title="Application Name">
      <svg slot="app-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
      </svg>
    </IcTopNavigation>
    <ic-hero heading="Hero heading" subheading="Hero description. This is a Hero component, it should be used as a page heading." background-image={image}>
      <div slot="interaction">
        <IcButton variant="primary" style={{
          marginRight: "var(--ic-space-md)"
        }}>
          Button
        </IcButton>
        <IcButton variant="secondary" style={{
          marginRight: "var(--ic-space-md)"
        }}>
          Button
        </IcButton>
        <IcLink href="https://google.com" style={{
          marginTop: "var(--ic-space-sm)"
        }}>
          Help
        </IcLink>
      </div>
    </ic-hero>
    <br />
    <IcTypography style={{
      marginBottom: 1300
    }}>You can scroll.</IcTypography>
    </>,
  name: "With background image (parallax effect)",
  parameters: {
    layout: "fullscreen"
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <ControlledReset />
    <ic-top-navigation app-title="Application Name">
      <svg slot="app-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
      </svg>
    </ic-top-navigation>
    <ic-hero heading="Hero heading" subheading="Hero description. This is a Hero component, it should be used as a page heading." background-image={image} disable-background-parallax>
      <div slot="interaction">
        <IcButton variant="primary" style={{
          marginRight: "var(--ic-space-md)"
        }}>
          Button
        </IcButton>
        <IcButton variant="secondary" style={{
          marginRight: "var(--ic-space-md)"
        }}>
          Button
        </IcButton>
        <IcLink href="https://google.com" style={{
          marginTop: "var(--ic-space-sm)"
        }}>
          Help
        </IcLink>
      </div>
    </ic-hero>
    <br />
    <IcTypography style={{
      marginBottom: 1300
    }}>You can scroll.</IcTypography>
    </>,
  name: "With background image (no parallax effect)",
  parameters: {
    layout: "fullscreen"
  }
}`,...I.parameters?.docs?.source}}},L=[`Playground`,`LeftAligned`,`CenterAligned`,`SlottedHeadingAndSubheading`,`FullWidth`,`ContentCenterAligned`,`SizeSmall`,`SecondaryHeading`,`SearchBarInteraction`,`CardRightContent`,`ImageRightContent`,`Brand`,`WithBackgroundImageParallaxEffect`,`WithBackgroundImageNoParallaxEffect`]}));R();export{P as Brand,M as CardRightContent,T as CenterAligned,O as ContentCenterAligned,D as FullWidth,N as ImageRightContent,w as LeftAligned,C as Playground,j as SearchBarInteraction,A as SecondaryHeading,k as SizeSmall,E as SlottedHeadingAndSubheading,I as WithBackgroundImageNoParallaxEffect,F as WithBackgroundImageParallaxEffect,L as __namedExportsOrder,S as default,R as n,g as t};