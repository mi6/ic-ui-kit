import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./lit-html-CMAkC4Hj.js";import{n as i,t as a}from"./taggedTemplateLiteral-2dP4OITE.js";var o=e({Adornment:()=>g,Default:()=>u,EditableExample:()=>v,IconButton:()=>h,LabelWidth:()=>y,LongTextValues:()=>f,Playground:()=>S,SlottedHeadingAndLabel:()=>d,SlottedHeadingLabelValueNonTypography:()=>b,Small:()=>p,WithLink:()=>m,WithStatusTag:()=>_,__namedExportsOrder:()=>C,default:()=>l}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w=t((()=>{n(),i(),c={heading:`Details`,size:`medium`,label:`Name`,rowSize:`default`,value:`Michael Johnson`,endCompSlot:`end-component`,theme:`inherit`,rowTheme:`inherit`},l={title:`Web Components/Data list`,component:`ic-data-list`},u={render:()=>r`<ic-data-list heading="Personal details">
      <ic-data-row label="Name" value="Michael Johnson"></ic-data-row>
      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>
      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>
      <ic-data-row label="Email" value="mjohnson@coffee.gov"></ic-data-row>
      <ic-data-row label="Address">
        <ic-typography variant="body" slot="value">
          383 Coffee Drive
          <br />
          London
          <br />
          SW7 988
          <br />
          United Kingdom
        </ic-typography>
      </ic-data-row>
    </ic-data-list>`,name:`Default`},d={render:()=>r`<ic-data-list>
      <ic-typography variant="h3" slot="heading"
        >Personal details</ic-typography
      >
      <ic-data-row value="Michael Johnson">
        <ic-typography variant="subtitle-large" slot="label"
          >Name</ic-typography
        >
      </ic-data-row>
      <ic-data-row value="16 October 1995">
        <ic-typography variant="subtitle-large" slot="label"
          >Date of birth</ic-typography
        >
      </ic-data-row>
    </ic-data-list>`,name:`Slotted heading and label`},f={render:()=>r`<ic-data-list
      heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    >
      <ic-data-row
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        value="Michael Johnson"
      ></ic-data-row>
      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>
      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>
      <ic-data-row label="Email" value="mjohnson@coffee.gov"></ic-data-row>
      <ic-data-row
        label="Address"
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      ></ic-data-row>
      <ic-data-row label="Second address">
        <ic-typography variant="body" slot="value">
          383 Coffee Drive
          <br />
          London
          <br />
          SW7 988
          <br />
          United Kingdom
        </ic-typography>
      </ic-data-row>
    </ic-data-list>`,name:`Long text values`},p={render:()=>r`<ic-data-list heading="Personal details" size="small">
      <ic-data-row label="Name" value="Michael Johnson"></ic-data-row>
      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>
      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>
      <ic-data-row label="Email" value="mjohnson@coffee.gov"></ic-data-row>
      <ic-data-row label="Address">
        <ic-typography variant="body" slot="value">
          383 Coffee Drive
          <br />
          London
          <br />
          SW7 988
          <br />
          United Kingdom
        </ic-typography>
      </ic-data-row>
    </ic-data-list>`,name:`Small`},m={render:()=>r`<ic-data-list heading="Personal details">
      <ic-data-row label="Name" value="Michael Johnson">
        <ic-link href="#" slot="end-component"> Edit </ic-link>
      </ic-data-row>
      <ic-data-row label="Date of birth" value="16 October 1995">
        <ic-link href="#" slot="end-component"> Edit </ic-link>
      </ic-data-row>
      <ic-data-row label="Telephone" value="07449 7654873">
        <ic-link href="#" slot="end-component"> Edit </ic-link>
      </ic-data-row>
      <ic-data-row label="Email" value="mjohnson@coffee.gov">
        <ic-link href="#" slot="end-component"> Edit </ic-link>
      </ic-data-row>
      <ic-data-row label="Address">
        <ic-typography variant="body" slot="value">
          383 Coffee Drive
          <br />
          London
          <br />
          SW7 988
          <br />
          United Kingdom
        </ic-typography>
        <ic-link href="#" slot="end-component"> Edit </ic-link>
      </ic-data-row>
    </ic-data-list>`,name:`Link`},h={render:()=>r`<ic-data-list heading="Personal details">
      <ic-data-row label="Name" value="Michael Johnson">
        <ic-button
          variant="icon-tertiary"
          aria-label="Edit"
          slot="end-component"
          size="small"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"
            />
          </svg>
        </ic-button>
      </ic-data-row>
      <ic-data-row label="Date of birth" value="16 October 1995">
        <ic-button
          variant="icon-tertiary"
          aria-label="Edit"
          slot="end-component"
          size="small"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"
            />
          </svg>
        </ic-button>
      </ic-data-row>
      <ic-data-row label="Telephone" value="07449 7654873">
        <ic-button
          variant="icon-tertiary"
          aria-label="Edit"
          slot="end-component"
          size="small"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"
            />
          </svg>
        </ic-button>
      </ic-data-row>
      <ic-data-row label="Email" value="mjohnson@coffee.gov">
        <ic-button
          variant="icon-tertiary"
          aria-label="Edit"
          slot="end-component"
          size="small"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"
            />
          </svg>
        </ic-button>
      </ic-data-row>
      <ic-data-row label="Address">
        <ic-typography variant="body" slot="value">
          383 Coffee Drive
          <br />
          London
          <br />
          SW7 988
          <br />
          United Kingdom
        </ic-typography>
        <ic-button
          variant="icon-tertiary"
          aria-label="Edit"
          slot="end-component"
          size="small"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"
            />
          </svg>
        </ic-button>
      </ic-data-row>
    </ic-data-list>`,name:`Icon button`},g={render:()=>r`<ic-data-list heading="Personal details">
      <ic-data-row label="Name" value="Michael Johnson">
        <ic-status-tag
          status="success"
          label="confirmed"
          variant="filled"
          slot="end-component"
        >
        </ic-status-tag>
      </ic-data-row>
      <ic-data-row label="Date of birth" value="16 October 1995">
        <ic-status-tag
          status="warning"
          label="in review"
          variant="filled"
          slot="end-component"
        />
      </ic-data-row>
      <ic-data-row label="Telephone" value="07449 7654873">
        <ic-status-tag
          status="warning"
          label="in review"
          variant="filled"
          slot="end-component"
        />
      </ic-data-row>
      <ic-data-row label="Email" value="mjohnson@coffee.gov">
        <ic-status-tag
          status="success"
          label="confirmed"
          variant="filled"
          slot="end-component"
        />
      </ic-data-row>
      <ic-data-row label="Address">
        <ic-typography variant="body" slot="value">
          383 Coffee Drive
          <br />
          London
          <br />
          SW7 988
          <br />
          United Kingdom
        </ic-typography>
        <ic-status-tag
          label="not confirmed"
          variant="filled"
          slot="end-component"
        />
      </ic-data-row>
    </ic-data-list>`,name:`Adornment`},_={render:()=>r` <ic-data-list heading="Personal details">
      <ic-data-row label="Name"
        ><ic-status-tag
          status="success"
          label="approved"
          variant="filled"
          slot="value"
      /></ic-data-row>
      <ic-data-row label="Date of birth"
        ><ic-status-tag
          status="success"
          label="approved"
          variant="filled"
          slot="value"
      /></ic-data-row>
      <ic-data-row label="Telephone"
        ><ic-status-tag
          status="success"
          label="approved"
          variant="filled"
          slot="value"
      /></ic-data-row>
      <ic-data-row label="Address"
        ><ic-status-tag
          status="success"
          label="approved"
          variant="filled"
          slot="value"
      /></ic-data-row>
      <ic-data-row label="Email"
        ><ic-status-tag
          status="success"
          label="approved"
          variant="filled"
          slot="value"
      /></ic-data-row>
    </ic-data-list>`,name:`Status tag`},v={render:()=>r`<ic-data-list heading="Personal details">
        <ic-data-row label="Name">
          <ic-text-field
            slot="value"
            label="Name"
            value="Michael Johnson"
            readonly
            hide-label
            full-width
          />
        </ic-data-row>
        <ic-data-row label="Date of birth">
          <ic-text-field
            slot="value"
            label="Date of birth"
            value="16 October 1995"
            readonly
            hide-label
            full-width
          />
        </ic-data-row>
        <ic-data-row label="Telephone">
          <ic-text-field
            slot="value"
            label="Telephone"
            value="07449 7654873"
            readonly
            hide-label
            full-width
          />
        </ic-data-row>
        <ic-data-row label="Email">
          <ic-text-field
            slot="value"
            label="Email"
            value="mjohnson@coffee.gov"
            readonly
            hide-label
            full-width
          />
        </ic-data-row>
        <ic-data-row label="Address">
          <ic-text-field
            slot="value"
            label="Address"
            value="383 Coffee Drive, London, SW7 988, United Kingdom"
            readonly
            hide-label
            full-width
          />
        </ic-data-row>
      </ic-data-list>
      <ic-button
        onclick="
        var textFields = document.querySelectorAll('ic-text-field');
        for (var i=0; i < textFields.length; i++) {
          textFields[i].setAttribute('readonly', '');
        }"
        style="margin-right: var(--ic-space-md);margin-top: var(--ic-space-lg);"
      >
        Confirm
      </ic-button>
      <ic-button
        onclick="
        var textFields = document.querySelectorAll('ic-text-field');
        for (var i=0; i < textFields.length; i++) {
          textFields[i].removeAttribute('readonly');
        }"
        variant="secondary"
        style="margin-top: var(--ic-space-lg);"
      >
        Edit
      </ic-button>`,name:`Editable example`},y={render:()=>r(s||=a([`<ic-data-list heading="Personal details">
        <ic-data-row label="Name" value="Michael Johnson"></ic-data-row>
        <ic-data-row
          label="Date of birth with extra words to make long heading"
          value="16 October 1995"
        ></ic-data-row>
        <ic-data-row
          label="Telephone with additional words"
          value="07449 7654873"
        ></ic-data-row>
        <ic-data-row label="Email" value="mjohnson@coffee.gov"></ic-data-row>
        <ic-data-row label="Address">
          <ic-typography variant="body" slot="value">
            383 Coffee Drive
            <br />
            London
            <br />
            SW7 988
            <br />
            United Kingdom
          </ic-typography>
        </ic-data-row>
      </ic-data-list>
      <script>
        const dataList = document.querySelector("ic-data-list");
        dataList.style.setProperty("--data-row-label-width", "30rem");
      <\/script>`])),name:`With label width`},b={render:()=>r`<ic-data-list>
      <pre slot="heading">Personal details</pre>
      <ic-data-row>
        <pre slot="label">Name</pre>
        <pre slot="value">Michael Johnson</pre>
      </ic-data-row>
      <ic-data-row>
        <pre slot="label">Date of birth</pre>
        <pre slot="value">16 October 1995</pre>
      </ic-data-row>
    </ic-data-list>`,name:`Slotted heading, label and value - non ic-typography`},x=`inline-radio`,S={render:e=>r`<ic-data-list
      heading=${e.heading}
      size=${e.size}
      theme=${e.theme}
    >
      <ic-data-row
        label=${e.label}
        value=${e.value}
        size=${e.rowSize}
        theme=${e.rowTheme}
      >
        <ic-button
          variant="icon-tertiary"
          aria-label="Edit"
          slot=${e.endCompSlot}
          size="small"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"
            />
          </svg>
        </ic-button>
      </ic-data-row>
      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>
      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>
    </ic-data-list>`,args:c,argTypes:{size:{options:[`medium`,`small`],control:{type:x}},rowSize:{options:[`medium`,`small`],control:{type:x}},endCompSlot:{options:[`end-component`,``],control:{type:`select`}},theme:{options:[`inherit`,`light`,`dark`],control:{type:x}},rowTheme:{options:[`inherit`,`light`,`dark`],control:{type:x}}},name:`Playground`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-data-list heading="Personal details">
      <ic-data-row label="Name" value="Michael Johnson"></ic-data-row>
      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>
      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>
      <ic-data-row label="Email" value="mjohnson@coffee.gov"></ic-data-row>
      <ic-data-row label="Address">
        <ic-typography variant="body" slot="value">
          383 Coffee Drive
          <br />
          London
          <br />
          SW7 988
          <br />
          United Kingdom
        </ic-typography>
      </ic-data-row>
    </ic-data-list>\`,
  name: "Default"
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-data-list>
      <ic-typography variant="h3" slot="heading"
        >Personal details</ic-typography
      >
      <ic-data-row value="Michael Johnson">
        <ic-typography variant="subtitle-large" slot="label"
          >Name</ic-typography
        >
      </ic-data-row>
      <ic-data-row value="16 October 1995">
        <ic-typography variant="subtitle-large" slot="label"
          >Date of birth</ic-typography
        >
      </ic-data-row>
    </ic-data-list>\`,
  name: "Slotted heading and label"
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-data-list
      heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    >
      <ic-data-row
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        value="Michael Johnson"
      ></ic-data-row>
      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>
      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>
      <ic-data-row label="Email" value="mjohnson@coffee.gov"></ic-data-row>
      <ic-data-row
        label="Address"
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      ></ic-data-row>
      <ic-data-row label="Second address">
        <ic-typography variant="body" slot="value">
          383 Coffee Drive
          <br />
          London
          <br />
          SW7 988
          <br />
          United Kingdom
        </ic-typography>
      </ic-data-row>
    </ic-data-list>\`,
  name: "Long text values"
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-data-list heading="Personal details" size="small">
      <ic-data-row label="Name" value="Michael Johnson"></ic-data-row>
      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>
      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>
      <ic-data-row label="Email" value="mjohnson@coffee.gov"></ic-data-row>
      <ic-data-row label="Address">
        <ic-typography variant="body" slot="value">
          383 Coffee Drive
          <br />
          London
          <br />
          SW7 988
          <br />
          United Kingdom
        </ic-typography>
      </ic-data-row>
    </ic-data-list>\`,
  name: "Small"
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-data-list heading="Personal details">
      <ic-data-row label="Name" value="Michael Johnson">
        <ic-link href="#" slot="end-component"> Edit </ic-link>
      </ic-data-row>
      <ic-data-row label="Date of birth" value="16 October 1995">
        <ic-link href="#" slot="end-component"> Edit </ic-link>
      </ic-data-row>
      <ic-data-row label="Telephone" value="07449 7654873">
        <ic-link href="#" slot="end-component"> Edit </ic-link>
      </ic-data-row>
      <ic-data-row label="Email" value="mjohnson@coffee.gov">
        <ic-link href="#" slot="end-component"> Edit </ic-link>
      </ic-data-row>
      <ic-data-row label="Address">
        <ic-typography variant="body" slot="value">
          383 Coffee Drive
          <br />
          London
          <br />
          SW7 988
          <br />
          United Kingdom
        </ic-typography>
        <ic-link href="#" slot="end-component"> Edit </ic-link>
      </ic-data-row>
    </ic-data-list>\`,
  name: "Link"
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-data-list heading="Personal details">
      <ic-data-row label="Name" value="Michael Johnson">
        <ic-button
          variant="icon-tertiary"
          aria-label="Edit"
          slot="end-component"
          size="small"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"
            />
          </svg>
        </ic-button>
      </ic-data-row>
      <ic-data-row label="Date of birth" value="16 October 1995">
        <ic-button
          variant="icon-tertiary"
          aria-label="Edit"
          slot="end-component"
          size="small"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"
            />
          </svg>
        </ic-button>
      </ic-data-row>
      <ic-data-row label="Telephone" value="07449 7654873">
        <ic-button
          variant="icon-tertiary"
          aria-label="Edit"
          slot="end-component"
          size="small"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"
            />
          </svg>
        </ic-button>
      </ic-data-row>
      <ic-data-row label="Email" value="mjohnson@coffee.gov">
        <ic-button
          variant="icon-tertiary"
          aria-label="Edit"
          slot="end-component"
          size="small"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"
            />
          </svg>
        </ic-button>
      </ic-data-row>
      <ic-data-row label="Address">
        <ic-typography variant="body" slot="value">
          383 Coffee Drive
          <br />
          London
          <br />
          SW7 988
          <br />
          United Kingdom
        </ic-typography>
        <ic-button
          variant="icon-tertiary"
          aria-label="Edit"
          slot="end-component"
          size="small"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"
            />
          </svg>
        </ic-button>
      </ic-data-row>
    </ic-data-list>\`,
  name: "Icon button"
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-data-list heading="Personal details">
      <ic-data-row label="Name" value="Michael Johnson">
        <ic-status-tag
          status="success"
          label="confirmed"
          variant="filled"
          slot="end-component"
        >
        </ic-status-tag>
      </ic-data-row>
      <ic-data-row label="Date of birth" value="16 October 1995">
        <ic-status-tag
          status="warning"
          label="in review"
          variant="filled"
          slot="end-component"
        />
      </ic-data-row>
      <ic-data-row label="Telephone" value="07449 7654873">
        <ic-status-tag
          status="warning"
          label="in review"
          variant="filled"
          slot="end-component"
        />
      </ic-data-row>
      <ic-data-row label="Email" value="mjohnson@coffee.gov">
        <ic-status-tag
          status="success"
          label="confirmed"
          variant="filled"
          slot="end-component"
        />
      </ic-data-row>
      <ic-data-row label="Address">
        <ic-typography variant="body" slot="value">
          383 Coffee Drive
          <br />
          London
          <br />
          SW7 988
          <br />
          United Kingdom
        </ic-typography>
        <ic-status-tag
          label="not confirmed"
          variant="filled"
          slot="end-component"
        />
      </ic-data-row>
    </ic-data-list>\`,
  name: "Adornment"
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\` <ic-data-list heading="Personal details">
      <ic-data-row label="Name"
        ><ic-status-tag
          status="success"
          label="approved"
          variant="filled"
          slot="value"
      /></ic-data-row>
      <ic-data-row label="Date of birth"
        ><ic-status-tag
          status="success"
          label="approved"
          variant="filled"
          slot="value"
      /></ic-data-row>
      <ic-data-row label="Telephone"
        ><ic-status-tag
          status="success"
          label="approved"
          variant="filled"
          slot="value"
      /></ic-data-row>
      <ic-data-row label="Address"
        ><ic-status-tag
          status="success"
          label="approved"
          variant="filled"
          slot="value"
      /></ic-data-row>
      <ic-data-row label="Email"
        ><ic-status-tag
          status="success"
          label="approved"
          variant="filled"
          slot="value"
      /></ic-data-row>
    </ic-data-list>\`,
  name: "Status tag"
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-data-list heading="Personal details">
        <ic-data-row label="Name">
          <ic-text-field
            slot="value"
            label="Name"
            value="Michael Johnson"
            readonly
            hide-label
            full-width
          />
        </ic-data-row>
        <ic-data-row label="Date of birth">
          <ic-text-field
            slot="value"
            label="Date of birth"
            value="16 October 1995"
            readonly
            hide-label
            full-width
          />
        </ic-data-row>
        <ic-data-row label="Telephone">
          <ic-text-field
            slot="value"
            label="Telephone"
            value="07449 7654873"
            readonly
            hide-label
            full-width
          />
        </ic-data-row>
        <ic-data-row label="Email">
          <ic-text-field
            slot="value"
            label="Email"
            value="mjohnson@coffee.gov"
            readonly
            hide-label
            full-width
          />
        </ic-data-row>
        <ic-data-row label="Address">
          <ic-text-field
            slot="value"
            label="Address"
            value="383 Coffee Drive, London, SW7 988, United Kingdom"
            readonly
            hide-label
            full-width
          />
        </ic-data-row>
      </ic-data-list>
      <ic-button
        onclick="
        var textFields = document.querySelectorAll('ic-text-field');
        for (var i=0; i < textFields.length; i++) {
          textFields[i].setAttribute('readonly', '');
        }"
        style="margin-right: var(--ic-space-md);margin-top: var(--ic-space-lg);"
      >
        Confirm
      </ic-button>
      <ic-button
        onclick="
        var textFields = document.querySelectorAll('ic-text-field');
        for (var i=0; i < textFields.length; i++) {
          textFields[i].removeAttribute('readonly');
        }"
        variant="secondary"
        style="margin-top: var(--ic-space-lg);"
      >
        Edit
      </ic-button>\`,
  name: "Editable example"
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-data-list heading="Personal details">
        <ic-data-row label="Name" value="Michael Johnson"></ic-data-row>
        <ic-data-row
          label="Date of birth with extra words to make long heading"
          value="16 October 1995"
        ></ic-data-row>
        <ic-data-row
          label="Telephone with additional words"
          value="07449 7654873"
        ></ic-data-row>
        <ic-data-row label="Email" value="mjohnson@coffee.gov"></ic-data-row>
        <ic-data-row label="Address">
          <ic-typography variant="body" slot="value">
            383 Coffee Drive
            <br />
            London
            <br />
            SW7 988
            <br />
            United Kingdom
          </ic-typography>
        </ic-data-row>
      </ic-data-list>
      <script>
        const dataList = document.querySelector("ic-data-list");
        dataList.style.setProperty("--data-row-label-width", "30rem");
      <\/script>\`,
  name: "With label width"
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-data-list>
      <pre slot="heading">Personal details</pre>
      <ic-data-row>
        <pre slot="label">Name</pre>
        <pre slot="value">Michael Johnson</pre>
      </ic-data-row>
      <ic-data-row>
        <pre slot="label">Date of birth</pre>
        <pre slot="value">16 October 1995</pre>
      </ic-data-row>
    </ic-data-list>\`,
  name: "Slotted heading, label and value - non ic-typography"
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ic-data-list
      heading=\${args.heading}
      size=\${args.size}
      theme=\${args.theme}
    >
      <ic-data-row
        label=\${args.label}
        value=\${args.value}
        size=\${args.rowSize}
        theme=\${args.rowTheme}
      >
        <ic-button
          variant="icon-tertiary"
          aria-label="Edit"
          slot=\${args.endCompSlot}
          size="small"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"
            />
          </svg>
        </ic-button>
      </ic-data-row>
      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>
      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>
    </ic-data-list>\`,
  args: defaultArgs,
  argTypes: {
    size: {
      options: ["medium", "small"],
      control: {
        type: inlineRadioSelector
      }
    },
    rowSize: {
      options: ["medium", "small"],
      control: {
        type: inlineRadioSelector
      }
    },
    endCompSlot: {
      options: ["end-component", ""],
      control: {
        type: "select"
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: inlineRadioSelector
      }
    },
    rowTheme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: inlineRadioSelector
      }
    }
  },
  name: "Playground"
}`,...S.parameters?.docs?.source}}},C=[`Default`,`SlottedHeadingAndLabel`,`LongTextValues`,`Small`,`WithLink`,`IconButton`,`Adornment`,`WithStatusTag`,`EditableExample`,`LabelWidth`,`SlottedHeadingLabelValueNonTypography`,`Playground`]}));w();export{g as Adornment,u as Default,v as EditableExample,h as IconButton,y as LabelWidth,f as LongTextValues,S as Playground,d as SlottedHeadingAndLabel,b as SlottedHeadingLabelValueNonTypography,p as Small,m as WithLink,_ as WithStatusTag,C as __namedExportsOrder,l as default,w as n,o as t};