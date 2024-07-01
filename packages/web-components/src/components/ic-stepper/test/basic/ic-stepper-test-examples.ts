export const defaultStepper = `
    <ic-stepper>
        <ic-step heading="First"></ic-step>
        <ic-step
        heading="Second With a Very Long Title"
        subheading="Optional Subtitle"
        type="current"
        ></ic-step>
        <ic-step heading="Third" type="disabled"></ic-step>
        <ic-step
        heading="Fourth"
        subheading="Optional Subtitle"
        type="completed"
        ></ic-step>
    </ic-stepper>`;

export const customConnectorWidthStepper = `
    <ic-stepper aligned="left" connector-width="150">
        <ic-step heading="First"></ic-step>
        <ic-step
        heading="Second With a Very Long Title"
        subheading="Optional Subtitle"
        type="current"
        ></ic-step>
        <ic-step heading="Third" type="disabled"></ic-step>
        <ic-step
        heading="Fourth"
        subheading="Optional Subtitle"
        type="completed"
        ></ic-step>
    </ic-stepper>`;

export const invalidConnectorWidthStepper = `
    <ic-stepper aligned="left" connector-width="96">
        <ic-step heading="First"></ic-step>
        <ic-step
        heading="Second With a Very Long Title"
        subheading="Optional Subtitle"
        type="current"
        ></ic-step>
        <ic-step heading="Third" type="disabled"></ic-step>
        <ic-step
        heading="Fourth"
        subheading="Optional Subtitle"
        type="completed"
        ></ic-step>
    </ic-stepper>`;

export const compactStepper = `
    <ic-stepper variant="compact" id="custom-compact-stepper">
        <ic-step 
        heading="First"
        ></ic-step>
        <ic-step
          heading="Second With a Very Long Title"
          subheading="Optional subtitle that is long and should wrap"
          current
          type="current"
        ></ic-step>
        <ic-step
          heading="Third"
          type="disabled"
        ></ic-step>
        <ic-step
          heading="Fourth title that is long and should wrap"
          subheading="Optional Subtitle"
          type="completed"
        ></ic-step>
        <ic-step
          heading="Fifth and final step"
          subheading="Optional Subtitle"
          icon
          status="optional"
          type="completed"
        ></ic-step>
      </ic-stepper>`;
