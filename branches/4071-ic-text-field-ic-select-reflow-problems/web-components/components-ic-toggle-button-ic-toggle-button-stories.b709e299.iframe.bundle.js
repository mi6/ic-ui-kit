/*! For license information please see components-ic-toggle-button-ic-toggle-button-stories.b709e299.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[1,582,6199,6763],{"./src/components/ic-toggle-button/ic-toggle-button.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Default:()=>Default,Disabled:()=>Disabled,FullWidth:()=>FullWidth,HideOutline:()=>HideOutline,IconOnly:()=>IconOnly,IconRight:()=>IconRight,IconTop:()=>IconTop,Loading:()=>Loading,Monochrome:()=>Monochrome,Playground:()=>Playground,PlaygroundDefaultWithIcon:()=>PlaygroundDefaultWithIcon,PlaygroundIconVariant:()=>PlaygroundIconVariant,Sizes:()=>Sizes,TooltipPlacement:()=>TooltipPlacement,WithBadge:()=>WithBadge,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Toggle button",component:"ic-toggle-button"},Default={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-toggle-button label="Toggle"></ic-toggle-button>
      <script>
        var toggle = document.querySelector("ic-toggle-button");
        toggle.addEventListener("icToggleChecked", function (event) {
          console.log(event.detail.checked);
        });
      </script>`,name:"Default"},Checked={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-toggle-button label="Toggle" checked="true"></ic-toggle-button>`,name:"Checked"},Disabled={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-toggle-button label="Toggle" disabled="true"></ic-toggle-button>
      <ic-toggle-button
        label="Toggle"
        disabled="true"
        checked="true"
      ></ic-toggle-button>`,name:"Disabled"},WithIcon={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-toggle-button label="Toggle">
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
    </ic-toggle-button>`,name:"With icon"},Sizes={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="padding: 6px">
        <ic-toggle-button label="Toggle" size="small"></ic-toggle-button>
      </div>
      <div style="padding: 6px">
        <ic-toggle-button label="Toggle"></ic-toggle-button>
      </div>
      <div style="padding: 6px">
        <ic-toggle-button label="Toggle" size="large"></ic-toggle-button>
      </div>`,name:"Sizes"},WithBadge={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-toggle-button label="Toggle">
        <ic-badge label="1" slot="badge" variant="success"></ic-badge>
      </ic-toggle-button>
      <ic-toggle-button label="Toggle">
        <ic-badge slot="badge" variant="success" type="dot"></ic-badge>
      </ic-toggle-button>`,name:"With badge"},Monochrome={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-toggle-button
      label="Toggle"
      monochrome="true"
    ></ic-toggle-button>`,name:"Monochrome"},FullWidth={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-toggle-button
      label="Toggle"
      full-width="true"
    ></ic-toggle-button>`,name:"Full width"},Loading={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="padding: 6px">
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
      </div>`,name:"Loading"},IconOnly={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="padding:6px 10px; width:fit-content">
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
      </div>`,name:"Icon only"},IconRight={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-toggle-button label="Toggle" icon-placement="right">
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
    </ic-toggle-button>`,name:"Icon right"},IconTop={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-toggle-button label="Toggle" icon-placement="top">
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
    </ic-toggle-button>`,name:"Icon top"},TooltipPlacement={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="padding:100px 10px; width:fit-content">
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
    </div>`,name:"Tooltip placement"},HideOutline={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-toggle-button label="Toggle" outline="false"></ic-toggle-button>`,name:"Hide outline"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-toggle-button
    label=${args.label}
    disabled=${args.disabled}
    variant=${args.variant}
    size=${args.size}
    loading=${args.loading}
    monochrome=${args.monochrome}
    outline=${args.outline}
    full-width=${args.fullWidth}
    checked=${args.checked}
    theme=${args.theme}
  />`,args:{label:"Custom Button",disabled:!1,loading:!1,monochrome:!1,outline:!0,size:"medium",theme:"inherit",variant:"default",fullWidth:!1,checked:!1},argTypes:{size:{options:["medium","large","small"],control:{type:"inline-radio"}},checked:{control:{type:"boolean"}},fullWidth:{control:{type:"boolean"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"},PlaygroundDefaultWithIcon={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-toggle-button
    label=${args.label}
    disabled=${args.disabled}
    variant=${args.variant}
    size=${args.size}
    loading=${args.loading}
    monochrome=${args.monochrome}
    full-width=${args.fullWidth}
    checked=${args.checked}
    icon-placement=${args.iconPlacement}
    theme=${args.theme}
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
  </ic-toggle-button>`,args:{label:"Custom Button",disabled:!1,loading:!1,monochrome:!1,size:"medium",variant:"default",theme:"inherit",fullWidth:!1,iconPlacement:"left",checked:!1,accessibleLabel:"Custom Button Ally Label"},argTypes:{size:{options:["medium","large","small"],control:{type:"inline-radio"}},checked:{control:{type:"boolean"}},iconPlacement:{options:["left","right","top"],control:{type:"inline-radio"}},fullWidth:{control:{type:"boolean"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground - default with icon"},PlaygroundIconVariant={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-toggle-button
    label=${args.label}
    disabled=${args.disabled}
    variant=${args.variant}
    size=${args.size}
    loading=${args.loading}
    monochrome=${args.monochrome}
    full-width=${args.fullWidth}
    checked=${args.checked}
    accessible-label=${args.accessibleLabel}
    theme=${args.theme}
    tooltip-placement=${args.tooltipPlacement}
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
  </ic-toggle-button>`,args:{label:"Custom Button",disabled:!1,loading:!1,monochrome:!1,size:"medium",theme:"inherit",variant:"icon",fullWidth:!1,checked:!1,accessibleLabel:"Custom Button Ally Label",tooltipPlacement:"bottom"},argTypes:{size:{options:["medium","large","small"],control:{type:"inline-radio"}},checked:{control:{type:"boolean"}},fullWidth:{control:{type:"boolean"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}},tooltipPlacement:{options:["bottom","top","left","right"],control:{type:"radio"}}},name:"Playground - icon variant"},__namedExportsOrder=["Default","Checked","Disabled","WithIcon","Sizes","WithBadge","Monochrome","FullWidth","Loading","IconOnly","IconRight","IconTop","TooltipPlacement","HideOutline","Playground","PlaygroundDefaultWithIcon","PlaygroundIconVariant"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-toggle-button label="Toggle"></ic-toggle-button>\n      <script>\n        var toggle = document.querySelector("ic-toggle-button");\n        toggle.addEventListener("icToggleChecked", function (event) {\n          console.log(event.detail.checked);\n        });\n      <\/script>`,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-toggle-button label="Toggle" checked="true"></ic-toggle-button>`,\n  name: "Checked"\n}',...Checked.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-toggle-button label="Toggle" disabled="true"></ic-toggle-button>\n      <ic-toggle-button\n        label="Toggle"\n        disabled="true"\n        checked="true"\n      ></ic-toggle-button>`,\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-toggle-button label="Toggle">\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-toggle-button>`,\n  name: "With icon"\n}',...WithIcon.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="padding: 6px">\n        <ic-toggle-button label="Toggle" size="small"></ic-toggle-button>\n      </div>\n      <div style="padding: 6px">\n        <ic-toggle-button label="Toggle"></ic-toggle-button>\n      </div>\n      <div style="padding: 6px">\n        <ic-toggle-button label="Toggle" size="large"></ic-toggle-button>\n      </div>`,\n  name: "Sizes"\n}',...Sizes.parameters?.docs?.source}}},WithBadge.parameters={...WithBadge.parameters,docs:{...WithBadge.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-toggle-button label="Toggle">\n        <ic-badge label="1" slot="badge" variant="success"></ic-badge>\n      </ic-toggle-button>\n      <ic-toggle-button label="Toggle">\n        <ic-badge slot="badge" variant="success" type="dot"></ic-badge>\n      </ic-toggle-button>`,\n  name: "With badge"\n}',...WithBadge.parameters?.docs?.source}}},Monochrome.parameters={...Monochrome.parameters,docs:{...Monochrome.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-toggle-button\n      label="Toggle"\n      monochrome="true"\n    ></ic-toggle-button>`,\n  name: "Monochrome"\n}',...Monochrome.parameters?.docs?.source}}},FullWidth.parameters={...FullWidth.parameters,docs:{...FullWidth.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-toggle-button\n      label="Toggle"\n      full-width="true"\n    ></ic-toggle-button>`,\n  name: "Full width"\n}',...FullWidth.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="padding: 6px">\n        <ic-toggle-button label="Toggle" loading="true"></ic-toggle-button>\n        <ic-toggle-button\n          label="Toggle"\n          loading="true"\n          checked="true"\n        ></ic-toggle-button>\n        <ic-toggle-button\n          variant="icon"\n          loading="true"\n          accessible-label="Refresh the page"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-toggle-button>\n        <ic-toggle-button\n          variant="icon"\n          loading="true"\n          checked="true"\n          accessible-label="Refresh the page"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-toggle-button>\n      </div>\n      <div style="padding:6px 10px; width:fit-content">\n        <ic-toggle-button\n          label="Toggle"\n          loading="true"\n          monochrome="true"\n        ></ic-toggle-button>\n        <ic-toggle-button\n          label="Toggle"\n          loading="true"\n          checked="true"\n          monochrome="true"\n        ></ic-toggle-button>\n        <ic-toggle-button\n          variant="icon"\n          loading="true"\n          accessible-label="Refresh the page"\n          monochrome="true"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-toggle-button>\n        <ic-toggle-button\n          variant="icon"\n          loading="true"\n          checked="true"\n          accessible-label="Refresh the page"\n          monochrome="true"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-toggle-button>\n      </div>`,\n  name: "Loading"\n}',...Loading.parameters?.docs?.source}}},IconOnly.parameters={...IconOnly.parameters,docs:{...IconOnly.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="padding:6px 10px; width:fit-content">\n        <ic-toggle-button\n          variant="icon"\n          size="small"\n          accessible-label="Refresh the page"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-toggle-button>\n        <ic-toggle-button variant="icon" accessible-label="Refresh the page">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-toggle-button>\n        <ic-toggle-button\n          variant="icon"\n          size="large"\n          accessible-label="Refresh the page"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-toggle-button>\n        <ic-toggle-button\n          variant="icon"\n          disabled="true"\n          accessible-label="Refresh the page"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-toggle-button>\n      </div>\n      <div style="padding:6px 10px; width:fit-content">\n        <ic-toggle-button\n          variant="icon"\n          accessible-label="Refresh the page"\n          monochrome="true"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-toggle-button>\n        <ic-toggle-button\n          variant="icon"\n          disabled="true"\n          accessible-label="Refresh the page"\n          monochrome="true"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-toggle-button>\n      </div>`,\n  name: "Icon only"\n}',...IconOnly.parameters?.docs?.source}}},IconRight.parameters={...IconRight.parameters,docs:{...IconRight.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-toggle-button label="Toggle" icon-placement="right">\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-toggle-button>`,\n  name: "Icon right"\n}',...IconRight.parameters?.docs?.source}}},IconTop.parameters={...IconTop.parameters,docs:{...IconTop.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-toggle-button label="Toggle" icon-placement="top">\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-toggle-button>`,\n  name: "Icon top"\n}',...IconTop.parameters?.docs?.source}}},TooltipPlacement.parameters={...TooltipPlacement.parameters,docs:{...TooltipPlacement.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="padding:100px 10px; width:fit-content">\n      <ic-toggle-button\n        variant="icon"\n        tooltip-placement="right"\n        accessible-label="Refresh the page"\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-toggle-button>\n      <ic-toggle-button\n        variant="icon"\n        tooltip-placement="top"\n        accessible-label="Refresh the page"\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-toggle-button>\n      <ic-toggle-button\n        variant="icon"\n        tooltip-placement="left"\n        accessible-label="Refresh the page"\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-toggle-button>\n    </div>`,\n  name: "Tooltip placement"\n}',...TooltipPlacement.parameters?.docs?.source}}},HideOutline.parameters={...HideOutline.parameters,docs:{...HideOutline.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-toggle-button label="Toggle" outline="false"></ic-toggle-button>`,\n  name: "Hide outline"\n}',...HideOutline.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html` <ic-toggle-button\n    label=${args.label}\n    disabled=${args.disabled}\n    variant=${args.variant}\n    size=${args.size}\n    loading=${args.loading}\n    monochrome=${args.monochrome}\n    outline=${args.outline}\n    full-width=${args.fullWidth}\n    checked=${args.checked}\n    theme=${args.theme}\n  />`,\n  args: defaultArgs,\n  argTypes: {\n    size: {\n      options: ["medium", "large", "small"],\n      control: {\n        type: INLINE_RADIO\n      }\n    },\n    checked: {\n      control: {\n        type: "boolean"\n      }\n    },\n    fullWidth: {\n      control: {\n        type: "boolean"\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: INLINE_RADIO\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}},PlaygroundDefaultWithIcon.parameters={...PlaygroundDefaultWithIcon.parameters,docs:{...PlaygroundDefaultWithIcon.parameters?.docs,source:{originalSource:'{\n  render: args => html` <ic-toggle-button\n    label=${args.label}\n    disabled=${args.disabled}\n    variant=${args.variant}\n    size=${args.size}\n    loading=${args.loading}\n    monochrome=${args.monochrome}\n    full-width=${args.fullWidth}\n    checked=${args.checked}\n    icon-placement=${args.iconPlacement}\n    theme=${args.theme}\n  >\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      slot="icon"\n      height="24px"\n      view-box="0 0 24 24"\n      width="24px"\n      fill="#000000"\n    >\n      <path d="M0 0h24v24H0V0z" fill="none" />\n      <path\n        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n      />\n    </svg>\n  </ic-toggle-button>`,\n  args: defaultWithIconArgs,\n  argTypes: {\n    size: {\n      options: ["medium", "large", "small"],\n      control: {\n        type: INLINE_RADIO\n      }\n    },\n    checked: {\n      control: {\n        type: "boolean"\n      }\n    },\n    iconPlacement: {\n      options: ["left", "right", "top"],\n      control: {\n        type: INLINE_RADIO\n      }\n    },\n    fullWidth: {\n      control: {\n        type: "boolean"\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: INLINE_RADIO\n      }\n    }\n  },\n  name: "Playground - default with icon"\n}',...PlaygroundDefaultWithIcon.parameters?.docs?.source}}},PlaygroundIconVariant.parameters={...PlaygroundIconVariant.parameters,docs:{...PlaygroundIconVariant.parameters?.docs,source:{originalSource:'{\n  render: args => html` <ic-toggle-button\n    label=${args.label}\n    disabled=${args.disabled}\n    variant=${args.variant}\n    size=${args.size}\n    loading=${args.loading}\n    monochrome=${args.monochrome}\n    full-width=${args.fullWidth}\n    checked=${args.checked}\n    accessible-label=${args.accessibleLabel}\n    theme=${args.theme}\n    tooltip-placement=${args.tooltipPlacement}\n  >\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      slot="icon"\n      height="24px"\n      view-box="0 0 24 24"\n      width="24px"\n      fill="#000000"\n    >\n      <path d="M0 0h24v24H0V0z" fill="none" />\n      <path\n        d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n      />\n    </svg>\n  </ic-toggle-button>`,\n  args: defaultIconArgs,\n  argTypes: {\n    size: {\n      options: ["medium", "large", "small"],\n      control: {\n        type: INLINE_RADIO\n      }\n    },\n    checked: {\n      control: {\n        type: "boolean"\n      }\n    },\n    fullWidth: {\n      control: {\n        type: "boolean"\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: INLINE_RADIO\n      }\n    },\n    tooltipPlacement: {\n      options: ["bottom", "top", "left", "right"],\n      control: {\n        type: "radio"\n      }\n    }\n  },\n  name: "Playground - icon variant"\n}',...PlaygroundIconVariant.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-toggle-button-ic-toggle-button-stories.b709e299.iframe.bundle.js.map