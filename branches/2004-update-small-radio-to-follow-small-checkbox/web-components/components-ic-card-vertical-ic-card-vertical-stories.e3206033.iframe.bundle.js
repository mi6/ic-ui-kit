/*! For license information please see components-ic-card-vertical-ic-card-vertical-stories.e3206033.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[6529,582,6199,6763],{"./src/components/ic-card-vertical/ic-card-vertical.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdditionalHeight:()=>AdditionalHeight,Adornment:()=>Adornment,ClickableButton:()=>ClickableButton,ClickableLink:()=>ClickableLink,CustomWidth:()=>CustomWidth,Disabled:()=>Disabled,Expandable:()=>Expandable,FullWidth:()=>FullWidth,Heading:()=>Heading,Icon:()=>Icon,InteractionControls:()=>InteractionControls,Message:()=>Message,MiddleImage:()=>MiddleImage,Playground:()=>Playground,SlottedHeadingMessageAndSubheading:()=>SlottedHeadingMessageAndSubheading,TopImage:()=>TopImage,WithBadge:()=>WithBadge,WithInteractionButton:()=>WithInteractionButton,WithSubheading:()=>WithSubheading,WrappedByLink:()=>WrappedByLink,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Card",component:"ic-card-vertical"},Heading={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-card-vertical
      heading="This is the card heading"
    ></ic-card-vertical>`,name:"Heading"},Icon={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-card-vertical heading="This is the card heading">
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
    </ic-card-vertical>`,name:"Icon"},Message={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-card-vertical
      heading="This is the card heading"
      message="This is an example of a new card component with text included."
    >
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
    </ic-card-vertical>`,name:"Message"},WithSubheading={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-card-vertical
      heading="This is the card heading"
      message="This is an example of a new card component with text included."
      subheading="This is the subheading"
      ><svg
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
        /></svg
    ></ic-card-vertical>`,name:"With subheading"},SlottedHeadingMessageAndSubheading={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-card-vertical>
      <ic-typography variant="h4" slot="heading"
        >This is the slotted card heading</ic-typography
      >
      <ic-typography slot="message"
        >This is an example of a new card component with slotted text
        included.</ic-typography
      >
      <ic-typography variant="subtitle-small" slot="subheading"
        >This is the slotted subheading</ic-typography
      >
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
        /></svg
    ></ic-card-vertical>`,name:"Slotted heading, message, and subheading"},WithBadge={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-card-vertical
        heading="This is the card heading"
        clickable="true"
        href="https://www.google.com"
        style="margin-bottom: 8px"
      >
        <ic-badge label="1" slot="badge"></ic-badge>
      </ic-card-vertical>
      <ic-card-vertical
        heading="This is the card heading"
        clickable="true"
        href="https://www.google.com"
      >
        <ic-badge slot="badge" type="dot"></ic-badge>
      </ic-card-vertical>`,name:"With badge"},WithInteractionButton={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-card-vertical
      heading="This is the card heading"
      subheading="This is the subheading"
      message="This is an example of a new card component with text included."
    >
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
      <ic-button
        variant="icon-tertiary"
        title="More information"
        slot="interaction-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </ic-button>
    </ic-card-vertical>`,name:"With interaction button"},Adornment={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-card-vertical
      heading="This is the card heading"
      subheading="This is the subheading"
      message="This is an example of a new card component with text included."
    >
      <ic-status-tag
        slot="adornment"
        label="Neutral"
        size="small"
      ></ic-status-tag>
      <ic-button
        variant="icon-tertiary"
        title="More information"
        slot="interaction-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </ic-button>
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
    </ic-card-vertical>`,name:"Adornment"},TopImage={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-card-vertical
      heading="This is the card heading"
      subheading="This is the subheading"
      message="This is an example of a new card component with text included."
      style="width:360px;"
    >
      <ic-status-tag
        slot="adornment"
        label="Neutral"
        size="small"
      ></ic-status-tag>
      <ic-button
        variant="icon-tertiary"
        title="More information"
        slot="interaction-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </ic-button>
      <svg
        slot="image-top"
        style="height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
    </ic-card-vertical>`,name:"Top image"},MiddleImage={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-card-vertical
      heading="This is the card heading"
      subheading="This is the subheading"
      message="This is an example of a new card component with text included."
      style="width:360px;"
    >
      <ic-status-tag
        slot="adornment"
        label="Neutral"
        size="small"
      ></ic-status-tag>
      <ic-button
        variant="icon-tertiary"
        title="More information"
        slot="interaction-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </ic-button>
      <svg
        slot="image-mid"
        style="height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
    </ic-card-vertical>`,name:"Middle image"},InteractionControls={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-card-vertical
      heading="This is the card heading"
      subheading="This is the subheading"
      message="This is an example of a new card component with text included."
      style="width:360px;"
    >
      <ic-status-tag
        slot="adornment"
        label="Neutral"
        size="small"
      ></ic-status-tag>
      <ic-button
        variant="icon-tertiary"
        title="More information"
        slot="interaction-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </ic-button>
      <svg
        slot="image-mid"
        style="height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
      <ic-button slot="interaction-controls" variant="primary"
        >Learn more</ic-button
      >
      <ic-button slot="interaction-controls" variant="secondary"
        >Hide</ic-button
      >
    </ic-card-vertical>`,name:"Interaction controls"},CustomWidth={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="display: flex; gap: 16px; flex-direction: column;">
      <ic-card-vertical
        heading="This is the card heading"
        subheading="This is the subheading"
        message="This is an example of a reduced width card component."
        style="width:300px;"
        expandable="true"
      >
        <ic-status-tag
          slot="adornment"
          label="Neutral"
          size="small"
        ></ic-status-tag>
        <ic-button
          variant="icon-tertiary"
          title="More information"
          slot="interaction-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path
              d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
            />
          </svg>
        </ic-button>
        <svg
          slot="image-mid"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
          style="height:326px;width:326px;"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
        <ic-button slot="interaction-controls" variant="primary"
          >Learn more</ic-button
        >
        <ic-button slot="interaction-controls" variant="secondary"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            slot="left-icon"
          >
            <title>heart-outline</title>
            <path
              d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
            /></svg
          >Add to favourites</ic-button
        >
        <ic-button slot="interaction-controls" variant="secondary"
          >Hide</ic-button
        >
      </ic-card-vertical>
      <ic-card-vertical
        heading="This is the card heading"
        subheading="This is the subheading"
        message="This is an example of an increased width card component."
        style="width:500px;"
        expandable="true"
      >
        <ic-status-tag
          slot="adornment"
          label="Neutral"
          size="small"
        ></ic-status-tag>
        <ic-button
          variant="icon-tertiary"
          title="More information"
          slot="interaction-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path
              d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
            />
          </svg>
        </ic-button>
        <svg
          slot="image-mid"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
          style="height:526px;width:526px;"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
        <ic-button slot="interaction-controls" variant="primary"
          >Learn more</ic-button
        >
        <ic-button slot="interaction-controls" variant="secondary"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            slot="left-icon"
          >
            <title>heart-outline</title>
            <path
              d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
            /></svg
          >Add to favourites</ic-button
        >
        <ic-button slot="interaction-controls" variant="secondary"
          >Hide</ic-button
        >
      </ic-card-vertical>
    </div>`,name:"Custom width"},AdditionalHeight={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-card-vertical
      heading="This is the card heading"
      subheading="This is the subheading"
      message="This is an example of a new card component with text included."
      style="width:360px; height: 700px"
    >
      <ic-status-tag
        slot="adornment"
        label="Neutral"
        size="small"
      ></ic-status-tag>
      <ic-button
        variant="icon-tertiary"
        title="More information"
        slot="interaction-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </ic-button>
      <svg
        slot="image-mid"
        style="height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
      <ic-button slot="interaction-controls" variant="primary"
        >Learn more</ic-button
      >
      <ic-button slot="interaction-controls" variant="secondary"
        >Hide</ic-button
      >
    </ic-card-vertical>`,name:"Additional height"},Expandable={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-card-vertical
      heading="This is the card heading"
      subheading="This is the subheading"
      message="This is an example of a new card component with text included."
      expandable
      style="width:360px;"
    >
      <ic-status-tag
        slot="adornment"
        label="Neutral"
        size="small"
      ></ic-status-tag>
      <ic-button
        variant="icon-tertiary"
        title="More information"
        slot="interaction-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </ic-button>
      <svg
        slot="image-mid"
        style="height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
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
      <ic-button slot="interaction-controls" variant="primary"
        >Learn more</ic-button
      >
      <ic-button slot="interaction-controls" variant="secondary"
        >Hide</ic-button
      >
      <ic-typography slot="expanded-content" variant="body"
        >This is an example of a new card component with text
        included.</ic-typography
      >
    </ic-card-vertical>`,name:"Expandable"},ClickableLink={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-card-vertical
      heading="This is the card heading"
      subheading="This is the subheading"
      message="This is an example of a new card component with text included."
      clickable="true"
      href="https://www.google.com"
      ><svg
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
        /></svg
    ></ic-card-vertical>`,name:"Clickable link"},ClickableButton={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-card-vertical
      heading="This is the card heading"
      subheading="This is the subheading"
      message="This is an example of a new card component with text included."
      clickable="true"
      onclick="alert('clicked')"
      ><svg
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
        /></svg
    ></ic-card-vertical>`,name:"Clickable button"},Disabled={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-card-vertical
      heading="This is the card heading"
      subheading="This is the subheading"
      message="This is an example of a new card component with text included."
      clickable="true"
      disabled="true"
      onClick="alert('clicked')"
      ><svg
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
        /></svg
    ></ic-card-vertical>`,name:"Disabled"},FullWidth={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ic-card-vertical
      heading="This is the card heading"
      subheading="This is the subheading"
      message="This is an example of a card component that fills it's parent container."
      clickable="true"
      full-width="true"
      href="https://www.google.com"
      ><svg
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
        /></svg
    ></ic-card-vertical>
  `,name:"Full width"},WrappedByLink={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<a href="/"
      ><ic-card-vertical
        heading="This is the card heading"
        subheading="This is the subheading"
        message="This is an example of a new card component with text included."
        ><svg
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
          /></svg></ic-card-vertical
    ></a>`,name:"Wrapped by link"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-card-vertical
      clickable=${args.clickable}
      disabled=${args.disabled}
      expandable=${args.expandable}
      full-width=${args.fullWidth}
      heading=${args.heading}
      href=${args.href}
      message=${args.message}
      subheading=${args.subheading}
      theme=${args.theme}
    >
      ${args.showIcon&&lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
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
      `}
      ${args.showBadge&&lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-badge text-label="1" slot="badge"></ic-badge> `}
      ${args.showInteractionButton&&lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
        <ic-button
          variant="icon-tertiary"
          title="More information"
          slot="interaction-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path
              d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
            />
          </svg>
        </ic-button>
      `}
      ${args.showAdornment&&lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
        <ic-status-tag
          slot="adornment"
          label="Neutral"
          size="small"
        ></ic-status-tag>
      `}
      ${args.showImageTop&&lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
        <svg
          slot="image-top"
          style="height:200px;width:326px;"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
        >
          <rect fill="#edb99d" width="1600" height="1600" y="-350" />
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
      `}
      ${args.showImageMid&&lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
        <svg
          slot="image-mid"
          style="height:200px;width:326px;"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
        >
          <rect fill="#FFC0CB" width="1600" height="1600" y="-350" />
          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
          <polygon fill="#c50022" points="-60 900 398 662 816 900" />
          <polygon fill="#ff3300" points="337 900 398 662 816 900" />
          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
          <polygon fill="#b80066" points="641 695 886 900 367 900" />
          <polygon fill="#960052" points="587 900 641 695 886 900" />
          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
          <polygon fill="#880088" points="943 900 1210 900 971 687" />
        </svg>
      `}
      ${args.showInteractionControls&&lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
        <ic-button slot="interaction-controls" variant="primary"
          >Learn more</ic-button
        >
        <ic-button slot="interaction-controls" variant="secondary"
          >Hide</ic-button
        >
      `}
      ${args.showExpandedContent&&lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`
        <ic-typography slot="expanded-content" variant="body"
          >This is an example of a new card component with text
          included.</ic-typography
        >
      `}
    </ic-card-vertical>`,args:{clickable:!1,disabled:!1,expandable:!1,fullWidth:!1,heading:"Heading",href:"/",message:"Message",subheading:"Subheading",showIcon:!1,showBadge:!1,showInteractionButton:!1,showAdornment:!1,showImageTop:!1,showImageMid:!1,showInteractionControls:!1,showExpandedContent:!1,theme:"inherit"},name:"Playground",argTypes:{theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}}},__namedExportsOrder=["Heading","Icon","Message","WithSubheading","SlottedHeadingMessageAndSubheading","WithBadge","WithInteractionButton","Adornment","TopImage","MiddleImage","InteractionControls","CustomWidth","AdditionalHeight","Expandable","ClickableLink","ClickableButton","Disabled","FullWidth","WrappedByLink","Playground"];Heading.parameters={...Heading.parameters,docs:{...Heading.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-vertical\n      heading="This is the card heading"\n    ></ic-card-vertical>`,\n  name: "Heading"\n}',...Heading.parameters?.docs?.source}}},Icon.parameters={...Icon.parameters,docs:{...Icon.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-vertical heading="This is the card heading">\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-card-vertical>`,\n  name: "Icon"\n}',...Icon.parameters?.docs?.source}}},Message.parameters={...Message.parameters,docs:{...Message.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-vertical\n      heading="This is the card heading"\n      message="This is an example of a new card component with text included."\n    >\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-card-vertical>`,\n  name: "Message"\n}',...Message.parameters?.docs?.source}}},WithSubheading.parameters={...WithSubheading.parameters,docs:{...WithSubheading.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-vertical\n      heading="This is the card heading"\n      message="This is an example of a new card component with text included."\n      subheading="This is the subheading"\n      ><svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        /></svg\n    ></ic-card-vertical>`,\n  name: "With subheading"\n}',...WithSubheading.parameters?.docs?.source}}},SlottedHeadingMessageAndSubheading.parameters={...SlottedHeadingMessageAndSubheading.parameters,docs:{...SlottedHeadingMessageAndSubheading.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-vertical>\n      <ic-typography variant="h4" slot="heading"\n        >This is the slotted card heading</ic-typography\n      >\n      <ic-typography slot="message"\n        >This is an example of a new card component with slotted text\n        included.</ic-typography\n      >\n      <ic-typography variant="subtitle-small" slot="subheading"\n        >This is the slotted subheading</ic-typography\n      >\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        /></svg\n    ></ic-card-vertical>`,\n  name: "Slotted heading, message, and subheading"\n}',...SlottedHeadingMessageAndSubheading.parameters?.docs?.source}}},WithBadge.parameters={...WithBadge.parameters,docs:{...WithBadge.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-vertical\n        heading="This is the card heading"\n        clickable="true"\n        href="https://www.google.com"\n        style="margin-bottom: 8px"\n      >\n        <ic-badge label="1" slot="badge"></ic-badge>\n      </ic-card-vertical>\n      <ic-card-vertical\n        heading="This is the card heading"\n        clickable="true"\n        href="https://www.google.com"\n      >\n        <ic-badge slot="badge" type="dot"></ic-badge>\n      </ic-card-vertical>`,\n  name: "With badge"\n}',...WithBadge.parameters?.docs?.source}}},WithInteractionButton.parameters={...WithInteractionButton.parameters,docs:{...WithInteractionButton.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-vertical\n      heading="This is the card heading"\n      subheading="This is the subheading"\n      message="This is an example of a new card component with text included."\n    >\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n      <ic-button\n        variant="icon-tertiary"\n        title="More information"\n        slot="interaction-button"\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="16"\n          height="16"\n          fill="currentColor"\n          class="bi bi-three-dots-vertical"\n          viewBox="0 0 16 16"\n        >\n          <path\n            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n          />\n        </svg>\n      </ic-button>\n    </ic-card-vertical>`,\n  name: "With interaction button"\n}',...WithInteractionButton.parameters?.docs?.source}}},Adornment.parameters={...Adornment.parameters,docs:{...Adornment.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-vertical\n      heading="This is the card heading"\n      subheading="This is the subheading"\n      message="This is an example of a new card component with text included."\n    >\n      <ic-status-tag\n        slot="adornment"\n        label="Neutral"\n        size="small"\n      ></ic-status-tag>\n      <ic-button\n        variant="icon-tertiary"\n        title="More information"\n        slot="interaction-button"\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="16"\n          height="16"\n          fill="currentColor"\n          class="bi bi-three-dots-vertical"\n          viewBox="0 0 16 16"\n        >\n          <path\n            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n          />\n        </svg>\n      </ic-button>\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-card-vertical>`,\n  name: "Adornment"\n}',...Adornment.parameters?.docs?.source}}},TopImage.parameters={...TopImage.parameters,docs:{...TopImage.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-vertical\n      heading="This is the card heading"\n      subheading="This is the subheading"\n      message="This is an example of a new card component with text included."\n      style="width:360px;"\n    >\n      <ic-status-tag\n        slot="adornment"\n        label="Neutral"\n        size="small"\n      ></ic-status-tag>\n      <ic-button\n        variant="icon-tertiary"\n        title="More information"\n        slot="interaction-button"\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="16"\n          height="16"\n          fill="currentColor"\n          class="bi bi-three-dots-vertical"\n          viewBox="0 0 16 16"\n        >\n          <path\n            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n          />\n        </svg>\n      </ic-button>\n      <svg\n        slot="image-top"\n        style="height:326px;width:326px;"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-card-vertical>`,\n  name: "Top image"\n}',...TopImage.parameters?.docs?.source}}},MiddleImage.parameters={...MiddleImage.parameters,docs:{...MiddleImage.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-vertical\n      heading="This is the card heading"\n      subheading="This is the subheading"\n      message="This is an example of a new card component with text included."\n      style="width:360px;"\n    >\n      <ic-status-tag\n        slot="adornment"\n        label="Neutral"\n        size="small"\n      ></ic-status-tag>\n      <ic-button\n        variant="icon-tertiary"\n        title="More information"\n        slot="interaction-button"\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="16"\n          height="16"\n          fill="currentColor"\n          class="bi bi-three-dots-vertical"\n          viewBox="0 0 16 16"\n        >\n          <path\n            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n          />\n        </svg>\n      </ic-button>\n      <svg\n        slot="image-mid"\n        style="height:326px;width:326px;"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-card-vertical>`,\n  name: "Middle image"\n}',...MiddleImage.parameters?.docs?.source}}},InteractionControls.parameters={...InteractionControls.parameters,docs:{...InteractionControls.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-vertical\n      heading="This is the card heading"\n      subheading="This is the subheading"\n      message="This is an example of a new card component with text included."\n      style="width:360px;"\n    >\n      <ic-status-tag\n        slot="adornment"\n        label="Neutral"\n        size="small"\n      ></ic-status-tag>\n      <ic-button\n        variant="icon-tertiary"\n        title="More information"\n        slot="interaction-button"\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="16"\n          height="16"\n          fill="currentColor"\n          class="bi bi-three-dots-vertical"\n          viewBox="0 0 16 16"\n        >\n          <path\n            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n          />\n        </svg>\n      </ic-button>\n      <svg\n        slot="image-mid"\n        style="height:326px;width:326px;"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n      <ic-button slot="interaction-controls" variant="primary"\n        >Learn more</ic-button\n      >\n      <ic-button slot="interaction-controls" variant="secondary"\n        >Hide</ic-button\n      >\n    </ic-card-vertical>`,\n  name: "Interaction controls"\n}',...InteractionControls.parameters?.docs?.source}}},CustomWidth.parameters={...CustomWidth.parameters,docs:{...CustomWidth.parameters?.docs,source:{originalSource:'{\n  render: () => html`<div style="display: flex; gap: 16px; flex-direction: column;">\n      <ic-card-vertical\n        heading="This is the card heading"\n        subheading="This is the subheading"\n        message="This is an example of a reduced width card component."\n        style="width:300px;"\n        expandable="true"\n      >\n        <ic-status-tag\n          slot="adornment"\n          label="Neutral"\n          size="small"\n        ></ic-status-tag>\n        <ic-button\n          variant="icon-tertiary"\n          title="More information"\n          slot="interaction-button"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="16"\n            height="16"\n            fill="currentColor"\n            class="bi bi-three-dots-vertical"\n            viewBox="0 0 16 16"\n          >\n            <path\n              d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n            />\n          </svg>\n        </ic-button>\n        <svg\n          slot="image-mid"\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 1600 900"\n          style="height:326px;width:326px;"\n        >\n          <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n          <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n          <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n          <polygon fill="#b80066" points="641 695 886 900 367 900" />\n          <polygon fill="#960052" points="587 900 641 695 886 900" />\n          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n          <polygon fill="#880088" points="943 900 1210 900 971 687" />\n        </svg>\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n        <ic-button slot="interaction-controls" variant="primary"\n          >Learn more</ic-button\n        >\n        <ic-button slot="interaction-controls" variant="secondary"\n          ><svg\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n            slot="left-icon"\n          >\n            <title>heart-outline</title>\n            <path\n              d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"\n            /></svg\n          >Add to favourites</ic-button\n        >\n        <ic-button slot="interaction-controls" variant="secondary"\n          >Hide</ic-button\n        >\n      </ic-card-vertical>\n      <ic-card-vertical\n        heading="This is the card heading"\n        subheading="This is the subheading"\n        message="This is an example of an increased width card component."\n        style="width:500px;"\n        expandable="true"\n      >\n        <ic-status-tag\n          slot="adornment"\n          label="Neutral"\n          size="small"\n        ></ic-status-tag>\n        <ic-button\n          variant="icon-tertiary"\n          title="More information"\n          slot="interaction-button"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="16"\n            height="16"\n            fill="currentColor"\n            class="bi bi-three-dots-vertical"\n            viewBox="0 0 16 16"\n          >\n            <path\n              d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n            />\n          </svg>\n        </ic-button>\n        <svg\n          slot="image-mid"\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 1600 900"\n          style="height:526px;width:526px;"\n        >\n          <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n          <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n          <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n          <polygon fill="#b80066" points="641 695 886 900 367 900" />\n          <polygon fill="#960052" points="587 900 641 695 886 900" />\n          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n          <polygon fill="#880088" points="943 900 1210 900 971 687" />\n        </svg>\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n        <ic-button slot="interaction-controls" variant="primary"\n          >Learn more</ic-button\n        >\n        <ic-button slot="interaction-controls" variant="secondary"\n          ><svg\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n            slot="left-icon"\n          >\n            <title>heart-outline</title>\n            <path\n              d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"\n            /></svg\n          >Add to favourites</ic-button\n        >\n        <ic-button slot="interaction-controls" variant="secondary"\n          >Hide</ic-button\n        >\n      </ic-card-vertical>\n    </div>`,\n  name: "Custom width"\n}',...CustomWidth.parameters?.docs?.source}}},AdditionalHeight.parameters={...AdditionalHeight.parameters,docs:{...AdditionalHeight.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-vertical\n      heading="This is the card heading"\n      subheading="This is the subheading"\n      message="This is an example of a new card component with text included."\n      style="width:360px; height: 700px"\n    >\n      <ic-status-tag\n        slot="adornment"\n        label="Neutral"\n        size="small"\n      ></ic-status-tag>\n      <ic-button\n        variant="icon-tertiary"\n        title="More information"\n        slot="interaction-button"\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="16"\n          height="16"\n          fill="currentColor"\n          class="bi bi-three-dots-vertical"\n          viewBox="0 0 16 16"\n        >\n          <path\n            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n          />\n        </svg>\n      </ic-button>\n      <svg\n        slot="image-mid"\n        style="height:326px;width:326px;"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n      <ic-button slot="interaction-controls" variant="primary"\n        >Learn more</ic-button\n      >\n      <ic-button slot="interaction-controls" variant="secondary"\n        >Hide</ic-button\n      >\n    </ic-card-vertical>`,\n  name: "Additional height"\n}',...AdditionalHeight.parameters?.docs?.source}}},Expandable.parameters={...Expandable.parameters,docs:{...Expandable.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-vertical\n      heading="This is the card heading"\n      subheading="This is the subheading"\n      message="This is an example of a new card component with text included."\n      expandable\n      style="width:360px;"\n    >\n      <ic-status-tag\n        slot="adornment"\n        label="Neutral"\n        size="small"\n      ></ic-status-tag>\n      <ic-button\n        variant="icon-tertiary"\n        title="More information"\n        slot="interaction-button"\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="16"\n          height="16"\n          fill="currentColor"\n          class="bi bi-three-dots-vertical"\n          viewBox="0 0 16 16"\n        >\n          <path\n            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n          />\n        </svg>\n      </ic-button>\n      <svg\n        slot="image-mid"\n        style="height:326px;width:326px;"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n      <ic-button slot="interaction-controls" variant="primary"\n        >Learn more</ic-button\n      >\n      <ic-button slot="interaction-controls" variant="secondary"\n        >Hide</ic-button\n      >\n      <ic-typography slot="expanded-content" variant="body"\n        >This is an example of a new card component with text\n        included.</ic-typography\n      >\n    </ic-card-vertical>`,\n  name: "Expandable"\n}',...Expandable.parameters?.docs?.source}}},ClickableLink.parameters={...ClickableLink.parameters,docs:{...ClickableLink.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-vertical\n      heading="This is the card heading"\n      subheading="This is the subheading"\n      message="This is an example of a new card component with text included."\n      clickable="true"\n      href="https://www.google.com"\n      ><svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        /></svg\n    ></ic-card-vertical>`,\n  name: "Clickable link"\n}',...ClickableLink.parameters?.docs?.source}}},ClickableButton.parameters={...ClickableButton.parameters,docs:{...ClickableButton.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-vertical\n      heading="This is the card heading"\n      subheading="This is the subheading"\n      message="This is an example of a new card component with text included."\n      clickable="true"\n      onclick="alert(\'clicked\')"\n      ><svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        /></svg\n    ></ic-card-vertical>`,\n  name: "Clickable button"\n}',...ClickableButton.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-card-vertical\n      heading="This is the card heading"\n      subheading="This is the subheading"\n      message="This is an example of a new card component with text included."\n      clickable="true"\n      disabled="true"\n      onClick="alert(\'clicked\')"\n      ><svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        /></svg\n    ></ic-card-vertical>`,\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source}}},FullWidth.parameters={...FullWidth.parameters,docs:{...FullWidth.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <ic-card-vertical\n      heading="This is the card heading"\n      subheading="This is the subheading"\n      message="This is an example of a card component that fills it\'s parent container."\n      clickable="true"\n      full-width="true"\n      href="https://www.google.com"\n      ><svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        /></svg\n    ></ic-card-vertical>\n  `,\n  name: "Full width"\n}',...FullWidth.parameters?.docs?.source}}},WrappedByLink.parameters={...WrappedByLink.parameters,docs:{...WrappedByLink.parameters?.docs,source:{originalSource:'{\n  render: () => html`<a href="/"\n      ><ic-card-vertical\n        heading="This is the card heading"\n        subheading="This is the subheading"\n        message="This is an example of a new card component with text included."\n        ><svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          /></svg></ic-card-vertical\n    ></a>`,\n  name: "Wrapped by link"\n}',...WrappedByLink.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-card-vertical\n      clickable=${args.clickable}\n      disabled=${args.disabled}\n      expandable=${args.expandable}\n      full-width=${args.fullWidth}\n      heading=${args.heading}\n      href=${args.href}\n      message=${args.message}\n      subheading=${args.subheading}\n      theme=${args.theme}\n    >\n      ${args.showIcon && html`\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n      `}\n      ${args.showBadge && html` <ic-badge text-label="1" slot="badge"></ic-badge> `}\n      ${args.showInteractionButton && html`\n        <ic-button\n          variant="icon-tertiary"\n          title="More information"\n          slot="interaction-button"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="16"\n            height="16"\n            fill="currentColor"\n            class="bi bi-three-dots-vertical"\n            viewBox="0 0 16 16"\n          >\n            <path\n              d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n            />\n          </svg>\n        </ic-button>\n      `}\n      ${args.showAdornment && html`\n        <ic-status-tag\n          slot="adornment"\n          label="Neutral"\n          size="small"\n        ></ic-status-tag>\n      `}\n      ${args.showImageTop && html`\n        <svg\n          slot="image-top"\n          style="height:200px;width:326px;"\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 1600 900"\n        >\n          <rect fill="#edb99d" width="1600" height="1600" y="-350" />\n          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n          <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n          <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n          <polygon fill="#b80066" points="641 695 886 900 367 900" />\n          <polygon fill="#960052" points="587 900 641 695 886 900" />\n          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n          <polygon fill="#880088" points="943 900 1210 900 971 687" />\n        </svg>\n      `}\n      ${args.showImageMid && html`\n        <svg\n          slot="image-mid"\n          style="height:200px;width:326px;"\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 1600 900"\n        >\n          <rect fill="#FFC0CB" width="1600" height="1600" y="-350" />\n          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n          <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n          <polygon fill="#ff3300" points="337 900 398 662 816 900" />\n          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n          <polygon fill="#b80066" points="641 695 886 900 367 900" />\n          <polygon fill="#960052" points="587 900 641 695 886 900" />\n          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n          <polygon fill="#880088" points="943 900 1210 900 971 687" />\n        </svg>\n      `}\n      ${args.showInteractionControls && html`\n        <ic-button slot="interaction-controls" variant="primary"\n          >Learn more</ic-button\n        >\n        <ic-button slot="interaction-controls" variant="secondary"\n          >Hide</ic-button\n        >\n      `}\n      ${args.showExpandedContent && html`\n        <ic-typography slot="expanded-content" variant="body"\n          >This is an example of a new card component with text\n          included.</ic-typography\n        >\n      `}\n    </ic-card-vertical>`,\n  args: defaultArgs,\n  name: "Playground",\n  argTypes: {\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: "inline-radio"\n      }\n    }\n  }\n}',...Playground.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-card-vertical-ic-card-vertical-stories.e3206033.iframe.bundle.js.map