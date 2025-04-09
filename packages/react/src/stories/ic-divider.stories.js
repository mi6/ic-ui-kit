/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { IcDivider, IcTypography } from "../components";

const defaultArgs = {
  borderStyle: "solid",
  label: "",
  labelPlacement: "none",
  monochrome: false,
  orientation: "horizontal",
  theme: "inherit",
  weight: "thin",
  "--ic-divider-horizontal-width": "100%",
  "--ic-divider-vertical-height": "400px",
  "--ic-divider-background": "",
  "--ic-divider-background-monochrome": "",
  "--ic-divider-label": "",
  "--ic-divider-label-monochrome": "",
  "--ic-divider-label-width": "",
};

export default {
  title: "Divider",
  component: IcDivider,
};

export const Theme = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--ic-space-md)",
      }}
    >
      <IcDivider
        theme="inherit"
        weight="medium"
        label="theme='inherit'"
        labelPlacement="left"
      />
      <IcDivider
        theme="inherit"
        monochrome
        weight="medium"
        label="theme='inherit', monochrome='true'"
        labelPlacement="left"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "var(--ic-color-background-primary-light)",
          width: "100%",
          padding: "var(--ic-space-xs) 0",
          gap: "var(--ic-space-md)",
        }}
      >
        <IcDivider
          theme="light"
          weight="medium"
          label="theme='light'"
          labelPlacement="left"
        />
        <IcDivider
          theme="light"
          monochrome
          weight="medium"
          label="theme='light', monochrome='true'"
          labelPlacement="left"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#17191c",
          width: "100%",
          padding: "var(--ic-space-xs) 0",
          gap: "var(--ic-space-md)",
        }}
      >
        <IcDivider
          theme="dark"
          weight="medium"
          label="theme='dark'"
          labelPlacement="left"
        />
        <IcDivider
          theme="dark"
          monochrome
          weight="medium"
          label="theme='dark', monochrome='true'"
          labelPlacement="left"
        />
      </div>
    </div>
  ),

  name: "Theme",
};

export const Weight = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--ic-space-md)",
      }}
    >
      <IcDivider weight="thin" />
      <IcDivider weight="thin" borderStyle="dashed" />
      <IcDivider weight="thin" label="End of section" labelPlacement="center" />
      <IcDivider weight="medium" />
      <IcDivider weight="medium" borderStyle="dashed" />
      <IcDivider
        weight="medium"
        label="End of section"
        labelPlacement="center"
      />
      <IcDivider weight="thick" />
      <IcDivider weight="thick" borderStyle="dashed" />
      <IcDivider
        weight="thick"
        label="End of section"
        labelPlacement="center"
      />
      <IcDivider weight="very-thick" />
      <IcDivider weight="very-thick" borderStyle="dashed" />
      <IcDivider
        weight="very-thick"
        label="End of section"
        labelPlacement="center"
      />
    </div>
  ),

  name: "Weight",
};

export const BorderStyle = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--ic-space-md)",
      }}
    >
      <IcDivider borderStyle="solid" />
      <IcDivider borderStyle="dashed" />
    </div>
  ),

  name: "Border style",
};

export const Vertical = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "var(--ic-space-lg)",
        height: "400px",
      }}
    >
      <IcDivider labelPlacement="top" orientation="vertical" weight="thin">
        <IcTypography variant="label" slot="label">
          <p
            style={{
              width: "max-content",
            }}
          >
            Slotted label top
          </p>
        </IcTypography>
      </IcDivider>
      <IcDivider orientation="vertical" weight="thin" borderStyle="dashed" />
      <IcDivider orientation="vertical" weight="medium" />
      <IcDivider
        label="Label center"
        labelPlacement="center"
        orientation="vertical"
        borderStyle="dashed"
        weight="medium"
      />
      <IcDivider orientation="vertical" weight="thick" />
      <IcDivider orientation="vertical" weight="thick" borderStyle="dashed" />
      <IcDivider orientation="vertical" weight="very-thick" />
      <IcDivider
        orientation="vertical"
        weight="very-thick"
        borderStyle="dashed"
      />
    </div>
  ),

  name: "Vertical",
};

export const MaxContent = {
  render: () => (
    <>
      <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--ic-space-lg)',
      }}
    >
      <IcDivider
        label="🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶
        🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶"
        labelPlacement="left"
      ></IcDivider>
      <IcDivider
        label="🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶
        🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶"
        labelPlacement="center"
      ></IcDivider>
      <IcDivider labelPlacement="right">
        <IcTypography
          variant="label"
          slot="label"
          style={{
            width: 'max-content',
            maxWidth: '100%',
          }}
        >
          <p style={{ width: 'inherit' }}>
            A slotted label: 🎶 Now this is a story all about how my life got
            brewed up and turned around. And I’d like to take a minute, just
            sit right there; I’ll tell you how I became the prince of a café
            called Bel-Air 🎶
            <br />
            🎶 In west Philadelphia, born and raised; in the coffee shop was
            where I spent most of my days. Chillin’ out, maxin’, relaxin’ all
            cool, sippin’ on some cappuccinos outside of the school 🎶
          </p>
        </IcTypography>
      </IcDivider>
    </div>
    <div
      style={{
        display: 'flex',
        gap: 'var(--ic-space-lg)',
        height: '600px',
        marginTop: 'var(--ic-space-lg)',
      }}
    >
      <IcDivider
        label="A vertical divider: 🎶 Now this is a story all about how my life got brewed up and turned around. And I’d like to take a minute, just sit right there; I’ll tell you how I became the prince of a café called Bel-Air 🎶
      🎶 In west Philadelphia, born and raised; in the coffee shop was where I spent most of my days. Chillin’ out, maxin’, relaxin’ all cool, sippin’ on some cappuccinos outside of the school 🎶"
        labelPlacement="top"
        orientation="vertical"
      ></IcDivider>
    </div>
    </>
  ),

  name: "Max content",
};

