/*! For license information please see components-ic-chip-ic-chip-stories.8cc72a3b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[8943],{"./src/components/ic-chip/ic-chip.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomColour:()=>CustomColour,DeprecatedAppearance:()=>DeprecatedAppearance,Disabled:()=>Disabled,Dismissible:()=>Dismissible,LongLabel:()=>LongLabel,Outline:()=>Outline,Playground:()=>Playground,Static:()=>Static,SwitchColour:()=>SwitchColour,WhiteBackground:()=>WhiteBackground,WithoutIcons:()=>WithoutIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Chip",component:"ic-chip"},Static={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-chip label="Small" size="small">
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="account"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
      <ic-chip label="Default">
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="account"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
      <ic-chip label="Large" size="large">
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>`,name:"Static"},Outline={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-chip label="Small" size="small" variant="outlined">
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="account"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
      <ic-chip label="Default" variant="outlined">
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="account"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
      <ic-chip label="Large" size="large" variant="outlined">
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>`,name:"Outline"},DeprecatedAppearance={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-chip label="Small" size="small" appearance="outline">
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="account"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
      <ic-chip label="Default" appearance="outline">
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="account"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
      <ic-chip label="Large" size="large" appearance="outline">
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>`,name:"Deprecated - appearance"},Dismissible={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-chip label="Small" dismissible="true" size="small">
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="account"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
      <ic-chip label="Default" dismissible="true">
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="account"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
      <ic-chip label="Large" dismissible="true" size="large">
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="account"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
      <ic-chip label="Small" dismissible="true" size="small" variant="outlined">
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="account"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
      <ic-chip label="Default" dismissible="true" variant="outlined">
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="account"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
      <ic-chip label="Large" dismissible="true" size="large" variant="outlined">
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>`,name:"Dismissible"},Disabled={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-chip label="Small" dismissible="true" disabled="true" size="small">
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="account"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
      <ic-chip label="Default" dismissible="true" disabled="true">
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="account"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
      <ic-chip label="Large" dismissible="true" disabled="true" size="large">
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="account"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
      <ic-chip
        label="Small"
        dismissible="true"
        disabled="true"
        variant="outlined"
        size="small"
      >
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="account"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
      <ic-chip
        label="Default"
        dismissible="true"
        disabled="true"
        variant="outlined"
      >
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="account"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
      <ic-chip
        label="Large"
        dismissible="true"
        disabled="true"
        variant="outlined"
        size="large"
      >
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>`,name:"Disabled"},WithoutIcons={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-chip label="Label"></ic-chip>
    <ic-chip label="Label" variant="outlined"></ic-chip>
    <ic-chip label="Label" dismissible="true"></ic-chip>
    <ic-chip label="Label" variant="outlined" dismissible="true"></ic-chip>
  `,name:"Without icons"},LongLabel={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-chip
        label="Really long name for a chip that should wrap"
        dismissible="true"
        size="small"
        style="max-width: 150px"
      >
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="account"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
      <ic-chip
        label="Really long name for a chip that should wrap"
        dismissible="true"
        style="max-width: 150px"
      >
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="account"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
      <ic-chip
        label="Really long name for a chip that should wrap"
        dismissible="true"
        size="large"
        style="max-width: 150px"
      >
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>`,name:"Long label"},WhiteBackground={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div
      style="background-color:#2c2f34; padding:6px 10px; width:fit-content"
    >
      <ic-chip
        label="White background"
        variant="outlined"
        transparent-background="false"
      >
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="account"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
      <ic-chip
        label="White background"
        dismissible="true"
        variant="outlined"
        transparent-background="false"
      >
        <svg
          slot="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
          />
        </svg>
      </ic-chip>
    </div>`,name:"White background"},CustomColour={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-chip label="Default" custom-color="#F8C8DC">
      <svg
        slot="icon"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="account"
      >
        <path
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
        />
      </svg>
    </ic-chip>
    <ic-chip label="Label" variant="outlined" custom-color="#F8C8DC">
      <svg
        slot="icon"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="account"
      >
        <path
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
        />
      </svg>
    </ic-chip>
    <ic-chip
      label="Label"
      variant="outlined"
      transparent-background="false"
      custom-color="#F8C8DC"
    >
      <svg
        slot="icon"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="account"
      >
        <path
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
        />
      </svg>
    </ic-chip>
  `,name:"Custom colour"},SwitchColour={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-chip label="Default" custom-color="#F8C8DC">
      <svg
        slot="icon"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="account"
      >
        <path
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
        />
      </svg>
    </ic-chip>
    <br />
    <br />
    <ic-button
      variant="primary"
      id="default-btn"
      onClick="document.querySelector('ic-chip').customColor='#F8C8DC'"
    >
      Colour 1
    </ic-button>
    <ic-button
      variant="primary"
      id="custom-btn"
      onClick="document.querySelector('ic-chip').customColor='#00008B'"
    >
      Colour 2
    </ic-button>
  `,name:"Switch colour"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-chip
      label=${args.label}
      custom-color=${args.customColor}
      dismissible=${args.dismissible}
      disabled=${args.disabled}
      size=${args.size}
      variant=${args.variant}
      transparent-background=${args.transparentBackground}
      dismiss-label=${args.dismissLabel}
    >
      <svg
        slot="icon"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="account"
      >
        <path
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
        />
      </svg>
      <ic-badge
        text-label="1"
        slot=${args.badgeSlot}
        variant="success"
        position="near"
      ></ic-badge>
    </ic-chip>`,args:{customColor:null,disabled:!1,dismissible:!1,dismissLabel:"Dismiss",label:"Default",size:"default",transparentBackground:!0,variant:"filled",badgeSlot:"badge"},argTypes:{customColor:{control:{type:"text"}},size:{options:["small","default","large"],control:{type:"radio"}},variant:{options:["filled","outlined"],control:{type:"inline-radio"}},badgeSlot:{options:["badge",""],control:{type:"select"}}},name:"Playground"},__namedExportsOrder=["Static","Outline","DeprecatedAppearance","Dismissible","Disabled","WithoutIcons","LongLabel","WhiteBackground","CustomColour","SwitchColour","Playground"];Static.parameters={...Static.parameters,docs:{...Static.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-chip label="Small" size="small">\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-label="account"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>\n      <ic-chip label="Default">\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-label="account"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>\n      <ic-chip label="Large" size="large">\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-hidden="true"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>`,\n  name: "Static"\n}',...Static.parameters?.docs?.source}}},Outline.parameters={...Outline.parameters,docs:{...Outline.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-chip label="Small" size="small" variant="outlined">\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-label="account"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>\n      <ic-chip label="Default" variant="outlined">\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-label="account"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>\n      <ic-chip label="Large" size="large" variant="outlined">\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-hidden="true"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>`,\n  name: "Outline"\n}',...Outline.parameters?.docs?.source}}},DeprecatedAppearance.parameters={...DeprecatedAppearance.parameters,docs:{...DeprecatedAppearance.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-chip label="Small" size="small" appearance="outline">\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-label="account"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>\n      <ic-chip label="Default" appearance="outline">\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-label="account"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>\n      <ic-chip label="Large" size="large" appearance="outline">\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-hidden="true"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>`,\n  name: "Deprecated - appearance"\n}',...DeprecatedAppearance.parameters?.docs?.source}}},Dismissible.parameters={...Dismissible.parameters,docs:{...Dismissible.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-chip label="Small" dismissible="true" size="small">\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-label="account"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>\n      <ic-chip label="Default" dismissible="true">\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-label="account"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>\n      <ic-chip label="Large" dismissible="true" size="large">\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-label="account"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>\n      <ic-chip label="Small" dismissible="true" size="small" variant="outlined">\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-label="account"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>\n      <ic-chip label="Default" dismissible="true" variant="outlined">\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-label="account"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>\n      <ic-chip label="Large" dismissible="true" size="large" variant="outlined">\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-hidden="true"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>`,\n  name: "Dismissible"\n}',...Dismissible.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-chip label="Small" dismissible="true" disabled="true" size="small">\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-label="account"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>\n      <ic-chip label="Default" dismissible="true" disabled="true">\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-label="account"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>\n      <ic-chip label="Large" dismissible="true" disabled="true" size="large">\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-label="account"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>\n      <ic-chip\n        label="Small"\n        dismissible="true"\n        disabled="true"\n        variant="outlined"\n        size="small"\n      >\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-label="account"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>\n      <ic-chip\n        label="Default"\n        dismissible="true"\n        disabled="true"\n        variant="outlined"\n      >\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-label="account"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>\n      <ic-chip\n        label="Large"\n        dismissible="true"\n        disabled="true"\n        variant="outlined"\n        size="large"\n      >\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-hidden="true"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>`,\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source}}},WithoutIcons.parameters={...WithoutIcons.parameters,docs:{...WithoutIcons.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-chip label="Label"></ic-chip>\n    <ic-chip label="Label" variant="outlined"></ic-chip>\n    <ic-chip label="Label" dismissible="true"></ic-chip>\n    <ic-chip label="Label" variant="outlined" dismissible="true"></ic-chip>\n  `,\n  name: "Without icons"\n}',...WithoutIcons.parameters?.docs?.source}}},LongLabel.parameters={...LongLabel.parameters,docs:{...LongLabel.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-chip\n        label="Really long name for a chip that should wrap"\n        dismissible="true"\n        size="small"\n        style="max-width: 150px"\n      >\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-label="account"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>\n      <ic-chip\n        label="Really long name for a chip that should wrap"\n        dismissible="true"\n        style="max-width: 150px"\n      >\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-label="account"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>\n      <ic-chip\n        label="Really long name for a chip that should wrap"\n        dismissible="true"\n        size="large"\n        style="max-width: 150px"\n      >\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-hidden="true"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>`,\n  name: "Long label"\n}',...LongLabel.parameters?.docs?.source}}},WhiteBackground.parameters={...WhiteBackground.parameters,docs:{...WhiteBackground.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div\n      style="background-color:#2c2f34; padding:6px 10px; width:fit-content"\n    >\n      <ic-chip\n        label="White background"\n        variant="outlined"\n        transparent-background="false"\n      >\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-label="account"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>\n      <ic-chip\n        label="White background"\n        dismissible="true"\n        variant="outlined"\n        transparent-background="false"\n      >\n        <svg\n          slot="icon"\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          fill="currentColor"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-hidden="true"\n        >\n          <path\n            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n          />\n        </svg>\n      </ic-chip>\n    </div>`,\n  name: "White background"\n}',...WhiteBackground.parameters?.docs?.source}}},CustomColour.parameters={...CustomColour.parameters,docs:{...CustomColour.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-chip label="Default" custom-color="#F8C8DC">\n      <svg\n        slot="icon"\n        width="20"\n        height="20"\n        viewBox="0 0 20 20"\n        fill="currentColor"\n        xmlns="http://www.w3.org/2000/svg"\n        aria-label="account"\n      >\n        <path\n          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n        />\n      </svg>\n    </ic-chip>\n    <ic-chip label="Label" variant="outlined" custom-color="#F8C8DC">\n      <svg\n        slot="icon"\n        width="20"\n        height="20"\n        viewBox="0 0 20 20"\n        fill="currentColor"\n        xmlns="http://www.w3.org/2000/svg"\n        aria-label="account"\n      >\n        <path\n          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n        />\n      </svg>\n    </ic-chip>\n    <ic-chip\n      label="Label"\n      variant="outlined"\n      transparent-background="false"\n      custom-color="#F8C8DC"\n    >\n      <svg\n        slot="icon"\n        width="20"\n        height="20"\n        viewBox="0 0 20 20"\n        fill="currentColor"\n        xmlns="http://www.w3.org/2000/svg"\n        aria-label="account"\n      >\n        <path\n          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n        />\n      </svg>\n    </ic-chip>\n  `,\n  name: "Custom colour"\n}',...CustomColour.parameters?.docs?.source}}},SwitchColour.parameters={...SwitchColour.parameters,docs:{...SwitchColour.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-chip label="Default" custom-color="#F8C8DC">\n      <svg\n        slot="icon"\n        width="20"\n        height="20"\n        viewBox="0 0 20 20"\n        fill="currentColor"\n        xmlns="http://www.w3.org/2000/svg"\n        aria-label="account"\n      >\n        <path\n          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n        />\n      </svg>\n    </ic-chip>\n    <br />\n    <br />\n    <ic-button\n      variant="primary"\n      id="default-btn"\n      onClick="document.querySelector(\'ic-chip\').customColor=\'#F8C8DC\'"\n    >\n      Colour 1\n    </ic-button>\n    <ic-button\n      variant="primary"\n      id="custom-btn"\n      onClick="document.querySelector(\'ic-chip\').customColor=\'#00008B\'"\n    >\n      Colour 2\n    </ic-button>\n  `,\n  name: "Switch colour"\n}',...SwitchColour.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-chip\n      label=${args.label}\n      custom-color=${args.customColor}\n      dismissible=${args.dismissible}\n      disabled=${args.disabled}\n      size=${args.size}\n      variant=${args.variant}\n      transparent-background=${args.transparentBackground}\n      dismiss-label=${args.dismissLabel}\n    >\n      <svg\n        slot="icon"\n        width="20"\n        height="20"\n        viewBox="0 0 20 20"\n        fill="currentColor"\n        xmlns="http://www.w3.org/2000/svg"\n        aria-label="account"\n      >\n        <path\n          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"\n        />\n      </svg>\n      <ic-badge\n        text-label="1"\n        slot=${args.badgeSlot}\n        variant="success"\n        position="near"\n      ></ic-badge>\n    </ic-chip>`,\n  args: defaultArgs,\n  argTypes: {\n    customColor: {\n      control: {\n        type: "text"\n      }\n    },\n    size: {\n      options: ["small", "default", "large"],\n      control: {\n        type: "radio"\n      }\n    },\n    variant: {\n      options: ["filled", "outlined"],\n      control: {\n        type: "inline-radio"\n      }\n    },\n    badgeSlot: {\n      options: ["badge", ""],\n      control: {\n        type: "select"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-chip-ic-chip-stories.8cc72a3b.iframe.bundle.js.map