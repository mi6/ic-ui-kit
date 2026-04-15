var h=Object.freeze,f=Object.defineProperty;var m=(t,S)=>h(f(t,"raw",{value:h(S||t.slice())}));import{x as e}from"./lit-html-CWQq0DyO.js";const C={heading:"Create",subheading:"Optional",theme:"inherit"},x={title:"Web Components/Stepper",component:"ic-stepper"},n={render:()=>e`<ic-stepper>
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update" type="active"></ic-step>
      <ic-step heading="Delete" type="disabled"></ic-step>
    </ic-stepper>`,name:"Full-width stepper"},s={render:()=>e`<ic-stepper aligned="left">
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update" type="active"></ic-step>
      <ic-step heading="Delete" type="disabled"></ic-step>
    </ic-stepper>`,name:"Left-aligned stepper"},p={render:()=>e`<ic-stepper hide-step-info>
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update" type="active"></ic-step>
      <ic-step heading="Delete" type="disabled"></ic-step>
    </ic-stepper>`,name:"With hidden step information"},i={render:()=>e`<ic-stepper>
      <ic-step type="completed"></ic-step>
      <ic-step type="completed"></ic-step>
      <ic-step type="current"></ic-step>
      <ic-step></ic-step>
    </ic-stepper>`,name:"Without headings"},c={render:()=>e`<ic-stepper>
      <ic-step heading="First"></ic-step>
      <ic-step
        heading="Second With a Very Long Title"
        subheading="Optional subtitle that is long and should wrap"
        type="current"
      ></ic-step>
      <ic-step
        heading="Third"
        subheading="Optional subtitle"
        type="disabled"
      ></ic-step>
      <ic-step
        heading="Fourth title that is long and should wrap"
        subheading="Optional Subtitle"
        type="completed"
      ></ic-step>
    </ic-stepper>`,name:"Custom stepper"},r={render:()=>e`<ic-stepper aligned="left" connector-width="200">
      <ic-step heading="First"></ic-step>
      <ic-step
        heading="Second With a Very Long Title"
        subheading="Optional subtitle that is long and should wrap"
        type="current"
      ></ic-step>
      <ic-step heading="Third" type="disabled"></ic-step>
      <ic-step
        heading="Fourth title that is long and should wrap"
        subheading="Optional Subtitle"
        type="completed"
      ></ic-step>
    </ic-stepper>`,name:"Custom connector width"};var g;const a={render:()=>e(g||(g=m([`<ic-stepper variant="compact" id="standard-compact-stepper">
        <ic-step heading="Create"></ic-step>
        <ic-step heading="Read" type="current"></ic-step>
        <ic-step heading="Update" status="optional"></ic-step>
        <ic-step heading="Delete" status="required"></ic-step>
      </ic-stepper>
      <ic-button
        class="back-btn-compact-stepper"
        style="margin-right: var(--ic-space-lg)"
        onclick="toPreviousStep()"
        >Back</ic-button
      >
      <ic-button class="next-btn-compact-stepper" onclick="toNextStep()"
        >Next</ic-button
      >
      <script>
        const compactStepTypes = [
          "active",
          "completed",
          "disabled",
          "completed",
        ];
        const backBtn = document.querySelector(".back-btn-compact-stepper");
        const nextBtn = document.querySelector(".next-btn-compact-stepper");
        const steps = document.querySelectorAll(
          "#standard-compact-stepper > ic-step"
        );
        function toPreviousStep() {
          for (let i = steps.length - 1; i > 0; i--) {
            if (steps[i].type === "current") {
              steps[i].type = compactStepTypes[i];
              steps[i - 1].type = "current";
              i--;
            }
          }
          if (steps[steps.length - 2].type === "current") {
            nextBtn.setAttribute("disabled", "false");
          }
          if (steps[0].type === "current") {
            backBtn.setAttribute("disabled", "true");
          }
        }
        function toNextStep() {
          for (let i = 0; i < steps.length - 1; i++) {
            if (steps[i].type === "current") {
              steps[i].type = compactStepTypes[i];
              steps[i + 1].type = "current";
              i++;
            }
          }
          if (steps[1].type === "current") {
            backBtn.setAttribute("disabled", "false");
          }
          if (steps[steps.length - 1].type === "current") {
            nextBtn.setAttribute("disabled", "true");
          }
        }
      <\/script>`]))),name:"Compact stepper"};var b;const o={render:()=>e(b||(b=m([`<ic-stepper variant="compact" id="custom-compact-stepper">
        <ic-step heading="First"></ic-step>
        <ic-step
          heading="Second With a Very Long Title"
          subheading="Optional subtitle that is long and should wrap"
          type="current"
        ></ic-step>
        <ic-step heading="Third" type="disabled"></ic-step>
        <ic-step
          heading="Fourth title that is long and should wrap"
          subheading="Optional Subtitle"
          type="completed"
        ></ic-step>
        <ic-step
          heading="Fifth and final step"
          subheading="Optional Subtitle"
          status="optional"
          type="disabled"
        ></ic-step>
      </ic-stepper>
      <ic-button
        class="back-btn-custom-compact-stepper"
        style="margin-right: var(--ic-space-lg)"
        onclick="toPreviousCustomStep()"
        >Back</ic-button
      >
      <ic-button
        class="next-btn-custom-compact-stepper"
        onclick="toNextCustomStep()"
        >Next</ic-button
      >
      <script>
        const customCompactStepTypes = [
          "active",
          "completed",
          "disabled",
          "completed",
          "disabled",
        ];
        const backBtnCustomCompactStepper = document.querySelector(
          ".back-btn-custom-compact-stepper"
        );
        const nextBtnCustomCompactStepper = document.querySelector(
          ".next-btn-custom-compact-stepper"
        );
        const customSteps = document.querySelectorAll(
          "#custom-compact-stepper > ic-step"
        );
        function toPreviousCustomStep() {
          for (let i = customSteps.length - 1; i > 0; i--) {
            if (customSteps[i].type === "current") {
              customSteps[i].type = customCompactStepTypes[i];
              customSteps[i - 1].type = "current";
              i--;
            }
          }
          if (customSteps[customSteps.length - 2].type === "current") {
            nextBtnCustomCompactStepper.setAttribute("disabled", "false");
          }
          if (customSteps[0].type === "current") {
            backBtnCustomCompactStepper.setAttribute("disabled", "true");
          }
        }
        function toNextCustomStep() {
          for (let i = 0; i < customSteps.length - 1; i++) {
            if (customSteps[i].type === "current") {
              customSteps[i].type = customCompactStepTypes[i];
              customSteps[i + 1].type = "current";
              i++;
            }
          }
          if (customSteps[1].type === "current") {
            backBtnCustomCompactStepper.setAttribute("disabled", "false");
          }
          if (customSteps[customSteps.length - 1].type === "current") {
            nextBtnCustomCompactStepper.setAttribute("disabled", "true");
          }
        }
      <\/script>`]))),name:"Custom compact stepper"};var y;const d={render:()=>e(y||(y=m([`<span lang="de">
        <ic-stepper variant="compact" id="standard-compact-stepper">
          <ic-step heading="Aktualisierung"></ic-step>
          <ic-step id="read-step" heading="Lesen" type="current"></ic-step>
          <ic-step heading="Aktualisierung" status="optional"></ic-step>
          <ic-step heading="Löschen" status="required"></ic-step>
        </ic-stepper>
      </span>
      <p>
        This stepper uses the icI18n prop to customise text elements within the
        stepper.
      </p>
      <p>
        It is also wrapped in a <code>&lt;span lang="de"&gt;</code> to change
        the language for assistive technology
      </p>
      <ic-button
        class="back-btn-compact-stepper"
        style="margin-right: var(--ic-space-lg)"
        onclick="toPreviousStep()"
        >Back</ic-button
      >
      <ic-button class="next-btn-compact-stepper" onclick="toNextStep()"
        >Next</ic-button
      >
      <script>
        const stepper = document.getElementById("standard-compact-stepper");
        stepper.icI18n = {
          next: "Der nächste",
          step: "Schritt",
          steps: "Schritte",
          of: "von",
          lastStep: "Letzter Schritt",
          completed: "abgeschlossen",
          notRequired: "Nicht erforderlich",
          required: "erforderlich",
          optional: "wahlweise",
        };
        const compactStepTypes = [
          "active",
          "completed",
          "disabled",
          "completed",
        ];
        const backBtn = document.querySelector(".back-btn-compact-stepper");
        const nextBtn = document.querySelector(".next-btn-compact-stepper");
        const steps = document.querySelectorAll(
          "#standard-compact-stepper > ic-step"
        );
        function toPreviousStep() {
          for (let i = steps.length - 1; i > 0; i--) {
            if (steps[i].type === "current") {
              steps[i].type = compactStepTypes[i];
              steps[i - 1].type = "current";
              i--;
            }
          }
          if (steps[steps.length - 2].type === "current") {
            nextBtn.setAttribute("disabled", "false");
          }
          if (steps[0].type === "current") {
            backBtn.setAttribute("disabled", "true");
          }
        }
        function toNextStep() {
          for (let i = 0; i < steps.length - 1; i++) {
            if (steps[i].type === "current") {
              steps[i].type = compactStepTypes[i];
              steps[i + 1].type = "current";
              i++;
            }
          }
          if (steps[1].type === "current") {
            backBtn.setAttribute("disabled", "false");
          }
          if (steps[steps.length - 1].type === "current") {
            nextBtn.setAttribute("disabled", "true");
          }
        }
      <\/script>`]))),name:"Internationalisation"},u={render:()=>e`<ic-stepper>
      <ic-step type="completed"><span slot="heading">Create</span></ic-step>
      <ic-step type="current"><span slot="heading">Read</span></ic-step>
      <ic-step type="active"><span slot="heading">Update</span></ic-step>
      <ic-step type="disabled"><span slot="heading">Delete</span></ic-step>
    </ic-stepper>`,name:"Slotted heading"},l={render:t=>e`<ic-stepper theme=${t.theme}>
      <ic-step
        heading=${t.heading}
        subheading=${t.subheading}
        type="completed"
      ></ic-step>
      <ic-step heading="Read" type="current" subheading="Optional"></ic-step>
      <ic-step heading="Update" type="active"></ic-step>
      <ic-step heading="Delete" type="disabled" subheading="Optional"></ic-step>
    </ic-stepper>`,args:C,argTypes:{theme:{options:["inherit","light","dark"],control:{type:"inline-radio"}}},name:"Playground"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-stepper>
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update" type="active"></ic-step>
      <ic-step heading="Delete" type="disabled"></ic-step>
    </ic-stepper>\`,
  name: "Full-width stepper"
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-stepper aligned="left">
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update" type="active"></ic-step>
      <ic-step heading="Delete" type="disabled"></ic-step>
    </ic-stepper>\`,
  name: "Left-aligned stepper"
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-stepper hide-step-info>
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update" type="active"></ic-step>
      <ic-step heading="Delete" type="disabled"></ic-step>
    </ic-stepper>\`,
  name: "With hidden step information"
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-stepper>
      <ic-step type="completed"></ic-step>
      <ic-step type="completed"></ic-step>
      <ic-step type="current"></ic-step>
      <ic-step></ic-step>
    </ic-stepper>\`,
  name: "Without headings"
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-stepper>
      <ic-step heading="First"></ic-step>
      <ic-step
        heading="Second With a Very Long Title"
        subheading="Optional subtitle that is long and should wrap"
        type="current"
      ></ic-step>
      <ic-step
        heading="Third"
        subheading="Optional subtitle"
        type="disabled"
      ></ic-step>
      <ic-step
        heading="Fourth title that is long and should wrap"
        subheading="Optional Subtitle"
        type="completed"
      ></ic-step>
    </ic-stepper>\`,
  name: "Custom stepper"
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-stepper aligned="left" connector-width="200">
      <ic-step heading="First"></ic-step>
      <ic-step
        heading="Second With a Very Long Title"
        subheading="Optional subtitle that is long and should wrap"
        type="current"
      ></ic-step>
      <ic-step heading="Third" type="disabled"></ic-step>
      <ic-step
        heading="Fourth title that is long and should wrap"
        subheading="Optional Subtitle"
        type="completed"
      ></ic-step>
    </ic-stepper>\`,
  name: "Custom connector width"
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-stepper variant="compact" id="standard-compact-stepper">
        <ic-step heading="Create"></ic-step>
        <ic-step heading="Read" type="current"></ic-step>
        <ic-step heading="Update" status="optional"></ic-step>
        <ic-step heading="Delete" status="required"></ic-step>
      </ic-stepper>
      <ic-button
        class="back-btn-compact-stepper"
        style="margin-right: var(--ic-space-lg)"
        onclick="toPreviousStep()"
        >Back</ic-button
      >
      <ic-button class="next-btn-compact-stepper" onclick="toNextStep()"
        >Next</ic-button
      >
      <script>
        const compactStepTypes = [
          "active",
          "completed",
          "disabled",
          "completed",
        ];
        const backBtn = document.querySelector(".back-btn-compact-stepper");
        const nextBtn = document.querySelector(".next-btn-compact-stepper");
        const steps = document.querySelectorAll(
          "#standard-compact-stepper > ic-step"
        );
        function toPreviousStep() {
          for (let i = steps.length - 1; i > 0; i--) {
            if (steps[i].type === "current") {
              steps[i].type = compactStepTypes[i];
              steps[i - 1].type = "current";
              i--;
            }
          }
          if (steps[steps.length - 2].type === "current") {
            nextBtn.setAttribute("disabled", "false");
          }
          if (steps[0].type === "current") {
            backBtn.setAttribute("disabled", "true");
          }
        }
        function toNextStep() {
          for (let i = 0; i < steps.length - 1; i++) {
            if (steps[i].type === "current") {
              steps[i].type = compactStepTypes[i];
              steps[i + 1].type = "current";
              i++;
            }
          }
          if (steps[1].type === "current") {
            backBtn.setAttribute("disabled", "false");
          }
          if (steps[steps.length - 1].type === "current") {
            nextBtn.setAttribute("disabled", "true");
          }
        }
      <\/script>\`,
  name: "Compact stepper"
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-stepper variant="compact" id="custom-compact-stepper">
        <ic-step heading="First"></ic-step>
        <ic-step
          heading="Second With a Very Long Title"
          subheading="Optional subtitle that is long and should wrap"
          type="current"
        ></ic-step>
        <ic-step heading="Third" type="disabled"></ic-step>
        <ic-step
          heading="Fourth title that is long and should wrap"
          subheading="Optional Subtitle"
          type="completed"
        ></ic-step>
        <ic-step
          heading="Fifth and final step"
          subheading="Optional Subtitle"
          status="optional"
          type="disabled"
        ></ic-step>
      </ic-stepper>
      <ic-button
        class="back-btn-custom-compact-stepper"
        style="margin-right: var(--ic-space-lg)"
        onclick="toPreviousCustomStep()"
        >Back</ic-button
      >
      <ic-button
        class="next-btn-custom-compact-stepper"
        onclick="toNextCustomStep()"
        >Next</ic-button
      >
      <script>
        const customCompactStepTypes = [
          "active",
          "completed",
          "disabled",
          "completed",
          "disabled",
        ];
        const backBtnCustomCompactStepper = document.querySelector(
          ".back-btn-custom-compact-stepper"
        );
        const nextBtnCustomCompactStepper = document.querySelector(
          ".next-btn-custom-compact-stepper"
        );
        const customSteps = document.querySelectorAll(
          "#custom-compact-stepper > ic-step"
        );
        function toPreviousCustomStep() {
          for (let i = customSteps.length - 1; i > 0; i--) {
            if (customSteps[i].type === "current") {
              customSteps[i].type = customCompactStepTypes[i];
              customSteps[i - 1].type = "current";
              i--;
            }
          }
          if (customSteps[customSteps.length - 2].type === "current") {
            nextBtnCustomCompactStepper.setAttribute("disabled", "false");
          }
          if (customSteps[0].type === "current") {
            backBtnCustomCompactStepper.setAttribute("disabled", "true");
          }
        }
        function toNextCustomStep() {
          for (let i = 0; i < customSteps.length - 1; i++) {
            if (customSteps[i].type === "current") {
              customSteps[i].type = customCompactStepTypes[i];
              customSteps[i + 1].type = "current";
              i++;
            }
          }
          if (customSteps[1].type === "current") {
            backBtnCustomCompactStepper.setAttribute("disabled", "false");
          }
          if (customSteps[customSteps.length - 1].type === "current") {
            nextBtnCustomCompactStepper.setAttribute("disabled", "true");
          }
        }
      <\/script>\`,
  name: "Custom compact stepper"
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<span lang="de">
        <ic-stepper variant="compact" id="standard-compact-stepper">
          <ic-step heading="Aktualisierung"></ic-step>
          <ic-step id="read-step" heading="Lesen" type="current"></ic-step>
          <ic-step heading="Aktualisierung" status="optional"></ic-step>
          <ic-step heading="Löschen" status="required"></ic-step>
        </ic-stepper>
      </span>
      <p>
        This stepper uses the icI18n prop to customise text elements within the
        stepper.
      </p>
      <p>
        It is also wrapped in a <code>&lt;span lang="de"&gt;</code> to change
        the language for assistive technology
      </p>
      <ic-button
        class="back-btn-compact-stepper"
        style="margin-right: var(--ic-space-lg)"
        onclick="toPreviousStep()"
        >Back</ic-button
      >
      <ic-button class="next-btn-compact-stepper" onclick="toNextStep()"
        >Next</ic-button
      >
      <script>
        const stepper = document.getElementById("standard-compact-stepper");
        stepper.icI18n = {
          next: "Der nächste",
          step: "Schritt",
          steps: "Schritte",
          of: "von",
          lastStep: "Letzter Schritt",
          completed: "abgeschlossen",
          notRequired: "Nicht erforderlich",
          required: "erforderlich",
          optional: "wahlweise",
        };
        const compactStepTypes = [
          "active",
          "completed",
          "disabled",
          "completed",
        ];
        const backBtn = document.querySelector(".back-btn-compact-stepper");
        const nextBtn = document.querySelector(".next-btn-compact-stepper");
        const steps = document.querySelectorAll(
          "#standard-compact-stepper > ic-step"
        );
        function toPreviousStep() {
          for (let i = steps.length - 1; i > 0; i--) {
            if (steps[i].type === "current") {
              steps[i].type = compactStepTypes[i];
              steps[i - 1].type = "current";
              i--;
            }
          }
          if (steps[steps.length - 2].type === "current") {
            nextBtn.setAttribute("disabled", "false");
          }
          if (steps[0].type === "current") {
            backBtn.setAttribute("disabled", "true");
          }
        }
        function toNextStep() {
          for (let i = 0; i < steps.length - 1; i++) {
            if (steps[i].type === "current") {
              steps[i].type = compactStepTypes[i];
              steps[i + 1].type = "current";
              i++;
            }
          }
          if (steps[1].type === "current") {
            backBtn.setAttribute("disabled", "false");
          }
          if (steps[steps.length - 1].type === "current") {
            nextBtn.setAttribute("disabled", "true");
          }
        }
      <\/script>\`,
  name: "Internationalisation"
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-stepper>
      <ic-step type="completed"><span slot="heading">Create</span></ic-step>
      <ic-step type="current"><span slot="heading">Read</span></ic-step>
      <ic-step type="active"><span slot="heading">Update</span></ic-step>
      <ic-step type="disabled"><span slot="heading">Delete</span></ic-step>
    </ic-stepper>\`,
  name: "Slotted heading"
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ic-stepper theme=\${args.theme}>
      <ic-step
        heading=\${args.heading}
        subheading=\${args.subheading}
        type="completed"
      ></ic-step>
      <ic-step heading="Read" type="current" subheading="Optional"></ic-step>
      <ic-step heading="Update" type="active"></ic-step>
      <ic-step heading="Delete" type="disabled" subheading="Optional"></ic-step>
    </ic-stepper>\`,
  args: defaultArgs,
  argTypes: {
    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: "inline-radio"
      }
    }
  },
  name: "Playground"
}`,...l.parameters?.docs?.source}}};const k=["FullWidthStepper","LeftAlignedStepper","WithHiddenStepInformation","WithoutHeadings","CustomStepper","CustomConnectorWidth","CompactStepper","CustomCompactStepper","Internationalisation","SlottedHeading","Playground"],A=Object.freeze(Object.defineProperty({__proto__:null,CompactStepper:a,CustomCompactStepper:o,CustomConnectorWidth:r,CustomStepper:c,FullWidthStepper:n,Internationalisation:d,LeftAlignedStepper:s,Playground:l,SlottedHeading:u,WithHiddenStepInformation:p,WithoutHeadings:i,__namedExportsOrder:k,default:x},Symbol.toStringTag,{value:"Module"}));export{A as I};
