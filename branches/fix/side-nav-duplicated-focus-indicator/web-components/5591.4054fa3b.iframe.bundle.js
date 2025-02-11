"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[5591],{"./src/components/ic-data-entity/ic-data-entity.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Adornment:()=>Adornment,Default:()=>Default,DeprecatedSmall:()=>DeprecatedSmall,EditableExample:()=>EditableExample,IconButton:()=>IconButton,LongTextValues:()=>LongTextValues,Playground:()=>Playground,SlottedHeadingAndLabel:()=>SlottedHeadingAndLabel,Small:()=>Small,WithLink:()=>WithLink,WithStatusTag:()=>WithStatusTag,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Data entity",component:"ic-data-entity"},Default={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-data-entity heading="Personal details">
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
    </ic-data-entity>`,name:"Default"},SlottedHeadingAndLabel={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-data-entity>
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
    </ic-data-entity>`,name:"Slotted heading and label"},LongTextValues={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-data-entity
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
    </ic-data-entity>`,name:"Long text values"},Small={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-data-entity heading="Personal details" size="small">
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
    </ic-data-entity>`,name:"Small"},DeprecatedSmall={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-data-entity heading="Personal details" small>
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
    </ic-data-entity>`,name:"Deprecated - small"},WithLink={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-data-entity heading="Personal details">
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
    </ic-data-entity>`,name:"With link"},IconButton={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-data-entity heading="Personal details">
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
    </ic-data-entity>`,name:"Icon button"},Adornment={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-data-entity heading="Personal details">
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
    </ic-data-entity>`,name:"Adornment"},WithStatusTag={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-data-entity heading="Personal details">
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
    </ic-data-entity>`,name:"With status tag"},EditableExample={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-data-entity heading="Personal details">
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
      </ic-data-entity>
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
      </ic-button>`,name:"Editable example"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-data-entity heading=${args.heading} size=${args.size}>
      <ic-data-row label=${args.label} value=${args.value} size=${args.rowSize}>
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
      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>
      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>
    </ic-data-entity>`,args:{heading:"Details",size:"default",label:"Name",rowSize:"default",value:"Michael Johnson",endCompSlot:"end-component"},argTypes:{size:{options:["default","small"],control:{type:"inline-radio"}},rowSize:{options:["default","small"],control:{type:"inline-radio"}},endCompSlot:{options:["end-component",""],control:{type:"select"}}},name:"Playground"},__namedExportsOrder=["Default","SlottedHeadingAndLabel","LongTextValues","Small","DeprecatedSmall","WithLink","IconButton","Adornment","WithStatusTag","EditableExample","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-data-entity heading="Personal details">\n      <ic-data-row label="Name" value="Michael Johnson"></ic-data-row>\n      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>\n      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>\n      <ic-data-row label="Email" value="mjohnson@coffee.gov"></ic-data-row>\n      <ic-data-row label="Address">\n        <ic-typography variant="body" slot="value">\n          383 Coffee Drive\n          <br />\n          London\n          <br />\n          SW7 988\n          <br />\n          United Kingdom\n        </ic-typography>\n      </ic-data-row>\n    </ic-data-entity>`,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},SlottedHeadingAndLabel.parameters={...SlottedHeadingAndLabel.parameters,docs:{...SlottedHeadingAndLabel.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-data-entity>\n      <ic-typography variant="h3" slot="heading"\n        >Personal details</ic-typography\n      >\n      <ic-data-row value="Michael Johnson">\n        <ic-typography variant="subtitle-large" slot="label"\n          >Name</ic-typography\n        >\n      </ic-data-row>\n      <ic-data-row value="16 October 1995">\n        <ic-typography variant="subtitle-large" slot="label"\n          >Date of birth</ic-typography\n        >\n      </ic-data-row>\n    </ic-data-entity>`,\n  name: "Slotted heading and label"\n}',...SlottedHeadingAndLabel.parameters?.docs?.source}}},LongTextValues.parameters={...LongTextValues.parameters,docs:{...LongTextValues.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-data-entity\n      heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"\n    >\n      <ic-data-row\n        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"\n        value="Michael Johnson"\n      ></ic-data-row>\n      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>\n      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>\n      <ic-data-row label="Email" value="mjohnson@coffee.gov"></ic-data-row>\n      <ic-data-row\n        label="Address"\n        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"\n      ></ic-data-row>\n      <ic-data-row label="Second address">\n        <ic-typography variant="body" slot="value">\n          383 Coffee Drive\n          <br />\n          London\n          <br />\n          SW7 988\n          <br />\n          United Kingdom\n        </ic-typography>\n      </ic-data-row>\n    </ic-data-entity>`,\n  name: "Long text values"\n}',...LongTextValues.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-data-entity heading="Personal details" size="small">\n      <ic-data-row label="Name" value="Michael Johnson"></ic-data-row>\n      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>\n      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>\n      <ic-data-row label="Email" value="mjohnson@coffee.gov"></ic-data-row>\n      <ic-data-row label="Address">\n        <ic-typography variant="body" slot="value">\n          383 Coffee Drive\n          <br />\n          London\n          <br />\n          SW7 988\n          <br />\n          United Kingdom\n        </ic-typography>\n      </ic-data-row>\n    </ic-data-entity>`,\n  name: "Small"\n}',...Small.parameters?.docs?.source}}},DeprecatedSmall.parameters={...DeprecatedSmall.parameters,docs:{...DeprecatedSmall.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-data-entity heading="Personal details" small>\n      <ic-data-row label="Name" value="Michael Johnson"></ic-data-row>\n      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>\n      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>\n      <ic-data-row label="Email" value="mjohnson@coffee.gov"></ic-data-row>\n      <ic-data-row label="Address">\n        <ic-typography variant="body" slot="value">\n          383 Coffee Drive\n          <br />\n          London\n          <br />\n          SW7 988\n          <br />\n          United Kingdom\n        </ic-typography>\n      </ic-data-row>\n    </ic-data-entity>`,\n  name: "Deprecated - small"\n}',...DeprecatedSmall.parameters?.docs?.source}}},WithLink.parameters={...WithLink.parameters,docs:{...WithLink.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-data-entity heading="Personal details">\n      <ic-data-row label="Name" value="Michael Johnson">\n        <ic-link href="#" slot="end-component"> Edit </ic-link>\n      </ic-data-row>\n      <ic-data-row label="Date of birth" value="16 October 1995">\n        <ic-link href="#" slot="end-component"> Edit </ic-link>\n      </ic-data-row>\n      <ic-data-row label="Telephone" value="07449 7654873">\n        <ic-link href="#" slot="end-component"> Edit </ic-link>\n      </ic-data-row>\n      <ic-data-row label="Email" value="mjohnson@coffee.gov">\n        <ic-link href="#" slot="end-component"> Edit </ic-link>\n      </ic-data-row>\n      <ic-data-row label="Address">\n        <ic-typography variant="body" slot="value">\n          383 Coffee Drive\n          <br />\n          London\n          <br />\n          SW7 988\n          <br />\n          United Kingdom\n        </ic-typography>\n        <ic-link href="#" slot="end-component"> Edit </ic-link>\n      </ic-data-row>\n    </ic-data-entity>`,\n  name: "With link"\n}',...WithLink.parameters?.docs?.source}}},IconButton.parameters={...IconButton.parameters,docs:{...IconButton.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-data-entity heading="Personal details">\n      <ic-data-row label="Name" value="Michael Johnson">\n        <ic-button variant="icon" aria-label="Edit" slot="end-component">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"\n            />\n          </svg>\n        </ic-button>\n      </ic-data-row>\n      <ic-data-row label="Date of birth" value="16 October 1995">\n        <ic-button variant="icon" aria-label="Edit" slot="end-component">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"\n            />\n          </svg>\n        </ic-button>\n      </ic-data-row>\n      <ic-data-row label="Telephone" value="07449 7654873">\n        <ic-button variant="icon" aria-label="Edit" slot="end-component">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"\n            />\n          </svg>\n        </ic-button>\n      </ic-data-row>\n      <ic-data-row label="Email" value="mjohnson@coffee.gov">\n        <ic-button variant="icon" aria-label="Edit" slot="end-component">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"\n            />\n          </svg>\n        </ic-button>\n      </ic-data-row>\n      <ic-data-row label="Address">\n        <ic-typography variant="body" slot="value">\n          383 Coffee Drive\n          <br />\n          London\n          <br />\n          SW7 988\n          <br />\n          United Kingdom\n        </ic-typography>\n        <ic-button variant="icon" aria-label="Edit" slot="end-component">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"\n            />\n          </svg>\n        </ic-button>\n      </ic-data-row>\n    </ic-data-entity>`,\n  name: "Icon button"\n}',...IconButton.parameters?.docs?.source}}},Adornment.parameters={...Adornment.parameters,docs:{...Adornment.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-data-entity heading="Personal details">\n      <ic-data-row label="Name" value="Michael Johnson">\n        <ic-status-tag\n          status="success"\n          label="confirmed"\n          variant="filled"\n          slot="end-component"\n        >\n        </ic-status-tag>\n      </ic-data-row>\n      <ic-data-row label="Date of birth" value="16 October 1995">\n        <ic-status-tag\n          status="warning"\n          label="in review"\n          variant="filled"\n          slot="end-component"\n        />\n      </ic-data-row>\n      <ic-data-row label="Telephone" value="07449 7654873">\n        <ic-status-tag\n          status="warning"\n          label="in review"\n          variant="filled"\n          slot="end-component"\n        />\n      </ic-data-row>\n      <ic-data-row label="Email" value="mjohnson@coffee.gov">\n        <ic-status-tag\n          status="success"\n          label="confirmed"\n          variant="filled"\n          slot="end-component"\n        />\n      </ic-data-row>\n      <ic-data-row label="Address">\n        <ic-typography variant="body" slot="value">\n          383 Coffee Drive\n          <br />\n          London\n          <br />\n          SW7 988\n          <br />\n          United Kingdom\n        </ic-typography>\n        <ic-status-tag\n          label="not confirmed"\n          variant="filled"\n          slot="end-component"\n        />\n      </ic-data-row>\n    </ic-data-entity>`,\n  name: "Adornment"\n}',...Adornment.parameters?.docs?.source}}},WithStatusTag.parameters={...WithStatusTag.parameters,docs:{...WithStatusTag.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-data-entity heading="Personal details">\n      <ic-data-row label="Name"\n        ><ic-status-tag\n          status="success"\n          label="approved"\n          variant="filled"\n          slot="value"\n      /></ic-data-row>\n      <ic-data-row label="Date of birth"\n        ><ic-status-tag\n          status="success"\n          label="approved"\n          variant="filled"\n          slot="value"\n      /></ic-data-row>\n      <ic-data-row label="Telephone"\n        ><ic-status-tag\n          status="success"\n          label="approved"\n          variant="filled"\n          slot="value"\n      /></ic-data-row>\n      <ic-data-row label="Address"\n        ><ic-status-tag\n          status="success"\n          label="approved"\n          variant="filled"\n          slot="value"\n      /></ic-data-row>\n      <ic-data-row label="Email"\n        ><ic-status-tag\n          status="success"\n          label="approved"\n          variant="filled"\n          slot="value"\n      /></ic-data-row>\n    </ic-data-entity>`,\n  name: "With status tag"\n}',...WithStatusTag.parameters?.docs?.source}}},EditableExample.parameters={...EditableExample.parameters,docs:{...EditableExample.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-data-entity heading="Personal details">\n        <ic-data-row label="Name">\n          <ic-text-field\n            slot="value"\n            label="Name"\n            value="Michael Johnson"\n            readonly\n            hide-label\n            full-width\n          />\n        </ic-data-row>\n        <ic-data-row label="Date of birth">\n          <ic-text-field\n            slot="value"\n            label="Date of birth"\n            value="16 October 1995"\n            readonly\n            hide-label\n            full-width\n          />\n        </ic-data-row>\n        <ic-data-row label="Telephone">\n          <ic-text-field\n            slot="value"\n            label="Telephone"\n            value="07449 7654873"\n            readonly\n            hide-label\n            full-width\n          />\n        </ic-data-row>\n        <ic-data-row label="Email">\n          <ic-text-field\n            slot="value"\n            label="Email"\n            value="mjohnson@coffee.gov"\n            readonly\n            hide-label\n            full-width\n          />\n        </ic-data-row>\n        <ic-data-row label="Address">\n          <ic-text-field\n            slot="value"\n            label="Address"\n            value="383 Coffee Drive, London, SW7 988, United Kingdom"\n            readonly\n            hide-label\n            full-width\n          />\n        </ic-data-row>\n      </ic-data-entity>\n      <ic-button\n        onclick="\n        var textFields = document.querySelectorAll(\'ic-text-field\');\n        for (var i=0; i < textFields.length; i++) {\n          textFields[i].setAttribute(\'readonly\', \'\');\n        }"\n        style="margin-right: var(--ic-space-md);margin-top: var(--ic-space-lg);"\n      >\n        Confirm\n      </ic-button>\n      <ic-button\n        onclick="\n        var textFields = document.querySelectorAll(\'ic-text-field\');\n        for (var i=0; i < textFields.length; i++) {\n          textFields[i].removeAttribute(\'readonly\');\n        }"\n        variant="secondary"\n        style="margin-top: var(--ic-space-lg);"\n      >\n        Edit\n      </ic-button>`,\n  name: "Editable example"\n}',...EditableExample.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-data-entity heading=${args.heading} size=${args.size}>\n      <ic-data-row label=${args.label} value=${args.value} size=${args.rowSize}>\n        <ic-button variant="icon" aria-label="Edit" slot=${args.endCompSlot}>\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"\n            />\n          </svg>\n        </ic-button>\n      </ic-data-row>\n      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>\n      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>\n    </ic-data-entity>`,\n  args: defaultArgs,\n  argTypes: {\n    size: {\n      options: ["default", "small"],\n      control: {\n        type: "inline-radio"\n      }\n    },\n    rowSize: {\n      options: ["default", "small"],\n      control: {\n        type: "inline-radio"\n      }\n    },\n    endCompSlot: {\n      options: ["end-component", ""],\n      control: {\n        type: "select"\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=5591.4054fa3b.iframe.bundle.js.map