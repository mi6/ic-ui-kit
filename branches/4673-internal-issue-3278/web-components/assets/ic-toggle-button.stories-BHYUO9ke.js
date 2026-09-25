import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./lit-html-CMAkC4Hj.js";import{n as i,t as a}from"./taggedTemplateLiteral-2dP4OITE.js";var o=e({Checked:()=>h,Default:()=>m,Disabled:()=>g,FullWidth:()=>x,HideOutline:()=>D,IconOnly:()=>C,IconRight:()=>w,IconTop:()=>T,Loading:()=>S,Monochrome:()=>b,Playground:()=>O,PlaygroundDefaultWithIcon:()=>k,PlaygroundIconVariant:()=>A,Sizes:()=>v,TooltipPlacement:()=>E,WithBadge:()=>y,WithIcon:()=>_,__namedExportsOrder:()=>j,default:()=>c}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=t((()=>{n(),i(),c={title:`Web Components/Toggle button`,component:`ic-toggle-button`},l=`Custom Button`,u=`inline-radio`,d={label:l,disabled:!1,loading:!1,monochrome:!1,outline:!0,size:`medium`,theme:`inherit`,variant:`default`,fullWidth:!1,checked:!1},f={label:l,disabled:!1,loading:!1,monochrome:!1,size:`medium`,variant:`default`,theme:`inherit`,fullWidth:!1,iconPlacement:`left`,checked:!1,accessibleLabel:`Custom Button Ally Label`},p={label:l,disabled:!1,loading:!1,monochrome:!1,size:`medium`,theme:`inherit`,variant:`icon`,fullWidth:!1,checked:!1,accessibleLabel:`Custom Button Ally Label`,tooltipPlacement:`bottom`},m={render:()=>r(s||=a([`<ic-toggle-button label="Toggle"></ic-toggle-button>
      <script>
        var toggle = document.querySelector("ic-toggle-button");
        toggle.addEventListener("icToggleChecked", function (event) {
          console.log(event.detail.checked);
        });
      <\/script>`])),name:`Default`},h={render:()=>r`<ic-toggle-button label="Toggle" checked="true"></ic-toggle-button>`,name:`Checked`},g={render:()=>r`<ic-toggle-button label="Toggle" disabled="true"></ic-toggle-button>
      <ic-toggle-button
        label="Toggle"
        disabled="true"
        checked="true"
      ></ic-toggle-button>`,name:`Disabled`},_={render:()=>r`<ic-toggle-button label="Toggle">
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
    </ic-toggle-button>`,name:`With icon`},v={render:()=>r`<div style="padding: 6px">
        <ic-toggle-button label="Toggle" size="small"></ic-toggle-button>
      </div>
      <div style="padding: 6px">
        <ic-toggle-button label="Toggle"></ic-toggle-button>
      </div>
      <div style="padding: 6px">
        <ic-toggle-button label="Toggle" size="large"></ic-toggle-button>
      </div>`,name:`Sizes`},y={render:()=>r`<ic-toggle-button label="Toggle">
        <ic-badge label="1" slot="badge" variant="success"></ic-badge>
      </ic-toggle-button>
      <ic-toggle-button label="Toggle">
        <ic-badge slot="badge" variant="success" type="dot"></ic-badge>
      </ic-toggle-button>`,name:`With badge`},b={render:()=>r`<ic-toggle-button
      label="Toggle"
      monochrome="true"
    ></ic-toggle-button>`,name:`Monochrome`},x={render:()=>r`<ic-toggle-button
      label="Toggle"
      full-width="true"
    ></ic-toggle-button>`,name:`Full width`},S={render:()=>r`<div style="padding: 6px">
        <ic-toggle-button label="Toggle" loading="true"></ic-toggle-button>
        <ic-toggle-button
          label="Toggle"
          loading="true"
          checked="true"
        ></ic-toggle-button>
        <ic-toggle-button
          variant="icon"
          loading="true"
          accessible-label="Refresh the page"
        >
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
        <ic-toggle-button
          variant="icon"
          loading="true"
          checked="true"
          accessible-label="Refresh the page"
        >
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
      </div>
      <div style="padding:6px 10px; width:fit-content">
        <ic-toggle-button
          label="Toggle"
          loading="true"
          monochrome="true"
        ></ic-toggle-button>
        <ic-toggle-button
          label="Toggle"
          loading="true"
          checked="true"
          monochrome="true"
        ></ic-toggle-button>
        <ic-toggle-button
          variant="icon"
          loading="true"
          accessible-label="Refresh the page"
          monochrome="true"
        >
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
        <ic-toggle-button
          variant="icon"
          loading="true"
          checked="true"
          accessible-label="Refresh the page"
          monochrome="true"
        >
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
      </div>`,name:`Loading`},C={render:()=>r`<div style="padding:6px 10px; width:fit-content">
        <ic-toggle-button
          variant="icon"
          size="small"
          accessible-label="Refresh the page"
        >
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
        <ic-toggle-button variant="icon" accessible-label="Refresh the page">
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
        <ic-toggle-button
          variant="icon"
          size="large"
          accessible-label="Refresh the page"
        >
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
        <ic-toggle-button
          variant="icon"
          disabled="true"
          accessible-label="Refresh the page"
        >
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
      </div>
      <div style="padding:6px 10px; width:fit-content">
        <ic-toggle-button
          variant="icon"
          accessible-label="Refresh the page"
          monochrome="true"
        >
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
        <ic-toggle-button
          variant="icon"
          disabled="true"
          accessible-label="Refresh the page"
          monochrome="true"
        >
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
      </div>`,name:`Icon only`},w={render:()=>r`<ic-toggle-button label="Toggle" icon-placement="right">
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
    </ic-toggle-button>`,name:`Icon right`},T={render:()=>r`<ic-toggle-button label="Toggle" icon-placement="top">
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
    </ic-toggle-button>`,name:`Icon top`},E={render:()=>r`<div style="padding:100px 10px; width:fit-content">
      <ic-toggle-button
        variant="icon"
        tooltip-placement="right"
        accessible-label="Refresh the page"
      >
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
      <ic-toggle-button
        variant="icon"
        tooltip-placement="top"
        accessible-label="Refresh the page"
      >
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
      <ic-toggle-button
        variant="icon"
        tooltip-placement="left"
        accessible-label="Refresh the page"
      >
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
    </div>`,name:`Tooltip placement`},D={render:()=>r`<ic-toggle-button label="Toggle" outline="false"></ic-toggle-button>`,name:`Hide outline`},O={render:e=>r` <ic-toggle-button
    label=${e.label}
    disabled=${e.disabled}
    variant=${e.variant}
    size=${e.size}
    loading=${e.loading}
    monochrome=${e.monochrome}
    outline=${e.outline}
    full-width=${e.fullWidth}
    checked=${e.checked}
    theme=${e.theme}
  />`,args:d,argTypes:{size:{options:[`medium`,`large`,`small`],control:{type:u}},checked:{control:{type:`boolean`}},fullWidth:{control:{type:`boolean`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:u}}},name:`Playground`},k={render:e=>r` <ic-toggle-button
    label=${e.label}
    disabled=${e.disabled}
    variant=${e.variant}
    size=${e.size}
    loading=${e.loading}
    monochrome=${e.monochrome}
    full-width=${e.fullWidth}
    checked=${e.checked}
    icon-placement=${e.iconPlacement}
    theme=${e.theme}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      slot="icon"
      height="24px"
      view-box="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
      />
    </svg>
  </ic-toggle-button>`,args:f,argTypes:{size:{options:[`medium`,`large`,`small`],control:{type:u}},checked:{control:{type:`boolean`}},iconPlacement:{options:[`left`,`right`,`top`],control:{type:u}},fullWidth:{control:{type:`boolean`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:u}}},name:`Playground - default with icon`},A={render:e=>r` <ic-toggle-button
    label=${e.label}
    disabled=${e.disabled}
    variant=${e.variant}
    size=${e.size}
    loading=${e.loading}
    monochrome=${e.monochrome}
    full-width=${e.fullWidth}
    checked=${e.checked}
    accessible-label=${e.accessibleLabel}
    theme=${e.theme}
    tooltip-placement=${e.tooltipPlacement}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      slot="icon"
      height="24px"
      view-box="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
      />
    </svg>
  </ic-toggle-button>`,args:p,argTypes:{size:{options:[`medium`,`large`,`small`],control:{type:u}},checked:{control:{type:`boolean`}},fullWidth:{control:{type:`boolean`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:u}},tooltipPlacement:{options:[`bottom`,`top`,`left`,`right`],control:{type:`radio`}}},name:`Playground - icon variant`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-toggle-button label="Toggle"></ic-toggle-button>
      <script>
        var toggle = document.querySelector("ic-toggle-button");
        toggle.addEventListener("icToggleChecked", function (event) {
          console.log(event.detail.checked);
        });
      <\/script>\`,
  name: "Default"
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-toggle-button label="Toggle" checked="true"></ic-toggle-button>\`,
  name: "Checked"
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-toggle-button label="Toggle" disabled="true"></ic-toggle-button>
      <ic-toggle-button
        label="Toggle"
        disabled="true"
        checked="true"
      ></ic-toggle-button>\`,
  name: "Disabled"
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-toggle-button label="Toggle">
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
    </ic-toggle-button>\`,
  name: "With icon"
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="padding: 6px">
        <ic-toggle-button label="Toggle" size="small"></ic-toggle-button>
      </div>
      <div style="padding: 6px">
        <ic-toggle-button label="Toggle"></ic-toggle-button>
      </div>
      <div style="padding: 6px">
        <ic-toggle-button label="Toggle" size="large"></ic-toggle-button>
      </div>\`,
  name: "Sizes"
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-toggle-button label="Toggle">
        <ic-badge label="1" slot="badge" variant="success"></ic-badge>
      </ic-toggle-button>
      <ic-toggle-button label="Toggle">
        <ic-badge slot="badge" variant="success" type="dot"></ic-badge>
      </ic-toggle-button>\`,
  name: "With badge"
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-toggle-button
      label="Toggle"
      monochrome="true"
    ></ic-toggle-button>\`,
  name: "Monochrome"
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-toggle-button
      label="Toggle"
      full-width="true"
    ></ic-toggle-button>\`,
  name: "Full width"
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="padding: 6px">
        <ic-toggle-button label="Toggle" loading="true"></ic-toggle-button>
        <ic-toggle-button
          label="Toggle"
          loading="true"
          checked="true"
        ></ic-toggle-button>
        <ic-toggle-button
          variant="icon"
          loading="true"
          accessible-label="Refresh the page"
        >
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
        <ic-toggle-button
          variant="icon"
          loading="true"
          checked="true"
          accessible-label="Refresh the page"
        >
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
      </div>
      <div style="padding:6px 10px; width:fit-content">
        <ic-toggle-button
          label="Toggle"
          loading="true"
          monochrome="true"
        ></ic-toggle-button>
        <ic-toggle-button
          label="Toggle"
          loading="true"
          checked="true"
          monochrome="true"
        ></ic-toggle-button>
        <ic-toggle-button
          variant="icon"
          loading="true"
          accessible-label="Refresh the page"
          monochrome="true"
        >
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
        <ic-toggle-button
          variant="icon"
          loading="true"
          checked="true"
          accessible-label="Refresh the page"
          monochrome="true"
        >
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
      </div>\`,
  name: "Loading"
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="padding:6px 10px; width:fit-content">
        <ic-toggle-button
          variant="icon"
          size="small"
          accessible-label="Refresh the page"
        >
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
        <ic-toggle-button variant="icon" accessible-label="Refresh the page">
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
        <ic-toggle-button
          variant="icon"
          size="large"
          accessible-label="Refresh the page"
        >
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
        <ic-toggle-button
          variant="icon"
          disabled="true"
          accessible-label="Refresh the page"
        >
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
      </div>
      <div style="padding:6px 10px; width:fit-content">
        <ic-toggle-button
          variant="icon"
          accessible-label="Refresh the page"
          monochrome="true"
        >
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
        <ic-toggle-button
          variant="icon"
          disabled="true"
          accessible-label="Refresh the page"
          monochrome="true"
        >
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
      </div>\`,
  name: "Icon only"
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-toggle-button label="Toggle" icon-placement="right">
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
    </ic-toggle-button>\`,
  name: "Icon right"
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-toggle-button label="Toggle" icon-placement="top">
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
    </ic-toggle-button>\`,
  name: "Icon top"
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="padding:100px 10px; width:fit-content">
      <ic-toggle-button
        variant="icon"
        tooltip-placement="right"
        accessible-label="Refresh the page"
      >
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
      <ic-toggle-button
        variant="icon"
        tooltip-placement="top"
        accessible-label="Refresh the page"
      >
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
      <ic-toggle-button
        variant="icon"
        tooltip-placement="left"
        accessible-label="Refresh the page"
      >
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
    </div>\`,
  name: "Tooltip placement"
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-toggle-button label="Toggle" outline="false"></ic-toggle-button>\`,
  name: "Hide outline"
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => html\` <ic-toggle-button
    label=\${args.label}
    disabled=\${args.disabled}
    variant=\${args.variant}
    size=\${args.size}
    loading=\${args.loading}
    monochrome=\${args.monochrome}
    outline=\${args.outline}
    full-width=\${args.fullWidth}
    checked=\${args.checked}
    theme=\${args.theme}
  />\`,
  args: defaultArgs,
  argTypes: {
    size: {
      options: ["medium", "large", "small"],
      control: {
        type: INLINE_RADIO
      }
    },
    checked: {
      control: {
        type: "boolean"
      }
    },
    fullWidth: {
      control: {
        type: "boolean"
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: INLINE_RADIO
      }
    }
  },
  name: "Playground"
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => html\` <ic-toggle-button
    label=\${args.label}
    disabled=\${args.disabled}
    variant=\${args.variant}
    size=\${args.size}
    loading=\${args.loading}
    monochrome=\${args.monochrome}
    full-width=\${args.fullWidth}
    checked=\${args.checked}
    icon-placement=\${args.iconPlacement}
    theme=\${args.theme}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      slot="icon"
      height="24px"
      view-box="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
      />
    </svg>
  </ic-toggle-button>\`,
  args: defaultWithIconArgs,
  argTypes: {
    size: {
      options: ["medium", "large", "small"],
      control: {
        type: INLINE_RADIO
      }
    },
    checked: {
      control: {
        type: "boolean"
      }
    },
    iconPlacement: {
      options: ["left", "right", "top"],
      control: {
        type: INLINE_RADIO
      }
    },
    fullWidth: {
      control: {
        type: "boolean"
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: INLINE_RADIO
      }
    }
  },
  name: "Playground - default with icon"
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => html\` <ic-toggle-button
    label=\${args.label}
    disabled=\${args.disabled}
    variant=\${args.variant}
    size=\${args.size}
    loading=\${args.loading}
    monochrome=\${args.monochrome}
    full-width=\${args.fullWidth}
    checked=\${args.checked}
    accessible-label=\${args.accessibleLabel}
    theme=\${args.theme}
    tooltip-placement=\${args.tooltipPlacement}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      slot="icon"
      height="24px"
      view-box="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
      />
    </svg>
  </ic-toggle-button>\`,
  args: defaultIconArgs,
  argTypes: {
    size: {
      options: ["medium", "large", "small"],
      control: {
        type: INLINE_RADIO
      }
    },
    checked: {
      control: {
        type: "boolean"
      }
    },
    fullWidth: {
      control: {
        type: "boolean"
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: INLINE_RADIO
      }
    },
    tooltipPlacement: {
      options: ["bottom", "top", "left", "right"],
      control: {
        type: "radio"
      }
    }
  },
  name: "Playground - icon variant"
}`,...A.parameters?.docs?.source}}},j=[`Default`,`Checked`,`Disabled`,`WithIcon`,`Sizes`,`WithBadge`,`Monochrome`,`FullWidth`,`Loading`,`IconOnly`,`IconRight`,`IconTop`,`TooltipPlacement`,`HideOutline`,`Playground`,`PlaygroundDefaultWithIcon`,`PlaygroundIconVariant`]}));M();export{h as Checked,m as Default,g as Disabled,x as FullWidth,D as HideOutline,C as IconOnly,w as IconRight,T as IconTop,S as Loading,b as Monochrome,O as Playground,k as PlaygroundDefaultWithIcon,A as PlaygroundIconVariant,v as Sizes,E as TooltipPlacement,y as WithBadge,_ as WithIcon,j as __namedExportsOrder,c as default,M as n,o as t};