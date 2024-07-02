import React, { ReactElement } from "react";
import { IcAccordion, IcAccordionGroup } from "../../components";

export const SimpleAccordion = (): ReactElement => (
  <IcAccordion heading="Accordion 1">Text</IcAccordion>
);

export const SimpleExpandedAccordion = (): ReactElement => (
  <IcAccordion expanded heading="Accordion 1">
    Text
  </IcAccordion>
);

export const AccordionsWithDisabled = (): ReactElement => (
  <>
    <IcAccordion heading="accordion1">Text 1</IcAccordion>
    <IcAccordion heading="accordion2" disabled>
      Text 2
    </IcAccordion>
    <IcAccordion heading="accordion3">Text 3</IcAccordion>
  </>
);

export const GroupWithOneExpanded = (): ReactElement => (
  <IcAccordionGroup label="Title">
    <TwoAccordionsWithOneExpanded />
  </IcAccordionGroup>
);

export const TwoAccordions = (): ReactElement => (
  <>
    <SimpleAccordion />
    <IcAccordion heading="Accordion 2">Text</IcAccordion>
  </>
);

export const TwoAccordionsWithOneExpanded = (): ReactElement => (
  <>
    <SimpleAccordion />
    <IcAccordion heading="Accordion 2" expanded>
      Text
    </IcAccordion>
  </>
);

export const SlottedHeadingAccordion = (): ReactElement => (
  <IcAccordionGroup>
    <h1 slot="label">Group title</h1>
    <IcAccordion>
      <h2 slot="heading">Heading</h2>
      Text
    </IcAccordion>
  </IcAccordionGroup>
);
