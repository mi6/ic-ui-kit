import {
  IcButton,
  IcChip,
  IcTypography,
  SlottedSVG
} from "@ukic/react";
import readme from "../../../canary-web-components/src/components/ic-data-table-title-bar/readme.md";
import { IcDataTableTitleBar } from "../components";

import { mdiImage } from "@mdi/js";
import React from "react";

export default {
  title: "React Components/Data Table Title Bar",
  component: IcDataTableTitleBar,

  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

export const Basic = {
  render: () => <IcDataTableTitleBar heading="Title Bar" />,
  name: "Basic",
};

export const Slots = {
  render: () => (
    <IcDataTableTitleBar>
      <IcTypography slot="heading" variant="h1">
        <h3>Title Bar</h3>
      </IcTypography>
      <div slot="description">
        <IcChip label="Chip" />
        <IcChip label="Chip" />
      </div>
    </IcDataTableTitleBar>
  ),

  name: "Slots",
};

export const WithMetadataAndDescription = {
  render: () => (
    <IcDataTableTitleBar
      heading="Title Bar"
      metadata="128 items | 32gb | Updated: 01/02/03"
      description="Data table description that describes the purpose of the table."
    />
  ),

  name: "With metadata and description",
};

export const HideDensitySelector = {
  render: () => (
    <IcDataTableTitleBar
      hideDensitySelect
      heading="Title Bar"
      metadata="128 items | 32gb | Updated: 01/02/03"
      description="Data table description that describes the purpose of the table."
    />
  ),

  name: "Hide density selector",
};

export const CustomActions = {
  render: () => (
    <IcDataTableTitleBar
      heading="Title Bar"
      metadata="128 items | 32gb | Updated: 01/02/03"
      description="Data table description that describes the purpose of the table."
    >
      <IcButton slot="primary-action" size="small">
        Primary
      </IcButton>
      <IcButton slot="custom-actions" variant="icon" aria-label="Icon Button">
        <SlottedSVG path={mdiImage} viewBox="0 0 24 24" />
      </IcButton>
    </IcDataTableTitleBar>
  ),

  name: "Custom actions",
};
