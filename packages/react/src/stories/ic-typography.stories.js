/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import { IcTypography } from "../components";

const defaultArgs = {
  applyVerticalMargins: false,
  bold: false,
  italic: false,
  strikethrough: false,
  underline: false,
  variant: "body",
  theme: "inherit",
};

const AGGrid = () => {
  const JobTitleRenderer = (params) => (
    <IcTypography>
      <p>{params.value}</p>
    </IcTypography>
  );

  const rowData = [
    {
      firstName: "Joe",
      lastName: "Bloggs",
      jobTitle: "Developer",
      age: 30,
    },
    {
      firstName: "Sarah",
      lastName: "Smith",
      jobTitle: "Analyst",
      age: 28,
    },
    {
      firstName: "Mark",
      lastName: "Owens",
      jobTitle: "Team Lead",
      age: 45,
    },
    {
      firstName: "Naomi",
      lastName: "Thomas",
      jobTitle: "Senior Software Architect",
      age: 32,
    },
    {
      firstName: "Luke",
      lastName: "Ashford",
      jobTitle: "Junior Developer",
      age: 18,
    },
  ];

  const colDefs = [
    { field: "firstName" },
    { field: "lastName" },
    { field: "jobTitle", cellRenderer: JobTitleRenderer },
    { field: "age" },
  ];

  return (
    <>
      <div className="ag-theme-quartz">
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          domLayout="autoHeight"
        />
      </div>
    </>
  );
};

export default {
  title: "Typography",
  component: IcTypography,
};

export const Default = {
  render: () => <IcTypography>I am typography</IcTypography>,
  name: "Default",
};

export const Variants = {
  render: () => (
    <>
      <IcTypography variant="h1">Extra large title</IcTypography>
      <IcTypography variant="h2">Large title</IcTypography>
      <IcTypography variant="h3">Medium title</IcTypography>
      <IcTypography variant="h4">Small title</IcTypography>
      <IcTypography variant="subtitle-large">Subtitle 1</IcTypography>
      <IcTypography variant="subtitle-small">Subtitle 2</IcTypography>
      <IcTypography variant="body">Body text</IcTypography>
      <IcTypography variant="label">Label</IcTypography>
      <IcTypography variant="caption">Caption text</IcTypography>
      <IcTypography variant="caption-uppercase">Caption uppercase</IcTypography>
      <IcTypography variant="label-uppercase">Label uppercase</IcTypography>
      <IcTypography variant="code-large">Code large</IcTypography>
      <IcTypography variant="code-small">Code small</IcTypography>
      <IcTypography variant="code-extra-small">Code extra small</IcTypography>
    </>
  ),

  name: "Variants",
};

export const ComponentOverride = {
  render: () => (
    <IcTypography variant="h1">
      <h3>H3 rendered as H1</h3>
    </IcTypography>
  ),

  name: "Component override",
};

export const VerticalMargins = {
  render: () => (
    <>
      <IcTypography applyVerticalMargins variant="h1">
        Extra large title
      </IcTypography>
      <IcTypography applyVerticalMargins variant="h2">
        Large title
      </IcTypography>
      <IcTypography applyVerticalMargins variant="h3">
        Medium title
      </IcTypography>
      <IcTypography applyVerticalMargins variant="h4">
        Small title
      </IcTypography>
      <IcTypography applyVerticalMargins variant="subtitle-large">
        Subtitle 1
      </IcTypography>
      <IcTypography applyVerticalMargins variant="subtitle-small">
        Subtitle 2
      </IcTypography>
      <IcTypography applyVerticalMargins variant="body">
        Body text
      </IcTypography>
      <IcTypography applyVerticalMargins variant="caption">
        Caption text
      </IcTypography>
      <IcTypography applyVerticalMargins variant="caption-uppercase">
        Caption uppercase
      </IcTypography>
      <IcTypography applyVerticalMargins variant="code-large">
        Code large
      </IcTypography>
      <IcTypography applyVerticalMargins variant="code-small">
        Code small
      </IcTypography>
      <IcTypography applyVerticalMargins variant="code-extra-small">
        Code extra small
      </IcTypography>
    </>
  ),

  name: "Vertical margins",
};

export const Truncation = {
  render: () => (
    <IcTypography max-lines="3" variant="body">
      Body of text that is truncated to three lines. Click the 'See more' link
      to expand the text, then click 'See less' to truncate the text once more!
      <br />
      Dripper caramelization java saucer grounds galão, mocha, and robusta
      kopi-luwak, percolator, instant, qui saucer latte in brewed café au lait.
      Con panna, cup, cream, body americano affogato cup espresso, rich milk
      seasonal saucer grinder spoon that cultivar strong redeye frappuccino
      barista extraction redeye mazagran. Grounds, french press dripper organic
      and foam id saucer, crema, black rich dark, grounds breve coffee steamed
      caramelization percolator.
    </IcTypography>
  ),

  name: "Truncation",
};

