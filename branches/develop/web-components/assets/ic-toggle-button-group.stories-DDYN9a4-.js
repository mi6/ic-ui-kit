import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./lit-html-CwvQb_NC.js";var i=e({Disabled:()=>u,HideOutline:()=>p,Loading:()=>d,Monochrome:()=>l,Playground:()=>h,SelectType:()=>s,Sizes:()=>c,WithIcons:()=>f,__namedExportsOrder:()=>g,default:()=>o}),a,o,s,c,l,u,d,f,p,m,h,g,_=t((()=>{n(),a={accessibleLabel:``,disabled:!1,fullWidth:!1,iconPlacement:`left`,loading:!1,monochrome:!1,outline:!0,selectMethod:`manual`,selectType:`single`,size:`medium`,theme:`inherit`,variant:`default`,toggleAccessibleLabel:``,toggleDisabled:!1,toggleFullWidth:!1,toggleIconPlacement:`left`,toggleLabel:`Custom Toggle`,toggleLoading:!1,toggleMonochrome:!1,toggleSize:`medium`,toggleTheme:`inherit`,toggleChecked:!1,toggleVariant:`default`},o={title:`Web Components/Toggle button group`,component:`ic-toggle-button-group`},s={render:()=>r`
    <ic-typography>Single and manual</ic-typography>
    <ic-toggle-button-group
      select-type="single"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <ic-typography>Single and auto</ic-typography>
    <ic-toggle-button-group
      select-method="auto"
      accessible-label="Single and auto select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <ic-typography>Multi and manual</ic-typography>
    <ic-toggle-button-group
      select-type="multi"
      accessible-label="Multi and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
  `,name:`Select type`},c={render:()=>r`
    <ic-typography>Default</ic-typography>
    <ic-toggle-button-group
      label="Label for single and manual"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <ic-typography>Small</ic-typography>
    <ic-toggle-button-group
      size="small"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <ic-typography>Large</ic-typography>
    <ic-toggle-button-group
      size="large"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <ic-typography>Full width</ic-typography>
    <ic-toggle-button-group
      full-width="true"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <ic-typography>Custom width</ic-typography>
    <ic-toggle-button-group
      style="width: 75%;"
      label="Label for single and manual"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button
        label="First toggle"
        class="expand-toggle-group-child"
      ></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <ic-typography>Large label</ic-typography>
    <ic-toggle-button-group
      style="width: 40%;"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="Toggle"></ic-toggle-button>
      <ic-toggle-button
        label="Toggle with a very very long label"
      ></ic-toggle-button>
    </ic-toggle-button-group>
  `,name:`Sizes`},l={render:()=>r`<ic-toggle-button-group
      monochrome="true"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>`,name:`Monochrome`},u={render:()=>r`<ic-typography>Disabled</ic-typography>
      <ic-toggle-button-group
        disabled="true"
        accessible-label="Single and manual select toggle group"
      >
        <ic-toggle-button label="First toggle"></ic-toggle-button>
        <ic-toggle-button label="Second toggle"></ic-toggle-button>
        <ic-toggle-button label="Third toggle"></ic-toggle-button>
      </ic-toggle-button-group>`,name:`Disabled`},d={render:()=>r`<ic-toggle-button-group
        loading="true"
        accessible-label="Single and manual select toggle group"
      >
        <ic-toggle-button label="First toggle"></ic-toggle-button>
        <ic-toggle-button label="Second toggle"></ic-toggle-button>
        <ic-toggle-button label="Third toggle"></ic-toggle-button>
      </ic-toggle-button-group>
      <br />
      <ic-toggle-button-group
        loading="true"
        monochrome="true"
        accessible-label="Single and manual select toggle group"
      >
        <ic-toggle-button label="First toggle"></ic-toggle-button>
        <ic-toggle-button label="Second toggle"></ic-toggle-button>
        <ic-toggle-button label="Third toggle"></ic-toggle-button>
      </ic-toggle-button-group> `,name:`Loading`},f={render:()=>r`<ic-typography>Icon only</ic-typography>
      <ic-toggle-button-group
        variant="icon"
        accessible-label="A group of buttons"
      >
        <ic-toggle-button accessible-label="refresh">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
        <ic-toggle-button accessible-label="refresh">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
      </ic-toggle-button-group>
      <br />
      <span>Tooltip placement</span>
      <ic-toggle-button-group
        variant="icon"
        accessible-label="A group of buttons"
        tooltip-placement="right"
      >
        <ic-toggle-button variant="icon" accessible-label="refresh">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
        <ic-toggle-button variant="icon" accessible-label="refresh">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
      </ic-toggle-button-group>
      <br />
      <span>Icon right</span>
      <ic-toggle-button-group
        icon-placement="right"
        accessible-label="Single and manual select toggle group"
      >
        <ic-toggle-button label="Toggle">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
        <ic-toggle-button label="Toggle">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
      </ic-toggle-button-group>
      <br />
      <ic-typography>Icon top</ic-typography>
      <ic-toggle-button-group
        icon-placement="top"
        accessible-label="Single and manual select toggle group"
      >
        <ic-toggle-button label="Toggle">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
        <ic-toggle-button label="Toggle">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
      </ic-toggle-button-group>
      <br />
      <ic-typography>Icon left</ic-typography>
      <ic-toggle-button-group
        icon-placement="left"
        accessible-label="Single and manual select toggle group"
      >
        <ic-toggle-button label="Toggle">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
        <ic-toggle-button label="Toggle">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
      </ic-toggle-button-group> `,name:`With icons`},p={render:()=>r`<ic-toggle-button-group
      select-type="single"
      accessible-label="Hide outline toggle group"
      outline="false"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>`,name:`Hide outline`},m=`inline-radio`,h={render:e=>r`<ic-toggle-button-group
      accessible-label=${e.accessibleLabel}
      disabled=${e.disabled}
      full-width=${e.fullWidth}
      icon-placement=${e.iconPlacement}
      loading=${e.loading}
      monochrome=${e.monochrome}
      outline=${e.outline}
      select-method=${e.selectMethod}
      select-type=${e.selectType}
      size=${e.size}
      theme=${e.theme}
      variant=${e.variant}
    >
      <ic-toggle-button
        accessible-label=${e.toggleAccessibleLabel}
        disabled=${e.toggleDisabled}
        full-width=${e.toggleFullWidth}
        icon-placement=${e.toggleIconPlacement}
        label=${e.toggleLabel}
        loading=${e.toggleLoading}
        monochrome=${e.toggleMonochrome}
        size=${e.toggleSize}
        theme=${e.toggleTheme}
        checked=${e.toggleChecked}
        variant=${e.toggleVariant}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
          slot="icon"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>`,args:a,argTypes:{accessibleLabel:{control:{type:`text`}},disabled:{control:{type:`boolean`}},fullWidth:{control:{type:`boolean`}},iconPlacement:{options:[`left`,`right`,`top`],control:{type:`radio`}},loading:{control:{type:`boolean`}},monochrome:{control:{type:`boolean`}},selectMethod:{options:[`manual`,`auto`],control:{type:m}},selectType:{options:[`single`,`multi`],control:{type:m}},size:{options:[`medium`,`small`,`large`],control:{type:`radio`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:m}},variant:{options:[`default`,`icon`],control:{type:m}},toggleAccessibleLabel:{control:{type:`text`}},toggleDisabled:{control:{type:`boolean`}},toggleFullWidth:{control:{type:`boolean`}},toggleIconPlacement:{options:[`left`,`right`,`top`],control:{type:`radio`}},toggleLabel:{control:{type:`text`}},toggleLoading:{control:{type:`boolean`}},toggleMonochrome:{control:{type:`boolean`}},toggleSize:{options:[`medium`,`small`,`large`],control:{type:`radio`}},toggleTheme:{options:[`inherit`,`light`,`dark`],control:{type:m}},toggleChecked:{control:{type:`boolean`}},toggleVariant:{options:[`default`,`icon`],control:{type:m}}},name:`Playground`},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-typography>Single and manual</ic-typography>
    <ic-toggle-button-group
      select-type="single"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <ic-typography>Single and auto</ic-typography>
    <ic-toggle-button-group
      select-method="auto"
      accessible-label="Single and auto select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <ic-typography>Multi and manual</ic-typography>
    <ic-toggle-button-group
      select-type="multi"
      accessible-label="Multi and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
  \`,
  name: "Select type"
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-typography>Default</ic-typography>
    <ic-toggle-button-group
      label="Label for single and manual"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <ic-typography>Small</ic-typography>
    <ic-toggle-button-group
      size="small"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <ic-typography>Large</ic-typography>
    <ic-toggle-button-group
      size="large"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <ic-typography>Full width</ic-typography>
    <ic-toggle-button-group
      full-width="true"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <ic-typography>Custom width</ic-typography>
    <ic-toggle-button-group
      style="width: 75%;"
      label="Label for single and manual"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button
        label="First toggle"
        class="expand-toggle-group-child"
      ></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>
    <br />
    <ic-typography>Large label</ic-typography>
    <ic-toggle-button-group
      style="width: 40%;"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="Toggle"></ic-toggle-button>
      <ic-toggle-button
        label="Toggle with a very very long label"
      ></ic-toggle-button>
    </ic-toggle-button-group>
  \`,
  name: "Sizes"
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-toggle-button-group
      monochrome="true"
      accessible-label="Single and manual select toggle group"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>\`,
  name: "Monochrome"
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-typography>Disabled</ic-typography>
      <ic-toggle-button-group
        disabled="true"
        accessible-label="Single and manual select toggle group"
      >
        <ic-toggle-button label="First toggle"></ic-toggle-button>
        <ic-toggle-button label="Second toggle"></ic-toggle-button>
        <ic-toggle-button label="Third toggle"></ic-toggle-button>
      </ic-toggle-button-group>\`,
  name: "Disabled"
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-toggle-button-group
        loading="true"
        accessible-label="Single and manual select toggle group"
      >
        <ic-toggle-button label="First toggle"></ic-toggle-button>
        <ic-toggle-button label="Second toggle"></ic-toggle-button>
        <ic-toggle-button label="Third toggle"></ic-toggle-button>
      </ic-toggle-button-group>
      <br />
      <ic-toggle-button-group
        loading="true"
        monochrome="true"
        accessible-label="Single and manual select toggle group"
      >
        <ic-toggle-button label="First toggle"></ic-toggle-button>
        <ic-toggle-button label="Second toggle"></ic-toggle-button>
        <ic-toggle-button label="Third toggle"></ic-toggle-button>
      </ic-toggle-button-group> \`,
  name: "Loading"
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-typography>Icon only</ic-typography>
      <ic-toggle-button-group
        variant="icon"
        accessible-label="A group of buttons"
      >
        <ic-toggle-button accessible-label="refresh">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
        <ic-toggle-button accessible-label="refresh">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
      </ic-toggle-button-group>
      <br />
      <span>Tooltip placement</span>
      <ic-toggle-button-group
        variant="icon"
        accessible-label="A group of buttons"
        tooltip-placement="right"
      >
        <ic-toggle-button variant="icon" accessible-label="refresh">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
        <ic-toggle-button variant="icon" accessible-label="refresh">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
      </ic-toggle-button-group>
      <br />
      <span>Icon right</span>
      <ic-toggle-button-group
        icon-placement="right"
        accessible-label="Single and manual select toggle group"
      >
        <ic-toggle-button label="Toggle">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
        <ic-toggle-button label="Toggle">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
      </ic-toggle-button-group>
      <br />
      <ic-typography>Icon top</ic-typography>
      <ic-toggle-button-group
        icon-placement="top"
        accessible-label="Single and manual select toggle group"
      >
        <ic-toggle-button label="Toggle">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
        <ic-toggle-button label="Toggle">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
      </ic-toggle-button-group>
      <br />
      <ic-typography>Icon left</ic-typography>
      <ic-toggle-button-group
        icon-placement="left"
        accessible-label="Single and manual select toggle group"
      >
        <ic-toggle-button label="Toggle">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
        <ic-toggle-button label="Toggle">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </ic-toggle-button>
      </ic-toggle-button-group> \`,
  name: "With icons"
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-toggle-button-group
      select-type="single"
      accessible-label="Hide outline toggle group"
      outline="false"
    >
      <ic-toggle-button label="First toggle"></ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>\`,
  name: "Hide outline"
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ic-toggle-button-group
      accessible-label=\${args.accessibleLabel}
      disabled=\${args.disabled}
      full-width=\${args.fullWidth}
      icon-placement=\${args.iconPlacement}
      loading=\${args.loading}
      monochrome=\${args.monochrome}
      outline=\${args.outline}
      select-method=\${args.selectMethod}
      select-type=\${args.selectType}
      size=\${args.size}
      theme=\${args.theme}
      variant=\${args.variant}
    >
      <ic-toggle-button
        accessible-label=\${args.toggleAccessibleLabel}
        disabled=\${args.toggleDisabled}
        full-width=\${args.toggleFullWidth}
        icon-placement=\${args.toggleIconPlacement}
        label=\${args.toggleLabel}
        loading=\${args.toggleLoading}
        monochrome=\${args.toggleMonochrome}
        size=\${args.toggleSize}
        theme=\${args.toggleTheme}
        checked=\${args.toggleChecked}
        variant=\${args.toggleVariant}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
          slot="icon"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-toggle-button>
      <ic-toggle-button label="Second toggle"></ic-toggle-button>
      <ic-toggle-button label="Third toggle"></ic-toggle-button>
    </ic-toggle-button-group>\`,
  args: defaultArgs,
  argTypes: {
    accessibleLabel: {
      control: {
        type: "text"
      }
    },
    disabled: {
      control: {
        type: "boolean"
      }
    },
    fullWidth: {
      control: {
        type: "boolean"
      }
    },
    iconPlacement: {
      options: ["left", "right", "top"],
      control: {
        type: "radio"
      }
    },
    loading: {
      control: {
        type: "boolean"
      }
    },
    monochrome: {
      control: {
        type: "boolean"
      }
    },
    selectMethod: {
      options: ["manual", "auto"],
      control: {
        type: inlineRadioSelector
      }
    },
    selectType: {
      options: ["single", "multi"],
      control: {
        type: inlineRadioSelector
      }
    },
    size: {
      options: ["medium", "small", "large"],
      control: {
        type: "radio"
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: inlineRadioSelector
      }
    },
    variant: {
      options: ["default", "icon"],
      control: {
        type: inlineRadioSelector
      }
    },
    toggleAccessibleLabel: {
      control: {
        type: "text"
      }
    },
    toggleDisabled: {
      control: {
        type: "boolean"
      }
    },
    toggleFullWidth: {
      control: {
        type: "boolean"
      }
    },
    toggleIconPlacement: {
      options: ["left", "right", "top"],
      control: {
        type: "radio"
      }
    },
    toggleLabel: {
      control: {
        type: "text"
      }
    },
    toggleLoading: {
      control: {
        type: "boolean"
      }
    },
    toggleMonochrome: {
      control: {
        type: "boolean"
      }
    },
    toggleSize: {
      options: ["medium", "small", "large"],
      control: {
        type: "radio"
      }
    },
    toggleTheme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: inlineRadioSelector
      }
    },
    toggleChecked: {
      control: {
        type: "boolean"
      }
    },
    toggleVariant: {
      options: ["default", "icon"],
      control: {
        type: inlineRadioSelector
      }
    }
  },
  name: "Playground"
}`,...h.parameters?.docs?.source}}},g=[`SelectType`,`Sizes`,`Monochrome`,`Disabled`,`Loading`,`WithIcons`,`HideOutline`,`Playground`]}));_();export{u as Disabled,p as HideOutline,d as Loading,l as Monochrome,h as Playground,s as SelectType,c as Sizes,f as WithIcons,g as __namedExportsOrder,o as default,_ as n,i as t};