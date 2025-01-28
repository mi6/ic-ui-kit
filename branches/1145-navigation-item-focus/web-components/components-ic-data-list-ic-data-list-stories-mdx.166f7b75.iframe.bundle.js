"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[2015],{"./src/components/ic-data-list/ic-data-list.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,adornment:()=>adornment,default:()=>ic_data_list_stories,defaultArgs:()=>defaultArgs,defaultStory:()=>defaultStory,editableExample:()=>editableExample,iconButton:()=>iconButton,link:()=>ic_data_list_stories_link,longTextValues:()=>longTextValues,playground:()=>playground,slottedHeadingAndLabel:()=>slottedHeadingAndLabel,small:()=>small,statusTag:()=>statusTag});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-data-list\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property  | Attribute | Description                                                                                                                             | Type                             | Default     |\n| --------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |\n| `heading` | `heading` | The title for the data list.                                                                                                            | `string`                         | `undefined` |\n| `size`    | `size`    | The size of the data list component.                                                                                                    | `"medium" \\| "small"`            | `"medium"`  |\n| `theme`   | `theme`   | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \\| "inherit" \\| "light"` | `"inherit"` |\n\n\n## Slots\n\n| Slot        | Description                                         |\n| ----------- | --------------------------------------------------- |\n| `"heading"` | Content will be placed at the top of the data list. |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-data-list --\x3e ic-typography\n  style ic-data-list fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';__webpack_require__("./src/components/ic-link/readme.md"),__webpack_require__("./src/components/ic-status-tag/readme.md"),__webpack_require__("./src/components/ic-button/readme.md"),__webpack_require__("./src/components/ic-text-field/readme.md"),__webpack_require__("./src/components/ic-typography/readme.md");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={heading:"Details",size:"medium",label:"Name",rowSize:"default",value:"Michael Johnson",endCompSlot:"end-component",theme:"inherit",rowTheme:"inherit"};function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Web Components/Data list",component:"ic-data-list"}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Default",children:lit_html.qy`<ic-data-list heading="Personal details">
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
    </ic-data-list>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"slotted-heading-and-label",children:"Slotted heading and label"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Slotted heading and label",children:lit_html.qy`<ic-data-list>
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
    </ic-data-list>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"long-text-values",children:"Long text values"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Long text values",children:lit_html.qy`<ic-data-list
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
    </ic-data-list>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"small",children:"Small"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Small",children:lit_html.qy`<ic-data-list heading="Personal details" size="small">
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
    </ic-data-list>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"link",children:"Link"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Link",children:lit_html.qy`<ic-data-list heading="Personal details">
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
    </ic-data-list>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon-button",children:"Icon button"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Icon button",children:lit_html.qy`<ic-data-list heading="Personal details">
      <ic-data-row label="Name" value="Michael Johnson">
        <ic-button variant="icon" aria-label="Edit" slot="end-component">
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
        <ic-button variant="icon" aria-label="Edit" slot="end-component">
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
        <ic-button variant="icon" aria-label="Edit" slot="end-component">
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
        <ic-button variant="icon" aria-label="Edit" slot="end-component">
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
        <ic-button variant="icon" aria-label="Edit" slot="end-component">
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
    </ic-data-list>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"adornment",children:"Adornment"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Adornment",children:lit_html.qy`<ic-data-list heading="Personal details">
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
    </ic-data-list>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"status-tag",children:"Status tag"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Status tag",children:lit_html.qy` <ic-data-list heading="Personal details">
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
    </ic-data-list>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"editable-example",children:"Editable example"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Editable example",children:lit_html.qy`<ic-data-list heading="Personal details">
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
      </ic-button>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,argTypes:{size:{options:["medium","small"],control:{type:"inline-radio"}},rowSize:{options:["medium","small"],control:{type:"inline-radio"}},endCompSlot:{options:["end-component",""],control:{type:"select"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}},rowTheme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground",children:args=>lit_html.qy`<ic-data-list
        heading=${args.heading}
        size=${args.size}
        theme=${args.theme}
      >
        <ic-data-row
          label=${args.label}
          value=${args.value}
          size=${args.rowSize}
          theme=${args.rowTheme}
        >
          <ic-button variant="icon" aria-label="Edit" slot=${args.endCompSlot}>
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
        <ic-data-row
          label="Date of birth"
          value="16 October 1995"
        ></ic-data-row>
        <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>
      </ic-data-list>`})})]})}const defaultStory=()=>lit_html.qy`<ic-data-list heading="Personal details">
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
    </ic-data-list>`;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'html`<ic-data-list heading="Personal details">\n      <ic-data-row label="Name" value="Michael Johnson"></ic-data-row>\n      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>\n      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>\n      <ic-data-row label="Email" value="mjohnson@coffee.gov"></ic-data-row>\n      <ic-data-row label="Address">\n        <ic-typography variant="body" slot="value">\n          383 Coffee Drive\n          <br />\n          London\n          <br />\n          SW7 988\n          <br />\n          United Kingdom\n        </ic-typography>\n      </ic-data-row>\n    </ic-data-list>`'}};const slottedHeadingAndLabel=()=>lit_html.qy`<ic-data-list>
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
    </ic-data-list>`;slottedHeadingAndLabel.storyName="Slotted heading and label",slottedHeadingAndLabel.parameters={storySource:{source:'html`<ic-data-list>\n      <ic-typography variant="h3" slot="heading"\n        >Personal details</ic-typography\n      >\n      <ic-data-row value="Michael Johnson">\n        <ic-typography variant="subtitle-large" slot="label"\n          >Name</ic-typography\n        >\n      </ic-data-row>\n      <ic-data-row value="16 October 1995">\n        <ic-typography variant="subtitle-large" slot="label"\n          >Date of birth</ic-typography\n        >\n      </ic-data-row>\n    </ic-data-list>`'}};const longTextValues=()=>lit_html.qy`<ic-data-list
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
    </ic-data-list>`;longTextValues.storyName="Long text values",longTextValues.parameters={storySource:{source:'html`<ic-data-list\n      heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"\n    >\n      <ic-data-row\n        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"\n        value="Michael Johnson"\n      ></ic-data-row>\n      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>\n      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>\n      <ic-data-row label="Email" value="mjohnson@coffee.gov"></ic-data-row>\n      <ic-data-row\n        label="Address"\n        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"\n      ></ic-data-row>\n      <ic-data-row label="Second address">\n        <ic-typography variant="body" slot="value">\n          383 Coffee Drive\n          <br />\n          London\n          <br />\n          SW7 988\n          <br />\n          United Kingdom\n        </ic-typography>\n      </ic-data-row>\n    </ic-data-list>`'}};const small=()=>lit_html.qy`<ic-data-list heading="Personal details" size="small">
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
    </ic-data-list>`;small.storyName="Small",small.parameters={storySource:{source:'html`<ic-data-list heading="Personal details" size="small">\n      <ic-data-row label="Name" value="Michael Johnson"></ic-data-row>\n      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>\n      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>\n      <ic-data-row label="Email" value="mjohnson@coffee.gov"></ic-data-row>\n      <ic-data-row label="Address">\n        <ic-typography variant="body" slot="value">\n          383 Coffee Drive\n          <br />\n          London\n          <br />\n          SW7 988\n          <br />\n          United Kingdom\n        </ic-typography>\n      </ic-data-row>\n    </ic-data-list>`'}};const ic_data_list_stories_link=()=>lit_html.qy`<ic-data-list heading="Personal details">
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
    </ic-data-list>`;ic_data_list_stories_link.storyName="Link",ic_data_list_stories_link.parameters={storySource:{source:'html`<ic-data-list heading="Personal details">\n      <ic-data-row label="Name" value="Michael Johnson">\n        <ic-link href="#" slot="end-component"> Edit </ic-link>\n      </ic-data-row>\n      <ic-data-row label="Date of birth" value="16 October 1995">\n        <ic-link href="#" slot="end-component"> Edit </ic-link>\n      </ic-data-row>\n      <ic-data-row label="Telephone" value="07449 7654873">\n        <ic-link href="#" slot="end-component"> Edit </ic-link>\n      </ic-data-row>\n      <ic-data-row label="Email" value="mjohnson@coffee.gov">\n        <ic-link href="#" slot="end-component"> Edit </ic-link>\n      </ic-data-row>\n      <ic-data-row label="Address">\n        <ic-typography variant="body" slot="value">\n          383 Coffee Drive\n          <br />\n          London\n          <br />\n          SW7 988\n          <br />\n          United Kingdom\n        </ic-typography>\n        <ic-link href="#" slot="end-component"> Edit </ic-link>\n      </ic-data-row>\n    </ic-data-list>`'}};const iconButton=()=>lit_html.qy`<ic-data-list heading="Personal details">
      <ic-data-row label="Name" value="Michael Johnson">
        <ic-button variant="icon" aria-label="Edit" slot="end-component">
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
        <ic-button variant="icon" aria-label="Edit" slot="end-component">
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
        <ic-button variant="icon" aria-label="Edit" slot="end-component">
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
        <ic-button variant="icon" aria-label="Edit" slot="end-component">
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
        <ic-button variant="icon" aria-label="Edit" slot="end-component">
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
    </ic-data-list>`;iconButton.storyName="Icon button",iconButton.parameters={storySource:{source:'html`<ic-data-list heading="Personal details">\n      <ic-data-row label="Name" value="Michael Johnson">\n        <ic-button variant="icon" aria-label="Edit" slot="end-component">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"\n            />\n          </svg>\n        </ic-button>\n      </ic-data-row>\n      <ic-data-row label="Date of birth" value="16 October 1995">\n        <ic-button variant="icon" aria-label="Edit" slot="end-component">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"\n            />\n          </svg>\n        </ic-button>\n      </ic-data-row>\n      <ic-data-row label="Telephone" value="07449 7654873">\n        <ic-button variant="icon" aria-label="Edit" slot="end-component">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"\n            />\n          </svg>\n        </ic-button>\n      </ic-data-row>\n      <ic-data-row label="Email" value="mjohnson@coffee.gov">\n        <ic-button variant="icon" aria-label="Edit" slot="end-component">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"\n            />\n          </svg>\n        </ic-button>\n      </ic-data-row>\n      <ic-data-row label="Address">\n        <ic-typography variant="body" slot="value">\n          383 Coffee Drive\n          <br />\n          London\n          <br />\n          SW7 988\n          <br />\n          United Kingdom\n        </ic-typography>\n        <ic-button variant="icon" aria-label="Edit" slot="end-component">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"\n            />\n          </svg>\n        </ic-button>\n      </ic-data-row>\n    </ic-data-list>`'}};const adornment=()=>lit_html.qy`<ic-data-list heading="Personal details">
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
    </ic-data-list>`;adornment.storyName="Adornment",adornment.parameters={storySource:{source:'html`<ic-data-list heading="Personal details">\n      <ic-data-row label="Name" value="Michael Johnson">\n        <ic-status-tag\n          status="success"\n          label="confirmed"\n          variant="filled"\n          slot="end-component"\n        >\n        </ic-status-tag>\n      </ic-data-row>\n      <ic-data-row label="Date of birth" value="16 October 1995">\n        <ic-status-tag\n          status="warning"\n          label="in review"\n          variant="filled"\n          slot="end-component"\n        />\n      </ic-data-row>\n      <ic-data-row label="Telephone" value="07449 7654873">\n        <ic-status-tag\n          status="warning"\n          label="in review"\n          variant="filled"\n          slot="end-component"\n        />\n      </ic-data-row>\n      <ic-data-row label="Email" value="mjohnson@coffee.gov">\n        <ic-status-tag\n          status="success"\n          label="confirmed"\n          variant="filled"\n          slot="end-component"\n        />\n      </ic-data-row>\n      <ic-data-row label="Address">\n        <ic-typography variant="body" slot="value">\n          383 Coffee Drive\n          <br />\n          London\n          <br />\n          SW7 988\n          <br />\n          United Kingdom\n        </ic-typography>\n        <ic-status-tag\n          label="not confirmed"\n          variant="filled"\n          slot="end-component"\n        />\n      </ic-data-row>\n    </ic-data-list>`'}};const statusTag=()=>lit_html.qy` <ic-data-list heading="Personal details">
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
    </ic-data-list>`;statusTag.storyName="Status tag",statusTag.parameters={storySource:{source:'html` <ic-data-list heading="Personal details">\n      <ic-data-row label="Name"\n        ><ic-status-tag\n          status="success"\n          label="approved"\n          variant="filled"\n          slot="value"\n      /></ic-data-row>\n      <ic-data-row label="Date of birth"\n        ><ic-status-tag\n          status="success"\n          label="approved"\n          variant="filled"\n          slot="value"\n      /></ic-data-row>\n      <ic-data-row label="Telephone"\n        ><ic-status-tag\n          status="success"\n          label="approved"\n          variant="filled"\n          slot="value"\n      /></ic-data-row>\n      <ic-data-row label="Address"\n        ><ic-status-tag\n          status="success"\n          label="approved"\n          variant="filled"\n          slot="value"\n      /></ic-data-row>\n      <ic-data-row label="Email"\n        ><ic-status-tag\n          status="success"\n          label="approved"\n          variant="filled"\n          slot="value"\n      /></ic-data-row>\n    </ic-data-list>`'}};const editableExample=()=>lit_html.qy`<ic-data-list heading="Personal details">
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
      </ic-button>`;editableExample.storyName="Editable example",editableExample.parameters={storySource:{source:'html`<ic-data-list heading="Personal details">\n        <ic-data-row label="Name">\n          <ic-text-field\n            slot="value"\n            label="Name"\n            value="Michael Johnson"\n            readonly\n            hide-label\n            full-width\n          />\n        </ic-data-row>\n        <ic-data-row label="Date of birth">\n          <ic-text-field\n            slot="value"\n            label="Date of birth"\n            value="16 October 1995"\n            readonly\n            hide-label\n            full-width\n          />\n        </ic-data-row>\n        <ic-data-row label="Telephone">\n          <ic-text-field\n            slot="value"\n            label="Telephone"\n            value="07449 7654873"\n            readonly\n            hide-label\n            full-width\n          />\n        </ic-data-row>\n        <ic-data-row label="Email">\n          <ic-text-field\n            slot="value"\n            label="Email"\n            value="mjohnson@coffee.gov"\n            readonly\n            hide-label\n            full-width\n          />\n        </ic-data-row>\n        <ic-data-row label="Address">\n          <ic-text-field\n            slot="value"\n            label="Address"\n            value="383 Coffee Drive, London, SW7 988, United Kingdom"\n            readonly\n            hide-label\n            full-width\n          />\n        </ic-data-row>\n      </ic-data-list>\n      <ic-button\n        onclick="\n        var textFields = document.querySelectorAll(\'ic-text-field\');\n        for (var i=0; i < textFields.length; i++) {\n          textFields[i].setAttribute(\'readonly\', \'\');\n        }"\n        style="margin-right: var(--ic-space-md);margin-top: var(--ic-space-lg);"\n      >\n        Confirm\n      </ic-button>\n      <ic-button\n        onclick="\n        var textFields = document.querySelectorAll(\'ic-text-field\');\n        for (var i=0; i < textFields.length; i++) {\n          textFields[i].removeAttribute(\'readonly\');\n        }"\n        variant="secondary"\n        style="margin-top: var(--ic-space-lg);"\n      >\n        Edit\n      </ic-button>`'}};const playground=args=>lit_html.qy`<ic-data-list
        heading=${args.heading}
        size=${args.size}
        theme=${args.theme}
      >
        <ic-data-row
          label=${args.label}
          value=${args.value}
          size=${args.rowSize}
          theme=${args.rowTheme}
        >
          <ic-button variant="icon" aria-label="Edit" slot=${args.endCompSlot}>
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
        <ic-data-row
          label="Date of birth"
          value="16 October 1995"
        ></ic-data-row>
        <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>
      </ic-data-list>`;playground.storyName="Playground",playground.argTypes={size:{options:["medium","small"],control:{type:"inline-radio"}},rowSize:{options:["medium","small"],control:{type:"inline-radio"}},endCompSlot:{options:["end-component",""],control:{type:"select"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}},rowTheme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => html`<ic-data-list\n        heading=${args.heading}\n        size=${args.size}\n        theme=${args.theme}\n      >\n        <ic-data-row\n          label=${args.label}\n          value=${args.value}\n          size=${args.rowSize}\n          theme=${args.rowTheme}\n        >\n          <ic-button variant="icon" aria-label="Edit" slot=${args.endCompSlot}>\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"\n              />\n            </svg>\n          </ic-button>\n        </ic-data-row>\n        <ic-data-row\n          label="Date of birth"\n          value="16 October 1995"\n        ></ic-data-row>\n        <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>\n      </ic-data-list>`'}};const componentMeta={title:"Web Components/Data list",tags:["stories-mdx"],includeStories:["defaultStory","slottedHeadingAndLabel","longTextValues","small","link","iconButton","adornment","statusTag","editableExample","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_data_list_stories=componentMeta,__namedExportsOrder=["defaultArgs","defaultStory","slottedHeadingAndLabel","longTextValues","small","link","iconButton","adornment","statusTag","editableExample","playground"]},"./src/components/ic-link/readme.md":module=>{module.exports='# ic-link\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property         | Attribute        | Description                                                                                                                             | Type                                                                                                                                                                                     | Default     |\n| ---------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `download`       | `download`       | If `true`, the user can save the linked URL instead of navigating to it.                                                                | `boolean \\| string`                                                                                                                                                                      | `false`     |\n| `href`           | `href`           | The URL that the link points to.                                                                                                        | `string`                                                                                                                                                                                 | `null`      |\n| `hreflang`       | `hreflang`       | The human language of the linked URL.                                                                                                   | `string`                                                                                                                                                                                 | `undefined` |\n| `monochrome`     | `monochrome`     | If `true`, the link will display as black in the light theme, and white in the dark theme.                                              | `boolean`                                                                                                                                                                                | `false`     |\n| `referrerpolicy` | `referrerpolicy` | How much of the referrer to send when following the link.                                                                               | `"" \\| "no-referrer" \\| "no-referrer-when-downgrade" \\| "origin" \\| "origin-when-cross-origin" \\| "same-origin" \\| "strict-origin" \\| "strict-origin-when-cross-origin" \\| "unsafe-url"` | `undefined` |\n| `rel`            | `rel`            | The relationship of the linked URL as space-separated link types.                                                                       | `string`                                                                                                                                                                                 | `undefined` |\n| `target`         | `target`         | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).                                     | `string`                                                                                                                                                                                 | `undefined` |\n| `theme`          | `theme`          | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \\| "inherit" \\| "light"`                                                                                                                                                         | `"inherit"` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the link.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot            | Description                                         |\n| --------------- | --------------------------------------------------- |\n| `"router-item"` | Handle routing by nesting your routes in this slot. |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-breadcrumb](../ic-breadcrumb)\n - [ic-footer-link](../ic-footer-link)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-breadcrumb --\x3e ic-link\n  ic-footer-link --\x3e ic-link\n  style ic-link fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'},"./src/components/ic-status-tag/readme.md":module=>{module.exports='# ic-status-tag\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute   | Description                                                                                                                                                                  | Type                                              | Default     |\n| -------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------- |\n| `announced`          | `announced` | If `true`, role=\'status\' is added to the component and it will act as an \'aria-live\' region. Screen readers will announce changes to the `label`, but not the initial value. | `boolean`                                         | `false`     |\n| `label` _(required)_ | `label`     | The content rendered within the status tag.                                                                                                                                  | `string`                                          | `undefined` |\n| `size`               | `size`      | The size of the status tag component.                                                                                                                                        | `"large" \\| "medium" \\| "small"`                  | `"medium"`  |\n| `status`             | `status`    | The colour of the status tag.                                                                                                                                                | `"danger" \\| "neutral" \\| "success" \\| "warning"` | `"neutral"` |\n| `theme`              | `theme`     | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.                                      | `"dark" \\| "inherit" \\| "light"`                  | `"inherit"` |\n| `uppercase`          | `uppercase` | The letter case of the status tag\'s label.                                                                                                                                   | `boolean`                                         | `true`      |\n| `variant`            | `variant`   | The emphasis of the status tag.                                                                                                                                              | `"filled" \\| "outlined"`                          | `"filled"`  |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-status-tag --\x3e ic-typography\n  style ic-status-tag fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'},"./src/components/ic-typography/readme.md":module=>{module.exports='# ic-typography\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property               | Attribute                | Description                                                                                                                                                                           | Type                                                                                                                                                                                                                                   | Default     |\n| ---------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `applyVerticalMargins` | `apply-vertical-margins` | If `true`, appropriate top and bottom margins will be applied to the typography.                                                                                                      | `boolean`                                                                                                                                                                                                                              | `false`     |\n| `bold`                 | `bold`                   | If `true`, the typography will have a bold font weight. Note: This will have no impact on variants that already use an equivalent or higher font weight (h1, h2, and subtitle-large). | `boolean`                                                                                                                                                                                                                              | `false`     |\n| `italic`               | `italic`                 | If `true`, the typography will have an italic font style.                                                                                                                             | `boolean`                                                                                                                                                                                                                              | `false`     |\n| `maxLines`             | `max-lines`              | The number of lines to display before truncating the text, only used for the \'body\' variant.                                                                                          | `number`                                                                                                                                                                                                                               | `undefined` |\n| `strikethrough`        | `strikethrough`          | If `true`, the typography will have a line through it.                                                                                                                                | `boolean`                                                                                                                                                                                                                              | `false`     |\n| `theme`                | `theme`                  | Sets the text color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.                                                | `"dark" \\| "inherit" \\| "light"`                                                                                                                                                                                                       | `"inherit"` |\n| `underline`            | `underline`              | If `true`, the typography will have a line under it.                                                                                                                                  | `boolean`                                                                                                                                                                                                                              | `false`     |\n| `variant`              | `variant`                | The ICDS typography style to use.                                                                                                                                                     | `"badge" \\| "badge-small" \\| "body" \\| "caption" \\| "caption-uppercase" \\| "code-extra-small" \\| "code-large" \\| "code-small" \\| "h1" \\| "h2" \\| "h3" \\| "h4" \\| "label" \\| "label-uppercase" \\| "subtitle-large" \\| "subtitle-small"` | `"body"`    |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-accordion](../ic-accordion)\n - [ic-accordion-group](../ic-accordion-group)\n - [ic-alert](../ic-alert)\n - [ic-badge](../ic-badge)\n - [ic-card-vertical](../ic-card-vertical)\n - [ic-checkbox](../ic-checkbox)\n - [ic-chip](../ic-chip)\n - [ic-classification-banner](../ic-classification-banner)\n - [ic-data-list](../ic-data-list)\n - [ic-data-row](../ic-data-row)\n - [ic-dialog](../ic-dialog)\n - [ic-divider](../ic-divider)\n - [ic-empty-state](../ic-empty-state)\n - [ic-footer](../ic-footer)\n - [ic-footer-link-group](../ic-footer-link-group)\n - [ic-hero](../ic-hero)\n - [ic-input-label](../ic-input-label)\n - [ic-input-validation](../ic-input-validation)\n - [ic-loading-indicator](../ic-loading-indicator)\n - [ic-menu](../ic-menu)\n - [ic-menu-group](../ic-menu-group)\n - [ic-menu-item](../ic-menu-item)\n - [ic-navigation-group](../ic-navigation-group)\n - [ic-navigation-item](../ic-navigation-item)\n - [ic-navigation-menu](../ic-navigation-menu)\n - [ic-page-header](../ic-page-header)\n - [ic-pagination-item](../ic-pagination-item)\n - [ic-popover-menu](../ic-popover-menu)\n - [ic-radio-option](../ic-radio-option)\n - [ic-select](../ic-select)\n - [ic-side-navigation](../ic-side-navigation)\n - [ic-status-tag](../ic-status-tag)\n - [ic-step](../ic-step)\n - [ic-switch](../ic-switch)\n - [ic-tab](../ic-tab)\n - [ic-text-field](../ic-text-field)\n - [ic-toast](../ic-toast)\n - [ic-tooltip](../ic-tooltip)\n - [ic-top-navigation](../ic-top-navigation)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-accordion --\x3e ic-typography\n  ic-accordion-group --\x3e ic-typography\n  ic-alert --\x3e ic-typography\n  ic-badge --\x3e ic-typography\n  ic-card-vertical --\x3e ic-typography\n  ic-checkbox --\x3e ic-typography\n  ic-chip --\x3e ic-typography\n  ic-classification-banner --\x3e ic-typography\n  ic-data-list --\x3e ic-typography\n  ic-data-row --\x3e ic-typography\n  ic-dialog --\x3e ic-typography\n  ic-divider --\x3e ic-typography\n  ic-empty-state --\x3e ic-typography\n  ic-footer --\x3e ic-typography\n  ic-footer-link-group --\x3e ic-typography\n  ic-hero --\x3e ic-typography\n  ic-input-label --\x3e ic-typography\n  ic-input-validation --\x3e ic-typography\n  ic-loading-indicator --\x3e ic-typography\n  ic-menu --\x3e ic-typography\n  ic-menu-group --\x3e ic-typography\n  ic-menu-item --\x3e ic-typography\n  ic-navigation-group --\x3e ic-typography\n  ic-navigation-item --\x3e ic-typography\n  ic-navigation-menu --\x3e ic-typography\n  ic-page-header --\x3e ic-typography\n  ic-pagination-item --\x3e ic-typography\n  ic-popover-menu --\x3e ic-typography\n  ic-radio-option --\x3e ic-typography\n  ic-select --\x3e ic-typography\n  ic-side-navigation --\x3e ic-typography\n  ic-status-tag --\x3e ic-typography\n  ic-step --\x3e ic-typography\n  ic-switch --\x3e ic-typography\n  ic-tab --\x3e ic-typography\n  ic-text-field --\x3e ic-typography\n  ic-toast --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  ic-top-navigation --\x3e ic-typography\n  style ic-typography fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'}}]);
//# sourceMappingURL=components-ic-data-list-ic-data-list-stories-mdx.166f7b75.iframe.bundle.js.map