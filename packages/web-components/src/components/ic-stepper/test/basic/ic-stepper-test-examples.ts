export const defaultStepper = `
    <ic-stepper>
        <ic-step step-title="First"></ic-step>
        <ic-step
        step-title="Second With a Very Long Title"
        step-subtitle="Optional Subtitle"
        step-type="current"
        ></ic-step>
        <ic-step step-title="Third" step-type="disabled"></ic-step>
        <ic-step
        step-title="Fourth"
        step-subtitle="Optional Subtitle"
        step-type="completed"
        ></ic-step>
    </ic-stepper>`;

export const customConnectorWidthStepper = `
    <ic-stepper aligned="left" connector-width="150">
        <ic-step step-title="First"></ic-step>
        <ic-step
        step-title="Second With a Very Long Title"
        step-subtitle="Optional Subtitle"
        step-type="current"
        ></ic-step>
        <ic-step step-title="Third" step-type="disabled"></ic-step>
        <ic-step
        step-title="Fourth"
        step-subtitle="Optional Subtitle"
        step-type="completed"
        ></ic-step>
    </ic-stepper>`;

export const invalidConnectorWidthStepper = `
    <ic-stepper aligned="left" connector-width="96">
        <ic-step step-title="First"></ic-step>
        <ic-step
        step-title="Second With a Very Long Title"
        step-subtitle="Optional Subtitle"
        step-type="current"
        ></ic-step>
        <ic-step step-title="Third" step-type="disabled"></ic-step>
        <ic-step
        step-title="Fourth"
        step-subtitle="Optional Subtitle"
        step-type="completed"
        ></ic-step>
    </ic-stepper>`;

export const compactStepper = `
    <ic-stepper variant="compact" id="custom-compact-stepper">
        <ic-step 
        step-title="First"
        ></ic-step>
        <ic-step
          step-title="Second With a Very Long Title"
          step-subtitle="Optional subtitle that is long and should wrap"
          current
          step-type="current"
        ></ic-step>
        <ic-step
          step-title="Third"
          step-type="disabled"
        ></ic-step>
        <ic-step
          step-title="Fourth title that is long and should wrap"
          step-subtitle="Optional Subtitle"
          step-type="completed"
        ></ic-step>
        <ic-step
          step-title="Fifth and final step"
          step-subtitle="Optional Subtitle"
          icon
          step-status="optional"
          step-type="completed"
        ></ic-step>
      </ic-stepper>`;
