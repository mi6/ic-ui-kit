var f=Object.freeze,S=Object.defineProperty;var h=(e,D)=>f(S(e,"raw",{value:f(D||e.slice())}));import{x as i}from"./lit-html-CWQq0DyO.js";const x={disabled:!1,helperText:"Some helper text",hideLabel:!1,label:"This is a label",name:"1",orientation:"vertical",required:!1,size:"medium",validationAriaLive:"polite",validationStatus:"no status",validationText:"",additionalFieldDisplay:"static",radioDisabled:!1,dynamicText:"This selection requires additional answers",radioLabel:"Radio 1",radioName:"radio1",value:"valueName1",selected:!1,additionalFieldSlot:!0,theme:"inherit"},T={title:"Web Components/Radio button",component:"Radio"},o={render:()=>i`
    <ic-radio-group label="This is a label" name="1">
      <ic-radio-option
        value="valueName1"
        label="Unselected / Default"
      ></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Selected / Default"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-radio-option>
    </ic-radio-group>
  `,name:"Default"},n={render:()=>i`
    <ic-radio-group
      orientation="horizontal"
      label="This should be horizontal"
      name="1"
    >
      <ic-radio-option
        value="valueName1"
        label="Selected / Default"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Unselected / Default"
      ></ic-radio-option>
    </ic-radio-group>
    <br />
    <p>Horizontal orientation is overridden with >2 radio options</p>
    <br />
    <ic-radio-group
      orientation="horizontal"
      label="This should be vertical"
      name="2"
    >
      <ic-radio-option
        value="valueNameA"
        label="First"
        selected
      ></ic-radio-option>
      <ic-radio-option value="valueNameB" label="Second"></ic-radio-option>
      <ic-radio-option value="valueNameC" label="Third"></ic-radio-option>
    </ic-radio-group>
  `,name:"Horizontal"},l={render:()=>i`
    <ic-radio-group label="This is a label" required name="1">
      <ic-radio-option
        value="valueName1"
        label="Unselected / Default"
      ></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Selected / Default"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-radio-option>
    </ic-radio-group>
  `,name:"Required"},t={render:()=>i`
    <ic-radio-group label="This is a label" name="1">
      <ic-radio-option
        value="valueName1"
        label="Unselected / Disabled 1"
        disabled
      ></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Unselected / Disabled 2"
        disabled
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Unselected / Disabled 3"
        disabled
      ></ic-radio-option>
      <ic-radio-option
        value="valueName4"
        label="Selected / Disabled"
        disabled
        selected
      ></ic-radio-option>
    </ic-radio-group>
  `,name:"Disabled"};var g;const r={render:()=>i(g||(g=h([`
    <script>
      function handleIcChange(ev) {
        console.log(ev.detail.selectedOption);
      }
      function handleClick() {
        alert("Button clicked!");
      }
      document
        .querySelector("ic-button")
        .addEventListener("click", handleClick);
      document
        .querySelector("ic-radio-group")
        .addEventListener("icChange", handleIcChange);
      document
        .querySelector("ic-button")
        .addEventListener("click", () => alert("Button"));
    <\/script>
    <ic-radio-group label="Conditional dynamic" name="1">
      <ic-radio-option
        additional-field-display="dynamic"
        value="valueName1"
        label="Option with Radio as conditional slotted additional field"
        selected
      >
        <ic-radio-group
          slot="additional-field"
          helperText="Child Group Helper Text"
          label="Children"
          name="radio-group-2"
        >
          <ic-radio-option
            key="child-option-1"
            label="child-option-1"
            value="child-option-1"
          ></ic-radio-option>
          <ic-radio-option
            key="child-option-2"
            label="child-option-2"
            value="child-option-2"
          ></ic-radio-option>
        </ic-radio-group>
      </ic-radio-option>
      <ic-radio-option
        additional-field-display="dynamic"
        value="valueName2"
        label="Option with Text-field as conditional slotted additional field"
      >
        <ic-text-field
          validation-status="error"
          validation-text="Now it has really gone to (coffee) pot"
          slot="additional-field"
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        >
        </ic-text-field>
      </ic-radio-option>
      <ic-radio-option
        additional-field-display="dynamic"
        value="valueName3"
        label="option3 - clickable component"
      >
        <ic-button slot="additional-field"> Click me! </ic-button>
      </ic-radio-option>
    </ic-radio-group>
  `]))),name:"Conditional dynamic"},d={render:()=>i`
    <ic-radio-group label=" Conditional static" name="1">
      <ic-radio-option value="valueName1" label="option1">
        <ic-text-field
          slot="additional-field"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-radio-option>
      <ic-radio-option value="valueName2" label="option2">
        <ic-radio-group
          slot="additional-field"
          helperText="Child Group Helper Text"
          label="Children"
          name="radio-group-2"
        >
          <ic-radio-option
            key="child-option-1"
            label="child-option-1"
            value="child-option-1"
          ></ic-radio-option>
          <ic-radio-option
            key="child-option-2"
            label="child-option-2"
            value="child-option-2"
          ></ic-radio-option>
        </ic-radio-group>
      </ic-radio-option>
    </ic-radio-group>
  `,name:"Conditional static"},c={render:()=>i`
    <ic-radio-group
      label="Pick Your Coffee"
      name="1"
      helper-text="Helper text provided by prop"
    >
      <ic-radio-option value="valueName1" label="Mocha"></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Americano"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Tea"
        disabled
      ></ic-radio-option>
    </ic-radio-group>
    <br />
    <ic-radio-group label="Another Coffee Choice" name="2">
      <ic-typography variant="caption" slot="helper-text">
        <span>
          Slotted helper text with a
          <ic-link href="#">helpful link to guidance</ic-link>
        </span>
      </ic-typography>
      <ic-radio-option value="valueName1" label="Flat White"></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Espresso"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Orange Juice"
        disabled
      ></ic-radio-option>
    </ic-radio-group>
  `,name:"Helper text"},s={render:()=>i`
    <ic-radio-group label="This is a label" name="1" size="small">
      <ic-radio-option
        value="valueName1"
        label="Unselected / Default"
      ></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Selected / Default"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-radio-option>
    </ic-radio-group>
  `,name:"Small"},u={render:()=>i`
    <ic-radio-group
      label="This is a label"
      name="1"
      validation-status="error"
      validation-text="Error message"
    >
      <ic-radio-option
        value="valueName1"
        label="Unselected / Default"
      ></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Selected / Default"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-radio-option>
    </ic-radio-group>
  `,name:"Validation"};var y;const p={render:()=>i(y||(y=h([`<ic-radio-group
        id="field-1"
        label="This is a label"
        name="1"
        helper-text="Error already set on page load and aria-live overridden as 'assertive'"
        validation-status="error"
        validation-text="First error message"
        validation-aria-live="assertive"
      >
        <ic-radio-option
          value="valueName1"
          label="Unselected / Default 1"
        ></ic-radio-option>
        <ic-radio-option
          value="valueName2"
          label="Selected / Default 1"
          selected
        ></ic-radio-option>
        <ic-radio-option
          value="valueName3"
          label="Unselected / Disabled 1"
          disabled
        ></ic-radio-option>
      </ic-radio-group>
      <br />
      <ic-radio-group
        id="field-2"
        label="This is a label"
        name="2"
        helper-text="Error set after page load and aria-live overridden as 'assertive'"
        validation-aria-live="assertive"
      >
        <ic-radio-option
          value="valueName1"
          label="Unselected / Default 2"
        ></ic-radio-option>
        <ic-radio-option
          value="valueName2"
          label="Selected / Default 2"
          selected
        ></ic-radio-option>
        <ic-radio-option
          value="valueName3"
          label="Unselected / Disabled 2"
          disabled
        ></ic-radio-option>
      </ic-radio-group>
      <br />
      <ic-button id="toggle-btn-1">Toggle errors</ic-button>
      <script>
        let showErrors1 = false;
        const btn1 = document.getElementById("toggle-btn-1");
        const field1 = document.getElementById("field-1");
        const field2 = document.getElementById("field-2");

        btn1.addEventListener("click", () => {
          showErrors1 = !showErrors1;

          field1.setAttribute("validation-status", showErrors1 ? "" : "error");
          field1.setAttribute(
            "validation-text",
            showErrors1 ? "" : "First error message"
          );

          field2.setAttribute("validation-status", showErrors1 ? "error" : "");
          field2.setAttribute(
            "validation-text",
            showErrors1 ? "Second error message" : ""
          );
        });
      <\/script>
      <br />
      <br />
      <br />
      <br />
      <ic-radio-group
        id="field-3"
        label="This is a label"
        name="3"
        helper-text="Default aria-live behaviour (i.e. 'polite')"
      >
        <ic-radio-option
          value="valueName1"
          label="Unselected / Default 3"
        ></ic-radio-option>
        <ic-radio-option
          value="valueName2"
          label="Selected / Default 3"
          selected
        ></ic-radio-option>
        <ic-radio-option
          value="valueName3"
          label="Unselected / Disabled 3"
          disabled
        ></ic-radio-option>
      </ic-radio-group>
      <br />
      <ic-radio-group
        id="field-4"
        label="This is a label"
        name="4"
        helper-text="Default aria-live behaviour (i.e. 'polite')"
      >
        <ic-radio-option
          value="valueName1"
          label="Unselected / Default 4"
        ></ic-radio-option>
        <ic-radio-option
          value="valueName2"
          label="Selected / Default 4"
          selected
        ></ic-radio-option>
        <ic-radio-option
          value="valueName3"
          label="Unselected / Disabled 4"
          disabled
        ></ic-radio-option>
      </ic-radio-group>
      <br />
      <ic-button id="toggle-btn-2">Toggle errors</ic-button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <script>
        let showErrors2 = false;
        const btn2 = document.getElementById("toggle-btn-2");
        const field3 = document.getElementById("field-3");
        const field4 = document.getElementById("field-4");

        btn2.addEventListener("click", () => {
          showErrors2 = !showErrors2;

          field3.setAttribute("validation-status", showErrors2 ? "error" : "");
          field3.setAttribute(
            "validation-text",
            showErrors2 ? "Third error message" : ""
          );

          field4.setAttribute("validation-status", showErrors2 ? "error" : "");
          field4.setAttribute(
            "validation-text",
            showErrors2 ? "Fourth error message" : ""
          );
        });
      <\/script>`]))),name:"Aria-live behaviour"};var N;const b={render:()=>i(N||(N=h([`
    <form>
      <ic-radio-group label="This is a label" name="1">
        <ic-radio-option
          value="valueName1"
          label="Unselected / Default"
        ></ic-radio-option>
        <ic-radio-option
          value="valueName2"
          label="Selected / Default"
        ></ic-radio-option>
        <ic-radio-option
          value="valueName3"
          label="Unselected / Disabled"
          disabled
        ></ic-radio-option>
      </ic-radio-group>
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
    </form>
    <script>
      document.querySelector("form").addEventListener("submit", (ev) => {
        ev.preventDefault();
        console.log(document.querySelector('input[name="1"]').value);
      });
    <\/script>
  `]))),name:"Form"},v={render:()=>i`
    <ic-radio-group label="This is a label" name="group1" dir="rtl">
      <ic-radio-option value="valueName1" label="Default"></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Selected"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Disabled"
        disabled
      ></ic-radio-option>
      <ic-radio-option
        additional-field-display="dynamic"
        value="valueName4"
        label="Conditional dynamic"
      >
        <ic-text-field
          slot="additional-field"
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-radio-option>
    </ic-radio-group>
  `,name:"RTL"},a="inline-radio",m={render:e=>i`
    <ic-radio-group
      label=${e.label}
      name=${e.name}
      orientation=${e.orientation}
      required=${e.required}
      size=${e.size}
      validation-aria-live=${e.validationAriaLive}
      validation-status=${e.validationStatus==="no status"?"":e.validationStatus}
      validation-text=${e.validationText}
      helper-text=${e.helperText}
      disabled=${e.disabled}
      hide-label=${e.hideLabel}
      theme=${e.theme}
    >
      <ic-radio-option
        additional-field-display=${e.additionalFieldDisplay}
        value=${e.value}
        label=${e.radioLabel}
        name=${e.radioName}
        selected=${e.selected}
        disabled=${e.radioDisabled}
        dynamic-text=${e.dynamicText}
      >
        <ic-text-field
          slot=${e.additionalFieldSlot}
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
          size=${e.size}
        ></ic-text-field>
      </ic-radio-option>
      <ic-radio-option value="valueName2" label="Radio 2"></ic-radio-option>
    </ic-radio-group>
  `,args:x,argTypes:{orientation:{options:["vertical","horizontal"],control:{type:a}},size:{options:["medium","small"],control:{type:a}},validationAriaLive:{options:["polite","assertive","off"],control:{type:a}},validationStatus:{options:["no status","error","warning","success"],control:{type:"radio"}},additionalFieldDisplay:{options:["static","dynamic"],control:{type:a}},additionalFieldSlot:{mapping:{true:"additional-field",false:""}},theme:{options:["inherit","light","dark"],control:{type:a}}},name:"Playground"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-radio-group label="This is a label" name="1">
      <ic-radio-option
        value="valueName1"
        label="Unselected / Default"
      ></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Selected / Default"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-radio-option>
    </ic-radio-group>
  \`,
  name: "Default"
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-radio-group
      orientation="horizontal"
      label="This should be horizontal"
      name="1"
    >
      <ic-radio-option
        value="valueName1"
        label="Selected / Default"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Unselected / Default"
      ></ic-radio-option>
    </ic-radio-group>
    <br />
    <p>Horizontal orientation is overridden with >2 radio options</p>
    <br />
    <ic-radio-group
      orientation="horizontal"
      label="This should be vertical"
      name="2"
    >
      <ic-radio-option
        value="valueNameA"
        label="First"
        selected
      ></ic-radio-option>
      <ic-radio-option value="valueNameB" label="Second"></ic-radio-option>
      <ic-radio-option value="valueNameC" label="Third"></ic-radio-option>
    </ic-radio-group>
  \`,
  name: "Horizontal"
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-radio-group label="This is a label" required name="1">
      <ic-radio-option
        value="valueName1"
        label="Unselected / Default"
      ></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Selected / Default"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-radio-option>
    </ic-radio-group>
  \`,
  name: "Required"
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-radio-group label="This is a label" name="1">
      <ic-radio-option
        value="valueName1"
        label="Unselected / Disabled 1"
        disabled
      ></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Unselected / Disabled 2"
        disabled
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Unselected / Disabled 3"
        disabled
      ></ic-radio-option>
      <ic-radio-option
        value="valueName4"
        label="Selected / Disabled"
        disabled
        selected
      ></ic-radio-option>
    </ic-radio-group>
  \`,
  name: "Disabled"
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <script>
      function handleIcChange(ev) {
        console.log(ev.detail.selectedOption);
      }
      function handleClick() {
        alert("Button clicked!");
      }
      document
        .querySelector("ic-button")
        .addEventListener("click", handleClick);
      document
        .querySelector("ic-radio-group")
        .addEventListener("icChange", handleIcChange);
      document
        .querySelector("ic-button")
        .addEventListener("click", () => alert("Button"));
    <\/script>
    <ic-radio-group label="Conditional dynamic" name="1">
      <ic-radio-option
        additional-field-display="dynamic"
        value="valueName1"
        label="Option with Radio as conditional slotted additional field"
        selected
      >
        <ic-radio-group
          slot="additional-field"
          helperText="Child Group Helper Text"
          label="Children"
          name="radio-group-2"
        >
          <ic-radio-option
            key="child-option-1"
            label="child-option-1"
            value="child-option-1"
          ></ic-radio-option>
          <ic-radio-option
            key="child-option-2"
            label="child-option-2"
            value="child-option-2"
          ></ic-radio-option>
        </ic-radio-group>
      </ic-radio-option>
      <ic-radio-option
        additional-field-display="dynamic"
        value="valueName2"
        label="Option with Text-field as conditional slotted additional field"
      >
        <ic-text-field
          validation-status="error"
          validation-text="Now it has really gone to (coffee) pot"
          slot="additional-field"
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        >
        </ic-text-field>
      </ic-radio-option>
      <ic-radio-option
        additional-field-display="dynamic"
        value="valueName3"
        label="option3 - clickable component"
      >
        <ic-button slot="additional-field"> Click me! </ic-button>
      </ic-radio-option>
    </ic-radio-group>
  \`,
  name: "Conditional dynamic"
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-radio-group label=" Conditional static" name="1">
      <ic-radio-option value="valueName1" label="option1">
        <ic-text-field
          slot="additional-field"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-radio-option>
      <ic-radio-option value="valueName2" label="option2">
        <ic-radio-group
          slot="additional-field"
          helperText="Child Group Helper Text"
          label="Children"
          name="radio-group-2"
        >
          <ic-radio-option
            key="child-option-1"
            label="child-option-1"
            value="child-option-1"
          ></ic-radio-option>
          <ic-radio-option
            key="child-option-2"
            label="child-option-2"
            value="child-option-2"
          ></ic-radio-option>
        </ic-radio-group>
      </ic-radio-option>
    </ic-radio-group>
  \`,
  name: "Conditional static"
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-radio-group
      label="Pick Your Coffee"
      name="1"
      helper-text="Helper text provided by prop"
    >
      <ic-radio-option value="valueName1" label="Mocha"></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Americano"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Tea"
        disabled
      ></ic-radio-option>
    </ic-radio-group>
    <br />
    <ic-radio-group label="Another Coffee Choice" name="2">
      <ic-typography variant="caption" slot="helper-text">
        <span>
          Slotted helper text with a
          <ic-link href="#">helpful link to guidance</ic-link>
        </span>
      </ic-typography>
      <ic-radio-option value="valueName1" label="Flat White"></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Espresso"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Orange Juice"
        disabled
      ></ic-radio-option>
    </ic-radio-group>
  \`,
  name: "Helper text"
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-radio-group label="This is a label" name="1" size="small">
      <ic-radio-option
        value="valueName1"
        label="Unselected / Default"
      ></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Selected / Default"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-radio-option>
    </ic-radio-group>
  \`,
  name: "Small"
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-radio-group
      label="This is a label"
      name="1"
      validation-status="error"
      validation-text="Error message"
    >
      <ic-radio-option
        value="valueName1"
        label="Unselected / Default"
      ></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Selected / Default"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Unselected / Disabled"
        disabled
      ></ic-radio-option>
    </ic-radio-group>
  \`,
  name: "Validation"
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-radio-group
        id="field-1"
        label="This is a label"
        name="1"
        helper-text="Error already set on page load and aria-live overridden as 'assertive'"
        validation-status="error"
        validation-text="First error message"
        validation-aria-live="assertive"
      >
        <ic-radio-option
          value="valueName1"
          label="Unselected / Default 1"
        ></ic-radio-option>
        <ic-radio-option
          value="valueName2"
          label="Selected / Default 1"
          selected
        ></ic-radio-option>
        <ic-radio-option
          value="valueName3"
          label="Unselected / Disabled 1"
          disabled
        ></ic-radio-option>
      </ic-radio-group>
      <br />
      <ic-radio-group
        id="field-2"
        label="This is a label"
        name="2"
        helper-text="Error set after page load and aria-live overridden as 'assertive'"
        validation-aria-live="assertive"
      >
        <ic-radio-option
          value="valueName1"
          label="Unselected / Default 2"
        ></ic-radio-option>
        <ic-radio-option
          value="valueName2"
          label="Selected / Default 2"
          selected
        ></ic-radio-option>
        <ic-radio-option
          value="valueName3"
          label="Unselected / Disabled 2"
          disabled
        ></ic-radio-option>
      </ic-radio-group>
      <br />
      <ic-button id="toggle-btn-1">Toggle errors</ic-button>
      <script>
        let showErrors1 = false;
        const btn1 = document.getElementById("toggle-btn-1");
        const field1 = document.getElementById("field-1");
        const field2 = document.getElementById("field-2");

        btn1.addEventListener("click", () => {
          showErrors1 = !showErrors1;

          field1.setAttribute("validation-status", showErrors1 ? "" : "error");
          field1.setAttribute(
            "validation-text",
            showErrors1 ? "" : "First error message"
          );

          field2.setAttribute("validation-status", showErrors1 ? "error" : "");
          field2.setAttribute(
            "validation-text",
            showErrors1 ? "Second error message" : ""
          );
        });
      <\/script>
      <br />
      <br />
      <br />
      <br />
      <ic-radio-group
        id="field-3"
        label="This is a label"
        name="3"
        helper-text="Default aria-live behaviour (i.e. 'polite')"
      >
        <ic-radio-option
          value="valueName1"
          label="Unselected / Default 3"
        ></ic-radio-option>
        <ic-radio-option
          value="valueName2"
          label="Selected / Default 3"
          selected
        ></ic-radio-option>
        <ic-radio-option
          value="valueName3"
          label="Unselected / Disabled 3"
          disabled
        ></ic-radio-option>
      </ic-radio-group>
      <br />
      <ic-radio-group
        id="field-4"
        label="This is a label"
        name="4"
        helper-text="Default aria-live behaviour (i.e. 'polite')"
      >
        <ic-radio-option
          value="valueName1"
          label="Unselected / Default 4"
        ></ic-radio-option>
        <ic-radio-option
          value="valueName2"
          label="Selected / Default 4"
          selected
        ></ic-radio-option>
        <ic-radio-option
          value="valueName3"
          label="Unselected / Disabled 4"
          disabled
        ></ic-radio-option>
      </ic-radio-group>
      <br />
      <ic-button id="toggle-btn-2">Toggle errors</ic-button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <script>
        let showErrors2 = false;
        const btn2 = document.getElementById("toggle-btn-2");
        const field3 = document.getElementById("field-3");
        const field4 = document.getElementById("field-4");

        btn2.addEventListener("click", () => {
          showErrors2 = !showErrors2;

          field3.setAttribute("validation-status", showErrors2 ? "error" : "");
          field3.setAttribute(
            "validation-text",
            showErrors2 ? "Third error message" : ""
          );

          field4.setAttribute("validation-status", showErrors2 ? "error" : "");
          field4.setAttribute(
            "validation-text",
            showErrors2 ? "Fourth error message" : ""
          );
        });
      <\/script>\`,
  name: "Aria-live behaviour"
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <form>
      <ic-radio-group label="This is a label" name="1">
        <ic-radio-option
          value="valueName1"
          label="Unselected / Default"
        ></ic-radio-option>
        <ic-radio-option
          value="valueName2"
          label="Selected / Default"
        ></ic-radio-option>
        <ic-radio-option
          value="valueName3"
          label="Unselected / Disabled"
          disabled
        ></ic-radio-option>
      </ic-radio-group>
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
    </form>
    <script>
      document.querySelector("form").addEventListener("submit", (ev) => {
        ev.preventDefault();
        console.log(document.querySelector('input[name="1"]').value);
      });
    <\/script>
  \`,
  name: "Form"
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ic-radio-group label="This is a label" name="group1" dir="rtl">
      <ic-radio-option value="valueName1" label="Default"></ic-radio-option>
      <ic-radio-option
        value="valueName2"
        label="Selected"
        selected
      ></ic-radio-option>
      <ic-radio-option
        value="valueName3"
        label="Disabled"
        disabled
      ></ic-radio-option>
      <ic-radio-option
        additional-field-display="dynamic"
        value="valueName4"
        label="Conditional dynamic"
      >
        <ic-text-field
          slot="additional-field"
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
        ></ic-text-field>
      </ic-radio-option>
    </ic-radio-group>
  \`,
  name: "RTL"
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <ic-radio-group
      label=\${args.label}
      name=\${args.name}
      orientation=\${args.orientation}
      required=\${args.required}
      size=\${args.size}
      validation-aria-live=\${args.validationAriaLive}
      validation-status=\${args.validationStatus === "no status" ? "" : args.validationStatus}
      validation-text=\${args.validationText}
      helper-text=\${args.helperText}
      disabled=\${args.disabled}
      hide-label=\${args.hideLabel}
      theme=\${args.theme}
    >
      <ic-radio-option
        additional-field-display=\${args.additionalFieldDisplay}
        value=\${args.value}
        label=\${args.radioLabel}
        name=\${args.radioName}
        selected=\${args.selected}
        disabled=\${args.radioDisabled}
        dynamic-text=\${args.dynamicText}
      >
        <ic-text-field
          slot=\${args.additionalFieldSlot}
          placeholder="Placeholder"
          label="What's your favourite type of coffee?"
          size=\${args.size}
        ></ic-text-field>
      </ic-radio-option>
      <ic-radio-option value="valueName2" label="Radio 2"></ic-radio-option>
    </ic-radio-group>
  \`,
  args: defaultArgs,
  argTypes: {
    orientation: {
      options: ["vertical", "horizontal"],
      control: {
        type: inlineRadioSelector
      }
    },
    size: {
      options: ["medium", "small"],
      control: {
        type: inlineRadioSelector
      }
    },
    validationAriaLive: {
      options: ["polite", "assertive", "off"],
      control: {
        type: inlineRadioSelector
      }
    },
    validationStatus: {
      options: ["no status", "error", "warning", "success"],
      control: {
        type: "radio"
      }
    },
    additionalFieldDisplay: {
      options: ["static", "dynamic"],
      control: {
        type: inlineRadioSelector
      }
    },
    additionalFieldSlot: {
      mapping: {
        true: "additional-field",
        false: ""
      }
    },
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: inlineRadioSelector
      }
    }
  },
  name: "Playground"
}`,...m.parameters?.docs?.source}}};const E=["Default","Horizontal","Required","Disabled","ConditionalDynamic","ConditionalStatic","HelperText","Small","Validation","AriaLiveBehaviour","Form","RTL","Playground"],$=Object.freeze(Object.defineProperty({__proto__:null,AriaLiveBehaviour:p,ConditionalDynamic:r,ConditionalStatic:d,Default:o,Disabled:t,Form:b,HelperText:c,Horizontal:n,Playground:m,RTL:v,Required:l,Small:s,Validation:u,__namedExportsOrder:E,default:T},Symbol.toStringTag,{value:"Module"}));export{$ as I};
