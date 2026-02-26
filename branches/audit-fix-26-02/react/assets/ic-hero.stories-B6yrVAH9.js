import{a3 as a,R as e,f as n,A as I,E as S,e as k,a as B,o as v,r as T,m as x}from"./iframe-BZy_AOHB.js";const E=""+new URL("example-background-B9YauEB2.png",import.meta.url).href,z=()=>{const[t,r]=T.useState("rgb(255, 201, 60)"),H=()=>{r("rgb(27, 60, 121)")},C=()=>{r("rgb(255, 201, 60)")};return e.createElement(e.Fragment,null,e.createElement(x,{brandColor:t}),e.createElement(a,{heading:"Hero heading",subheading:"Hero description. This is a Hero component, it should be used as a page heading.",aligned:"center"},e.createElement("div",{slot:"interaction",style:{display:"flex"}},e.createElement(S,{placeholder:"Filter display",label:"Filter display","hide-label":!0,"full-width":"true"}),e.createElement(n,{variant:"primary",style:{marginLeft:"var(--ic-space-md)"}},"Filter")),e.createElement(n,{variant:"secondary",slot:"interaction"},"See all"),e.createElement(v,{href:"https://google.com",slot:"interaction",style:{marginTop:"var(--ic-space-sm)"}},"Help"),e.createElement(I,{heading:"Latest announcement",message:"This is some example text that can be included in the card copy.",slot:"secondary"})),e.createElement(n,{variant:"primary",onClick:H},"Default brand"),e.createElement(n,{variant:"primary",onClick:C},"Sunrise brand"))},w=()=>{const[t,r]=T.useState("rgb(27, 60, 121)"),H=()=>{r("rgb(27, 60, 121)")};return e.createElement(e.Fragment,null,e.createElement(x,{brandColor:t}),e.createElement(n,{variant:"primary",onClick:H},"Reset theme"))},A={aligned:"left",backgroundImage:E,contentAligned:"left",disableBackgroundParallax:!1,heading:"Hero heading",secondaryHeading:"Secondary Heading",secondarySubheading:"This is a secondary description.",size:"medium",subheading:"Hero description. This is a Hero component, it should be used as a page heading.",showSecondary:!1,theme:"inherit"},L={title:"Hero",component:a},o={render:t=>e.createElement(a,{aligned:t.aligned,backgroundImage:t.backgroundImage,contentAligned:t.contentAligned,disableBackgroundParallax:t.disableBackgroundParallax,heading:t.heading,secondaryHeading:t.secondaryHeading,secondarySubheading:t.secondarySubheading,size:t.size,subheading:t.subheading,theme:t.theme},e.createElement(n,{variant:"primary",slot:"interaction"},"Button"),e.createElement(n,{variant:"secondary",slot:"interaction"},"Button"),t.showSecondary&&e.createElement(I,{heading:"Latest announcement",message:"This is some example text that can be included in the card copy.",slot:"secondary"}),e.createElement(S,{label:"What is your favourite coffee?",placeholder:"Please enter…",helperText:"Such as Arabica, Robusta or Liberica",onIcChange:r=>console.log(r.detail.value),slot:"interaction"})),args:A,name:"Playground",parameters:{layout:"fullscreen"},argTypes:{aligned:{options:["center","full-width","left"],control:{type:"select"}},contentAligned:{options:["center","left"],control:{type:"select"}},size:{options:["medium","small"],control:{type:"select"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}}},i={render:()=>e.createElement(a,{heading:"Hero heading",subheading:"Hero description. This is a Hero component, it should be used as a page heading."},e.createElement(n,{variant:"primary",slot:"interaction"},"Button"),e.createElement(n,{variant:"secondary",slot:"interaction"},"Button")),name:"Left aligned",parameters:{layout:"fullscreen"}},s={render:()=>e.createElement(a,{heading:"Hero heading",subheading:"Hero description. This is a Hero component, it should be used as a page heading.",aligned:"center"},e.createElement(n,{variant:"primary",slot:"interaction"},"Button"),e.createElement(n,{variant:"secondary",slot:"interaction"},"Button")),name:"Center aligned",parameters:{layout:"fullscreen"}},c={render:()=>e.createElement(a,null,e.createElement(B,{slot:"heading",variant:"h1"},"Slotted heading"),e.createElement(B,{slot:"subheading"},"Slotted subheading"),e.createElement(n,{variant:"primary",slot:"interaction"},"Button"),e.createElement(n,{variant:"secondary",slot:"interaction"},"Button")),name:"Slotted heading and subheading",parameters:{layout:"fullscreen"}},l={render:()=>e.createElement(a,{heading:"Hero heading",subheading:"Hero description. This is a Hero component, it should be used as a page heading.",aligned:"full-width"},e.createElement(n,{variant:"primary",slot:"interaction"},"Button"),e.createElement(n,{variant:"secondary",slot:"interaction"},"Button")),name:"Full width",parameters:{layout:"fullscreen"}},d={render:()=>e.createElement(a,{heading:"Hero heading",subheading:"Hero description. This is a Hero component, it should be used as a page heading.",aligned:"center",contentAligned:"center"},e.createElement(n,{variant:"primary",slot:"interaction"},"Button"),e.createElement(n,{variant:"secondary",slot:"interaction"},"Button")),name:"Content center aligned",parameters:{layout:"fullscreen"}},g={render:()=>e.createElement(a,{heading:"Hero heading",subheading:"Hero description. This is a Hero component, it should be used as a page heading.",size:"small",aligned:"center"},e.createElement(n,{variant:"primary",slot:"interaction"},"Button"),e.createElement(n,{variant:"secondary",slot:"interaction"},"Button")),name:"Size small",parameters:{layout:"fullscreen"}},m={render:()=>e.createElement(a,{heading:"Hero heading",subheading:"Hero description. This is a Hero component, it should be used as a page heading.",secondaryHeading:"Secondary Heading",secondarySubheading:"This is a secondary description.",aligned:"center"},e.createElement(n,{variant:"primary",slot:"interaction"},"Button"),e.createElement(n,{variant:"secondary",slot:"interaction"},"Button")),name:"Secondary heading",parameters:{layout:"fullscreen"}},p={render:()=>e.createElement(a,{heading:"Hero heading",subheading:"Hero description. This is a Hero component, it should be used as a page heading.",aligned:"center"},e.createElement(k,{slot:"interaction"})),name:"Search bar interaction",parameters:{layout:"fullscreen"}},u={render:()=>e.createElement(a,{heading:"Hero heading",subheading:"Hero description. This is a Hero component, it should be used as a page heading.",aligned:"full-width"},e.createElement(n,{variant:"primary",slot:"interaction"},"Button"),e.createElement(n,{variant:"secondary",slot:"interaction"},"Button"),e.createElement(I,{heading:"Latest announcement",message:"This is some example text that can be included in the card copy.",slot:"secondary"})),name:"Card right content",parameters:{layout:"fullscreen"}},h={render:()=>e.createElement(a,{heading:"Hero heading",subheading:"Hero description. This is a Hero component, it should be used as a page heading.",aligned:"center"},e.createElement(n,{variant:"primary",slot:"interaction"},"Button"),e.createElement(n,{variant:"secondary",slot:"interaction"},"Button"),e.createElement("svg",{slot:"secondary",style:{width:"300px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1600 900"},e.createElement("rect",{fill:"#ff7700",width:"1600",height:"900"}),e.createElement("polygon",{fill:"#cc0000",points:"957 450 539 900 1396 900"}),e.createElement("polygon",{fill:"#aa0000",points:"957 450 872.9 900 1396 900"}),e.createElement("polygon",{fill:"#c50022",points:"-60 900 398 662 816 900"}),e.createElement("polygon",{fill:"#a3001b",points:"337 900 398 662 816 900"}),e.createElement("polygon",{fill:"#be0044",points:"1203 546 1552 900 876 900"}),e.createElement("polygon",{fill:"#9c0036",points:"1203 546 1552 900 1162 900"}),e.createElement("polygon",{fill:"#b80066",points:"641 695 886 900 367 900"}),e.createElement("polygon",{fill:"#960052",points:"587 900 641 695 886 900"}),e.createElement("polygon",{fill:"#b10088",points:"1710 900 1401 632 1096 900"}),e.createElement("polygon",{fill:"#8f006d",points:"1710 900 1401 632 1365 900"}),e.createElement("polygon",{fill:"#aa00aa",points:"1210 900 971 687 725 900"}),e.createElement("polygon",{fill:"#880088",points:"943 900 1210 900 971 687"}))),name:"Image right content",parameters:{layout:"fullscreen"}},y={render:()=>e.createElement(z,null),name:"Brand",parameters:{layout:"fullscreen"}},b={render:()=>e.createElement(e.Fragment,null,e.createElement(w,null),e.createElement(IcTopNavigation,{"app-title":"Application Name"},e.createElement("svg",{slot:"app-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"}))),e.createElement("ic-hero",{heading:"Hero heading",subheading:"Hero description. This is a Hero component, it should be used as a page heading.","background-image":E},e.createElement("div",{slot:"interaction"},e.createElement(n,{variant:"primary",style:{marginRight:"var(--ic-space-md)"}},"Button"),e.createElement(n,{variant:"secondary",style:{marginRight:"var(--ic-space-md)"}},"Button"),e.createElement(v,{href:"https://google.com",style:{marginTop:"var(--ic-space-sm)"}},"Help"))),e.createElement("br",null),e.createElement(B,{style:{marginBottom:1300}},"You can scroll.")),name:"With background image (parallax effect)",parameters:{layout:"fullscreen"}},f={render:()=>e.createElement(e.Fragment,null,e.createElement(w,null),e.createElement("ic-top-navigation",{"app-title":"Application Name"},e.createElement("svg",{slot:"app-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"}))),e.createElement("ic-hero",{heading:"Hero heading",subheading:"Hero description. This is a Hero component, it should be used as a page heading.","background-image":E,"disable-background-parallax":!0},e.createElement("div",{slot:"interaction"},e.createElement(n,{variant:"primary",style:{marginRight:"var(--ic-space-md)"}},"Button"),e.createElement(n,{variant:"secondary",style:{marginRight:"var(--ic-space-md)"}},"Button"),e.createElement(v,{href:"https://google.com",style:{marginTop:"var(--ic-space-sm)"}},"Help"))),e.createElement("br",null),e.createElement(B,{style:{marginBottom:1300}},"You can scroll.")),name:"With background image (no parallax effect)",parameters:{layout:"fullscreen"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <IcHero heading="Hero heading" subheading="Hero description. This is a Hero component, it should be used as a page heading." aligned="center">
      <IcSearchBar slot="interaction" />
    </IcHero>,
  name: "Search bar interaction",
  parameters: {
    layout: "fullscreen"
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled />,
  name: "Brand",
  parameters: {
    layout: "fullscreen"
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const R=["Playground","LeftAligned","CenterAligned","SlottedHeadingAndSubheading","FullWidth","ContentCenterAligned","SizeSmall","SecondaryHeading","SearchBarInteraction","CardRightContent","ImageRightContent","Brand","WithBackgroundImageParallaxEffect","WithBackgroundImageNoParallaxEffect"],F=Object.freeze(Object.defineProperty({__proto__:null,Brand:y,CardRightContent:u,CenterAligned:s,ContentCenterAligned:d,FullWidth:l,ImageRightContent:h,LeftAligned:i,Playground:o,SearchBarInteraction:p,SecondaryHeading:m,SizeSmall:g,SlottedHeadingAndSubheading:c,WithBackgroundImageNoParallaxEffect:f,WithBackgroundImageParallaxEffect:b,__namedExportsOrder:R,default:L},Symbol.toStringTag,{value:"Module"}));export{F as I};
