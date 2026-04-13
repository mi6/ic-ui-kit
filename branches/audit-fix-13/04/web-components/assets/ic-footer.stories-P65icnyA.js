import{x as e}from"./lit-html-CWQq0DyO.js";const d={title:"Web Components/Footer",component:"ic-footer"},p={aligned:"left",breakpoint:"medium",caption:"All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence.",copyright:!0,copyrightText:"© Crown Copyright",description:"The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, please get in touch.",groupLinks:!0},i={render:o=>e` <ic-footer
    aligned=${o.aligned}
    breakpoint=${o.breakpoint}
    caption=${o.caption}
    copyright=${o.copyright}
    copyright-text=${o.copyrightText}
    description=${o.description}
    group-links=${o.groupLinks}
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
  </ic-footer>`,args:p,name:"Playground",argTypes:{aligned:{options:["center","full-width","left"],control:{type:"select"}},breakpoint:{options:["extra large","extra small","large","medium","small"],control:{type:"select"}}}},n={render:()=>e`
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
  `,name:"Ungrouped links"},t={render:()=>e`
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
  `,name:"Grouped links"},r={render:()=>e` <ic-classification-banner
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
      </ic-footer>`,name:"With classification banner"},l={render:()=>e` <ic-theme brand-color="rgb(27, 60, 121)" id="brand-story-ic-theme">
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
    </ic-theme>`,name:"Brand"},c={render:()=>e`
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
  `,name:"With logo links"},a={render:()=>e`
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
  `,name:"Footer with no caption or logo or copyright"},s={render:()=>e`
    <ic-footer
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    >
    </ic-footer>
  `,name:"Footer with no links"},f={render:()=>e`
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
  `,name:"Breakpoint"},k={render:()=>e`
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
  `,name:"Slotted description and caption"},h={render:()=>e`
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
  `,name:"Custom copyright text"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-footer
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    >
    </ic-footer>
  \`,
  name: "Footer with no links"
}`,...s.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const g=["Playground","UngroupedLinks","GroupedLinks","WithClassificationBanner","Brand","WithLogoLinks","FooterWithNoCaptionOrLogoOrCopyright","FooterWithNoLinks","Breakpoint","SlottedDescriptionAndCaption","CustomCopyright"],u=Object.freeze(Object.defineProperty({__proto__:null,Brand:l,Breakpoint:f,CustomCopyright:h,FooterWithNoCaptionOrLogoOrCopyright:a,FooterWithNoLinks:s,GroupedLinks:t,Playground:i,SlottedDescriptionAndCaption:k,UngroupedLinks:n,WithClassificationBanner:r,WithLogoLinks:c,__namedExportsOrder:g,default:d},Symbol.toStringTag,{value:"Module"}));export{u as I};
