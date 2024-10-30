"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[65],{"./src/components/ic-card/ic-card.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,additionalHeight:()=>additionalHeight,adornment:()=>adornment,clickableButton:()=>clickableButton,clickableLink:()=>clickableLink,customWidth:()=>customWidth,default:()=>ic_card_stories,defaultArgs:()=>defaultArgs,disabled:()=>disabled,expandable:()=>expandable,fullWidth:()=>fullWidth,heading:()=>heading,icon:()=>icon,interactionControls:()=>interactionControls,message:()=>message,middleImage:()=>middleImage,playground:()=>playground,slottedHeadingMessageAndSubheading:()=>slottedHeadingMessageAndSubheading,topImage:()=>topImage,withBadge:()=>withBadge,withInteractionButton:()=>withInteractionButton,withSubheading:()=>withSubheading,wrappedByLink:()=>wrappedByLink});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-card\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property         | Attribute        | Description                                                                                                                                 | Type                                                                                                                                                                                     | Default     |\n| ---------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `clickable`      | `clickable`      | If `true`, the card will be a clickable variant, instead of static.                                                                         | `boolean`                                                                                                                                                                                | `false`     |\n| `disabled`       | `disabled`       | If `true`, the card will be disabled if it is clickable.                                                                                    | `boolean`                                                                                                                                                                                | `false`     |\n| `expandable`     | `expandable`     | If `true`, the card will have an expandable area and expansion toggle button.                                                               | `boolean`                                                                                                                                                                                | `false`     |\n| `fullWidth`      | `full-width`     | If `true`, the card will fill the width of the container.                                                                                   | `boolean`                                                                                                                                                                                | `false`     |\n| `heading`        | `heading`        | The heading for the card. This is required, unless a slotted heading is used.                                                               | `string`                                                                                                                                                                                 | `undefined` |\n| `href`           | `href`           | The URL that the clickable card link points to. If set, the clickable card will render as an "a" tag, otherwise it will render as a button. | `string`                                                                                                                                                                                 | `undefined` |\n| `hreflang`       | `hreflang`       | The human language of the linked URL.                                                                                                       | `string`                                                                                                                                                                                 | `""`        |\n| `message`        | `message`        | The main body message of the card.                                                                                                          | `string`                                                                                                                                                                                 | `""`        |\n| `referrerpolicy` | `referrerpolicy` | How much of the referrer to send when following the link.                                                                                   | `"" \\| "no-referrer" \\| "no-referrer-when-downgrade" \\| "origin" \\| "origin-when-cross-origin" \\| "same-origin" \\| "strict-origin" \\| "strict-origin-when-cross-origin" \\| "unsafe-url"` | `undefined` |\n| `rel`            | `rel`            | The relationship of the linked URL as space-separated link types.                                                                           | `string`                                                                                                                                                                                 | `undefined` |\n| `subheading`     | `subheading`     | The subheading for the card.                                                                                                                | `string`                                                                                                                                                                                 | `undefined` |\n| `target`         | `target`         | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).                                         | `string`                                                                                                                                                                                 | `undefined` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the card.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot                     | Description                                                                               |\n| ------------------------ | ----------------------------------------------------------------------------------------- |\n| `"adornment"`            | Content will be placed below the card subheading.                                         |\n| `"badge"`                | Badge component overlaying the top right of the card.                                     |\n| `"expanded-content"`     | Content will be placed below the interaction controls but will not initially be rendered. |\n| `"heading"`              | Content will be placed at the top of the card to the right of the icon.                   |\n| `"icon"`                 | Content will be placed to the left of the card heading.                                   |\n| `"image-mid"`            | Content will be placed below the card heading section.                                    |\n| `"image-top"`            | Content will be placed at the top of the card above all other content.                    |\n| `"interaction-button"`   | Content will be placed in the top right corner of the heading section.                    |\n| `"interaction-controls"` | Content will be placed below the card message.                                            |\n| `"message"`              | Content will be placed in the main body of the card.                                      |\n| `"subheading"`           | Content will be placed below the card heading.                                            |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n- [ic-tooltip](../ic-tooltip)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-card --\x3e ic-typography\n  ic-card --\x3e ic-tooltip\n  ic-tooltip --\x3e ic-typography\n  style ic-card fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';__webpack_require__("./src/components/ic-status-tag/readme.md"),__webpack_require__("./src/components/ic-typography/readme.md"),__webpack_require__("./src/components/ic-button/readme.md");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={clickable:!1,disabled:!1,expandable:!1,fullWidth:!1,heading:"Heading",href:"/",message:"Message",subheading:"Subheading",showIcon:!1,showBadge:!1,showInteractionButton:!1,showAdornment:!1,showImageTop:!1,showImageMid:!1,showInteractionControls:!1,showExpandedContent:!1};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Web Components/Card",component:"ic-card"}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"heading",children:"Heading"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Heading",parameters:{loki:{skip:!0}},children:lit_html.qy`<ic-card heading="This is the card heading"></ic-card>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon",children:"Icon"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Icon",parameters:{loki:{skip:!0}},children:lit_html.qy`<ic-card heading="This is the card heading">
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
    </ic-card>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"message",children:"Message"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Message",parameters:{loki:{skip:!0}},children:lit_html.qy`<ic-card
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
    </ic-card>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-subheading",children:"With subheading"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With subheading",parameters:{loki:{skip:!0}},children:lit_html.qy`<ic-card
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
    ></ic-card>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"slotted-heading-message-and-subheading",children:"Slotted heading, message, and subheading"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Slotted heading, message, and subheading",parameters:{loki:{skip:!0}},children:lit_html.qy`<ic-card>
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
    ></ic-card>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-badge",children:"With badge"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With badge",parameters:{loki:{skip:!0}},children:lit_html.qy`<ic-card
        heading="This is the card heading"
        clickable="true"
        href="https://www.google.com"
        style="margin-bottom: 8px"
      >
        <ic-badge text-label="1" slot="badge"></ic-badge>
      </ic-card>
      <ic-card
        heading="This is the card heading"
        clickable="true"
        href="https://www.google.com"
      >
        <ic-badge slot="badge" type="dot"></ic-badge>
      </ic-card>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-interaction-button",children:"With interaction button"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With interaction button",parameters:{loki:{skip:!0}},children:lit_html.qy`<ic-card
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
        variant="icon"
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
    </ic-card>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"adornment",children:"Adornment"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Adornment",parameters:{loki:{skip:!0}},children:lit_html.qy`<ic-card
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
        variant="icon"
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
    </ic-card>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"top-image",children:"Top image"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Top image",parameters:{loki:{skip:!0}},children:lit_html.qy`<ic-card
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
        variant="icon"
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
    </ic-card>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"middle-image",children:"Middle image"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Middle image",parameters:{loki:{skip:!0}},children:lit_html.qy`<ic-card
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
        variant="icon"
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
    </ic-card>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"interaction-controls",children:"Interaction controls"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Interaction controls",parameters:{loki:{skip:!0}},children:lit_html.qy`<ic-card
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
        variant="icon"
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
    </ic-card>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-width",children:"Custom width"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Custom width",parameters:{loki:{skip:!0}},children:lit_html.qy`<div style="display: flex; gap: 16px; flex-direction: column;">
      <ic-card
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
          variant="icon"
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
      </ic-card>
      <ic-card
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
          variant="icon"
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
      </ic-card>
    </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"additional-height",children:"Additional height"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Additional height",parameters:{loki:{skip:!0}},children:lit_html.qy`<ic-card
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
        variant="icon"
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
    </ic-card>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"expandable",children:"Expandable"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Expandable",parameters:{loki:{skip:!0}},children:lit_html.qy`<ic-card
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
        variant="icon"
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
    </ic-card>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"clickable-link",children:"Clickable link"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Clickable link",parameters:{loki:{skip:!0}},children:lit_html.qy`<ic-card
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
    ></ic-card>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"clickable-button",children:"Clickable button"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Clickable button",parameters:{loki:{skip:!0}},children:lit_html.qy`<ic-card
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
    ></ic-card>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Disabled",parameters:{loki:{skip:!0}},children:lit_html.qy`<ic-card
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
    ></ic-card>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"full-width",children:"Full width"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Full width",parameters:{loki:{skip:!0}},children:lit_html.qy`
      <ic-card
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
      ></ic-card>
    `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"wrapped-by-link",children:"Wrapped by link"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Wrapped by link",parameters:{loki:{skip:!0}},children:lit_html.qy`<a href="/"
      ><ic-card
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
          /></svg></ic-card
    ></a>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,parameters:{loki:{skip:!0}},name:"Playground",children:args=>lit_html.qy`<ic-card
        clickable=${args.clickable}
        disabled=${args.disabled}
        expandable=${args.expandable}
        full-width=${args.fullWidth}
        heading=${args.heading}
        href=${args.href}
        message=${args.message}
        subheading=${args.subheading}
      >
        ${args.showIcon&&lit_html.qy`
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
        `} ${args.showBadge&&lit_html.qy` <ic-badge text-label="1" slot="badge"></ic-badge> `} ${args.showInteractionButton&&lit_html.qy`
          <ic-button
            variant="icon"
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
        `} ${args.showAdornment&&lit_html.qy`
          <ic-status-tag
            slot="adornment"
            label="Neutral"
            size="small"
          ></ic-status-tag>
        `} ${args.showImageTop&&lit_html.qy`
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
        `} ${args.showImageMid&&lit_html.qy`
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
        `} ${args.showInteractionControls&&lit_html.qy`
          <ic-button slot="interaction-controls" variant="primary"
            >Learn more</ic-button
          >
          <ic-button slot="interaction-controls" variant="secondary"
            >Hide</ic-button
          >
        `} ${args.showExpandedContent&&lit_html.qy`
          <ic-typography slot="expanded-content" variant="body"
            >This is an example of a new card component with text
            included.</ic-typography
          >
        `}
      </ic-card>`})})]})}const heading=()=>lit_html.qy`<ic-card heading="This is the card heading"></ic-card>`;heading.storyName="Heading",heading.parameters={storySource:{source:'html`<ic-card heading="This is the card heading"></ic-card>`'},loki:{skip:!0}};const icon=()=>lit_html.qy`<ic-card heading="This is the card heading">
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
    </ic-card>`;icon.storyName="Icon",icon.parameters={storySource:{source:'html`<ic-card heading="This is the card heading">\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-card>`'},loki:{skip:!0}};const message=()=>lit_html.qy`<ic-card
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
    </ic-card>`;message.storyName="Message",message.parameters={storySource:{source:'html`<ic-card\n      heading="This is the card heading"\n      message="This is an example of a new card component with text included."\n    >\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-card>`'},loki:{skip:!0}};const withSubheading=()=>lit_html.qy`<ic-card
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
    ></ic-card>`;withSubheading.storyName="With subheading",withSubheading.parameters={storySource:{source:'html`<ic-card\n      heading="This is the card heading"\n      message="This is an example of a new card component with text included."\n      subheading="This is the subheading"\n      ><svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        /></svg\n    ></ic-card>`'},loki:{skip:!0}};const slottedHeadingMessageAndSubheading=()=>lit_html.qy`<ic-card>
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
    ></ic-card>`;slottedHeadingMessageAndSubheading.storyName="Slotted heading, message, and subheading",slottedHeadingMessageAndSubheading.parameters={storySource:{source:'html`<ic-card>\n      <ic-typography variant="h4" slot="heading"\n        >This is the slotted card heading</ic-typography\n      >\n      <ic-typography slot="message"\n        >This is an example of a new card component with slotted text\n        included.</ic-typography\n      >\n      <ic-typography variant="subtitle-small" slot="subheading"\n        >This is the slotted subheading</ic-typography\n      >\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        /></svg\n    ></ic-card>`'},loki:{skip:!0}};const withBadge=()=>lit_html.qy`<ic-card
        heading="This is the card heading"
        clickable="true"
        href="https://www.google.com"
        style="margin-bottom: 8px"
      >
        <ic-badge text-label="1" slot="badge"></ic-badge>
      </ic-card>
      <ic-card
        heading="This is the card heading"
        clickable="true"
        href="https://www.google.com"
      >
        <ic-badge slot="badge" type="dot"></ic-badge>
      </ic-card>`;withBadge.storyName="With badge",withBadge.parameters={storySource:{source:'html`<ic-card\n        heading="This is the card heading"\n        clickable="true"\n        href="https://www.google.com"\n        style="margin-bottom: 8px"\n      >\n        <ic-badge text-label="1" slot="badge"></ic-badge>\n      </ic-card>\n      <ic-card\n        heading="This is the card heading"\n        clickable="true"\n        href="https://www.google.com"\n      >\n        <ic-badge slot="badge" type="dot"></ic-badge>\n      </ic-card>`'},loki:{skip:!0}};const withInteractionButton=()=>lit_html.qy`<ic-card
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
        variant="icon"
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
    </ic-card>`;withInteractionButton.storyName="With interaction button",withInteractionButton.parameters={storySource:{source:'html`<ic-card\n      heading="This is the card heading"\n      subheading="This is the subheading"\n      message="This is an example of a new card component with text included."\n    >\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n      <ic-button\n        variant="icon"\n        title="More information"\n        slot="interaction-button"\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="16"\n          height="16"\n          fill="currentColor"\n          class="bi bi-three-dots-vertical"\n          viewBox="0 0 16 16"\n        >\n          <path\n            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n          />\n        </svg>\n      </ic-button>\n    </ic-card>`'},loki:{skip:!0}};const adornment=()=>lit_html.qy`<ic-card
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
        variant="icon"
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
    </ic-card>`;adornment.storyName="Adornment",adornment.parameters={storySource:{source:'html`<ic-card\n      heading="This is the card heading"\n      subheading="This is the subheading"\n      message="This is an example of a new card component with text included."\n    >\n      <ic-status-tag\n        slot="adornment"\n        label="Neutral"\n        size="small"\n      ></ic-status-tag>\n      <ic-button\n        variant="icon"\n        title="More information"\n        slot="interaction-button"\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="16"\n          height="16"\n          fill="currentColor"\n          class="bi bi-three-dots-vertical"\n          viewBox="0 0 16 16"\n        >\n          <path\n            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n          />\n        </svg>\n      </ic-button>\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-card>`'},loki:{skip:!0}};const topImage=()=>lit_html.qy`<ic-card
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
        variant="icon"
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
    </ic-card>`;topImage.storyName="Top image",topImage.parameters={storySource:{source:'html`<ic-card\n      heading="This is the card heading"\n      subheading="This is the subheading"\n      message="This is an example of a new card component with text included."\n      style="width:360px;"\n    >\n      <ic-status-tag\n        slot="adornment"\n        label="Neutral"\n        size="small"\n      ></ic-status-tag>\n      <ic-button\n        variant="icon"\n        title="More information"\n        slot="interaction-button"\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="16"\n          height="16"\n          fill="currentColor"\n          class="bi bi-three-dots-vertical"\n          viewBox="0 0 16 16"\n        >\n          <path\n            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n          />\n        </svg>\n      </ic-button>\n      <svg\n        slot="image-top"\n        style="height:326px;width:326px;"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-card>`'},loki:{skip:!0}};const middleImage=()=>lit_html.qy`<ic-card
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
        variant="icon"
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
    </ic-card>`;middleImage.storyName="Middle image",middleImage.parameters={storySource:{source:'html`<ic-card\n      heading="This is the card heading"\n      subheading="This is the subheading"\n      message="This is an example of a new card component with text included."\n      style="width:360px;"\n    >\n      <ic-status-tag\n        slot="adornment"\n        label="Neutral"\n        size="small"\n      ></ic-status-tag>\n      <ic-button\n        variant="icon"\n        title="More information"\n        slot="interaction-button"\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="16"\n          height="16"\n          fill="currentColor"\n          class="bi bi-three-dots-vertical"\n          viewBox="0 0 16 16"\n        >\n          <path\n            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n          />\n        </svg>\n      </ic-button>\n      <svg\n        slot="image-mid"\n        style="height:326px;width:326px;"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n    </ic-card>`'},loki:{skip:!0}};const interactionControls=()=>lit_html.qy`<ic-card
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
        variant="icon"
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
    </ic-card>`;interactionControls.storyName="Interaction controls",interactionControls.parameters={storySource:{source:'html`<ic-card\n      heading="This is the card heading"\n      subheading="This is the subheading"\n      message="This is an example of a new card component with text included."\n      style="width:360px;"\n    >\n      <ic-status-tag\n        slot="adornment"\n        label="Neutral"\n        size="small"\n      ></ic-status-tag>\n      <ic-button\n        variant="icon"\n        title="More information"\n        slot="interaction-button"\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="16"\n          height="16"\n          fill="currentColor"\n          class="bi bi-three-dots-vertical"\n          viewBox="0 0 16 16"\n        >\n          <path\n            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n          />\n        </svg>\n      </ic-button>\n      <svg\n        slot="image-mid"\n        style="height:326px;width:326px;"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n      <ic-button slot="interaction-controls" variant="primary"\n        >Learn more</ic-button\n      >\n      <ic-button slot="interaction-controls" variant="secondary"\n        >Hide</ic-button\n      >\n    </ic-card>`'},loki:{skip:!0}};const customWidth=()=>lit_html.qy`<div style="display: flex; gap: 16px; flex-direction: column;">
      <ic-card
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
          variant="icon"
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
      </ic-card>
      <ic-card
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
          variant="icon"
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
      </ic-card>
    </div>`;customWidth.storyName="Custom width",customWidth.parameters={storySource:{source:'html`<div style="display: flex; gap: 16px; flex-direction: column;">\n      <ic-card\n        heading="This is the card heading"\n        subheading="This is the subheading"\n        message="This is an example of a reduced width card component."\n        style="width:300px;"\n        expandable="true"\n      >\n        <ic-status-tag\n          slot="adornment"\n          label="Neutral"\n          size="small"\n        ></ic-status-tag>\n        <ic-button\n          variant="icon"\n          title="More information"\n          slot="interaction-button"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="16"\n            height="16"\n            fill="currentColor"\n            class="bi bi-three-dots-vertical"\n            viewBox="0 0 16 16"\n          >\n            <path\n              d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n            />\n          </svg>\n        </ic-button>\n        <svg\n          slot="image-mid"\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 1600 900"\n          style="height:326px;width:326px;"\n        >\n          <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n          <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n          <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n          <polygon fill="#b80066" points="641 695 886 900 367 900" />\n          <polygon fill="#960052" points="587 900 641 695 886 900" />\n          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n          <polygon fill="#880088" points="943 900 1210 900 971 687" />\n        </svg>\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n        <ic-button slot="interaction-controls" variant="primary"\n          >Learn more</ic-button\n        >\n        <ic-button slot="interaction-controls" variant="secondary"\n          ><svg\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n            slot="left-icon"\n          >\n            <title>heart-outline</title>\n            <path\n              d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"\n            /></svg\n          >Add to favourites</ic-button\n        >\n        <ic-button slot="interaction-controls" variant="secondary"\n          >Hide</ic-button\n        >\n      </ic-card>\n      <ic-card\n        heading="This is the card heading"\n        subheading="This is the subheading"\n        message="This is an example of an increased width card component."\n        style="width:500px;"\n        expandable="true"\n      >\n        <ic-status-tag\n          slot="adornment"\n          label="Neutral"\n          size="small"\n        ></ic-status-tag>\n        <ic-button\n          variant="icon"\n          title="More information"\n          slot="interaction-button"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="16"\n            height="16"\n            fill="currentColor"\n            class="bi bi-three-dots-vertical"\n            viewBox="0 0 16 16"\n          >\n            <path\n              d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n            />\n          </svg>\n        </ic-button>\n        <svg\n          slot="image-mid"\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 1600 900"\n          style="height:526px;width:526px;"\n        >\n          <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n          <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n          <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n          <polygon fill="#b80066" points="641 695 886 900 367 900" />\n          <polygon fill="#960052" points="587 900 641 695 886 900" />\n          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n          <polygon fill="#880088" points="943 900 1210 900 971 687" />\n        </svg>\n        <svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          />\n        </svg>\n        <ic-button slot="interaction-controls" variant="primary"\n          >Learn more</ic-button\n        >\n        <ic-button slot="interaction-controls" variant="secondary"\n          ><svg\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n            slot="left-icon"\n          >\n            <title>heart-outline</title>\n            <path\n              d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"\n            /></svg\n          >Add to favourites</ic-button\n        >\n        <ic-button slot="interaction-controls" variant="secondary"\n          >Hide</ic-button\n        >\n      </ic-card>\n    </div>`'},loki:{skip:!0}};const additionalHeight=()=>lit_html.qy`<ic-card
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
        variant="icon"
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
    </ic-card>`;additionalHeight.storyName="Additional height",additionalHeight.parameters={storySource:{source:'html`<ic-card\n      heading="This is the card heading"\n      subheading="This is the subheading"\n      message="This is an example of a new card component with text included."\n      style="width:360px; height: 700px"\n    >\n      <ic-status-tag\n        slot="adornment"\n        label="Neutral"\n        size="small"\n      ></ic-status-tag>\n      <ic-button\n        variant="icon"\n        title="More information"\n        slot="interaction-button"\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="16"\n          height="16"\n          fill="currentColor"\n          class="bi bi-three-dots-vertical"\n          viewBox="0 0 16 16"\n        >\n          <path\n            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n          />\n        </svg>\n      </ic-button>\n      <svg\n        slot="image-mid"\n        style="height:326px;width:326px;"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n      <ic-button slot="interaction-controls" variant="primary"\n        >Learn more</ic-button\n      >\n      <ic-button slot="interaction-controls" variant="secondary"\n        >Hide</ic-button\n      >\n    </ic-card>`'},loki:{skip:!0}};const expandable=()=>lit_html.qy`<ic-card
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
        variant="icon"
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
    </ic-card>`;expandable.storyName="Expandable",expandable.parameters={storySource:{source:'html`<ic-card\n      heading="This is the card heading"\n      subheading="This is the subheading"\n      message="This is an example of a new card component with text included."\n      expandable\n      style="width:360px;"\n    >\n      <ic-status-tag\n        slot="adornment"\n        label="Neutral"\n        size="small"\n      ></ic-status-tag>\n      <ic-button\n        variant="icon"\n        title="More information"\n        slot="interaction-button"\n      >\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="16"\n          height="16"\n          fill="currentColor"\n          class="bi bi-three-dots-vertical"\n          viewBox="0 0 16 16"\n        >\n          <path\n            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n          />\n        </svg>\n      </ic-button>\n      <svg\n        slot="image-mid"\n        style="height:326px;width:326px;"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 1600 900"\n      >\n        <rect fill="#ff7700" width="1600" height="1600" y="-350" />\n        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n        <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n        <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n        <polygon fill="#b80066" points="641 695 886 900 367 900" />\n        <polygon fill="#960052" points="587 900 641 695 886 900" />\n        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n        <polygon fill="#880088" points="943 900 1210 900 971 687" />\n      </svg>\n      <svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        />\n      </svg>\n      <ic-button slot="interaction-controls" variant="primary"\n        >Learn more</ic-button\n      >\n      <ic-button slot="interaction-controls" variant="secondary"\n        >Hide</ic-button\n      >\n      <ic-typography slot="expanded-content" variant="body"\n        >This is an example of a new card component with text\n        included.</ic-typography\n      >\n    </ic-card>`'},loki:{skip:!0}};const clickableLink=()=>lit_html.qy`<ic-card
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
    ></ic-card>`;clickableLink.storyName="Clickable link",clickableLink.parameters={storySource:{source:'html`<ic-card\n      heading="This is the card heading"\n      subheading="This is the subheading"\n      message="This is an example of a new card component with text included."\n      clickable="true"\n      href="https://www.google.com"\n      ><svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        /></svg\n    ></ic-card>`'},loki:{skip:!0}};const clickableButton=()=>lit_html.qy`<ic-card
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
    ></ic-card>`;clickableButton.storyName="Clickable button",clickableButton.parameters={storySource:{source:'html`<ic-card\n      heading="This is the card heading"\n      subheading="This is the subheading"\n      message="This is an example of a new card component with text included."\n      clickable="true"\n      onclick="alert(\'clicked\')"\n      ><svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        /></svg\n    ></ic-card>`'},loki:{skip:!0}};const disabled=()=>lit_html.qy`<ic-card
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
    ></ic-card>`;disabled.storyName="Disabled",disabled.parameters={storySource:{source:'html`<ic-card\n      heading="This is the card heading"\n      subheading="This is the subheading"\n      message="This is an example of a new card component with text included."\n      clickable="true"\n      disabled="true"\n      onClick="alert(\'clicked\')"\n      ><svg\n        slot="icon"\n        xmlns="http://www.w3.org/2000/svg"\n        height="24px"\n        viewBox="0 0 24 24"\n        width="24px"\n        fill="#000000"\n      >\n        <path d="M0 0h24v24H0V0z" fill="none" />\n        <path\n          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n        /></svg\n    ></ic-card>`'},loki:{skip:!0}};const fullWidth=()=>lit_html.qy`
      <ic-card
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
      ></ic-card>
    `;fullWidth.storyName="Full width",fullWidth.parameters={storySource:{source:'html`\n      <ic-card\n        heading="This is the card heading"\n        subheading="This is the subheading"\n        message="This is an example of a card component that fills it\'s parent container."\n        clickable="true"\n        full-width="true"\n        href="https://www.google.com"\n        ><svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          /></svg\n      ></ic-card>\n    `'},loki:{skip:!0}};const wrappedByLink=()=>lit_html.qy`<a href="/"
      ><ic-card
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
          /></svg></ic-card
    ></a>`;wrappedByLink.storyName="Wrapped by link",wrappedByLink.parameters={storySource:{source:'html`<a href="/"\n      ><ic-card\n        heading="This is the card heading"\n        subheading="This is the subheading"\n        message="This is an example of a new card component with text included."\n        ><svg\n          slot="icon"\n          xmlns="http://www.w3.org/2000/svg"\n          height="24px"\n          viewBox="0 0 24 24"\n          width="24px"\n          fill="#000000"\n        >\n          <path d="M0 0h24v24H0V0z" fill="none" />\n          <path\n            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n          /></svg></ic-card\n    ></a>`'},loki:{skip:!0}};const playground=args=>lit_html.qy`<ic-card
        clickable=${args.clickable}
        disabled=${args.disabled}
        expandable=${args.expandable}
        full-width=${args.fullWidth}
        heading=${args.heading}
        href=${args.href}
        message=${args.message}
        subheading=${args.subheading}
      >
        ${args.showIcon&&lit_html.qy`
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
        `} ${args.showBadge&&lit_html.qy` <ic-badge text-label="1" slot="badge"></ic-badge> `} ${args.showInteractionButton&&lit_html.qy`
          <ic-button
            variant="icon"
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
        `} ${args.showAdornment&&lit_html.qy`
          <ic-status-tag
            slot="adornment"
            label="Neutral"
            size="small"
          ></ic-status-tag>
        `} ${args.showImageTop&&lit_html.qy`
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
        `} ${args.showImageMid&&lit_html.qy`
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
        `} ${args.showInteractionControls&&lit_html.qy`
          <ic-button slot="interaction-controls" variant="primary"
            >Learn more</ic-button
          >
          <ic-button slot="interaction-controls" variant="secondary"
            >Hide</ic-button
          >
        `} ${args.showExpandedContent&&lit_html.qy`
          <ic-typography slot="expanded-content" variant="body"
            >This is an example of a new card component with text
            included.</ic-typography
          >
        `}
      </ic-card>`;playground.storyName="Playground",playground.args=defaultArgs,playground.parameters={storySource:{source:'args => html`<ic-card\n        clickable=${args.clickable}\n        disabled=${args.disabled}\n        expandable=${args.expandable}\n        full-width=${args.fullWidth}\n        heading=${args.heading}\n        href=${args.href}\n        message=${args.message}\n        subheading=${args.subheading}\n      >\n        ${args.showIcon && html`\n          <svg\n            slot="icon"\n            xmlns="http://www.w3.org/2000/svg"\n            height="24px"\n            viewBox="0 0 24 24"\n            width="24px"\n            fill="#000000"\n          >\n            <path d="M0 0h24v24H0V0z" fill="none" />\n            <path\n              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n            />\n          </svg>\n        `} ${args.showBadge && html` <ic-badge text-label="1" slot="badge"></ic-badge> `} ${args.showInteractionButton && html`\n          <ic-button\n            variant="icon"\n            title="More information"\n            slot="interaction-button"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              width="16"\n              height="16"\n              fill="currentColor"\n              class="bi bi-three-dots-vertical"\n              viewBox="0 0 16 16"\n            >\n              <path\n                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"\n              />\n            </svg>\n          </ic-button>\n        `} ${args.showAdornment && html`\n          <ic-status-tag\n            slot="adornment"\n            label="Neutral"\n            size="small"\n          ></ic-status-tag>\n        `} ${args.showImageTop && html`\n          <svg\n            slot="image-top"\n            style="height:200px;width:326px;"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 1600 900"\n          >\n            <rect fill="#edb99d" width="1600" height="1600" y="-350" />\n            <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n            <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n            <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n            <polygon fill="#a3001b" points="337 900 398 662 816 900" />\n            <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n            <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n            <polygon fill="#b80066" points="641 695 886 900 367 900" />\n            <polygon fill="#960052" points="587 900 641 695 886 900" />\n            <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n            <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n            <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n            <polygon fill="#880088" points="943 900 1210 900 971 687" />\n          </svg>\n        `} ${args.showImageMid && html`\n          <svg\n            slot="image-mid"\n            style="height:200px;width:326px;"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 1600 900"\n          >\n            <rect fill="#FFC0CB" width="1600" height="1600" y="-350" />\n            <polygon fill="#cc0000" points="957 450 539 900 1396 900" />\n            <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />\n            <polygon fill="#c50022" points="-60 900 398 662 816 900" />\n            <polygon fill="#ff3300" points="337 900 398 662 816 900" />\n            <polygon fill="#be0044" points="1203 546 1552 900 876 900" />\n            <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />\n            <polygon fill="#b80066" points="641 695 886 900 367 900" />\n            <polygon fill="#960052" points="587 900 641 695 886 900" />\n            <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />\n            <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />\n            <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />\n            <polygon fill="#880088" points="943 900 1210 900 971 687" />\n          </svg>\n        `} ${args.showInteractionControls && html`\n          <ic-button slot="interaction-controls" variant="primary"\n            >Learn more</ic-button\n          >\n          <ic-button slot="interaction-controls" variant="secondary"\n            >Hide</ic-button\n          >\n        `} ${args.showExpandedContent && html`\n          <ic-typography slot="expanded-content" variant="body"\n            >This is an example of a new card component with text\n            included.</ic-typography\n          >\n        `}\n      </ic-card>`'},loki:{skip:!0}};const componentMeta={title:"Web Components/Card",tags:["stories-mdx"],includeStories:["heading","icon","message","withSubheading","slottedHeadingMessageAndSubheading","withBadge","withInteractionButton","adornment","topImage","middleImage","interactionControls","customWidth","additionalHeight","expandable","clickableLink","clickableButton","disabled","fullWidth","wrappedByLink","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_card_stories=componentMeta,__namedExportsOrder=["defaultArgs","heading","icon","message","withSubheading","slottedHeadingMessageAndSubheading","withBadge","withInteractionButton","adornment","topImage","middleImage","interactionControls","customWidth","additionalHeight","expandable","clickableLink","clickableButton","disabled","fullWidth","wrappedByLink","playground"]},"./src/components/ic-status-tag/readme.md":module=>{module.exports='# ic-status-tag\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute    | Description                                                                                                                                                                  | Type                                              | Default     |\n| -------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------- |\n| `announced`          | `announced`  | If `true`, role=\'status\' is added to the component and it will act as an \'aria-live\' region. Screen readers will announce changes to the `label`, but not the initial value. | `boolean`                                         | `false`     |\n| `appearance`         | `appearance` | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Use variant prop instead.<br/><br/>                                                    | `"filled" \\| "outlined"`                          | `undefined` |\n| `label` _(required)_ | `label`      | The content rendered within the status tag.                                                                                                                                  | `string`                                          | `undefined` |\n| `size`               | `size`       | The size of the status tag component.                                                                                                                                        | `"default" \\| "large" \\| "small"`                 | `"default"` |\n| `small`              | `small`      | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Set prop `size` to "small" instead.<br/><br/>                                          | `boolean`                                         | `false`     |\n| `status`             | `status`     | The colour of the status tag.                                                                                                                                                | `"danger" \\| "neutral" \\| "success" \\| "warning"` | `"neutral"` |\n| `variant`            | `variant`    | The emphasis of the status tag.                                                                                                                                              | `"filled" \\| "outlined"`                          | `"filled"`  |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-status-tag --\x3e ic-typography\n  style ic-status-tag fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'},"./src/components/ic-typography/readme.md":module=>{module.exports='# ic-typography\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property               | Attribute                | Description                                                                                                                                                                           | Type                                                                                                                                                                                                                                   | Default     |\n| ---------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `applyVerticalMargins` | `apply-vertical-margins` | If `true`, appropriate top and bottom margins will be applied to the typography.                                                                                                      | `boolean`                                                                                                                                                                                                                              | `false`     |\n| `bold`                 | `bold`                   | If `true`, the typography will have a bold font weight. Note: This will have no impact on variants that already use an equivalent or higher font weight (h1, h2, and subtitle-large). | `boolean`                                                                                                                                                                                                                              | `false`     |\n| `italic`               | `italic`                 | If `true`, the typography will have an italic font style.                                                                                                                             | `boolean`                                                                                                                                                                                                                              | `false`     |\n| `maxLines`             | `max-lines`              | The number of lines to display before truncating the text, only used for the \'body\' variant.                                                                                          | `number`                                                                                                                                                                                                                               | `undefined` |\n| `strikethrough`        | `strikethrough`          | If `true`, the typography will have a line through it.                                                                                                                                | `boolean`                                                                                                                                                                                                                              | `false`     |\n| `underline`            | `underline`              | If `true`, the typography will have a line under it.                                                                                                                                  | `boolean`                                                                                                                                                                                                                              | `false`     |\n| `variant`              | `variant`                | The ICDS typography style to use.                                                                                                                                                     | `"badge" \\| "badge-small" \\| "body" \\| "caption" \\| "caption-uppercase" \\| "code-extra-small" \\| "code-large" \\| "code-small" \\| "h1" \\| "h2" \\| "h3" \\| "h4" \\| "label" \\| "label-uppercase" \\| "subtitle-large" \\| "subtitle-small"` | `"body"`    |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-accordion](../ic-accordion)\n - [ic-accordion-group](../ic-accordion-group)\n - [ic-alert](../ic-alert)\n - [ic-back-to-top](../ic-back-to-top)\n - [ic-badge](../ic-badge)\n - [ic-card](../ic-card)\n - [ic-checkbox](../ic-checkbox)\n - [ic-chip](../ic-chip)\n - [ic-classification-banner](../ic-classification-banner)\n - [ic-data-entity](../ic-data-entity)\n - [ic-data-row](../ic-data-row)\n - [ic-dialog](../ic-dialog)\n - [ic-empty-state](../ic-empty-state)\n - [ic-footer](../ic-footer)\n - [ic-footer-link-group](../ic-footer-link-group)\n - [ic-hero](../ic-hero)\n - [ic-input-label](../ic-input-label)\n - [ic-input-validation](../ic-input-validation)\n - [ic-loading-indicator](../ic-loading-indicator)\n - [ic-menu](../ic-menu)\n - [ic-menu-group](../ic-menu-group)\n - [ic-menu-item](../ic-menu-item)\n - [ic-navigation-group](../ic-navigation-group)\n - [ic-navigation-item](../ic-navigation-item)\n - [ic-navigation-menu](../ic-navigation-menu)\n - [ic-page-header](../ic-page-header)\n - [ic-pagination-item](../ic-pagination-item)\n - [ic-popover-menu](../ic-popover-menu)\n - [ic-radio-option](../ic-radio-option)\n - [ic-select](../ic-select)\n - [ic-side-navigation](../ic-side-navigation)\n - [ic-status-tag](../ic-status-tag)\n - [ic-step](../ic-step)\n - [ic-switch](../ic-switch)\n - [ic-tab](../ic-tab)\n - [ic-text-field](../ic-text-field)\n - [ic-toast](../ic-toast)\n - [ic-tooltip](../ic-tooltip)\n - [ic-top-navigation](../ic-top-navigation)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-accordion --\x3e ic-typography\n  ic-accordion-group --\x3e ic-typography\n  ic-alert --\x3e ic-typography\n  ic-back-to-top --\x3e ic-typography\n  ic-badge --\x3e ic-typography\n  ic-card --\x3e ic-typography\n  ic-checkbox --\x3e ic-typography\n  ic-chip --\x3e ic-typography\n  ic-classification-banner --\x3e ic-typography\n  ic-data-entity --\x3e ic-typography\n  ic-data-row --\x3e ic-typography\n  ic-dialog --\x3e ic-typography\n  ic-empty-state --\x3e ic-typography\n  ic-footer --\x3e ic-typography\n  ic-footer-link-group --\x3e ic-typography\n  ic-hero --\x3e ic-typography\n  ic-input-label --\x3e ic-typography\n  ic-input-validation --\x3e ic-typography\n  ic-loading-indicator --\x3e ic-typography\n  ic-menu --\x3e ic-typography\n  ic-menu-group --\x3e ic-typography\n  ic-menu-item --\x3e ic-typography\n  ic-navigation-group --\x3e ic-typography\n  ic-navigation-item --\x3e ic-typography\n  ic-navigation-menu --\x3e ic-typography\n  ic-page-header --\x3e ic-typography\n  ic-pagination-item --\x3e ic-typography\n  ic-popover-menu --\x3e ic-typography\n  ic-radio-option --\x3e ic-typography\n  ic-select --\x3e ic-typography\n  ic-side-navigation --\x3e ic-typography\n  ic-status-tag --\x3e ic-typography\n  ic-step --\x3e ic-typography\n  ic-switch --\x3e ic-typography\n  ic-tab --\x3e ic-typography\n  ic-text-field --\x3e ic-typography\n  ic-toast --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  ic-top-navigation --\x3e ic-typography\n  style ic-typography fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'}}]);
//# sourceMappingURL=components-ic-card-ic-card-stories-mdx.0c69618c.iframe.bundle.js.map