export const Bold = {
  render: () => (
    <>
      <IcTypography variant="h1" bold>
        Extra large title
      </IcTypography>
      <IcTypography variant="h2" bold>
        Large title
      </IcTypography>
      <IcTypography variant="h3" bold>
        Medium title
      </IcTypography>
      <IcTypography variant="h4" bold>
        Small title
      </IcTypography>
      <IcTypography variant="subtitle-large" bold>
        Subtitle 1
      </IcTypography>
      <IcTypography variant="subtitle-small" bold>
        Subtitle 2
      </IcTypography>
      <IcTypography variant="body" bold>
        Body text
      </IcTypography>
      <IcTypography variant="label" bold>
        Label
      </IcTypography>
      <IcTypography variant="caption" bold>
        Caption text
      </IcTypography>
      <IcTypography variant="caption-uppercase" bold>
        Caption uppercase
      </IcTypography>
      <IcTypography variant="label-uppercase" bold>
        Label uppercase
      </IcTypography>
      <IcTypography variant="code-large" bold>
        Code large
      </IcTypography>
      <IcTypography variant="code-small" bold>
        Code small
      </IcTypography>
      <IcTypography variant="code-extra-small" bold>
        Code extra small
      </IcTypography>
    </>
  ),

  name: "Bold",
};

export const Italic = {
  render: () => (
    <>
      <IcTypography variant="h1" italic>
        Extra large title
      </IcTypography>
      <IcTypography variant="h2" italic>
        Large title
      </IcTypography>
      <IcTypography variant="h3" italic>
        Medium title
      </IcTypography>
      <IcTypography variant="h4" italic>
        Small title
      </IcTypography>
      <IcTypography variant="subtitle-large" italic>
        Subtitle 1
      </IcTypography>
      <IcTypography variant="subtitle-small" italic>
        Subtitle 2
      </IcTypography>
      <IcTypography variant="body" italic>
        Body text
      </IcTypography>
      <IcTypography variant="label" italic>
        Label
      </IcTypography>
      <IcTypography variant="caption" italic>
        Caption text
      </IcTypography>
      <IcTypography variant="caption-uppercase" italic>
        Caption uppercase
      </IcTypography>
      <IcTypography variant="label-uppercase" italic>
        Label uppercase
      </IcTypography>
      <IcTypography variant="code-large" italic>
        Code large
      </IcTypography>
      <IcTypography variant="code-small" italic>
        Code small
      </IcTypography>
      <IcTypography variant="code-extra-small" italic>
        Code extra small
      </IcTypography>
    </>
  ),

  name: "Italic",
};

export const Strikethrough = {
  render: () => (
    <>
      <IcTypography variant="h1" strikethrough>
        Extra large title
      </IcTypography>
      <IcTypography variant="h2" strikethrough>
        Large title
      </IcTypography>
      <IcTypography variant="h3" strikethrough>
        Medium title
      </IcTypography>
      <IcTypography variant="h4" strikethrough>
        Small title
      </IcTypography>
      <IcTypography variant="subtitle-large" strikethrough>
        Subtitle 1
      </IcTypography>
      <IcTypography variant="subtitle-small" strikethrough>
        Subtitle 2
      </IcTypography>
      <IcTypography variant="body" strikethrough>
        Body text
      </IcTypography>
      <IcTypography variant="label" strikethrough>
        Label
      </IcTypography>
      <IcTypography variant="caption" strikethrough>
        Caption text
      </IcTypography>
      <IcTypography variant="caption-uppercase" strikethrough>
        Caption uppercase
      </IcTypography>
      <IcTypography variant="label-uppercase" strikethrough>
        Label uppercase
      </IcTypography>
      <IcTypography variant="code-large" strikethrough>
        Code large
      </IcTypography>
      <IcTypography variant="code-small" strikethrough>
        Code small
      </IcTypography>
      <IcTypography variant="code-extra-small" strikethrough>
        Code extra small
      </IcTypography>
    </>
  ),

  name: "Strikethrough",
};

