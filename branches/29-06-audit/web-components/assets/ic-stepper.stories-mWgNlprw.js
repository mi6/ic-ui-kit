import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./lit-html-CwvQb_NC.js";import{n as i,t as a}from"./taggedTemplateLiteral-pWa2IaV6.js";var o=e({CompactStepper:()=>v,CustomCompactStepper:()=>y,CustomConnectorWidth:()=>_,CustomStepper:()=>g,FullWidthStepper:()=>f,Internationalisation:()=>b,LeftAlignedStepper:()=>p,Playground:()=>S,SlottedHeading:()=>x,WithHiddenStepInformation:()=>m,WithoutHeadings:()=>h,__namedExportsOrder:()=>C,default:()=>d}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w=t((()=>{n(),i(),u={heading:`Create`,subheading:`Optional`,theme:`inherit`},d={title:`Web Components/Stepper`,component:`ic-stepper`},f={render:()=>r`<ic-stepper>
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update" type="active"></ic-step>
      <ic-step heading="Delete" type="disabled"></ic-step>
    </ic-stepper>`,name:`Full-width stepper`},p={render:()=>r`<ic-stepper aligned="left">
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update" type="active"></ic-step>
      <ic-step heading="Delete" type="disabled"></ic-step>
    </ic-stepper>`,name:`Left-aligned stepper`},m={render:()=>r`<ic-stepper hide-step-info>
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update" type="active"></ic-step>
      <ic-step heading="Delete" type="disabled"></ic-step>
    </ic-stepper>`,name:`With hidden step information`},h={render:()=>r`<ic-stepper>
      <ic-step type="completed"></ic-step>
      <ic-step type="completed"></ic-step>
      <ic-step type="current"></ic-step>
      <ic-step></ic-step>
    </ic-stepper>`,name:`Without headings`},g={render:()=>r`<ic-stepper>
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
    </ic-stepper>`,name:`Custom stepper`},_={render:()=>r`<ic-stepper aligned="left" connector-width="200">
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
    </ic-stepper>`,name:`Custom connector width`},v={render:()=>r(s||=a([`<ic-stepper variant="compact" id="standard-compact-stepper">
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
      <\/script>`])),name:`Compact stepper`},y={render:()=>r(c||=a([`<ic-stepper variant="compact" id="custom-compact-stepper">
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
      <\/script>`])),name:`Custom compact stepper`},b={render:()=>r(l||=a([`<span lang="de">
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
      <\/script>`])),name:`Internationalisation`},x={render:()=>r`<ic-stepper>
      <ic-step type="completed"><span slot="heading">Create</span></ic-step>
      <ic-step type="current"><span slot="heading">Read</span></ic-step>
      <ic-step type="active"><span slot="heading">Update</span></ic-step>
      <ic-step type="disabled"><span slot="heading">Delete</span></ic-step>
    </ic-stepper>`,name:`Slotted heading`},S={render:e=>r`<ic-stepper theme=${e.theme}>
      <ic-step
        heading=${e.heading}
        subheading=${e.subheading}
        type="completed"
      ></ic-step>
      <ic-step heading="Read" type="current" subheading="Optional"></ic-step>
      <ic-step heading="Update" type="active"></ic-step>
      <ic-step heading="Delete" type="disabled" subheading="Optional"></ic-step>
    </ic-stepper>`,args:u,argTypes:{theme:{options:[`inherit`,`light`,`dark`],control:{type:`inline-radio`}}},name:`Playground`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-stepper>
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update" type="active"></ic-step>
      <ic-step heading="Delete" type="disabled"></ic-step>
    </ic-stepper>\`,
  name: "Full-width stepper"
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-stepper aligned="left">
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update" type="active"></ic-step>
      <ic-step heading="Delete" type="disabled"></ic-step>
    </ic-stepper>\`,
  name: "Left-aligned stepper"
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-stepper hide-step-info>
      <ic-step heading="Create" type="completed"></ic-step>
      <ic-step heading="Read" type="current"></ic-step>
      <ic-step heading="Update" type="active"></ic-step>
      <ic-step heading="Delete" type="disabled"></ic-step>
    </ic-stepper>\`,
  name: "With hidden step information"
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-stepper>
      <ic-step type="completed"></ic-step>
      <ic-step type="completed"></ic-step>
      <ic-step type="current"></ic-step>
      <ic-step></ic-step>
    </ic-stepper>\`,
  name: "Without headings"
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ic-stepper>
      <ic-step type="completed"><span slot="heading">Create</span></ic-step>
      <ic-step type="current"><span slot="heading">Read</span></ic-step>
      <ic-step type="active"><span slot="heading">Update</span></ic-step>
      <ic-step type="disabled"><span slot="heading">Delete</span></ic-step>
    </ic-stepper>\`,
  name: "Slotted heading"
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`FullWidthStepper`,`LeftAlignedStepper`,`WithHiddenStepInformation`,`WithoutHeadings`,`CustomStepper`,`CustomConnectorWidth`,`CompactStepper`,`CustomCompactStepper`,`Internationalisation`,`SlottedHeading`,`Playground`]}));w();export{v as CompactStepper,y as CustomCompactStepper,_ as CustomConnectorWidth,g as CustomStepper,f as FullWidthStepper,b as Internationalisation,p as LeftAlignedStepper,S as Playground,x as SlottedHeading,m as WithHiddenStepInformation,h as WithoutHeadings,C as __namedExportsOrder,d as default,w as n,o as t};