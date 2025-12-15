/*! For license information please see components-ic-button-ic-button-stories.c0bb9c6b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[3707,582,6199,6763],{"./src/components/ic-button/ic-button.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AriaDescribedby:()=>AriaDescribedby,Destructive:()=>Destructive,Dropdown:()=>Dropdown,DropdownExample:()=>DropdownExample,FileUpload:()=>FileUpload,FileUploadInAForm:()=>FileUploadInAForm,FullWidth:()=>FullWidth,Height:()=>Height,IconVariants:()=>IconVariants,IconWithoutViewBox:()=>IconWithoutViewBox,Loading:()=>Loading,MinWidth:()=>MinWidth,Playground:()=>Playground,PlaygroundWithIcon:()=>PlaygroundWithIcon,PositioningStrategy:()=>PositioningStrategy,Primary:()=>Primary,RouterLink:()=>RouterLink,RouterLinkWithSlottedContent:()=>RouterLinkWithSlottedContent,Secondary:()=>Secondary,Size:()=>Size,Tertiary:()=>Tertiary,Tooltips:()=>Tooltips,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const defaultArgs={message:"Custom Button",disabled:!1,loading:!1,theme:"inherit",size:"medium",variant:"secondary",fullWidth:!1,iconPlacement:"right-icon",monochrome:!1,dropdown:!1,transparentBackground:!0},__WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Button",component:"ic-button"},Primary={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div
        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large"> Light theme </ic-typography>
          <div>
            <ic-button variant="primary" theme="light" id="mybuttonid">
              Primary
            </ic-button>
            <ic-button variant="primary" theme="light" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="primary" monochrome theme="light">
              Monochrome
            </ic-button>
            <ic-button variant="primary" disabled monochrome theme="light">
              Disabled
            </ic-button>
          </div>
        </div>
      </div>
      <div
        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#474A48; border-radius: 5px; width:fit-content;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme
          </ic-typography>
          <div>
            <ic-button variant="primary" theme="dark" id="mybuttonid">
              Primary
            </ic-button>
            <ic-button variant="primary" theme="dark" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="primary" monochrome theme="dark">
              Monochrome
            </ic-button>
            <ic-button variant="primary" disabled monochrome theme="dark">
              Disabled
            </ic-button>
          </div>
        </div>
      </div>`,name:"Primary"},Secondary={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <div
        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large"> Light theme </ic-typography>
          <div>
            <ic-button variant="secondary" theme="light" id="mybuttonid">
              Secondary
            </ic-button>
            <ic-button variant="secondary" theme="light" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="secondary" monochrome theme="light">
              Monochrome
            </ic-button>
            <ic-button variant="secondary" disabled monochrome theme="light">
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - non-transparent
          </ic-typography>
          <div>
            <ic-button
              variant="secondary"
              transparent-background="false"
              theme="light"
            >
              Solid
            </ic-button>
            <ic-button
              variant="secondary"
              disabled
              theme="light"
              transparent-background="false"
            >
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - monochrome, non-transparent
          </ic-typography>
          <div>
            <ic-button
              variant="secondary"
              theme="light"
              monochrome
              transparent-background="false"
            >
              Mono-Solid
            </ic-button>
            <ic-button
              variant="secondary"
              disabled
              monochrome
              theme="light"
              transparent-background="false"
            >
              Disabled
            </ic-button>
          </div>
        </div>
      </div>
      <div
        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#232629; border-radius: 5px; width:fit-content;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme
          </ic-typography>
          <div>
            <ic-button variant="secondary" theme="dark" id="mybuttonid">
              Secondary
            </ic-button>
            <ic-button variant="secondary" theme="dark" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="secondary" monochrome theme="dark">
              Monochrome
            </ic-button>
            <ic-button variant="secondary" disabled monochrome theme="dark">
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme - non-transparent
          </ic-typography>
          <div>
            <ic-button
              variant="secondary"
              theme="dark"
              id="mybuttonid"
              transparent-background="false"
            >
              Solid
            </ic-button>
            <ic-button
              variant="secondary"
              theme="dark"
              disabled
              transparent-background="false"
            >
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme - monochrome, non-transparent
          </ic-typography>
          <div>
            <ic-button
              variant="secondary"
              monochrome
              theme="dark"
              transparent-background="false"
            >
              Mono-solid
            </ic-button>
            <ic-button
              variant="secondary"
              disabled
              monochrome
              theme="dark"
              transparent-background="false"
            >
              Disabled
            </ic-button>
          </div>
        </div>
      </div>`,name:"Secondary"},Tertiary={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <div
        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large"> Light theme </ic-typography>
          <div>
            <ic-button variant="tertiary" theme="light" id="mybuttonid">
              Tertiary
            </ic-button>
            <ic-button variant="tertiary" theme="light" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="tertiary" theme="light" monochrome>
              Monochrome
            </ic-button>
            <ic-button variant="tertiary" disabled monochrome theme="light">
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - non-transparent
          </ic-typography>
          <div>
            <ic-button
              variant="tertiary"
              transparent-background="false"
              theme="light"
            >
              Solid
            </ic-button>
            <ic-button
              variant="tertiary"
              disabled
              theme="light"
              transparent-background="false"
            >
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large">
            Light theme - monochrome, non-transparent
          </ic-typography>
          <div>
            <ic-button
              variant="tertiary"
              theme="light"
              monochrome
              transparent-background="false"
            >
              Mono-Solid
            </ic-button>
            <ic-button
              variant="tertiary"
              disabled
              monochrome
              theme="light"
              transparent-background="false"
            >
              Disabled
            </ic-button>
          </div>
        </div>
      </div>
      <div
        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#232629; border-radius: 5px; width:fit-content;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme
          </ic-typography>
          <div>
            <ic-button variant="tertiary" theme="dark" id="mybuttonid">
              Tertiary
            </ic-button>
            <ic-button variant="tertiary" theme="dark" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme - monochrome
          </ic-typography>
          <div>
            <ic-button variant="tertiary" monochrome theme="dark">
              Monochrome
            </ic-button>
            <ic-button variant="tertiary" disabled monochrome theme="dark">
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme - non-transparent
          </ic-typography>
          <div>
            <ic-button
              variant="tertiary"
              theme="dark"
              id="mybuttonid"
              transparent-background="false"
            >
              Solid
            </ic-button>
            <ic-button
              variant="tertiary"
              theme="dark"
              disabled
              transparent-background="false"
            >
              Disabled
            </ic-button>
          </div>
        </div>
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme - monochrome, non-transparent
          </ic-typography>
          <div>
            <ic-button
              variant="tertiary"
              monochrome
              theme="dark"
              transparent-background="false"
            >
              Mono-solid
            </ic-button>
            <ic-button
              variant="tertiary"
              disabled
              monochrome
              theme="dark"
              transparent-background="false"
            >
              Disabled
            </ic-button>
          </div>
        </div>
      </div>`,name:"Tertiary"},Destructive={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <div
        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large"> Light theme </ic-typography>
          <div>
            <ic-button variant="destructive" theme="light" id="mybuttonid">
              Destructive
            </ic-button>
            <ic-button variant="destructive" theme="light" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
      </div>
      <div
        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#474A48; border-radius: 5px; width:fit-content;"
      >
        <div
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"
        >
          <ic-typography variant="subtitle-large" style="color: white">
            Dark theme
          </ic-typography>
          <div>
            <ic-button variant="destructive" theme="dark" id="mybuttonid">
              Destructive
            </ic-button>
            <ic-button variant="destructive" theme="dark" disabled>
              Disabled
            </ic-button>
          </div>
        </div>
      </div>`,name:"Destructive"},IconVariants={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="display:flex; gap: 1rem; flex-direction:column;">
      <div>
        <ic-typography>Default</ic-typography>
        <div style="display:flex; gap: 0.5rem">
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
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
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
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
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
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
          </ic-button>
          <ic-button variant="icon" aria-label="refresh" id="testbutton">
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
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
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
          </ic-button>
        </div>
      </div>
      <div>
        <ic-typography>Small</ic-typography>
        <div style="display:flex; gap: 0.5rem">
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            size="small"
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
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            size="small"
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
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            size="small"
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
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            size="small"
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
          </ic-button>
        </div>
      </div>
      <div>
        <ic-typography>Large</ic-typography>
        <div style="display:flex; gap: 0.5rem">
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            size="large"
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
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            size="large"
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
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            size="large"
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
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            size="large"
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
          </ic-button>
        </div>
      </div>
      <div>
        <ic-typography>Loading</ic-typography>
        <div style="display:flex; gap: 0.5rem">
          <ic-button
            variant="icon-primary"
            theme="light"
            aria-label="refresh"
            id="testbutton"
            loading
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
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            loading
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
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            loading
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
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            loading
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
          </ic-button>
        </div>
      </div>
      <div>
        <ic-typography>Disabled</ic-typography>
        <div style="display:flex; gap: 0.5rem">
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            disabled
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
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            disabled
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
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            disabled
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
          </ic-button>
          <ic-button
            variant="icon"
            aria-label="refresh"
            id="testbutton"
            disabled
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
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            disabled
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
          </ic-button>
        </div>
      </div>
      <div>
        <ic-typography>Light - monochrome</ic-typography>
        <div
          style="width: fit-content; background-color: #ececec; padding: 0.5rem;"
        >
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            monochrome
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
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            monochrome
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
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            monochrome
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
          </ic-button>
          <ic-button
            variant="icon"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            monochrome
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
          </ic-button>
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            loading
            monochrome
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
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            loading
            monochrome
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
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="light"
            loading
            monochrome
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
          </ic-button>
        </div>
      </div>
      <ic-typography>Dark</ic-typography>
      <div
        style="background-color:#474A48; padding: 0.5rem; width: fit-content;"
      >
        <div>
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
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
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
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
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
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
          </ic-button>
          <ic-button
            variant="icon"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
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
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
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
          </ic-button>
        </div>
      </div>
      <ic-typography>Dark Loading</ic-typography>
      <div
        style="background-color:#474A48; padding: 0.5rem; width: fit-content;"
      >
        <div>
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
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
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
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
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
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
          </ic-button>
          <ic-button
            variant="icon"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
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
          </ic-button>
          <ic-button
            variant="icon-destructive"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
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
          </ic-button>
        </div>
      </div>
      <ic-typography>Dark - monochrome</ic-typography>
      <div
        style="background-color:#474A48; padding: 0.5rem; width: fit-content;"
      >
        <div>
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            monochrome
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
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            monochrome
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
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            monochrome
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
          </ic-button>
          <ic-button
            variant="icon"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            monochrome
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
          </ic-button>
          <ic-button
            variant="icon-primary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
            monochrome
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
          </ic-button>
          <ic-button
            variant="icon-secondary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
            monochrome
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
          </ic-button>
          <ic-button
            variant="icon-tertiary"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
            monochrome
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
          </ic-button>
          <ic-button
            variant="icon"
            aria-label="refresh"
            id="testbutton"
            theme="dark"
            loading
            monochrome
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
          </ic-button>
        </div>
      </div>
    </div>`,name:"Icon variants"},WithIcon={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="padding: 1rem; display: flex; gap: 1rem">
        <ic-button variant="primary">
          Primary
          <svg
            slot="left-icon"
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
        </ic-button>
        <ic-button variant="secondary">
          Secondary
          <svg
            slot="left-icon"
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
        </ic-button>
        <ic-button variant="tertiary">
          Tertiary
          <svg
            slot="left-icon"
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
        </ic-button>
        <ic-button variant="destructive">
          Destructive
          <svg
            slot="left-icon"
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
        </ic-button>
      </div>
      <div style="padding: 1rem; display: flex; gap: 1rem">
        <ic-button variant="primary">
          Primary
          <svg
            slot="right-icon"
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
        </ic-button>
        <ic-button variant="secondary">
          Secondary
          <svg
            slot="right-icon"
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
        </ic-button>
        <ic-button variant="tertiary">
          Tertiary
          <svg
            slot="right-icon"
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
        </ic-button>
        <ic-button variant="destructive">
          Destructive
          <svg
            slot="right-icon"
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
        </ic-button>
      </div> `,name:"With icon"},Dropdown={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div>
      <div style="padding: 6px">
        <ic-button dropdown="true" variant="primary">Button</ic-button>
        <ic-button dropdown="true" variant="primary"
          >Button
          <svg
            slot="left-icon"
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
        </ic-button>
        <ic-button dropdown="true" variant="secondary">Button</ic-button>
        <ic-button dropdown="true" variant="tertiary">Button</ic-button>
      </div>
      <div style="padding: 6px">
        <ic-button dropdown="true" disabled="true" variant="primary"
          >Button</ic-button
        >
        <ic-button dropdown="true" disabled="true" variant="primary"
          >Button
          <svg
            slot="left-icon"
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
        </ic-button>
        <ic-button dropdown="true" disabled="true" variant="secondary"
          >Button</ic-button
        >
        <ic-button dropdown="true" disabled="true" variant="tertiary"
          >Button</ic-button
        >
      </div>
      <div style="padding: 6px">
        <ic-button dropdown="true" variant="primary" theme="dark"
          >Button</ic-button
        >
        <ic-button dropdown="true" theme="dark" variant="primary"
          >Button
          <svg
            slot="left-icon"
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
        </ic-button>
        <ic-button dropdown="true" variant="secondary" theme="dark"
          >Button</ic-button
        >
        <ic-button dropdown="true" variant="tertiary" theme="dark"
          >Button</ic-button
        >
      </div>
      <div
        style="background-color:var(--ic-color-page-background-dark); padding:6px 10px; width:fit-content;"
      >
        <ic-button dropdown="true" variant="primary" theme="light"
          >Button</ic-button
        >
        <ic-button dropdown="true" theme="light" variant="primary"
          >Button
          <svg
            slot="left-icon"
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
        </ic-button>
        <ic-button dropdown="true" variant="secondary" theme="light"
          >Button</ic-button
        >
        <ic-button
          dropdown="true"
          variant="tertiary"
          theme="light"
          id="mybuttonid"
          >Button</ic-button
        >
      </div>
      <div style="padding: 6px">
        <ic-button dropdown="true" variant="primary" size="small"
          >Button</ic-button
        >
        <ic-button dropdown="true" size="small" variant="primary"
          >Button
          <svg
            slot="left-icon"
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
        </ic-button>
        <ic-button dropdown="true" variant="secondary" size="small"
          >Button</ic-button
        >
        <ic-button dropdown="true" variant="tertiary" size="small"
          >Button</ic-button
        >
      </div>
      <div style="padding: 6px">
        <ic-button dropdown="true" variant="primary" size="large"
          >Button</ic-button
        >
        <ic-button dropdown="true" size="large" variant="primary"
          >Button
          <svg
            slot="left-icon"
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
        </ic-button>
        <ic-button dropdown="true" variant="secondary" size="large"
          >Button</ic-button
        >
        <ic-button dropdown="true" variant="tertiary" size="large"
          >Button</ic-button
        >
      </div>
      <div style="padding: 6px">
        <ic-button dropdown="true" variant="icon">
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
        </ic-button>
        <ic-button dropdown="true" variant="icon-primary"> </ic-button>
        <ic-button dropdown="true" variant="icon-secondary"> </ic-button>
        <ic-button dropdown="true" variant="icon-tertiary"> </ic-button>
      </div>
    </div>`,name:"Dropdown"},DropdownExample={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<script>
        var icPopover = document.querySelector("#popover-menu");
        var icButton = document.querySelector("#button-1");
        function handleClick() {
          icPopover.open = icButton.dropdownExpanded;
        }
        icPopover.addEventListener("icPopoverClosed", handleClose);
        function handleClose() {
          icButton.dropdownExpanded = icPopover.open;
        }
      </script>
      <div>
        <ic-button
          dropdown="true"
          variant="primary"
          onclick="handleClick()"
          id="button-1"
          >Button</ic-button
        >
        <ic-popover-menu
          anchor="button-1"
          aria-label="popover"
          id="popover-menu"
        >
          <ic-menu-item label="Copy code"></ic-menu-item>
          <ic-menu-item label="Paste code"></ic-menu-item>
          <ic-menu-item label="Actions"></ic-menu-item>
        </ic-popover-menu>
      </div>`,name:"Dropdown example"},Size={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-button variant="primary" size="small">Small</ic-button>
      <ic-button variant="primary">Default</ic-button>
      <ic-button variant="primary" size="large">Large</ic-button>
      <ic-button variant="primary" size="small"
        >Small
        <svg
          slot="left-icon"
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
      </ic-button>
      <ic-button variant="primary"
        >Default
        <svg
          slot="left-icon"
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
      </ic-button>
      <ic-button variant="primary" size="large"
        >Large
        <svg
          slot="left-icon"
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
      </ic-button>`,name:"Size"},RouterLink={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="padding: 8px">
        <ic-button size="small">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button>
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button size="large">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
      </div>
      <div style="padding: 8px">
        <ic-button disabled="true">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button variant="secondary">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button variant="tertiary">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button variant="destructive">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button variant="icon">
          <a slot="router-item" href="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </ic-button>
      </div>
      <div style="padding: 8px">
        <ic-button theme="light" monochrome="true">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
        <ic-button theme="dark" monochrome="true">
          <a slot="router-item" href="/">Slotted link</a>
        </ic-button>
      </div>`,name:"Router link",parameters:{layout:"fullscreen"}},RouterLinkWithSlottedContent={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="padding: 8px">
        <ic-button size="small">
          <a slot="router-item" href="/">
            <svg
              slot="left-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </ic-button>
        <ic-button>
          <a slot="router-item" href="/">
            <svg
              slot="left-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </ic-button>
        <ic-button size="large">
          <a slot="router-item" href="/">
            <svg
              slot="left-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            <ic-badge slot="badge" label="1" position="near"></ic-badge>
            Slotted link
          </a>
        </ic-button>
      </div>
      <div style="padding: 8px">
        <ic-button disabled="true">
          <a slot="router-item" href="/">
            <svg
              slot="right-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </ic-button>
        <ic-button variant="secondary">
          <a slot="router-item" href="/">
            <svg
              slot="right-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </ic-button>
        <ic-button variant="tertiary">
          <a slot="router-item" href="/">
            <svg
              slot="right-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </ic-button>
        <ic-button variant="destructive">
          <a slot="router-item" href="/">
            <svg
              slot="right-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </ic-button>
      </div>
      <div style="padding: 8px">
        <ic-button theme="light" monochrome="true">
          <a slot="router-item" href="/">
            <svg
              slot="top-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </ic-button>
        <ic-button theme="dark" monochrome="true">
          <a slot="router-item" href="/">
            <svg
              slot="top-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              />
            </svg>
            Slotted link
          </a>
        </ic-button>
      </div>`,name:"Router link - with slotted content",parameters:{layout:"fullscreen"}},IconWithoutViewBox={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-button variant="primary" size="small"
        >Small
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="primary"
        >Default
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>
      <ic-button variant="primary" size="large"
        >Large
        <svg
          slot="left-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-button>`,name:"Icon without viewBox"},FullWidth={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-button variant="primary" full-width="true"
      >Button
      <svg
        slot="left-icon"
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
    </ic-button>
    <ic-button variant="secondary" full-width="true"
      >Button
      <svg
        slot="left-icon"
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
    </ic-button>
    <ic-button variant="tertiary" full-width="true"
      >Button
      <svg
        slot="left-icon"
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
    </ic-button>
    <ic-button theme="dark" full-width="true"
      >Button
      <svg
        slot="left-icon"
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
    </ic-button>
    <ic-button variant="destructive" full-width="true"
      >Button
      <svg
        slot="left-icon"
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
    </ic-button>
    <ic-button variant="destructive" disabled full-width="true"
      >Button
      <svg
        slot="left-icon"
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
    </ic-button>
    <div
      style="background-color:var(--ic-color-page-background-dark); padding:6px 10px,"
    >
      <ic-button variant="primary" theme="light" full-width="true">
        Button
        <svg
          slot="left-icon"
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
      </ic-button>
      <ic-button variant="secondary" theme="light" full-width="true">
        Button
        <svg
          slot="left-icon"
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
      </ic-button>
      <ic-button variant="tertiary" theme="light" full-width="true">
        Button
        <svg
          slot="left-icon"
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
      </ic-button>
    </div>
  `,name:"Full width"},MinWidth={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <style>
      ic-button {
        --min-width: 4rem;
      }
    </style>
    <ic-button>Min</ic-button>
    <ic-button variant="secondary">Min</ic-button>
  `,name:"Min width"},Height={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <style>
      ic-button[name="tall-button"] {
        --height: 9rem;
      }
    </style>
    <ic-button name="tall-button">Tall Button</ic-button>
    <ic-button variant="secondary" name="tall-button">Tall Button</ic-button>
  `,name:"Height"},Tooltips={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-button
        variant="icon"
        aria-label="refresh"
        title="aria label sets the icon button's accessible name, title adds a tooltip"
        id="testbutton"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          /></svg
      ></ic-button>
      <ic-button variant="icon-primary" aria-label="primary" id="testbutton"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          /></svg
      ></ic-button>
      <ic-button variant="icon-secondary" aria-label="secondary" id="testbutton"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          /></svg
      ></ic-button>
      <ic-button variant="icon-tertiary" aria-label="tertiary" id="testbutton"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          /></svg
      ></ic-button>
      <ic-button
        variant="icon"
        aria-label="you can disable tooltips on icon buttons"
        disable-tooltip="true"
        id="testbutton"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          /></svg
      ></ic-button>
      <ic-button
        variant="primary"
        id="testbutton2"
        title="We can add tooltips to text buttons"
        >Button With Title</ic-button
      >
      <ic-button
        variant="primary"
        id="testbutton2"
        title="the tooltipPlacement prop allows us to change the location of the tooltip"
        tooltip-placement="right"
        >Different positions</ic-button
      >`,name:"Tooltips"},PositioningStrategy={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <script>
        var switchEl = document.querySelector("ic-switch");
        var buttonEl = document.querySelector("ic-button");
        switchEl.addEventListener("icChange", (ev) => {
          buttonEl.tooltipFixedPositioning = ev.detail.checked;
        });
      </script>
      <div style="display:flex; flex-direction:column; gap:var(--ic-space-xs)">
        <ic-typography>
          Toggle the fixed positioning switch and hover over the button to see
          it take effect
        </ic-typography>
        <div
          style="display:flex; flex-direction:column; gap:var(--ic-space-xs); padding:var(--ic-space-md); border:1px solid var(--ic-color-text-primary); overflow:hidden; width:100px; position:relative"
        >
          <ic-button title="This is a tooltip with a long label" id="button-1">
            Button
          </ic-button>
        </div>
        <ic-switch label="Fixed tooltip positioning"></ic-switch>
      </div>`,name:"Tooltip positioning strategy"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-button
      disabled=${args.disabled}
      variant=${args.variant}
      full-width=${args.fullWidth}
      size=${args.size}
      loading=${args.loading}
      theme=${args.theme}
      monochrome=${args.monochrome}
      dropdown=${args.dropdown}
      transparent-background=${args.transparentBackground}
      >${args.message}</ic-button
    >`,args:defaultArgs,argTypes:{variant:{options:["primary","secondary","tertiary","destructive"],control:{type:"select"}},size:{options:["medium","large","small"],control:{type:"inline-radio"}},theme:{options:["inherit","dark","light"],control:{type:"inline-radio"}},fullWidth:{control:{type:"boolean"}},monochrome:{control:{type:"boolean"}},dropdown:{control:{type:"boolean"}},transparentBackground:{control:{type:"boolean"}}},name:"Playground"},PlaygroundWithIcon={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-button
      disabled=${args.disabled}
      variant=${args.variant}
      size=${args.size}
      full-width=${args.fullWidth}
      loading=${args.loading}
      theme=${args.theme}
      monochrome=${args.monochrome}
      >${args.message}
      <svg
        slot=${args.iconPlacement}
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        /></svg
    ></ic-button>`,args:{...defaultArgs},argTypes:{variant:{options:["primary","secondary","tertiary","destructive"],control:{type:"select"}},size:{options:["medium","large","small"],control:{type:"inline-radio"}},theme:{options:["default","dark","light"],control:{type:"inline-radio"}},fullWidth:{control:{type:"boolean"}},iconPlacement:{options:["left-icon","right-icon","top-icon"],control:{type:"inline-radio"}},monochrome:{control:{type:"boolean"}}},name:"Playground with icon"},Loading={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="padding: 6px">
      <ic-button variant="primary" loading>Button</ic-button>
    </div>
    <div style="padding: 6px">
      <ic-button variant="primary" loading theme="dark">Button</ic-button>
    </div>
    <div
      style="background-color:var(--ic-color-page-background-dark); padding:6px 10px; width:fit-content"
    >
      <ic-button variant="primary" loading theme="light">Button</ic-button>
    </div>
    <div style="padding: 6px">
      <ic-button variant="secondary" loading>Button</ic-button>
    </div>
    <div style="padding: 6px">
      <ic-button variant="secondary" loading theme="dark">Button</ic-button>
    </div>
    <div
      style="background-color:var(--ic-color-page-background-dark); padding:6px 10px; width:fit-content"
    >
      <ic-button variant="secondary" loading theme="light">Button</ic-button>
    </div>
    <div style="padding: 6px">
      <ic-button variant="tertiary" loading>Button</ic-button>
    </div>
    <div style="padding: 6px">
      <ic-button variant="tertiary" loading theme="dark">Button</ic-button>
    </div>
    <div
      style="background-color:var(--ic-color-page-background-dark); padding:6px 10px; width:fit-content"
    >
      <ic-button variant="tertiary" loading theme="light">Button</ic-button>
    </div>
    <ic-button variant="destructive" loading>Button</ic-button>
  `,name:"Loading"},AriaDescribedby={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <script>
      function btnClick() {
        var descEl = document.querySelector("#button-description");
        descEl.innerText = "See, I told you it was amazing!";
      }
    </script>
    <div style="padding: 6px">
      <span id="button-description">This button does something amazing</span>
      <br />
      <ic-button
        variant="primary"
        onclick="btnClick()"
        aria-describedby="button-description"
        >Button</ic-button
      >
    </div>
  `,name:"Aria-describedby"},FileUploadInAForm={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <form method="POST" action="someurl" enctype="multipart/form-data">
      <span id="selected-file">No File Selected</span>
      <div style="padding: 6px">
        <ic-button
          variant="primary"
          id="file-button"
          multiple="true"
          file-upload="true"
          accept=".doc, text/plain, .json"
          >Upload File true</ic-button
        >
      </div>
      <br />
      <br />
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
    </form>
    <script>
      var descEl = document.querySelector("#selected-file");
      var file;
      onclick = document
        .querySelector("#file-button")
        .addEventListener("icFileSelection", (ev) => {
          const fileArray = ev.detail;
          const fileList = [];
          Array.from(fileArray).forEach((file) => {
            fileList.push(file.name);
          });
          descEl.innerText = "Files Selected: " + fileList.join(", ");
          file = ev;
        });
      document.querySelector("form").addEventListener("submit", (ev) => {
        if (file == undefined) return;
      });
    </script>
  `,name:"File upload in a form"},FileUpload={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <span id="selected-file">No File Selected</span>
    <div style="padding: 6px">
      <ic-button
        variant="primary"
        id="file-button"
        file-upload="true"
        accept=".doc, text/plain, .json"
        >Upload File true</ic-button
      >
    </div>
    <script>
      var descEl = document.querySelector("#selected-file");
      var file;
      onclick = document
        .querySelector("#file-button")
        .addEventListener("icFileSelection", (ev) => {
          const fileArray = ev.detail;
          const fileList = [];
          Array.from(fileArray).forEach((file) => {
            fileList.push(file.name);
          });
          descEl.innerText = "Files Selected: " + fileList.join(", ");
        });
    </script>
  `,name:"File upload"},__namedExportsOrder=["Primary","Secondary","Tertiary","Destructive","IconVariants","WithIcon","Dropdown","DropdownExample","Size","RouterLink","RouterLinkWithSlottedContent","IconWithoutViewBox","FullWidth","MinWidth","Height","Tooltips","PositioningStrategy","Playground","PlaygroundWithIcon","Loading","AriaDescribedby","FileUploadInAForm","FileUpload"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div\n        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"\n      >\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large"> Light theme </ic-typography>\n          <div>\n            <ic-button variant="primary" theme="light" id="mybuttonid">\n              Primary\n            </ic-button>\n            <ic-button variant="primary" theme="light" disabled>\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large">\n            Light theme - monochrome\n          </ic-typography>\n          <div>\n            <ic-button variant="primary" monochrome theme="light">\n              Monochrome\n            </ic-button>\n            <ic-button variant="primary" disabled monochrome theme="light">\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n      </div>\n      <div\n        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#474A48; border-radius: 5px; width:fit-content;"\n      >\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large" style="color: white">\n            Dark theme\n          </ic-typography>\n          <div>\n            <ic-button variant="primary" theme="dark" id="mybuttonid">\n              Primary\n            </ic-button>\n            <ic-button variant="primary" theme="dark" disabled>\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large" style="color: white">\n            Dark theme - monochrome\n          </ic-typography>\n          <div>\n            <ic-button variant="primary" monochrome theme="dark">\n              Monochrome\n            </ic-button>\n            <ic-button variant="primary" disabled monochrome theme="dark">\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n      </div>`,\n  name: "Primary"\n}',...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:'{\n  render: () => html` <div\n        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"\n      >\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large"> Light theme </ic-typography>\n          <div>\n            <ic-button variant="secondary" theme="light" id="mybuttonid">\n              Secondary\n            </ic-button>\n            <ic-button variant="secondary" theme="light" disabled>\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large">\n            Light theme - monochrome\n          </ic-typography>\n          <div>\n            <ic-button variant="secondary" monochrome theme="light">\n              Monochrome\n            </ic-button>\n            <ic-button variant="secondary" disabled monochrome theme="light">\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large">\n            Light theme - non-transparent\n          </ic-typography>\n          <div>\n            <ic-button\n              variant="secondary"\n              transparent-background="false"\n              theme="light"\n            >\n              Solid\n            </ic-button>\n            <ic-button\n              variant="secondary"\n              disabled\n              theme="light"\n              transparent-background="false"\n            >\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large">\n            Light theme - monochrome, non-transparent\n          </ic-typography>\n          <div>\n            <ic-button\n              variant="secondary"\n              theme="light"\n              monochrome\n              transparent-background="false"\n            >\n              Mono-Solid\n            </ic-button>\n            <ic-button\n              variant="secondary"\n              disabled\n              monochrome\n              theme="light"\n              transparent-background="false"\n            >\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n      </div>\n      <div\n        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#232629; border-radius: 5px; width:fit-content;"\n      >\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large" style="color: white">\n            Dark theme\n          </ic-typography>\n          <div>\n            <ic-button variant="secondary" theme="dark" id="mybuttonid">\n              Secondary\n            </ic-button>\n            <ic-button variant="secondary" theme="dark" disabled>\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large" style="color: white">\n            Dark theme - monochrome\n          </ic-typography>\n          <div>\n            <ic-button variant="secondary" monochrome theme="dark">\n              Monochrome\n            </ic-button>\n            <ic-button variant="secondary" disabled monochrome theme="dark">\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large" style="color: white">\n            Dark theme - non-transparent\n          </ic-typography>\n          <div>\n            <ic-button\n              variant="secondary"\n              theme="dark"\n              id="mybuttonid"\n              transparent-background="false"\n            >\n              Solid\n            </ic-button>\n            <ic-button\n              variant="secondary"\n              theme="dark"\n              disabled\n              transparent-background="false"\n            >\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large" style="color: white">\n            Dark theme - monochrome, non-transparent\n          </ic-typography>\n          <div>\n            <ic-button\n              variant="secondary"\n              monochrome\n              theme="dark"\n              transparent-background="false"\n            >\n              Mono-solid\n            </ic-button>\n            <ic-button\n              variant="secondary"\n              disabled\n              monochrome\n              theme="dark"\n              transparent-background="false"\n            >\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n      </div>`,\n  name: "Secondary"\n}',...Secondary.parameters?.docs?.source}}},Tertiary.parameters={...Tertiary.parameters,docs:{...Tertiary.parameters?.docs,source:{originalSource:'{\n  render: () => html` <div\n        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"\n      >\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large"> Light theme </ic-typography>\n          <div>\n            <ic-button variant="tertiary" theme="light" id="mybuttonid">\n              Tertiary\n            </ic-button>\n            <ic-button variant="tertiary" theme="light" disabled>\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large">\n            Light theme - monochrome\n          </ic-typography>\n          <div>\n            <ic-button variant="tertiary" theme="light" monochrome>\n              Monochrome\n            </ic-button>\n            <ic-button variant="tertiary" disabled monochrome theme="light">\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large">\n            Light theme - non-transparent\n          </ic-typography>\n          <div>\n            <ic-button\n              variant="tertiary"\n              transparent-background="false"\n              theme="light"\n            >\n              Solid\n            </ic-button>\n            <ic-button\n              variant="tertiary"\n              disabled\n              theme="light"\n              transparent-background="false"\n            >\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large">\n            Light theme - monochrome, non-transparent\n          </ic-typography>\n          <div>\n            <ic-button\n              variant="tertiary"\n              theme="light"\n              monochrome\n              transparent-background="false"\n            >\n              Mono-Solid\n            </ic-button>\n            <ic-button\n              variant="tertiary"\n              disabled\n              monochrome\n              theme="light"\n              transparent-background="false"\n            >\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n      </div>\n      <div\n        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#232629; border-radius: 5px; width:fit-content;"\n      >\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large" style="color: white">\n            Dark theme\n          </ic-typography>\n          <div>\n            <ic-button variant="tertiary" theme="dark" id="mybuttonid">\n              Tertiary\n            </ic-button>\n            <ic-button variant="tertiary" theme="dark" disabled>\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large" style="color: white">\n            Dark theme - monochrome\n          </ic-typography>\n          <div>\n            <ic-button variant="tertiary" monochrome theme="dark">\n              Monochrome\n            </ic-button>\n            <ic-button variant="tertiary" disabled monochrome theme="dark">\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large" style="color: white">\n            Dark theme - non-transparent\n          </ic-typography>\n          <div>\n            <ic-button\n              variant="tertiary"\n              theme="dark"\n              id="mybuttonid"\n              transparent-background="false"\n            >\n              Solid\n            </ic-button>\n            <ic-button\n              variant="tertiary"\n              theme="dark"\n              disabled\n              transparent-background="false"\n            >\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large" style="color: white">\n            Dark theme - monochrome, non-transparent\n          </ic-typography>\n          <div>\n            <ic-button\n              variant="tertiary"\n              monochrome\n              theme="dark"\n              transparent-background="false"\n            >\n              Mono-solid\n            </ic-button>\n            <ic-button\n              variant="tertiary"\n              disabled\n              monochrome\n              theme="dark"\n              transparent-background="false"\n            >\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n      </div>`,\n  name: "Tertiary"\n}',...Tertiary.parameters?.docs?.source}}},Destructive.parameters={...Destructive.parameters,docs:{...Destructive.parameters?.docs,source:{originalSource:'{\n  render: () => html` <div\n        style="display: flex; flex-direction: row; width: fit-content; background-color: #ececec;"\n      >\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large"> Light theme </ic-typography>\n          <div>\n            <ic-button variant="destructive" theme="light" id="mybuttonid">\n              Destructive\n            </ic-button>\n            <ic-button variant="destructive" theme="light" disabled>\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n      </div>\n      <div\n        style="display: flex; flex-direction: row; margin-top: 1rem; background-color:#474A48; border-radius: 5px; width:fit-content;"\n      >\n        <div\n          style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem"\n        >\n          <ic-typography variant="subtitle-large" style="color: white">\n            Dark theme\n          </ic-typography>\n          <div>\n            <ic-button variant="destructive" theme="dark" id="mybuttonid">\n              Destructive\n            </ic-button>\n            <ic-button variant="destructive" theme="dark" disabled>\n              Disabled\n            </ic-button>\n          </div>\n        </div>\n      </div>`,\n  name: "Destructive"\n}',...Destructive.parameters?.docs?.source}}},IconVariants.parameters={...IconVariants.parameters,docs:{...IconVariants.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="display:flex; gap: 1rem; flex-direction:column;">\n      <div>\n        <ic-typography>Default</ic-typography>\n        <div style="display:flex; gap: 0.5rem">\n          <ic-button\n            variant="icon-primary"\n            aria-label="refresh"\n            id="testbutton"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-secondary"\n            aria-label="refresh"\n            id="testbutton"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-tertiary"\n            aria-label="refresh"\n            id="testbutton"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button variant="icon" aria-label="refresh" id="testbutton">\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-destructive"\n            aria-label="refresh"\n            id="testbutton"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n        </div>\n      </div>\n      <div>\n        <ic-typography>Small</ic-typography>\n        <div style="display:flex; gap: 0.5rem">\n          <ic-button\n            variant="icon-primary"\n            aria-label="refresh"\n            id="testbutton"\n            size="small"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-secondary"\n            aria-label="refresh"\n            id="testbutton"\n            size="small"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-tertiary"\n            aria-label="refresh"\n            id="testbutton"\n            size="small"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-destructive"\n            aria-label="refresh"\n            id="testbutton"\n            size="small"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n        </div>\n      </div>\n      <div>\n        <ic-typography>Large</ic-typography>\n        <div style="display:flex; gap: 0.5rem">\n          <ic-button\n            variant="icon-primary"\n            aria-label="refresh"\n            id="testbutton"\n            size="large"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-secondary"\n            aria-label="refresh"\n            id="testbutton"\n            size="large"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-tertiary"\n            aria-label="refresh"\n            id="testbutton"\n            size="large"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-destructive"\n            aria-label="refresh"\n            id="testbutton"\n            size="large"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n        </div>\n      </div>\n      <div>\n        <ic-typography>Loading</ic-typography>\n        <div style="display:flex; gap: 0.5rem">\n          <ic-button\n            variant="icon-primary"\n            theme="light"\n            aria-label="refresh"\n            id="testbutton"\n            loading\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-secondary"\n            aria-label="refresh"\n            id="testbutton"\n            loading\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-tertiary"\n            aria-label="refresh"\n            id="testbutton"\n            loading\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-destructive"\n            aria-label="refresh"\n            id="testbutton"\n            loading\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n        </div>\n      </div>\n      <div>\n        <ic-typography>Disabled</ic-typography>\n        <div style="display:flex; gap: 0.5rem">\n          <ic-button\n            variant="icon-primary"\n            aria-label="refresh"\n            id="testbutton"\n            disabled\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-secondary"\n            aria-label="refresh"\n            id="testbutton"\n            disabled\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-tertiary"\n            aria-label="refresh"\n            id="testbutton"\n            disabled\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon"\n            aria-label="refresh"\n            id="testbutton"\n            disabled\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-destructive"\n            aria-label="refresh"\n            id="testbutton"\n            disabled\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n        </div>\n      </div>\n      <div>\n        <ic-typography>Light - monochrome</ic-typography>\n        <div\n          style="width: fit-content; background-color: #ececec; padding: 0.5rem;"\n        >\n          <ic-button\n            variant="icon-primary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="light"\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-secondary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="light"\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-tertiary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="light"\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon"\n            aria-label="refresh"\n            id="testbutton"\n            theme="light"\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-primary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="light"\n            loading\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-secondary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="light"\n            loading\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-tertiary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="light"\n            loading\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n        </div>\n      </div>\n      <ic-typography>Dark</ic-typography>\n      <div\n        style="background-color:#474A48; padding: 0.5rem; width: fit-content;"\n      >\n        <div>\n          <ic-button\n            variant="icon-primary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-secondary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-tertiary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-destructive"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n        </div>\n      </div>\n      <ic-typography>Dark Loading</ic-typography>\n      <div\n        style="background-color:#474A48; padding: 0.5rem; width: fit-content;"\n      >\n        <div>\n          <ic-button\n            variant="icon-primary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n            loading\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-secondary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n            loading\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-tertiary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n            loading\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n            loading\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-destructive"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n            loading\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n        </div>\n      </div>\n      <ic-typography>Dark - monochrome</ic-typography>\n      <div\n        style="background-color:#474A48; padding: 0.5rem; width: fit-content;"\n      >\n        <div>\n          <ic-button\n            variant="icon-primary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-secondary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-tertiary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-primary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n            loading\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-secondary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n            loading\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon-tertiary"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n            loading\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n          <ic-button\n            variant="icon"\n            aria-label="refresh"\n            id="testbutton"\n            theme="dark"\n            loading\n            monochrome\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              fill="#000000"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg>\n          </ic-button>\n        </div>\n      </div>\n    </div>`,\n  name: "Icon variants"\n}',...IconVariants.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="padding: 1rem; display: flex; gap: 1rem">\n        <ic-button variant="primary">\n          Primary\n          <svg\n            slot="left-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button variant="secondary">\n          Secondary\n          <svg\n            slot="left-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button variant="tertiary">\n          Tertiary\n          <svg\n            slot="left-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button variant="destructive">\n          Destructive\n          <svg\n            slot="left-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n      </div>\n      <div style="padding: 1rem; display: flex; gap: 1rem">\n        <ic-button variant="primary">\n          Primary\n          <svg\n            slot="right-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button variant="secondary">\n          Secondary\n          <svg\n            slot="right-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button variant="tertiary">\n          Tertiary\n          <svg\n            slot="right-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button variant="destructive">\n          Destructive\n          <svg\n            slot="right-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n      </div> `,\n  name: "With icon"\n}',...WithIcon.parameters?.docs?.source}}},Dropdown.parameters={...Dropdown.parameters,docs:{...Dropdown.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div>\n      <div style="padding: 6px">\n        <ic-button dropdown="true" variant="primary">Button</ic-button>\n        <ic-button dropdown="true" variant="primary"\n          >Button\n          <svg\n            slot="left-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button dropdown="true" variant="secondary">Button</ic-button>\n        <ic-button dropdown="true" variant="tertiary">Button</ic-button>\n      </div>\n      <div style="padding: 6px">\n        <ic-button dropdown="true" disabled="true" variant="primary"\n          >Button</ic-button\n        >\n        <ic-button dropdown="true" disabled="true" variant="primary"\n          >Button\n          <svg\n            slot="left-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button dropdown="true" disabled="true" variant="secondary"\n          >Button</ic-button\n        >\n        <ic-button dropdown="true" disabled="true" variant="tertiary"\n          >Button</ic-button\n        >\n      </div>\n      <div style="padding: 6px">\n        <ic-button dropdown="true" variant="primary" theme="dark"\n          >Button</ic-button\n        >\n        <ic-button dropdown="true" theme="dark" variant="primary"\n          >Button\n          <svg\n            slot="left-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button dropdown="true" variant="secondary" theme="dark"\n          >Button</ic-button\n        >\n        <ic-button dropdown="true" variant="tertiary" theme="dark"\n          >Button</ic-button\n        >\n      </div>\n      <div\n        style="background-color:var(--ic-color-page-background-dark); padding:6px 10px; width:fit-content;"\n      >\n        <ic-button dropdown="true" variant="primary" theme="light"\n          >Button</ic-button\n        >\n        <ic-button dropdown="true" theme="light" variant="primary"\n          >Button\n          <svg\n            slot="left-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button dropdown="true" variant="secondary" theme="light"\n          >Button</ic-button\n        >\n        <ic-button\n          dropdown="true"\n          variant="tertiary"\n          theme="light"\n          id="mybuttonid"\n          >Button</ic-button\n        >\n      </div>\n      <div style="padding: 6px">\n        <ic-button dropdown="true" variant="primary" size="small"\n          >Button</ic-button\n        >\n        <ic-button dropdown="true" size="small" variant="primary"\n          >Button\n          <svg\n            slot="left-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button dropdown="true" variant="secondary" size="small"\n          >Button</ic-button\n        >\n        <ic-button dropdown="true" variant="tertiary" size="small"\n          >Button</ic-button\n        >\n      </div>\n      <div style="padding: 6px">\n        <ic-button dropdown="true" variant="primary" size="large"\n          >Button</ic-button\n        >\n        <ic-button dropdown="true" size="large" variant="primary"\n          >Button\n          <svg\n            slot="left-icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button dropdown="true" variant="secondary" size="large"\n          >Button</ic-button\n        >\n        <ic-button dropdown="true" variant="tertiary" size="large"\n          >Button</ic-button\n        >\n      </div>\n      <div style="padding: 6px">\n        <ic-button dropdown="true" variant="icon">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        </ic-button>\n        <ic-button dropdown="true" variant="icon-primary"> </ic-button>\n        <ic-button dropdown="true" variant="icon-secondary"> </ic-button>\n        <ic-button dropdown="true" variant="icon-tertiary"> </ic-button>\n      </div>\n    </div>`,\n  name: "Dropdown"\n}',...Dropdown.parameters?.docs?.source}}},DropdownExample.parameters={...DropdownExample.parameters,docs:{...DropdownExample.parameters?.docs,source:{originalSource:'{\n  render: () => html`<script>\n        var icPopover = document.querySelector("#popover-menu");\n        var icButton = document.querySelector("#button-1");\n        function handleClick() {\n          icPopover.open = icButton.dropdownExpanded;\n        }\n        icPopover.addEventListener("icPopoverClosed", handleClose);\n        function handleClose() {\n          icButton.dropdownExpanded = icPopover.open;\n        }\n      <\/script>\n      <div>\n        <ic-button\n          dropdown="true"\n          variant="primary"\n          onclick="handleClick()"\n          id="button-1"\n          >Button</ic-button\n        >\n        <ic-popover-menu\n          anchor="button-1"\n          aria-label="popover"\n          id="popover-menu"\n        >\n          <ic-menu-item label="Copy code"></ic-menu-item>\n          <ic-menu-item label="Paste code"></ic-menu-item>\n          <ic-menu-item label="Actions"></ic-menu-item>\n        </ic-popover-menu>\n      </div>`,\n  name: "Dropdown example"\n}',...DropdownExample.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-button variant="primary" size="small">Small</ic-button>\n      <ic-button variant="primary">Default</ic-button>\n      <ic-button variant="primary" size="large">Large</ic-button>\n      <ic-button variant="primary" size="small"\n        >Small\n        <svg\n          slot="left-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-button>\n      <ic-button variant="primary"\n        >Default\n        <svg\n          slot="left-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-button>\n      <ic-button variant="primary" size="large"\n        >Large\n        <svg\n          slot="left-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-button>`,\n  name: "Size"\n}',...Size.parameters?.docs?.source}}},RouterLink.parameters={...RouterLink.parameters,docs:{...RouterLink.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="padding: 8px">\n        <ic-button size="small">\n          <a slot="router-item" href="/">Slotted link</a>\n        </ic-button>\n        <ic-button>\n          <a slot="router-item" href="/">Slotted link</a>\n        </ic-button>\n        <ic-button size="large">\n          <a slot="router-item" href="/">Slotted link</a>\n        </ic-button>\n      </div>\n      <div style="padding: 8px">\n        <ic-button disabled="true">\n          <a slot="router-item" href="/">Slotted link</a>\n        </ic-button>\n        <ic-button variant="secondary">\n          <a slot="router-item" href="/">Slotted link</a>\n        </ic-button>\n        <ic-button variant="tertiary">\n          <a slot="router-item" href="/">Slotted link</a>\n        </ic-button>\n        <ic-button variant="destructive">\n          <a slot="router-item" href="/">Slotted link</a>\n        </ic-button>\n        <ic-button variant="icon">\n          <a slot="router-item" href="/">\n            <svg\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n          </a>\n        </ic-button>\n      </div>\n      <div style="padding: 8px">\n        <ic-button theme="light" monochrome="true">\n          <a slot="router-item" href="/">Slotted link</a>\n        </ic-button>\n        <ic-button theme="dark" monochrome="true">\n          <a slot="router-item" href="/">Slotted link</a>\n        </ic-button>\n      </div>`,\n  name: "Router link",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...RouterLink.parameters?.docs?.source}}},RouterLinkWithSlottedContent.parameters={...RouterLinkWithSlottedContent.parameters,docs:{...RouterLinkWithSlottedContent.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="padding: 8px">\n        <ic-button size="small">\n          <a slot="router-item" href="/">\n            <svg\n              slot="left-icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n            Slotted link\n          </a>\n        </ic-button>\n        <ic-button>\n          <a slot="router-item" href="/">\n            <svg\n              slot="left-icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n            Slotted link\n          </a>\n        </ic-button>\n        <ic-button size="large">\n          <a slot="router-item" href="/">\n            <svg\n              slot="left-icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n            <ic-badge slot="badge" label="1" position="near"></ic-badge>\n            Slotted link\n          </a>\n        </ic-button>\n      </div>\n      <div style="padding: 8px">\n        <ic-button disabled="true">\n          <a slot="router-item" href="/">\n            <svg\n              slot="right-icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n            Slotted link\n          </a>\n        </ic-button>\n        <ic-button variant="secondary">\n          <a slot="router-item" href="/">\n            <svg\n              slot="right-icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n            Slotted link\n          </a>\n        </ic-button>\n        <ic-button variant="tertiary">\n          <a slot="router-item" href="/">\n            <svg\n              slot="right-icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n            Slotted link\n          </a>\n        </ic-button>\n        <ic-button variant="destructive">\n          <a slot="router-item" href="/">\n            <svg\n              slot="right-icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n            Slotted link\n          </a>\n        </ic-button>\n      </div>\n      <div style="padding: 8px">\n        <ic-button theme="light" monochrome="true">\n          <a slot="router-item" href="/">\n            <svg\n              slot="top-icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n            Slotted link\n          </a>\n        </ic-button>\n        <ic-button theme="dark" monochrome="true">\n          <a slot="router-item" href="/">\n            <svg\n              slot="top-icon"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"\n                fill="currentColor"\n              />\n            </svg>\n            Slotted link\n          </a>\n        </ic-button>\n      </div>`,\n  name: "Router link - with slotted content",\n  parameters: {\n    layout: "fullscreen"\n  }\n}',...RouterLinkWithSlottedContent.parameters?.docs?.source}}},IconWithoutViewBox.parameters={...IconWithoutViewBox.parameters,docs:{...IconWithoutViewBox.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-button variant="primary" size="small"\n        >Small\n        <svg\n          slot="left-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-button>\n      <ic-button variant="primary"\n        >Default\n        <svg\n          slot="left-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-button>\n      <ic-button variant="primary" size="large"\n        >Large\n        <svg\n          slot="left-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-button>`,\n  name: "Icon without viewBox"\n}',...IconWithoutViewBox.parameters?.docs?.source}}},FullWidth.parameters={...FullWidth.parameters,docs:{...FullWidth.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-button variant="primary" full-width="true"\n      >Button\n      <svg\n        slot="left-icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-button>\n    <ic-button variant="secondary" full-width="true"\n      >Button\n      <svg\n        slot="left-icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-button>\n    <ic-button variant="tertiary" full-width="true"\n      >Button\n      <svg\n        slot="left-icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-button>\n    <ic-button theme="dark" full-width="true"\n      >Button\n      <svg\n        slot="left-icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-button>\n    <ic-button variant="destructive" full-width="true"\n      >Button\n      <svg\n        slot="left-icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-button>\n    <ic-button variant="destructive" disabled full-width="true"\n      >Button\n      <svg\n        slot="left-icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-button>\n    <div\n      style="background-color:var(--ic-color-page-background-dark); padding:6px 10px,"\n    >\n      <ic-button variant="primary" theme="light" full-width="true">\n        Button\n        <svg\n          slot="left-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-button>\n      <ic-button variant="secondary" theme="light" full-width="true">\n        Button\n        <svg\n          slot="left-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-button>\n      <ic-button variant="tertiary" theme="light" full-width="true">\n        Button\n        <svg\n          slot="left-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-button>\n    </div>\n  `,\n  name: "Full width"\n}',...FullWidth.parameters?.docs?.source}}},MinWidth.parameters={...MinWidth.parameters,docs:{...MinWidth.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <style>\n      ic-button {\n        --min-width: 4rem;\n      }\n    </style>\n    <ic-button>Min</ic-button>\n    <ic-button variant="secondary">Min</ic-button>\n  `,\n  name: "Min width"\n}',...MinWidth.parameters?.docs?.source}}},Height.parameters={...Height.parameters,docs:{...Height.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <style>\n      ic-button[name="tall-button"] {\n        --height: 9rem;\n      }\n    </style>\n    <ic-button name="tall-button">Tall Button</ic-button>\n    <ic-button variant="secondary" name="tall-button">Tall Button</ic-button>\n  `,\n  name: "Height"\n}',...Height.parameters?.docs?.source}}},Tooltips.parameters={...Tooltips.parameters,docs:{...Tooltips.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-button\n        variant="icon"\n        aria-label="refresh"\n        title="aria label sets the icon button\'s accessible name, title adds a tooltip"\n        id="testbutton"\n        ><svg\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          /></svg\n      ></ic-button>\n      <ic-button variant="icon-primary" aria-label="primary" id="testbutton"\n        ><svg\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          /></svg\n      ></ic-button>\n      <ic-button variant="icon-secondary" aria-label="secondary" id="testbutton"\n        ><svg\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          /></svg\n      ></ic-button>\n      <ic-button variant="icon-tertiary" aria-label="tertiary" id="testbutton"\n        ><svg\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          /></svg\n      ></ic-button>\n      <ic-button\n        variant="icon"\n        aria-label="you can disable tooltips on icon buttons"\n        disable-tooltip="true"\n        id="testbutton"\n        ><svg\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          /></svg\n      ></ic-button>\n      <ic-button\n        variant="primary"\n        id="testbutton2"\n        title="We can add tooltips to text buttons"\n        >Button With Title</ic-button\n      >\n      <ic-button\n        variant="primary"\n        id="testbutton2"\n        title="the tooltipPlacement prop allows us to change the location of the tooltip"\n        tooltip-placement="right"\n        >Different positions</ic-button\n      >`,\n  name: "Tooltips"\n}',...Tooltips.parameters?.docs?.source}}},PositioningStrategy.parameters={...PositioningStrategy.parameters,docs:{...PositioningStrategy.parameters?.docs,source:{originalSource:'{\n  render: () => html` <script>\n        var switchEl = document.querySelector("ic-switch");\n        var buttonEl = document.querySelector("ic-button");\n        switchEl.addEventListener("icChange", (ev) => {\n          buttonEl.tooltipFixedPositioning = ev.detail.checked;\n        });\n      <\/script>\n      <div style="display:flex; flex-direction:column; gap:var(--ic-space-xs)">\n        <ic-typography>\n          Toggle the fixed positioning switch and hover over the button to see\n          it take effect\n        </ic-typography>\n        <div\n          style="display:flex; flex-direction:column; gap:var(--ic-space-xs); padding:var(--ic-space-md); border:1px solid var(--ic-color-text-primary); overflow:hidden; width:100px; position:relative"\n        >\n          <ic-button title="This is a tooltip with a long label" id="button-1">\n            Button\n          </ic-button>\n        </div>\n        <ic-switch label="Fixed tooltip positioning"></ic-switch>\n      </div>`,\n  name: "Tooltip positioning strategy"\n}',...PositioningStrategy.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-button\n      disabled=${args.disabled}\n      variant=${args.variant}\n      full-width=${args.fullWidth}\n      size=${args.size}\n      loading=${args.loading}\n      theme=${args.theme}\n      monochrome=${args.monochrome}\n      dropdown=${args.dropdown}\n      transparent-background=${args.transparentBackground}\n      >${args.message}</ic-button\n    >`,\n  args: defaultArgs,\n  argTypes: {\n    variant: {\n      options: ["primary", "secondary", "tertiary", "destructive"],\n      control: {\n        type: "select"\n      }\n    },\n    size: {\n      options: ["medium", "large", "small"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    theme: {\n      options: ["inherit", "dark", "light"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    fullWidth: {\n      control: {\n        type: "boolean"\n      }\n    },\n    monochrome: {\n      control: {\n        type: "boolean"\n      }\n    },\n    dropdown: {\n      control: {\n        type: "boolean"\n      }\n    },\n    transparentBackground: {\n      control: {\n        type: "boolean"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}},PlaygroundWithIcon.parameters={...PlaygroundWithIcon.parameters,docs:{...PlaygroundWithIcon.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-button\n      disabled=${args.disabled}\n      variant=${args.variant}\n      size=${args.size}\n      full-width=${args.fullWidth}\n      loading=${args.loading}\n      theme=${args.theme}\n      monochrome=${args.monochrome}\n      >${args.message}\n      <svg\n        slot=${args.iconPlacement}\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        /></svg\n    ></ic-button>`,\n  args: {\n    ...defaultArgs\n  },\n  argTypes: {\n    variant: {\n      options: ["primary", "secondary", "tertiary", "destructive"],\n      control: {\n        type: "select"\n      }\n    },\n    size: {\n      options: ["medium", "large", "small"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    theme: {\n      options: ["default", "dark", "light"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    fullWidth: {\n      control: {\n        type: "boolean"\n      }\n    },\n    iconPlacement: {\n      options: ["left-icon", "right-icon", "top-icon"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    monochrome: {\n      control: {\n        type: "boolean"\n      }\n    }\n  },\n  name: "Playground with icon"\n}',...PlaygroundWithIcon.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="padding: 6px">\n      <ic-button variant="primary" loading>Button</ic-button>\n    </div>\n    <div style="padding: 6px">\n      <ic-button variant="primary" loading theme="dark">Button</ic-button>\n    </div>\n    <div\n      style="background-color:var(--ic-color-page-background-dark); padding:6px 10px; width:fit-content"\n    >\n      <ic-button variant="primary" loading theme="light">Button</ic-button>\n    </div>\n    <div style="padding: 6px">\n      <ic-button variant="secondary" loading>Button</ic-button>\n    </div>\n    <div style="padding: 6px">\n      <ic-button variant="secondary" loading theme="dark">Button</ic-button>\n    </div>\n    <div\n      style="background-color:var(--ic-color-page-background-dark); padding:6px 10px; width:fit-content"\n    >\n      <ic-button variant="secondary" loading theme="light">Button</ic-button>\n    </div>\n    <div style="padding: 6px">\n      <ic-button variant="tertiary" loading>Button</ic-button>\n    </div>\n    <div style="padding: 6px">\n      <ic-button variant="tertiary" loading theme="dark">Button</ic-button>\n    </div>\n    <div\n      style="background-color:var(--ic-color-page-background-dark); padding:6px 10px; width:fit-content"\n    >\n      <ic-button variant="tertiary" loading theme="light">Button</ic-button>\n    </div>\n    <ic-button variant="destructive" loading>Button</ic-button>\n  `,\n  name: "Loading"\n}',...Loading.parameters?.docs?.source}}},AriaDescribedby.parameters={...AriaDescribedby.parameters,docs:{...AriaDescribedby.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <script>\n      function btnClick() {\n        var descEl = document.querySelector("#button-description");\n        descEl.innerText = "See, I told you it was amazing!";\n      }\n    <\/script>\n    <div style="padding: 6px">\n      <span id="button-description">This button does something amazing</span>\n      <br />\n      <ic-button\n        variant="primary"\n        onclick="btnClick()"\n        aria-describedby="button-description"\n        >Button</ic-button\n      >\n    </div>\n  `,\n  name: "Aria-describedby"\n}',...AriaDescribedby.parameters?.docs?.source}}},FileUploadInAForm.parameters={...FileUploadInAForm.parameters,docs:{...FileUploadInAForm.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <form method="POST" action="someurl" enctype="multipart/form-data">\n      <span id="selected-file">No File Selected</span>\n      <div style="padding: 6px">\n        <ic-button\n          variant="primary"\n          id="file-button"\n          multiple="true"\n          file-upload="true"\n          accept=".doc, text/plain, .json"\n          >Upload File true</ic-button\n        >\n      </div>\n      <br />\n      <br />\n      <input type="submit" value="Submit" />\n      <input type="reset" value="Reset" />\n    </form>\n    <script>\n      var descEl = document.querySelector("#selected-file");\n      var file;\n      onclick = document\n        .querySelector("#file-button")\n        .addEventListener("icFileSelection", (ev) => {\n          const fileArray = ev.detail;\n          const fileList = [];\n          Array.from(fileArray).forEach((file) => {\n            fileList.push(file.name);\n          });\n          descEl.innerText = "Files Selected: " + fileList.join(", ");\n          file = ev;\n        });\n      document.querySelector("form").addEventListener("submit", (ev) => {\n        if (file == undefined) return;\n      });\n    <\/script>\n  `,\n  name: "File upload in a form"\n}',...FileUploadInAForm.parameters?.docs?.source}}},FileUpload.parameters={...FileUpload.parameters,docs:{...FileUpload.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <span id="selected-file">No File Selected</span>\n    <div style="padding: 6px">\n      <ic-button\n        variant="primary"\n        id="file-button"\n        file-upload="true"\n        accept=".doc, text/plain, .json"\n        >Upload File true</ic-button\n      >\n    </div>\n    <script>\n      var descEl = document.querySelector("#selected-file");\n      var file;\n      onclick = document\n        .querySelector("#file-button")\n        .addEventListener("icFileSelection", (ev) => {\n          const fileArray = ev.detail;\n          const fileList = [];\n          Array.from(fileArray).forEach((file) => {\n            fileList.push(file.name);\n          });\n          descEl.innerText = "Files Selected: " + fileList.join(", ");\n        });\n    <\/script>\n  `,\n  name: "File upload"\n}',...FileUpload.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-button-ic-button-stories.c0bb9c6b.iframe.bundle.js.map