export const Underline = {
  render: () => (
    <>
      <IcTypography variant="h1" underline>
        Extra large title
      </IcTypography>
      <IcTypography variant="h2" underline>
        Large title
      </IcTypography>
      <IcTypography variant="h3" underline>
        Medium title
      </IcTypography>
      <IcTypography variant="h4" underline>
        Small title
      </IcTypography>
      <IcTypography variant="subtitle-large" underline>
        Subtitle 1
      </IcTypography>
      <IcTypography variant="subtitle-small" underline>
        Subtitle 2
      </IcTypography>
      <IcTypography variant="body" underline>
        Body text
      </IcTypography>
      <IcTypography variant="label" underline>
        Label
      </IcTypography>
      <IcTypography variant="caption" underline>
        Caption text
      </IcTypography>
      <IcTypography variant="caption-uppercase" underline>
        Caption uppercase
      </IcTypography>
      <IcTypography variant="label-uppercase" underline>
        Label uppercase
      </IcTypography>
      <IcTypography variant="code-large" underline>
        Code large
      </IcTypography>
      <IcTypography variant="code-small" underline>
        Code small
      </IcTypography>
      <IcTypography variant="code-extra-small" underline>
        Code extra small
      </IcTypography>
    </>
  ),

  name: "Underline",
};

export const AllPropTextStyles = {
  render: () => (
    <>
      <IcTypography variant="h1" underline strikethrough italic bold>
        Extra large title
      </IcTypography>
      <IcTypography variant="h2" underline strikethrough italic bold>
        Large title
      </IcTypography>
      <IcTypography variant="h3" underline strikethrough italic bold>
        Medium title
      </IcTypography>
      <IcTypography variant="h4" underline strikethrough italic bold>
        Small title
      </IcTypography>
      <IcTypography
        variant="subtitle-large"
        underline
        strikethrough
        italic
        bold
      >
        Subtitle 1
      </IcTypography>
      <IcTypography
        variant="subtitle-small"
        underline
        strikethrough
        italic
        bold
      >
        Subtitle 2
      </IcTypography>
      <IcTypography variant="body" underline strikethrough italic bold>
        Body text
      </IcTypography>
      <IcTypography variant="label" underline strikethrough italic bold>
        Label
      </IcTypography>
      <IcTypography variant="caption" underline strikethrough italic bold>
        Caption text
      </IcTypography>
      <IcTypography
        variant="caption-uppercase"
        underline
        strikethrough
        italic
        bold
      >
        Caption uppercase
      </IcTypography>
      <IcTypography
        variant="label-uppercase"
        underline
        strikethrough
        italic
        bold
      >
        Label uppercase
      </IcTypography>
      <IcTypography variant="code-large" underline strikethrough italic bold>
        Code large
      </IcTypography>
      <IcTypography variant="code-small" underline strikethrough italic bold>
        Code small
      </IcTypography>
      <IcTypography
        variant="code-extra-small"
        underline
        strikethrough
        italic
        bold
      >
        Code extra small
      </IcTypography>
    </>
  ),

  name: "All prop text styles",
};

export const MinAndMaxContent = {
  render: () => (
    <>
      <IcTypography>A</IcTypography>
      <IcTypography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas
        eget lorem sed luctus. Aenean vitae lorem leo. Pellentesque fringilla
        semper posuere. Nullam eget sem felis. Fusce quis laoreet arcu. Nulla
        commodo fringilla magna eget vehicula. Morbi ac nisl tellus. Ut mollis,
        nunc blandit aliquam dignissim, neque neque rhoncus nisi, at maximus
        ligula est vitae felis. Nunc at eros posuere, finibus metus sit amet,
        cursus mi. Nunc euismod ac turpis sit amet luctus. Pellentesque dictum
        tempor congue. Vivamus consectetur orci eget ante molestie, eget luctus
        enim tempus. Nam iaculis odio et orci consequat, et volutpat dolor
        finibus. Proin et porttitor diam. Ut quis est vel diam tincidunt congue
        nec at ipsum.
      </IcTypography>
    </>
  ),

  name: "Min and max content",
};

export const InAnAgGrid = {
  render: () => <AGGrid />,
  name: "In an AG Grid",
};

export const Playground = {
  render: (args) => (
    <IcTypography
      applyVerticalMargins={args.applyVerticalMargins}
      variant={args.variant}
      bold={args.bold}
      italic={args.italic}
      strikethrough={args.strikethrough}
      underline={args.underline}
      theme={args.theme}
    >
      Typography to test
    </IcTypography>
  ),

  args: defaultArgs,

  argTypes: {
    variant: {
      options: [
        "body",
        "caption",
        "h1",
        "h2",
        "h3",
        "h4",
        "label",
        "subtitle-large",
        "subtitle-small",
        "label-uppercase",
        "caption-uppercase",
        "code-large",
        "code-small",
        "code-extra-small",
      ],

      control: {
        type: "select",
      },
    },

    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },
  },

  name: "Playground",
};