export const LabelPlacement = {
  render: () => (
    <>
      <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--ic-space-lg)',
      }}
    >
      <IcDivider label="Label left" labelPlacement="left" />
      <IcDivider label="Label center" labelPlacement="center" />
      <IcDivider label="Label right" labelPlacement="right" />
      <IcDivider labelPlacement="left">
        <IcTypography variant="label" slot="label">
          <p style={{ width: 'max-content' }}>Slotted label left</p>
        </IcTypography>
      </IcDivider>
      <IcDivider labelPlacement="center">
        <IcTypography variant="label" slot="label">
          <p style={{ width: 'max-content' }}>Slotted label center</p>
        </IcTypography>
      </IcDivider>
      <IcDivider labelPlacement="right">
        <IcTypography variant="label" slot="label">
          <p style={{ width: 'max-content' }}>Slotted label right</p>
        </IcTypography>
      </IcDivider>
    </div>
    <div
      style={{
        display: 'flex',
        gap: 'var(--ic-space-lg)',
        height: '200px',
        marginTop: 'var(--ic-space-lg)',
      }}
    >
      <IcDivider
        label="Label top"
        labelPlacement="top"
        orientation="vertical"
      />
      <IcDivider
        label="Label center"
        labelPlacement="center"
        orientation="vertical"
      />
      <IcDivider
        label="Label bottom"
        labelPlacement="bottom"
        orientation="vertical"
      />
      <IcDivider labelPlacement="top" orientation="vertical">
        <IcTypography variant="label" slot="label">
          <p style={{ width: 'max-content' }}>Slotted label top</p>
        </IcTypography>
      </IcDivider>
      <IcDivider labelPlacement="center" orientation="vertical">
        <IcTypography variant="label" slot="label">
          <p style={{ width: 'max-content' }}>Slotted label center</p>
        </IcTypography>
      </IcDivider>
      <IcDivider labelPlacement="bottom" orientation="vertical">
        <IcTypography variant="label" slot="label">
          <p style={{ width: 'max-content' }}>Slotted label bottom</p>
        </IcTypography>
      </IcDivider>
    </div>
    </>
  ),

  name: "Label placement",
};

export const Playground = {
  render: (args) => {
    const backgroundColor =
      args.theme === "dark"
        ? "#17191c"
        : args.theme === "light"
          ? "var(--ic-color-background-primary-light)"
          : "transparent";

    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "var(--ic-space-md)",
          backgroundColor: `${backgroundColor}`,
          boxSizing: "border-box",
        }}
      >
        <IcDivider
          monochrome={args.monochrome}
          orientation={args.orientation}
          theme={args.theme}
          borderStyle={args["borderStyle"]}
          weight={args.weight}
          label={args.label}
          labelPlacement={args.labelPlacement}
          style={{
            "--ic-divider-horizontal-width": `${args["--ic-divider-horizontal-width"]}`,
            "--ic-divider-vertical-height": `${args["--ic-divider-vertical-height"]}`,
            ["--ic-divider-background"]: `${args["--ic-divider-background"]}`,
            ["--ic-divider-background-monochrome"]: `${args["--ic-divider-background-monochrome"]}`,
            ["--ic-divider-label"]: `${args["--ic-divider-label"]}`,
            ["--ic-divider-label-monochrome"]: `${args["--ic-divider-label-monochrome"]}`,
            ["--ic-divider-label-width"]: `${args["--ic-divider-label-width"]}`,
          }}
        />
      </div>
    );
  },

  args: defaultArgs,

  argTypes: {
    borderStyle: {
      options: ["solid", "dashed"],

      control: {
        type: "inline-radio",
      },
    },

    label: {
      mapping: {
        none: "",
      },
    },

    labelPlacement: {
      options: ["none", "left", "center", "right", "top", "bottom"],

      mapping: {
        none: "",
      },

      control: {
        type: "radio",
      },
    },

    orientation: {
      options: ["horizontal", "vertical"],

      control: {
        type: "inline-radio",
      },
    },

    theme: {
      options: ["inherit", "dark", "light"],

      control: {
        type: "radio",
      },
    },

    weight: {
      options: ["thin", "medium", "thick", "very-thick"],

      control: {
        type: "radio",
      },
    },

    "--ic-divider-background": {
      control: {
        type: "color",
      },
    },

    "--ic-divider-background-monochrome": {
      control: {
        type: "color",
      },
    },

    "--ic-divider-label": {
      control: {
        type: "color",
      },
    },

    "--ic-divider-label-monochrome": {
      control: {
        type: "color",
      },
    },
  },

  name: "Playground",
};
