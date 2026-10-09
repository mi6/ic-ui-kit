import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./lit-html-CMAkC4Hj.js";var i=e({Adornment:()=>f,Badge:()=>p,Clickable:()=>m,ClickableHref:()=>h,CustomWidth:()=>w,Default:()=>o,Density:()=>b,Disabled:()=>S,Icon:()=>c,ImageLeft:()=>_,ImageRight:()=>v,InteractionButton:()=>l,Message:()=>s,Sizes:()=>y,SlottedContent:()=>C,Subheading:()=>u,SubheadingSlot:()=>d,Truncation:()=>x,WrappedByLink:()=>g,__namedExportsOrder:()=>T,default:()=>a}),a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E=t((()=>{n(),a={title:`Web Components/Card Horizontal`,component:`ic-card-horizontal`},o={render:()=>r`<ic-card-horizontal heading="Card heading"></ic-card-horizontal>`,name:`Default`},s={render:()=>r`<ic-card-horizontal
      heading="Card heading"
      message="Card message"
    ></ic-card-horizontal>`,name:`Message`},c={render:()=>r`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
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
  </ic-card-horizontal>`,name:`Icon`},l={render:()=>r`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
  >
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
  </ic-card-horizontal>`,name:`Interaction button`},u={render:()=>r`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    subheading="Card subheading"
    density="spacious"
  ></ic-card-horizontal>`,name:`Subheading`},d={render:()=>r`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    density="spacious"
  >
    <ic-typography variant="subtitle-small" slot="subheading"
      >Card subheading</ic-typography
    >
  </ic-card-horizontal>`,name:`Subheading - slotted`},f={render:()=>r`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    density="spacious"
  >
    <ic-status-tag
      slot="adornment"
      label="Neutral"
      size="small"
    ></ic-status-tag>
  </ic-card-horizontal>`,name:`Adornment`},p={render:()=>r`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
  >
    <ic-badge label="1" slot="badge"></ic-badge>
  </ic-card-horizontal>`,name:`Badge`},m={render:()=>r`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    clickable="true"
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
  </ic-card-horizontal>`,name:`Clickable`},h={render:()=>r`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    clickable="true"
    href="https://www.google.com"
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
  </ic-card-horizontal>`,name:`Clickable - href`},g={render:()=>r`<a href="/">
    <ic-card-horizontal heading="Card heading" message="Card message">
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
      </svg> </ic-card-horizontal
  ></a>`,name:`Wrapped by link`},_={render:()=>r`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
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
    <svg
      slot="image-left"
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
  </ic-card-horizontal>`,name:`With image - left`},v={render:()=>r`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
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
    <svg
      slot="image-right"
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
  </ic-card-horizontal>`,name:`With image - right`},y={render:()=>r`<div>
    <ic-card-horizontal
      heading="Card heading"
      message="This card is used for small bits of text."
      size="small"
    >
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
      <ic-badge label="1" slot="badge"></ic-badge>
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
      <svg
        slot="image-left"
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
    </ic-card-horizontal>
    <br />
    <ic-card-horizontal
      heading="Card heading"
      message="This card is used for small to medium bits of text. It's slightly bigger."
      size="medium"
    >
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
      <ic-badge label="1" slot="badge"></ic-badge>
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
      <svg
        slot="image-left"
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
    </ic-card-horizontal>
    <br />
    <ic-card-horizontal
      heading="Card heading"
      message="This card is used for medium to large bits of text. This will take up more space on the page."
      size="large"
    >
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
      <ic-badge label="1" slot="badge"></ic-badge>
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
      <svg
        slot="image-left"
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
    </ic-card-horizontal>
  </div>`,name:`Sizes`},b={render:()=>r`<div>
    <ic-card-horizontal
      heading="Card heading"
      subheading="Card subheading"
      message="This card has a spacious layout. There should be more padding around the image."
      density="spacious"
      size="small"
    >
      <ic-badge label="1" slot="badge"></ic-badge>
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
        slot="image-left"
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
    </ic-card-horizontal>
    <br />
    <ic-card-horizontal
      heading="Card heading"
      subheading="Card subheading"
      message="This card has a spacious layout. There should be more padding around the image."
      density="spacious"
    >
      <ic-badge label="1" slot="badge"></ic-badge>
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
        slot="image-left"
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
    </ic-card-horizontal>
    <br />
    <ic-card-horizontal
      heading="Card heading"
      subheading="Card subheading"
      message="This card has a spacious layout. There should be more padding around the image."
      density="spacious"
      size="large"
    >
      <ic-badge label="1" slot="badge"></ic-badge>
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
        slot="image-left"
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
    </ic-card-horizontal>
  </div>`,name:`Density - spacious`},x={render:()=>r`<div>
    <ic-card-horizontal
      heading="Really long card heading to show truncation"
      message="This card is used for small bits of text. More text has been added to show truncation."
      size="small"
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
      <svg
        slot="image-left"
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
    </ic-card-horizontal>
    <br />
    <ic-card-horizontal
      heading="Really long card heading to show truncation"
      message="This card is used for small to medium bits of text. It's slightly bigger. More text has been added to show truncation."
      size="medium"
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
      <svg
        slot="image-left"
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
    </ic-card-horizontal>
    <br />
    <ic-card-horizontal
      heading="Really long card heading to show truncation in the large size variant"
      message="This card is used for medium to large bits of text. This will take up more space on the page. More text has been added to show truncation. The large card can hold 3 lines of text before it gets cut off, displaying an ellipsis instead of all the text."
      size="large"
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
      <svg
        slot="image-left"
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
    </ic-card-horizontal>
  </div>`,name:`Truncation`},S={render:()=>r`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    subheading="Card subheading"
    clickable="true"
    disabled="true"
    density="spacious"
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
    <svg
      slot="image-left"
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
  </ic-card-horizontal>`,name:`Disabled`},C={render:()=>r`<ic-card-horizontal>
    <h4 slot="heading">Card heading</h4>
    <p slot="message">Card message</p>
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
  </ic-card-horizontal>`,name:`Slotted heading and message`},w={render:()=>r`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    style="--card-horizontal-width: 400px"
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
    <svg
      slot="image-left"
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
  </ic-card-horizontal>`,name:`Custom width`},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-card-horizontal heading="Card heading"></ic-card-horizontal>\`,
  name: "Default"
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-card-horizontal
      heading="Card heading"
      message="Card message"
    ></ic-card-horizontal>\`,
  name: "Message"
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
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
  </ic-card-horizontal>\`,
  name: "Icon"
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
  >
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
  </ic-card-horizontal>\`,
  name: "Interaction button"
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    subheading="Card subheading"
    density="spacious"
  ></ic-card-horizontal>\`,
  name: "Subheading"
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    density="spacious"
  >
    <ic-typography variant="subtitle-small" slot="subheading"
      >Card subheading</ic-typography
    >
  </ic-card-horizontal>\`,
  name: "Subheading - slotted"
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    density="spacious"
  >
    <ic-status-tag
      slot="adornment"
      label="Neutral"
      size="small"
    ></ic-status-tag>
  </ic-card-horizontal>\`,
  name: "Adornment"
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
  >
    <ic-badge label="1" slot="badge"></ic-badge>
  </ic-card-horizontal>\`,
  name: "Badge"
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    clickable="true"
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
  </ic-card-horizontal>\`,
  name: "Clickable"
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    clickable="true"
    href="https://www.google.com"
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
  </ic-card-horizontal>\`,
  name: "Clickable - href"
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`<a href="/">
    <ic-card-horizontal heading="Card heading" message="Card message">
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
      </svg> </ic-card-horizontal
  ></a>\`,
  name: "Wrapped by link"
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
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
    <svg
      slot="image-left"
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
  </ic-card-horizontal>\`,
  name: "With image - left"
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
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
    <svg
      slot="image-right"
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
  </ic-card-horizontal>\`,
  name: "With image - right"
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div>
    <ic-card-horizontal
      heading="Card heading"
      message="This card is used for small bits of text."
      size="small"
    >
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
      <ic-badge label="1" slot="badge"></ic-badge>
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
      <svg
        slot="image-left"
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
    </ic-card-horizontal>
    <br />
    <ic-card-horizontal
      heading="Card heading"
      message="This card is used for small to medium bits of text. It's slightly bigger."
      size="medium"
    >
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
      <ic-badge label="1" slot="badge"></ic-badge>
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
      <svg
        slot="image-left"
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
    </ic-card-horizontal>
    <br />
    <ic-card-horizontal
      heading="Card heading"
      message="This card is used for medium to large bits of text. This will take up more space on the page."
      size="large"
    >
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
      <ic-badge label="1" slot="badge"></ic-badge>
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
      <svg
        slot="image-left"
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
    </ic-card-horizontal>
  </div>\`,
  name: "Sizes"
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div>
    <ic-card-horizontal
      heading="Card heading"
      subheading="Card subheading"
      message="This card has a spacious layout. There should be more padding around the image."
      density="spacious"
      size="small"
    >
      <ic-badge label="1" slot="badge"></ic-badge>
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
        slot="image-left"
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
    </ic-card-horizontal>
    <br />
    <ic-card-horizontal
      heading="Card heading"
      subheading="Card subheading"
      message="This card has a spacious layout. There should be more padding around the image."
      density="spacious"
    >
      <ic-badge label="1" slot="badge"></ic-badge>
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
        slot="image-left"
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
    </ic-card-horizontal>
    <br />
    <ic-card-horizontal
      heading="Card heading"
      subheading="Card subheading"
      message="This card has a spacious layout. There should be more padding around the image."
      density="spacious"
      size="large"
    >
      <ic-badge label="1" slot="badge"></ic-badge>
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
        slot="image-left"
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
    </ic-card-horizontal>
  </div>\`,
  name: "Density - spacious"
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div>
    <ic-card-horizontal
      heading="Really long card heading to show truncation"
      message="This card is used for small bits of text. More text has been added to show truncation."
      size="small"
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
      <svg
        slot="image-left"
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
    </ic-card-horizontal>
    <br />
    <ic-card-horizontal
      heading="Really long card heading to show truncation"
      message="This card is used for small to medium bits of text. It's slightly bigger. More text has been added to show truncation."
      size="medium"
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
      <svg
        slot="image-left"
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
    </ic-card-horizontal>
    <br />
    <ic-card-horizontal
      heading="Really long card heading to show truncation in the large size variant"
      message="This card is used for medium to large bits of text. This will take up more space on the page. More text has been added to show truncation. The large card can hold 3 lines of text before it gets cut off, displaying an ellipsis instead of all the text."
      size="large"
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
      <svg
        slot="image-left"
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
    </ic-card-horizontal>
  </div>\`,
  name: "Truncation"
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    subheading="Card subheading"
    clickable="true"
    disabled="true"
    density="spacious"
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
    <svg
      slot="image-left"
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
  </ic-card-horizontal>\`,
  name: "Disabled"
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-card-horizontal>
    <h4 slot="heading">Card heading</h4>
    <p slot="message">Card message</p>
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
  </ic-card-horizontal>\`,
  name: "Slotted heading and message"
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-card-horizontal
    heading="Card heading"
    message="Card message"
    style="--card-horizontal-width: 400px"
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
    <svg
      slot="image-left"
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
  </ic-card-horizontal>\`,
  name: "Custom width"
}`,...w.parameters?.docs?.source}}},T=[`Default`,`Message`,`Icon`,`InteractionButton`,`Subheading`,`SubheadingSlot`,`Adornment`,`Badge`,`Clickable`,`ClickableHref`,`WrappedByLink`,`ImageLeft`,`ImageRight`,`Sizes`,`Density`,`Truncation`,`Disabled`,`SlottedContent`,`CustomWidth`]}));E();export{f as Adornment,p as Badge,m as Clickable,h as ClickableHref,w as CustomWidth,o as Default,b as Density,S as Disabled,c as Icon,_ as ImageLeft,v as ImageRight,l as InteractionButton,s as Message,y as Sizes,C as SlottedContent,u as Subheading,d as SubheadingSlot,x as Truncation,g as WrappedByLink,T as __namedExportsOrder,a as default,E as n,i as t};