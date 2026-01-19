/*! For license information please see components-ic-data-list-ic-data-list-stories.d9c7f5f4.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[9773,582,6199,6763],{"./src/components/ic-data-list/ic-data-list.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Adornment:()=>Adornment,Default:()=>Default,EditableExample:()=>EditableExample,IconButton:()=>IconButton,LabelWidth:()=>LabelWidth,LongTextValues:()=>LongTextValues,Playground:()=>Playground,SlottedHeadingAndLabel:()=>SlottedHeadingAndLabel,SlottedHeadingLabelValueNonTypography:()=>SlottedHeadingLabelValueNonTypography,Small:()=>Small,WithLink:()=>WithLink,WithStatusTag:()=>WithStatusTag,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/Data list",component:"ic-data-list"},Default={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-data-list heading="Personal details">
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
    </ic-data-list>`,name:"Default"},SlottedHeadingAndLabel={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-data-list>
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
    </ic-data-list>`,name:"Slotted heading and label"},LongTextValues={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-data-list
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
    </ic-data-list>`,name:"Long text values"},Small={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-data-list heading="Personal details" size="small">
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
    </ic-data-list>`,name:"Small"},WithLink={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-data-list heading="Personal details">
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
    </ic-data-list>`,name:"Link"},IconButton={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-data-list heading="Personal details">
      <ic-data-row label="Name" value="Michael Johnson">
        <ic-button
          variant="icon-tertiary"
          aria-label="Edit"
          slot="end-component"
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
    </ic-data-list>`,name:"Icon button"},Adornment={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-data-list heading="Personal details">
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
    </ic-data-list>`,name:"Adornment"},WithStatusTag={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy` <ic-data-list heading="Personal details">
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
    </ic-data-list>`,name:"Status tag"},EditableExample={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-data-list heading="Personal details">
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
      </ic-button>`,name:"Editable example"},LabelWidth={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-data-list heading="Personal details">
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
      </script>`,name:"With label width"},SlottedHeadingLabelValueNonTypography={render:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-data-list>
      <pre slot="heading">Personal details</pre>
      <ic-data-row>
        <pre slot="label">Name</pre>
        <pre slot="value">Michael Johnson</pre>
      </ic-data-row>
      <ic-data-row>
        <pre slot="label">Date of birth</pre>
        <pre slot="value">16 October 1995</pre>
      </ic-data-row>
    </ic-data-list>`,name:"Slotted heading, label and value - non ic-typography"},Playground={render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.qy`<ic-data-list
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
        <ic-button
          variant="icon-tertiary"
          aria-label="Edit"
          slot=${args.endCompSlot}
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
    </ic-data-list>`,args:{heading:"Details",size:"medium",label:"Name",rowSize:"default",value:"Michael Johnson",endCompSlot:"end-component",theme:"inherit",rowTheme:"inherit"},argTypes:{size:{options:["medium","small"],control:{type:"inline-radio"}},rowSize:{options:["medium","small"],control:{type:"inline-radio"}},endCompSlot:{options:["end-component",""],control:{type:"select"}},theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}},rowTheme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"},__namedExportsOrder=["Default","SlottedHeadingAndLabel","LongTextValues","Small","WithLink","IconButton","Adornment","WithStatusTag","EditableExample","LabelWidth","SlottedHeadingLabelValueNonTypography","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-data-list heading="Personal details">\n      <ic-data-row label="Name" value="Michael Johnson"></ic-data-row>\n      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>\n      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>\n      <ic-data-row label="Email" value="mjohnson@coffee.gov"></ic-data-row>\n      <ic-data-row label="Address">\n        <ic-typography variant="body" slot="value">\n          383 Coffee Drive\n          <br />\n          London\n          <br />\n          SW7 988\n          <br />\n          United Kingdom\n        </ic-typography>\n      </ic-data-row>\n    </ic-data-list>`,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},SlottedHeadingAndLabel.parameters={...SlottedHeadingAndLabel.parameters,docs:{...SlottedHeadingAndLabel.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-data-list>\n      <ic-typography variant="h3" slot="heading"\n        >Personal details</ic-typography\n      >\n      <ic-data-row value="Michael Johnson">\n        <ic-typography variant="subtitle-large" slot="label"\n          >Name</ic-typography\n        >\n      </ic-data-row>\n      <ic-data-row value="16 October 1995">\n        <ic-typography variant="subtitle-large" slot="label"\n          >Date of birth</ic-typography\n        >\n      </ic-data-row>\n    </ic-data-list>`,\n  name: "Slotted heading and label"\n}',...SlottedHeadingAndLabel.parameters?.docs?.source}}},LongTextValues.parameters={...LongTextValues.parameters,docs:{...LongTextValues.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-data-list\n      heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"\n    >\n      <ic-data-row\n        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"\n        value="Michael Johnson"\n      ></ic-data-row>\n      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>\n      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>\n      <ic-data-row label="Email" value="mjohnson@coffee.gov"></ic-data-row>\n      <ic-data-row\n        label="Address"\n        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"\n      ></ic-data-row>\n      <ic-data-row label="Second address">\n        <ic-typography variant="body" slot="value">\n          383 Coffee Drive\n          <br />\n          London\n          <br />\n          SW7 988\n          <br />\n          United Kingdom\n        </ic-typography>\n      </ic-data-row>\n    </ic-data-list>`,\n  name: "Long text values"\n}',...LongTextValues.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-data-list heading="Personal details" size="small">\n      <ic-data-row label="Name" value="Michael Johnson"></ic-data-row>\n      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>\n      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>\n      <ic-data-row label="Email" value="mjohnson@coffee.gov"></ic-data-row>\n      <ic-data-row label="Address">\n        <ic-typography variant="body" slot="value">\n          383 Coffee Drive\n          <br />\n          London\n          <br />\n          SW7 988\n          <br />\n          United Kingdom\n        </ic-typography>\n      </ic-data-row>\n    </ic-data-list>`,\n  name: "Small"\n}',...Small.parameters?.docs?.source}}},WithLink.parameters={...WithLink.parameters,docs:{...WithLink.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-data-list heading="Personal details">\n      <ic-data-row label="Name" value="Michael Johnson">\n        <ic-link href="#" slot="end-component"> Edit </ic-link>\n      </ic-data-row>\n      <ic-data-row label="Date of birth" value="16 October 1995">\n        <ic-link href="#" slot="end-component"> Edit </ic-link>\n      </ic-data-row>\n      <ic-data-row label="Telephone" value="07449 7654873">\n        <ic-link href="#" slot="end-component"> Edit </ic-link>\n      </ic-data-row>\n      <ic-data-row label="Email" value="mjohnson@coffee.gov">\n        <ic-link href="#" slot="end-component"> Edit </ic-link>\n      </ic-data-row>\n      <ic-data-row label="Address">\n        <ic-typography variant="body" slot="value">\n          383 Coffee Drive\n          <br />\n          London\n          <br />\n          SW7 988\n          <br />\n          United Kingdom\n        </ic-typography>\n        <ic-link href="#" slot="end-component"> Edit </ic-link>\n      </ic-data-row>\n    </ic-data-list>`,\n  name: "Link"\n}',...WithLink.parameters?.docs?.source}}},IconButton.parameters={...IconButton.parameters,docs:{...IconButton.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-data-list heading="Personal details">\n      <ic-data-row label="Name" value="Michael Johnson">\n        <ic-button\n          variant="icon-tertiary"\n          aria-label="Edit"\n          slot="end-component"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"\n            />\n          </svg>\n        </ic-button>\n      </ic-data-row>\n      <ic-data-row label="Date of birth" value="16 October 1995">\n        <ic-button\n          variant="icon-tertiary"\n          aria-label="Edit"\n          slot="end-component"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"\n            />\n          </svg>\n        </ic-button>\n      </ic-data-row>\n      <ic-data-row label="Telephone" value="07449 7654873">\n        <ic-button\n          variant="icon-tertiary"\n          aria-label="Edit"\n          slot="end-component"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"\n            />\n          </svg>\n        </ic-button>\n      </ic-data-row>\n      <ic-data-row label="Email" value="mjohnson@coffee.gov">\n        <ic-button\n          variant="icon-tertiary"\n          aria-label="Edit"\n          slot="end-component"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"\n            />\n          </svg>\n        </ic-button>\n      </ic-data-row>\n      <ic-data-row label="Address">\n        <ic-typography variant="body" slot="value">\n          383 Coffee Drive\n          <br />\n          London\n          <br />\n          SW7 988\n          <br />\n          United Kingdom\n        </ic-typography>\n        <ic-button\n          variant="icon-tertiary"\n          aria-label="Edit"\n          slot="end-component"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"\n            />\n          </svg>\n        </ic-button>\n      </ic-data-row>\n    </ic-data-list>`,\n  name: "Icon button"\n}',...IconButton.parameters?.docs?.source}}},Adornment.parameters={...Adornment.parameters,docs:{...Adornment.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-data-list heading="Personal details">\n      <ic-data-row label="Name" value="Michael Johnson">\n        <ic-status-tag\n          status="success"\n          label="confirmed"\n          variant="filled"\n          slot="end-component"\n        >\n        </ic-status-tag>\n      </ic-data-row>\n      <ic-data-row label="Date of birth" value="16 October 1995">\n        <ic-status-tag\n          status="warning"\n          label="in review"\n          variant="filled"\n          slot="end-component"\n        />\n      </ic-data-row>\n      <ic-data-row label="Telephone" value="07449 7654873">\n        <ic-status-tag\n          status="warning"\n          label="in review"\n          variant="filled"\n          slot="end-component"\n        />\n      </ic-data-row>\n      <ic-data-row label="Email" value="mjohnson@coffee.gov">\n        <ic-status-tag\n          status="success"\n          label="confirmed"\n          variant="filled"\n          slot="end-component"\n        />\n      </ic-data-row>\n      <ic-data-row label="Address">\n        <ic-typography variant="body" slot="value">\n          383 Coffee Drive\n          <br />\n          London\n          <br />\n          SW7 988\n          <br />\n          United Kingdom\n        </ic-typography>\n        <ic-status-tag\n          label="not confirmed"\n          variant="filled"\n          slot="end-component"\n        />\n      </ic-data-row>\n    </ic-data-list>`,\n  name: "Adornment"\n}',...Adornment.parameters?.docs?.source}}},WithStatusTag.parameters={...WithStatusTag.parameters,docs:{...WithStatusTag.parameters?.docs,source:{originalSource:'{\n  render: () => html` <ic-data-list heading="Personal details">\n      <ic-data-row label="Name"\n        ><ic-status-tag\n          status="success"\n          label="approved"\n          variant="filled"\n          slot="value"\n      /></ic-data-row>\n      <ic-data-row label="Date of birth"\n        ><ic-status-tag\n          status="success"\n          label="approved"\n          variant="filled"\n          slot="value"\n      /></ic-data-row>\n      <ic-data-row label="Telephone"\n        ><ic-status-tag\n          status="success"\n          label="approved"\n          variant="filled"\n          slot="value"\n      /></ic-data-row>\n      <ic-data-row label="Address"\n        ><ic-status-tag\n          status="success"\n          label="approved"\n          variant="filled"\n          slot="value"\n      /></ic-data-row>\n      <ic-data-row label="Email"\n        ><ic-status-tag\n          status="success"\n          label="approved"\n          variant="filled"\n          slot="value"\n      /></ic-data-row>\n    </ic-data-list>`,\n  name: "Status tag"\n}',...WithStatusTag.parameters?.docs?.source}}},EditableExample.parameters={...EditableExample.parameters,docs:{...EditableExample.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-data-list heading="Personal details">\n        <ic-data-row label="Name">\n          <ic-text-field\n            slot="value"\n            label="Name"\n            value="Michael Johnson"\n            readonly\n            hide-label\n            full-width\n          />\n        </ic-data-row>\n        <ic-data-row label="Date of birth">\n          <ic-text-field\n            slot="value"\n            label="Date of birth"\n            value="16 October 1995"\n            readonly\n            hide-label\n            full-width\n          />\n        </ic-data-row>\n        <ic-data-row label="Telephone">\n          <ic-text-field\n            slot="value"\n            label="Telephone"\n            value="07449 7654873"\n            readonly\n            hide-label\n            full-width\n          />\n        </ic-data-row>\n        <ic-data-row label="Email">\n          <ic-text-field\n            slot="value"\n            label="Email"\n            value="mjohnson@coffee.gov"\n            readonly\n            hide-label\n            full-width\n          />\n        </ic-data-row>\n        <ic-data-row label="Address">\n          <ic-text-field\n            slot="value"\n            label="Address"\n            value="383 Coffee Drive, London, SW7 988, United Kingdom"\n            readonly\n            hide-label\n            full-width\n          />\n        </ic-data-row>\n      </ic-data-list>\n      <ic-button\n        onclick="\n        var textFields = document.querySelectorAll(\'ic-text-field\');\n        for (var i=0; i < textFields.length; i++) {\n          textFields[i].setAttribute(\'readonly\', \'\');\n        }"\n        style="margin-right: var(--ic-space-md);margin-top: var(--ic-space-lg);"\n      >\n        Confirm\n      </ic-button>\n      <ic-button\n        onclick="\n        var textFields = document.querySelectorAll(\'ic-text-field\');\n        for (var i=0; i < textFields.length; i++) {\n          textFields[i].removeAttribute(\'readonly\');\n        }"\n        variant="secondary"\n        style="margin-top: var(--ic-space-lg);"\n      >\n        Edit\n      </ic-button>`,\n  name: "Editable example"\n}',...EditableExample.parameters?.docs?.source}}},LabelWidth.parameters={...LabelWidth.parameters,docs:{...LabelWidth.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-data-list heading="Personal details">\n        <ic-data-row label="Name" value="Michael Johnson"></ic-data-row>\n        <ic-data-row\n          label="Date of birth with extra words to make long heading"\n          value="16 October 1995"\n        ></ic-data-row>\n        <ic-data-row\n          label="Telephone with additional words"\n          value="07449 7654873"\n        ></ic-data-row>\n        <ic-data-row label="Email" value="mjohnson@coffee.gov"></ic-data-row>\n        <ic-data-row label="Address">\n          <ic-typography variant="body" slot="value">\n            383 Coffee Drive\n            <br />\n            London\n            <br />\n            SW7 988\n            <br />\n            United Kingdom\n          </ic-typography>\n        </ic-data-row>\n      </ic-data-list>\n      <script>\n        const dataList = document.querySelector("ic-data-list");\n        dataList.style.setProperty("--data-row-label-width", "30rem");\n      <\/script>`,\n  name: "With label width"\n}',...LabelWidth.parameters?.docs?.source}}},SlottedHeadingLabelValueNonTypography.parameters={...SlottedHeadingLabelValueNonTypography.parameters,docs:{...SlottedHeadingLabelValueNonTypography.parameters?.docs,source:{originalSource:'{\n  render: () => html`<ic-data-list>\n      <pre slot="heading">Personal details</pre>\n      <ic-data-row>\n        <pre slot="label">Name</pre>\n        <pre slot="value">Michael Johnson</pre>\n      </ic-data-row>\n      <ic-data-row>\n        <pre slot="label">Date of birth</pre>\n        <pre slot="value">16 October 1995</pre>\n      </ic-data-row>\n    </ic-data-list>`,\n  name: "Slotted heading, label and value - non ic-typography"\n}',...SlottedHeadingLabelValueNonTypography.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => html`<ic-data-list\n      heading=${args.heading}\n      size=${args.size}\n      theme=${args.theme}\n    >\n      <ic-data-row\n        label=${args.label}\n        value=${args.value}\n        size=${args.rowSize}\n        theme=${args.rowTheme}\n      >\n        <ic-button\n          variant="icon-tertiary"\n          aria-label="Edit"\n          slot=${args.endCompSlot}\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n          >\n            <path\n              d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"\n            />\n          </svg>\n        </ic-button>\n      </ic-data-row>\n      <ic-data-row label="Date of birth" value="16 October 1995"></ic-data-row>\n      <ic-data-row label="Telephone" value="07449 7654873"></ic-data-row>\n    </ic-data-list>`,\n  args: defaultArgs,\n  argTypes: {\n    size: {\n      options: ["medium", "small"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    rowSize: {\n      options: ["medium", "small"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    endCompSlot: {\n      options: ["end-component", ""],\n      control: {\n        type: "select"\n      }\n    },\n    theme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: inlineRadioSelector\n      }\n    },\n    rowTheme: {\n      options: ["inherit", "light", "dark"],\n      control: {\n        type: inlineRadioSelector\n      }\n    }\n  },\n  name: "Playground"\n}',...Playground.parameters?.docs?.source}}}},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>x});const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.1")}}]);
//# sourceMappingURL=components-ic-data-list-ic-data-list-stories.d9c7f5f4.iframe.bundle.js.map