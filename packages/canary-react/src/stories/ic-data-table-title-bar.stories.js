/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { mdiImage } from "@mdi/js";
import { IcButton, IcChip, IcTypography, SlottedSVG } from "@ukic/react";
import React from "react";
import readme from "../../../canary-web-components/src/components/ic-data-table-title-bar/readme.md";
import { IcDataTableTitleBar } from "../components";

export default {
  title: "React Components/Data Table Title Bar",
  component: IcDataTableTitleBar,
  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

/**
 * Use the data table title bar component to provide titling, description, metadata and also global table functionality.
 *
 * By default, the density selector appears within the data table title bar. The three density options are:
 * - Default
 * - Dense
 * - Spacious
 */
export const Default = {
  render: () => <IcDataTableTitleBar heading="Title Bar" />,
  name: "Default",
};

/**
 * Custom elements can be passed into the areas which contain the title bar heading and description. This flexibility allows the heading tag to be updated if the default heading level (i.e. `h3`) is not semantically correct.
 */
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

/**
 * Data table metadata and description can be added to the data table title bar via the `metadata` and `description` props.
 */
export const MetadataDescription = {
  render: () => (
    <IcDataTableTitleBar
      heading="Title Bar"
      metadata="128 items | 32gb | Updated: 01/02/03"
      description="Data table description that describes the purpose of the table."
    />
  ),
  name: "With metadata and description",
};

/**
 * By default, the density selector is displayed on the data table title bar. To hide it, set `hideDensitySelect` to `true`.
 */
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

/**
 * Custom actions can be added to the data table title bar via slots. There are two slots available:
 * - `primary-action` is suitable for a primary button. The custom element will appear to the right of the data table title bar.
 * - `custom-actions` can be used for secondary actions. The custom element will appear to the left of the density selector if displayed.
 */
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
      <IcButton slot="custom-actions" variant="icon-tertiary" aria-label="Icon Button">
        <SlottedSVG path={mdiImage} viewBox="0 0 24 24" />
      </IcButton>
    </IcDataTableTitleBar>
  ),
};
