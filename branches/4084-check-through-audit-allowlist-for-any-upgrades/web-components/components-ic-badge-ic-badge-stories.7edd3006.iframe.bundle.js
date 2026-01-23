/*! For license information please see components-ic-badge-ic-badge-stories.7edd3006.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[5509,582,6199,6763],{"./src/components/ic-badge/ic-badge.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AI:()=>AI,AccessibleLabel:()=>AccessibleLabel,Custom:()=>Custom,Error:()=>Error,HideBadge:()=>HideBadge,Info:()=>Info,Light:()=>Light,MaxNumber:()=>MaxNumber,Neutral:()=>Neutral,Playground:()=>Playground,PositionInline:()=>PositionInline,PositionNear:()=>PositionNear,Success:()=>Success,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Badge",component:"ic-badge"},Success={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            label="1"
            slot="badge"
            variant="success"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge label="1" slot="badge" variant="success"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            label="1"
            slot="badge"
            variant="success"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="success"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="success"></ic-badge
          >Default Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="success"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="success" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="success">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="success" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`,name:"Success"},Error={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            label="1"
            slot="badge"
            variant="error"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge label="1" slot="badge" variant="error"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            label="1"
            slot="badge"
            variant="error"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="error"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="error"></ic-badge>Default
          Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="error"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="error" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="error">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="error" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`,name:"Error"},Warning={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            label="1"
            slot="badge"
            variant="warning"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge label="1" slot="badge" variant="warning"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            label="1"
            slot="badge"
            variant="warning"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="warning"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="warning"></ic-badge
          >Default Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="warning"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="warning" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="warning">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="warning" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`,name:"Warning"},Neutral={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            label="1"
            slot="badge"
            variant="neutral"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge label="1" slot="badge" variant="neutral"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            label="1"
            slot="badge"
            variant="neutral"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="neutral"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="neutral"></ic-badge
          >Default Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="neutral"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="neutral" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="neutral">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="neutral" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`,name:"Neutral"},Light={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            label="1"
            slot="badge"
            variant="light"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge label="1" slot="badge" variant="light"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            label="1"
            slot="badge"
            variant="light"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="light"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="light"></ic-badge>Default
          Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="light"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="light" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="light">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="light" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`,name:"Light"},Info={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            label="1"
            slot="badge"
            variant="info"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge label="1" slot="badge" variant="info"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            label="1"
            slot="badge"
            variant="info"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="info"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="info"></ic-badge>Default
          Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="info"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="info" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="icon" slot="badge" variant="info">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge type="icon" slot="badge" variant="info" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`,name:"Info"},AI={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge label="1" slot="badge" variant="ai" size="small"></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge label="1" slot="badge" variant="ai"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge label="1" slot="badge" variant="ai" size="large"></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="ai"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge type="dot" slot="badge" variant="ai"></ic-badge>Default
          Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="ai"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px">
          <ic-badge type="icon" slot="badge" variant="ai" size="small">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="Artificial Intelligence (AI)"
            >
              <path
                d="M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74"
              />
            </svg>
          </ic-badge>
          Small Icon
        </ic-button>
        <ic-button variant="secondary" style="margin-right:16px">
          <ic-badge type="icon" slot="badge" variant="ai">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="Artificial Intelligence (AI)"
            >
              <path
                d="M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74"
              />
            </svg>
          </ic-badge>
          Default Icon
        </ic-button>
        <ic-button variant="secondary">
          <ic-badge type="icon" slot="badge" variant="ai" size="large">
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="Artificial Intelligence (AI)"
            >
              <path
                d="M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74"
              />
            </svg>
          </ic-badge>
          Large Icon
        </ic-button>
      </div>`,name:"AI"},Custom={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            label="1"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
            size="small"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            label="1"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
          ></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            label="1"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
            size="large"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
            size="small"
          ></ic-badge
          >Small Dot</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
          ></ic-badge
          >Default Dot</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="dot"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
            size="large"
          ></ic-badge
          >Large Dot</ic-button
        >
      </div>
      <div style="padding:16px">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="icon"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
            size="small"
          >
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Small Icon</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            type="icon"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
          >
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              />
            </svg> </ic-badge
          >Default Icon</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            type="icon"
            slot="badge"
            variant="custom"
            custom-color="#F8C8DC"
            size="large"
          >
            <svg
              slot="badge-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              aria-label="retry"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
              /></svg></ic-badge
          >Large Icon</ic-button
        >
      </div>`,name:"Custom"},MaxNumber={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            label="1000"
            slot="badge"
            size="small"
            max-number="9"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge label="1000" max-number="9" slot="badge"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            label="1000"
            slot="badge"
            size="large"
            max-number="9"
          ></ic-badge
          >Large</ic-button
        >
      </div>
      <div style="padding:16px;">
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge
            label="1000"
            slot="badge"
            size="small"
            max-number="99"
          ></ic-badge
          >Small</ic-button
        >
        <ic-button variant="secondary" style="margin-right:16px"
          ><ic-badge label="1000" max-number="99" slot="badge"></ic-badge
          >Default</ic-button
        >
        <ic-button variant="secondary"
          ><ic-badge
            label="1000"
            slot="badge"
            size="large"
            max-number="99"
          ></ic-badge
          >Large</ic-button
        >
      </div>`,name:"Max number"},PositionNear={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="padding:16px;">
        <ic-chip label="Small" style="margin-right:16px;"
          ><ic-badge
            label="1"
            slot="badge"
            position="near"
            size="small"
          ></ic-badge
        ></ic-chip>
        <ic-chip label="Default" style="margin-right:16px;"
          ><ic-badge label="1" slot="badge" position="near"></ic-badge
        ></ic-chip>
        <ic-chip label="Large"
          ><ic-badge
            label="1"
            slot="badge"
            position="near"
            size="large"
          ></ic-badge
        ></ic-chip>
      </div>
      <div style="padding:16px;">
        <ic-chip label="Small Dot" style="margin-right:16px;"
          ><ic-badge
            type="dot"
            slot="badge"
            position="near"
            size="small"
          ></ic-badge
        ></ic-chip>
        <ic-chip label="Default Dot" style="margin-right:16px;"
          ><ic-badge type="dot" slot="badge" position="near"></ic-badge
        ></ic-chip>
        <ic-chip label="Large Dot"
          ><ic-badge
            type="dot"
            slot="badge"
            position="near"
            size="large"
          ></ic-badge
        ></ic-chip>
      </div>`,name:"Position near"},PositionInline={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-tab-context>
      <ic-tab-group label="Example tab group">
        <ic-tab
          >Small<ic-badge
            label="1"
            slot="badge"
            position="inline"
            size="small"
            accessible-label="1 notification found"
          ></ic-badge
        ></ic-tab>
        <ic-tab
          >Default<ic-badge
            label="1"
            slot="badge"
            position="inline"
            accessible-label="1 notification found"
          ></ic-badge
        ></ic-tab>
        <ic-tab
          >Large<ic-badge
            label="1"
            slot="badge"
            position="inline"
            size="large"
            accessible-label="1 notification found"
          ></ic-badge
        ></ic-tab>
        <ic-tab
          >Small Dot<ic-badge
            type="dot"
            slot="badge"
            position="inline"
            size="small"
          ></ic-badge
        ></ic-tab>
        <ic-tab
          >Dot<ic-badge type="dot" slot="badge" position="inline"></ic-badge
        ></ic-tab>
        <ic-tab
          >Large Dot<ic-badge
            type="dot"
            slot="badge"
            position="inline"
            size="large"
          ></ic-badge
        ></ic-tab>
      </ic-tab-group>
      <ic-tab-panel>Small badge</ic-tab-panel>
      <ic-tab-panel>Default badge</ic-tab-panel>
      <ic-tab-panel>Large badge</ic-tab-panel>
      <ic-tab-panel>Small dot badge</ic-tab-panel>
      <ic-tab-panel>Default dot badge</ic-tab-panel>
      <ic-tab-panel>Large dot badge</ic-tab-panel>
    </ic-tab-context>`,name:"Position inline"},HideBadge={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<script>
        function showHideBadge() {
          badge = document.querySelector("ic-badge");
          if (badge.classList.contains("ic-badge-show")) {
            badge.visible = false;
          } else {
            badge.visible = true;
          }
        }
      </script>
      <div style="padding:16px;">
        <ic-button variant="secondary" onclick="showHideBadge()"
          ><ic-badge label="1" slot="badge"></ic-badge>Show/Hide
          badge</ic-button
        >
      </div> `,name:"Hide badge"},AccessibleLabel={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="padding:16px;">
      <ic-button variant="secondary" style="margin-right:16px"
        ><ic-badge
          label="1"
          slot="badge"
          size="large"
          accessible-label="1 notification found"
        ></ic-badge
        >Default</ic-button
      >
      <ic-chip label="Default dot" dismissible="true"
        ><ic-badge
          type="dot"
          slot="badge"
          position="near"
          accessible-label="Notifications found"
        ></ic-badge
      ></ic-chip>
    </div> `,name:"Accessible label"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-button variant="secondary">
      <ic-badge
        slot="badge"
        accessible-label=${args.accessibleLabel}
        custom-color=${args.customColor}
        max-number=${args.maxNumber}
        position=${args.position}
        size=${args.size}
        label=${args.label}
        type=${args.type}
        variant=${args.variant}
        theme=${args.theme}
      >
        <svg
          slot="badge-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          aria-label="retry"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </ic-badge>
      Default
    </ic-button>`,args:{accessibleLabel:"notification",customColor:null,maxNumber:1e3,position:"far",size:"medium",label:"1",type:"text",variant:"neutral",theme:"inherit"},argTypes:{customColor:{control:{type:"text"}},position:{options:["far","near","inline"],control:{type:"radio"}},size:{options:["small","medium","large"],control:{type:"radio"}},type:{options:["text","dot","icon"],control:{type:"radio"}},variant:{options:["neutral","success","warning","error","info","ai","light","custom"],control:{type:"select"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"},__namedExportsOrder=["Success","Error","Warning","Neutral","Light","Info","AI","Custom","MaxNumber","PositionNear","PositionInline","HideBadge","AccessibleLabel","Playground"];Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            label="1"\n            slot="badge"\n            variant="success"\n            size="small"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge label="1" slot="badge" variant="success"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            label="1"\n            slot="badge"\n            variant="success"\n            size="large"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="success"\n            size="small"\n          ></ic-badge\n          >Small Dot</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="dot" slot="badge" variant="success"></ic-badge\n          >Default Dot</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="success"\n            size="large"\n          ></ic-badge\n          >Large Dot</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="success" size="small">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Small Icon</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="success">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Default Icon</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge type="icon" slot="badge" variant="success" size="large">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Large Icon</ic-button\n        >\n      </div>`,\n  name: "Success"\n}',...Success.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            label="1"\n            slot="badge"\n            variant="error"\n            size="small"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge label="1" slot="badge" variant="error"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            label="1"\n            slot="badge"\n            variant="error"\n            size="large"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="error"\n            size="small"\n          ></ic-badge\n          >Small Dot</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="dot" slot="badge" variant="error"></ic-badge>Default\n          Dot</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="error"\n            size="large"\n          ></ic-badge\n          >Large Dot</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="error" size="small">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Small Icon</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="error">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Default Icon</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge type="icon" slot="badge" variant="error" size="large">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Large Icon</ic-button\n        >\n      </div>`,\n  name: "Error"\n}',...Error.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            label="1"\n            slot="badge"\n            variant="warning"\n            size="small"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge label="1" slot="badge" variant="warning"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            label="1"\n            slot="badge"\n            variant="warning"\n            size="large"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="warning"\n            size="small"\n          ></ic-badge\n          >Small Dot</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="dot" slot="badge" variant="warning"></ic-badge\n          >Default Dot</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="warning"\n            size="large"\n          ></ic-badge\n          >Large Dot</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="warning" size="small">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Small Icon</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="warning">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Default Icon</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge type="icon" slot="badge" variant="warning" size="large">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Large Icon</ic-button\n        >\n      </div>`,\n  name: "Warning"\n}',...Warning.parameters?.docs?.source}}},Neutral.parameters={...Neutral.parameters,docs:{...Neutral.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            label="1"\n            slot="badge"\n            variant="neutral"\n            size="small"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge label="1" slot="badge" variant="neutral"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            label="1"\n            slot="badge"\n            variant="neutral"\n            size="large"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="neutral"\n            size="small"\n          ></ic-badge\n          >Small Dot</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="dot" slot="badge" variant="neutral"></ic-badge\n          >Default Dot</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="neutral"\n            size="large"\n          ></ic-badge\n          >Large Dot</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="neutral" size="small">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Small Icon</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="neutral">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Default Icon</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge type="icon" slot="badge" variant="neutral" size="large">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Large Icon</ic-button\n        >\n      </div>`,\n  name: "Neutral"\n}',...Neutral.parameters?.docs?.source}}},Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            label="1"\n            slot="badge"\n            variant="light"\n            size="small"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge label="1" slot="badge" variant="light"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            label="1"\n            slot="badge"\n            variant="light"\n            size="large"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="light"\n            size="small"\n          ></ic-badge\n          >Small Dot</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="dot" slot="badge" variant="light"></ic-badge>Default\n          Dot</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="light"\n            size="large"\n          ></ic-badge\n          >Large Dot</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="light" size="small">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Small Icon</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="light">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Default Icon</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge type="icon" slot="badge" variant="light" size="large">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Large Icon</ic-button\n        >\n      </div>`,\n  name: "Light"\n}',...Light.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            label="1"\n            slot="badge"\n            variant="info"\n            size="small"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge label="1" slot="badge" variant="info"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            label="1"\n            slot="badge"\n            variant="info"\n            size="large"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="info"\n            size="small"\n          ></ic-badge\n          >Small Dot</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="dot" slot="badge" variant="info"></ic-badge>Default\n          Dot</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="info"\n            size="large"\n          ></ic-badge\n          >Large Dot</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="info" size="small">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Small Icon</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="icon" slot="badge" variant="info">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Default Icon</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge type="icon" slot="badge" variant="info" size="large">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Large Icon</ic-button\n        >\n      </div>`,\n  name: "Info"\n}',...Info.parameters?.docs?.source}}},AI.parameters={...AI.parameters,docs:{...AI.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge label="1" slot="badge" variant="ai" size="small"></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge label="1" slot="badge" variant="ai"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge label="1" slot="badge" variant="ai" size="large"></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="ai"\n            size="small"\n          ></ic-badge\n          >Small Dot</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge type="dot" slot="badge" variant="ai"></ic-badge>Default\n          Dot</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="ai"\n            size="large"\n          ></ic-badge\n          >Large Dot</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px">\n          <ic-badge type="icon" slot="badge" variant="ai" size="small">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="Artificial Intelligence (AI)"\n            >\n              <path\n                d="M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74"\n              />\n            </svg>\n          </ic-badge>\n          Small Icon\n        </ic-button>\n        <ic-button variant="secondary" style="margin-right:16px">\n          <ic-badge type="icon" slot="badge" variant="ai">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="Artificial Intelligence (AI)"\n            >\n              <path\n                d="M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74"\n              />\n            </svg>\n          </ic-badge>\n          Default Icon\n        </ic-button>\n        <ic-button variant="secondary">\n          <ic-badge type="icon" slot="badge" variant="ai" size="large">\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="Artificial Intelligence (AI)"\n            >\n              <path\n                d="M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74"\n              />\n            </svg>\n          </ic-badge>\n          Large Icon\n        </ic-button>\n      </div>`,\n  name: "AI"\n}',...AI.parameters?.docs?.source}}},Custom.parameters={...Custom.parameters,docs:{...Custom.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            label="1"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n            size="small"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            label="1"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n          ></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            label="1"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n            size="large"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n            size="small"\n          ></ic-badge\n          >Small Dot</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n          ></ic-badge\n          >Default Dot</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n            size="large"\n          ></ic-badge\n          >Large Dot</ic-button\n        >\n      </div>\n      <div style="padding:16px">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="icon"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n            size="small"\n          >\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Small Icon</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            type="icon"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n          >\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              />\n            </svg> </ic-badge\n          >Default Icon</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            type="icon"\n            slot="badge"\n            variant="custom"\n            custom-color="#F8C8DC"\n            size="large"\n          >\n            <svg\n              slot="badge-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              height="24px"\n              viewBox="0 0 24 24"\n              width="24px"\n              aria-label="retry"\n            >\n              <path d="M0 0h24v24H0V0z" fill="none" />\n              <path\n                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n              /></svg></ic-badge\n          >Large Icon</ic-button\n        >\n      </div>`,\n  name: "Custom"\n}',...Custom.parameters?.docs?.source}}},MaxNumber.parameters={...MaxNumber.parameters,docs:{...MaxNumber.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            label="1000"\n            slot="badge"\n            size="small"\n            max-number="9"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge label="1000" max-number="9" slot="badge"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            label="1000"\n            slot="badge"\n            size="large"\n            max-number="9"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>\n      <div style="padding:16px;">\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge\n            label="1000"\n            slot="badge"\n            size="small"\n            max-number="99"\n          ></ic-badge\n          >Small</ic-button\n        >\n        <ic-button variant="secondary" style="margin-right:16px"\n          ><ic-badge label="1000" max-number="99" slot="badge"></ic-badge\n          >Default</ic-button\n        >\n        <ic-button variant="secondary"\n          ><ic-badge\n            label="1000"\n            slot="badge"\n            size="large"\n            max-number="99"\n          ></ic-badge\n          >Large</ic-button\n        >\n      </div>`,\n  name: "Max number"\n}',...MaxNumber.parameters?.docs?.source}}},PositionNear.parameters={...PositionNear.parameters,docs:{...PositionNear.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="padding:16px;">\n        <ic-chip label="Small" style="margin-right:16px;"\n          ><ic-badge\n            label="1"\n            slot="badge"\n            position="near"\n            size="small"\n          ></ic-badge\n        ></ic-chip>\n        <ic-chip label="Default" style="margin-right:16px;"\n          ><ic-badge label="1" slot="badge" position="near"></ic-badge\n        ></ic-chip>\n        <ic-chip label="Large"\n          ><ic-badge\n            label="1"\n            slot="badge"\n            position="near"\n            size="large"\n          ></ic-badge\n        ></ic-chip>\n      </div>\n      <div style="padding:16px;">\n        <ic-chip label="Small Dot" style="margin-right:16px;"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            position="near"\n            size="small"\n          ></ic-badge\n        ></ic-chip>\n        <ic-chip label="Default Dot" style="margin-right:16px;"\n          ><ic-badge type="dot" slot="badge" position="near"></ic-badge\n        ></ic-chip>\n        <ic-chip label="Large Dot"\n          ><ic-badge\n            type="dot"\n            slot="badge"\n            position="near"\n            size="large"\n          ></ic-badge\n        ></ic-chip>\n      </div>`,\n  name: "Position near"\n}',...PositionNear.parameters?.docs?.source}}},PositionInline.parameters={...PositionInline.parameters,docs:{...PositionInline.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-tab-context>\n      <ic-tab-group label="Example tab group">\n        <ic-tab\n          >Small<ic-badge\n            label="1"\n            slot="badge"\n            position="inline"\n            size="small"\n            accessible-label="1 notification found"\n          ></ic-badge\n        ></ic-tab>\n        <ic-tab\n          >Default<ic-badge\n            label="1"\n            slot="badge"\n            position="inline"\n            accessible-label="1 notification found"\n          ></ic-badge\n        ></ic-tab>\n        <ic-tab\n          >Large<ic-badge\n            label="1"\n            slot="badge"\n            position="inline"\n            size="large"\n            accessible-label="1 notification found"\n          ></ic-badge\n        ></ic-tab>\n        <ic-tab\n          >Small Dot<ic-badge\n            type="dot"\n            slot="badge"\n            position="inline"\n            size="small"\n          ></ic-badge\n        ></ic-tab>\n        <ic-tab\n          >Dot<ic-badge type="dot" slot="badge" position="inline"></ic-badge\n        ></ic-tab>\n        <ic-tab\n          >Large Dot<ic-badge\n            type="dot"\n            slot="badge"\n            position="inline"\n            size="large"\n          ></ic-badge\n        ></ic-tab>\n      </ic-tab-group>\n      <ic-tab-panel>Small badge</ic-tab-panel>\n      <ic-tab-panel>Default badge</ic-tab-panel>\n      <ic-tab-panel>Large badge</ic-tab-panel>\n      <ic-tab-panel>Small dot badge</ic-tab-panel>\n      <ic-tab-panel>Default dot badge</ic-tab-panel>\n      <ic-tab-panel>Large dot badge</ic-tab-panel>\n    </ic-tab-context>`,\n  name: "Position inline"\n}',...PositionInline.parameters?.docs?.source}}},HideBadge.parameters={...HideBadge.parameters,docs:{...HideBadge.parameters?.docs,source:{originalSource:'{\n  render: () => html`<script>\n        function showHideBadge() {\n          badge = document.querySelector("ic-badge");\n          if (badge.classList.contains("ic-badge-show")) {\n            badge.visible = false;\n          } else {\n            badge.visible = true;\n          }\n        }\n      <\/script>\n      <div style="padding:16px;">\n        <ic-button variant="secondary" onclick="showHideBadge()"\n          ><ic-badge label="1" slot="badge"></ic-badge>Show/Hide\n          badge</ic-button\n        >\n      </div> `,\n  name: "Hide badge"\n}',...HideBadge.parameters?.docs?.source}}},AccessibleLabel.parameters={...AccessibleLabel.parameters,docs:{...AccessibleLabel.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="padding:16px;">\n      <ic-button variant="secondary" style="margin-right:16px"\n        ><ic-badge\n          label="1"\n          slot="badge"\n          size="large"\n          accessible-label="1 notification found"\n        ></ic-badge\n        >Default</ic-button\n      >\n      <ic-chip label="Default dot" dismissible="true"\n        ><ic-badge\n          type="dot"\n          slot="badge"\n          position="near"\n          accessible-label="Notifications found"\n        ></ic-badge\n      ></ic-chip>\n    </div> `,\n  name: "Accessible label"\n}',...AccessibleLabel.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-button variant="secondary">\n      <ic-badge\n        slot="badge"\n        accessible-label=${args.accessibleLabel}\n        custom-color=${args.customColor}\n        max-number=${args.maxNumber}\n        position=${args.position}\n        size=${args.size}\n        label=${args.label}\n        type=${args.type}\n        variant=${args.variant}\n        theme=${args.theme}\n      >\n        <svg\n          slot="badge-icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          aria-label="retry"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      </ic-badge>\n      Default\n    </ic-button>`,\n  args: defaultArgs,\n  argTypes: {\n    customColor: {\n      control: {\n        type: "text"\n      }\n    },\n    position: {\n      options: ["far", "near", "inline"],\n      control: {\n        type: "radio"\n      }\n    },\n    size: {\n      options: ["small", "medium", "large"],\n      control: {\n        type: "radio"\n      }\n    },\n    type: {\n      options: ["text", "dot", "icon"],\n      control: {\n        type: "radio"\n      }\n    },\n    variant: {\n      options: ["neutral", "success", "warning", "error", "info", "ai", "light", "custom"],\n      control: {\n        type: "select"\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: "inline-radio"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-badge-ic-badge-stories.7edd3006.iframe.bundle.js.map