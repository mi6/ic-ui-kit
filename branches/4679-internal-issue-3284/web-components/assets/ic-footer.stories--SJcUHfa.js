import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./lit-html-CMAkC4Hj.js";var i=e({Brand:()=>d,Breakpoint:()=>h,CustomCopyright:()=>_,FooterWithNoCaptionOrLogoOrCopyright:()=>p,FooterWithNoLinks:()=>m,GroupedLinks:()=>l,Playground:()=>s,SlottedDescriptionAndCaption:()=>g,UngroupedLinks:()=>c,WithClassificationBanner:()=>u,WithLogoLinks:()=>f,__namedExportsOrder:()=>v,default:()=>a}),a,o,s,c,l,u,d,f,p,m,h,g,_,v,y=t((()=>{n(),a={title:`Web Components/Footer`,component:`ic-footer`},o={aligned:`left`,breakpoint:`medium`,caption:`All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence.`,copyright:!0,copyrightText:`© Crown Copyright`,description:`The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, please get in touch.`,groupLinks:!0},s={render:e=>r` <ic-footer
    aligned=${e.aligned}
    breakpoint=${e.breakpoint}
    caption=${e.caption}
    copyright=${e.copyright}
    copyright-text=${e.copyrightText}
    description=${e.description}
    group-links=${e.groupLinks}
  >
    <ic-footer-link-group slot="link" label="Links 1">
      <ic-footer-link href="/">Get Started</ic-footer-link>
      <ic-footer-link href="/">Accessibility</ic-footer-link>
      <ic-footer-link href="/">Styles</ic-footer-link>
    </ic-footer-link-group>
    <ic-footer-link-group slot="link" label="Links 2">
      <ic-footer-link href="/">Get Started</ic-footer-link>
      <ic-footer-link href="/">Accessibility</ic-footer-link>
      <ic-footer-link href="/">Styles</ic-footer-link>
    </ic-footer-link-group>
    <ic-footer-link-group slot="link" label="Links 3">
      <ic-footer-link href="/">Get Started</ic-footer-link>
      <ic-footer-link href="/">Accessibility</ic-footer-link>
      <ic-footer-link href="/">Styles</ic-footer-link>
    </ic-footer-link-group>
    <div
      slot="logo"
      style="
          width:100px;
          height:100px;
          display:flex;
          align-items:center;
          justify-content:center;
          background-color:var(--ic-brand-color-primary);
          color:var(--ic-brand-text-color);"
    >
      Logo
    </div>
  </ic-footer>`,args:o,name:`Playground`,argTypes:{aligned:{options:[`center`,`full-width`,`left`],control:{type:`select`}},breakpoint:{options:[`extra large`,`extra small`,`large`,`medium`,`small`],control:{type:`select`}}}},c={render:()=>r`
    <ic-footer
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    >
      <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
      <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
      <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
      <ic-footer-link slot="link" href="/" target="_blank"
        >Components</ic-footer-link
      >
      <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
      <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
      <div
        slot="logo"
        style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
      >
        Logo
      </div>
    </ic-footer>
  `,name:`Ungrouped links`},l={render:()=>r`
    <ic-footer
      group-links
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    >
      <ic-footer-link-group slot="link" label="Links 1">
        <ic-footer-link href="/">Get Started</ic-footer-link>
        <ic-footer-link href="/">Accessibility</ic-footer-link>
        <ic-footer-link href="/">Styles</ic-footer-link>
        <ic-footer-link href="/" target="_blank">Components</ic-footer-link>
        <ic-footer-link href="/">Patterns</ic-footer-link>
        <ic-footer-link href="/">Design toolkit</ic-footer-link>
      </ic-footer-link-group>
      <ic-footer-link-group slot="link" label="Links 2">
        <ic-footer-link href="/">Get Started</ic-footer-link>
        <ic-footer-link href="/">Accessibility</ic-footer-link>
        <ic-footer-link href="/">Styles</ic-footer-link>
        <ic-footer-link href="/">Components</ic-footer-link>
        <ic-footer-link href="/">Patterns</ic-footer-link>
        <ic-footer-link href="/">Design toolkit</ic-footer-link>
      </ic-footer-link-group>
      <ic-footer-link-group slot="link" label="Links 3">
        <ic-footer-link href="/">Get Started</ic-footer-link>
        <ic-footer-link href="/">Accessibility</ic-footer-link>
        <ic-footer-link href="/">Styles</ic-footer-link>
        <ic-footer-link href="/">Components</ic-footer-link>
        <ic-footer-link href="/">Patterns</ic-footer-link>
        <ic-footer-link href="/">Design toolkit</ic-footer-link>
      </ic-footer-link-group>
      <div
        slot="logo"
        style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
      >
        Logo
      </div>
    </ic-footer>
  `,name:`Grouped links`},u={render:()=>r` <ic-classification-banner
        classification="official"
      ></ic-classification-banner>
      <ic-footer
        aligned="full-width"
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        style="position:fixed;bottom:0;left:0;right:0;"
      >
        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
        <ic-footer-link slot="link" href="/">Components</ic-footer-link>
        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
        >
          Logo
        </div>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
        >
          Logo
        </div>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
        >
          Logo
        </div>
      </ic-footer>`,name:`With classification banner`},d={render:()=>r` <ic-theme brand-color="rgb(27, 60, 121)" id="brand-story-ic-theme">
      <ic-button
        variant="primary"
        id="default-btn"
        onClick="document.querySelector('#brand-story-ic-theme').brandColor='rgb(27, 60, 121)'"
      >
        Default brand
      </ic-button>
      <ic-button
        variant="primary"
        id="custom-btn"
        onClick="document.querySelector('#brand-story-ic-theme').brandColor='rgb(255, 201, 60)'"
      >
        Sunrise brand
      </ic-button>
      <ic-footer
        group-links
        aligned="full-width"
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
            please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        style="position:fixed;bottom:0;left:0;right:0;"
      >
        <ic-footer-link-group slot="link" label="Links 1">
          <ic-footer-link href="/">Get Started</ic-footer-link>
          <ic-footer-link href="/">Accessibility</ic-footer-link>
          <ic-footer-link href="/">Styles</ic-footer-link>
          <ic-footer-link href="/" target="_blank">Components</ic-footer-link>
          <ic-footer-link href="/">Patterns</ic-footer-link>
          <ic-footer-link href="/">Design toolkit</ic-footer-link>
        </ic-footer-link-group>
        <ic-footer-link-group slot="link" label="Links 2">
          <ic-footer-link href="/">Get Started</ic-footer-link>
          <ic-footer-link href="/">Accessibility</ic-footer-link>
          <ic-footer-link href="/">Styles</ic-footer-link>
          <ic-footer-link href="/">Components</ic-footer-link>
          <ic-footer-link href="/">Patterns</ic-footer-link>
          <ic-footer-link href="/">Design toolkit</ic-footer-link>
        </ic-footer-link-group>
        <ic-footer-link-group slot="link" label="Links 3">
          <ic-footer-link href="/">Get Started</ic-footer-link>
          <ic-footer-link href="/">Accessibility</ic-footer-link>
          <ic-footer-link href="/">Styles</ic-footer-link>
          <ic-footer-link href="/">Components</ic-footer-link>
          <ic-footer-link href="/">Patterns</ic-footer-link>
          <ic-footer-link href="/">Design toolkit</ic-footer-link>
        </ic-footer-link-group>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
            background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
        >
          Logo
        </div>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
            background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
        >
          Logo
        </div>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
            background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
        >
          Logo
        </div>
      </ic-footer>
    </ic-theme>`,name:`Brand`},f={render:()=>r`
    <ic-footer
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    >
      <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
      <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
      <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
      <ic-footer-link slot="link" href="/">Components</ic-footer-link>
      <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
      <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
      <div slot="logo" style="display:flex;gap:var(--ic-space-sm);">
        <ic-footer-link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#FFFFFF"
            aria-label="logo"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
            />
          </svg>
        </ic-footer-link>
        <ic-footer-link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#FFFFFF"
            aria-label="logo"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
            />
          </svg>
        </ic-footer-link>
        <ic-footer-link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#FFFFFF"
            aria-label="logo"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
            />
          </svg>
        </ic-footer-link>
      </div>
    </ic-footer>
  `,name:`With logo links`},p={render:()=>r`
    <ic-footer
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      copyright="false"
    >
      <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
      <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
      <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
      <ic-footer-link slot="link" href="/" target="_blank"
        >Components</ic-footer-link
      >
      <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
      <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
    </ic-footer>
  `,name:`Footer with no caption or logo or copyright`},m={render:()=>r`
    <ic-footer
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    >
    </ic-footer>
  `,name:`Footer with no links`},h={render:()=>r`
    <ic-footer
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      breakpoint="extra large"
    >
      <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
      <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
      <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
      <ic-footer-link slot="link" href="/">Components</ic-footer-link>
      <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
      <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
      <div slot="logo" style="display:flex;gap:var(--ic-space-sm);">
        <ic-footer-link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#FFFFFF"
            aria-label="logo"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
            />
          </svg>
        </ic-footer-link>
        <ic-footer-link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#FFFFFF"
            aria-label="logo"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
            />
          </svg>
        </ic-footer-link>
        <ic-footer-link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#FFFFFF"
            aria-label="logo"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
            />
          </svg>
        </ic-footer-link>
      </div>
    </ic-footer>
  `,name:`Breakpoint`},g={render:()=>r`
    <ic-footer>
      <ic-typography slot="description"
        >The ICDS is maintained by the Design Practice Team. If you've got a
        question or want to feedback, please get in touch.</ic-typography
      >
      <ic-typography slot="caption"
        >All content is available under the Open Government Licence v3.0, except
        source code and code examples which are available under the MIT
        Licence.</ic-typography
      >
    </ic-footer>
  `,name:`Slotted description and caption`},_={render:()=>r`
    <ic-footer
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      copyright-text="© 2025 Coffeehouse Inc. All rights reserved."
    >
      <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
      <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
      <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
      <ic-footer-link slot="link" href="/" target="_blank"
        >Components</ic-footer-link
      >
      <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
      <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
      <div
        slot="logo"
        style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
      >
        Logo
      </div>
    </ic-footer>
  `,name:`Custom copyright text`},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => html\` <ic-footer
    aligned=\${args.aligned}
    breakpoint=\${args.breakpoint}
    caption=\${args.caption}
    copyright=\${args.copyright}
    copyright-text=\${args.copyrightText}
    description=\${args.description}
    group-links=\${args.groupLinks}
  >
    <ic-footer-link-group slot="link" label="Links 1">
      <ic-footer-link href="/">Get Started</ic-footer-link>
      <ic-footer-link href="/">Accessibility</ic-footer-link>
      <ic-footer-link href="/">Styles</ic-footer-link>
    </ic-footer-link-group>
    <ic-footer-link-group slot="link" label="Links 2">
      <ic-footer-link href="/">Get Started</ic-footer-link>
      <ic-footer-link href="/">Accessibility</ic-footer-link>
      <ic-footer-link href="/">Styles</ic-footer-link>
    </ic-footer-link-group>
    <ic-footer-link-group slot="link" label="Links 3">
      <ic-footer-link href="/">Get Started</ic-footer-link>
      <ic-footer-link href="/">Accessibility</ic-footer-link>
      <ic-footer-link href="/">Styles</ic-footer-link>
    </ic-footer-link-group>
    <div
      slot="logo"
      style="
          width:100px;
          height:100px;
          display:flex;
          align-items:center;
          justify-content:center;
          background-color:var(--ic-brand-color-primary);
          color:var(--ic-brand-text-color);"
    >
      Logo
    </div>
  </ic-footer>\`,
  args: defaultArgs,
  name: "Playground",
  argTypes: {
    aligned: {
      options: ["center", "full-width", "left"],
      control: {
        type: "select"
      }
    },
    breakpoint: {
      options: ["extra large", "extra small", "large", "medium", "small"],
      control: {
        type: "select"
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-footer
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    >
      <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
      <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
      <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
      <ic-footer-link slot="link" href="/" target="_blank"
        >Components</ic-footer-link
      >
      <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
      <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
      <div
        slot="logo"
        style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
      >
        Logo
      </div>
    </ic-footer>
  \`,
  name: "Ungrouped links"
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-footer
      group-links
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    >
      <ic-footer-link-group slot="link" label="Links 1">
        <ic-footer-link href="/">Get Started</ic-footer-link>
        <ic-footer-link href="/">Accessibility</ic-footer-link>
        <ic-footer-link href="/">Styles</ic-footer-link>
        <ic-footer-link href="/" target="_blank">Components</ic-footer-link>
        <ic-footer-link href="/">Patterns</ic-footer-link>
        <ic-footer-link href="/">Design toolkit</ic-footer-link>
      </ic-footer-link-group>
      <ic-footer-link-group slot="link" label="Links 2">
        <ic-footer-link href="/">Get Started</ic-footer-link>
        <ic-footer-link href="/">Accessibility</ic-footer-link>
        <ic-footer-link href="/">Styles</ic-footer-link>
        <ic-footer-link href="/">Components</ic-footer-link>
        <ic-footer-link href="/">Patterns</ic-footer-link>
        <ic-footer-link href="/">Design toolkit</ic-footer-link>
      </ic-footer-link-group>
      <ic-footer-link-group slot="link" label="Links 3">
        <ic-footer-link href="/">Get Started</ic-footer-link>
        <ic-footer-link href="/">Accessibility</ic-footer-link>
        <ic-footer-link href="/">Styles</ic-footer-link>
        <ic-footer-link href="/">Components</ic-footer-link>
        <ic-footer-link href="/">Patterns</ic-footer-link>
        <ic-footer-link href="/">Design toolkit</ic-footer-link>
      </ic-footer-link-group>
      <div
        slot="logo"
        style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
      >
        Logo
      </div>
    </ic-footer>
  \`,
  name: "Grouped links"
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-classification-banner
        classification="official"
      ></ic-classification-banner>
      <ic-footer
        aligned="full-width"
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        style="position:fixed;bottom:0;left:0;right:0;"
      >
        <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
        <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
        <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
        <ic-footer-link slot="link" href="/">Components</ic-footer-link>
        <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
        <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
        >
          Logo
        </div>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
        >
          Logo
        </div>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
        >
          Logo
        </div>
      </ic-footer>\`,
  name: "With classification banner"
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-theme brand-color="rgb(27, 60, 121)" id="brand-story-ic-theme">
      <ic-button
        variant="primary"
        id="default-btn"
        onClick="document.querySelector('#brand-story-ic-theme').brandColor='rgb(27, 60, 121)'"
      >
        Default brand
      </ic-button>
      <ic-button
        variant="primary"
        id="custom-btn"
        onClick="document.querySelector('#brand-story-ic-theme').brandColor='rgb(255, 201, 60)'"
      >
        Sunrise brand
      </ic-button>
      <ic-footer
        group-links
        aligned="full-width"
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
            please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        style="position:fixed;bottom:0;left:0;right:0;"
      >
        <ic-footer-link-group slot="link" label="Links 1">
          <ic-footer-link href="/">Get Started</ic-footer-link>
          <ic-footer-link href="/">Accessibility</ic-footer-link>
          <ic-footer-link href="/">Styles</ic-footer-link>
          <ic-footer-link href="/" target="_blank">Components</ic-footer-link>
          <ic-footer-link href="/">Patterns</ic-footer-link>
          <ic-footer-link href="/">Design toolkit</ic-footer-link>
        </ic-footer-link-group>
        <ic-footer-link-group slot="link" label="Links 2">
          <ic-footer-link href="/">Get Started</ic-footer-link>
          <ic-footer-link href="/">Accessibility</ic-footer-link>
          <ic-footer-link href="/">Styles</ic-footer-link>
          <ic-footer-link href="/">Components</ic-footer-link>
          <ic-footer-link href="/">Patterns</ic-footer-link>
          <ic-footer-link href="/">Design toolkit</ic-footer-link>
        </ic-footer-link-group>
        <ic-footer-link-group slot="link" label="Links 3">
          <ic-footer-link href="/">Get Started</ic-footer-link>
          <ic-footer-link href="/">Accessibility</ic-footer-link>
          <ic-footer-link href="/">Styles</ic-footer-link>
          <ic-footer-link href="/">Components</ic-footer-link>
          <ic-footer-link href="/">Patterns</ic-footer-link>
          <ic-footer-link href="/">Design toolkit</ic-footer-link>
        </ic-footer-link-group>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
            background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
        >
          Logo
        </div>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
            background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
        >
          Logo
        </div>
        <div
          slot="logo"
          style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
            background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
        >
          Logo
        </div>
      </ic-footer>
    </ic-theme>\`,
  name: "Brand"
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-footer
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    >
      <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
      <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
      <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
      <ic-footer-link slot="link" href="/">Components</ic-footer-link>
      <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
      <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
      <div slot="logo" style="display:flex;gap:var(--ic-space-sm);">
        <ic-footer-link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#FFFFFF"
            aria-label="logo"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
            />
          </svg>
        </ic-footer-link>
        <ic-footer-link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#FFFFFF"
            aria-label="logo"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
            />
          </svg>
        </ic-footer-link>
        <ic-footer-link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#FFFFFF"
            aria-label="logo"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
            />
          </svg>
        </ic-footer-link>
      </div>
    </ic-footer>
  \`,
  name: "With logo links"
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-footer
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      copyright="false"
    >
      <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
      <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
      <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
      <ic-footer-link slot="link" href="/" target="_blank"
        >Components</ic-footer-link
      >
      <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
      <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
    </ic-footer>
  \`,
  name: "Footer with no caption or logo or copyright"
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-footer
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    >
    </ic-footer>
  \`,
  name: "Footer with no links"
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-footer
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      breakpoint="extra large"
    >
      <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
      <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
      <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
      <ic-footer-link slot="link" href="/">Components</ic-footer-link>
      <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
      <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
      <div slot="logo" style="display:flex;gap:var(--ic-space-sm);">
        <ic-footer-link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#FFFFFF"
            aria-label="logo"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
            />
          </svg>
        </ic-footer-link>
        <ic-footer-link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#FFFFFF"
            aria-label="logo"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
            />
          </svg>
        </ic-footer-link>
        <ic-footer-link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#FFFFFF"
            aria-label="logo"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
            />
          </svg>
        </ic-footer-link>
      </div>
    </ic-footer>
  \`,
  name: "Breakpoint"
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-footer>
      <ic-typography slot="description"
        >The ICDS is maintained by the Design Practice Team. If you've got a
        question or want to feedback, please get in touch.</ic-typography
      >
      <ic-typography slot="caption"
        >All content is available under the Open Government Licence v3.0, except
        source code and code examples which are available under the MIT
        Licence.</ic-typography
      >
    </ic-footer>
  \`,
  name: "Slotted description and caption"
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-footer
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      copyright-text="© 2025 Coffeehouse Inc. All rights reserved."
    >
      <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
      <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
      <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
      <ic-footer-link slot="link" href="/" target="_blank"
        >Components</ic-footer-link
      >
      <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
      <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
      <div
        slot="logo"
        style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
      >
        Logo
      </div>
    </ic-footer>
  \`,
  name: "Custom copyright text"
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`UngroupedLinks`,`GroupedLinks`,`WithClassificationBanner`,`Brand`,`WithLogoLinks`,`FooterWithNoCaptionOrLogoOrCopyright`,`FooterWithNoLinks`,`Breakpoint`,`SlottedDescriptionAndCaption`,`CustomCopyright`]}));y();export{d as Brand,h as Breakpoint,_ as CustomCopyright,p as FooterWithNoCaptionOrLogoOrCopyright,m as FooterWithNoLinks,l as GroupedLinks,s as Playground,g as SlottedDescriptionAndCaption,c as UngroupedLinks,u as WithClassificationBanner,f as WithLogoLinks,v as __namedExportsOrder,a as default,y as n,i as t};