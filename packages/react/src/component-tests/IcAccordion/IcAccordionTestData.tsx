import React, { ReactElement } from "react";
import { IcAccordion, IcAccordionGroup } from "../../components";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";

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
  <IcAccordionGroup groupTitle="Title">
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
    <h1 slot="group-title">Group title</h1>
    <IcAccordion>
      <h2 slot="heading">Heading</h2>
      Text
    </IcAccordion>
  </IcAccordionGroup>
);

export const WithIcon = (): ReactElement => {
  return (
    <IcAccordion heading="Accordion 1">
      <SlottedSVG
        slot="icon"
        width="20"
        height="1em"
        viewBox="0 0 512 512"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
      </SlottedSVG>
      Text
    </IcAccordion>
  );
};

export const WithChildren = (): ReactElement => {
  return (
    <IcAccordion expanded heading="Accordion">
      <IcAccordion expanded heading="Child Accordion 1">
        Text
      </IcAccordion>
      <IcAccordion heading="Child Accordion 2">Text</IcAccordion>
      <IcAccordion heading="Child Accordion 3">Text</IcAccordion>
    </IcAccordion>
  );
};

export const DifferentSizes = (): ReactElement => {
  return (
    <>
      <IcAccordion heading="Small" size="small">
        Text
      </IcAccordion>
      <IcAccordion heading="Default">Text</IcAccordion>
      <IcAccordion heading="Large" size="large">
        Text
      </IcAccordion>
    </>
  );
};

export const DifferentSizesGroup = (): ReactElement => {
  return (
    <>
      <IcAccordionGroup size="small" groupTitle="Small">
        <TwoAccordions />
      </IcAccordionGroup>
      <IcAccordionGroup groupTitle="Default">
        <TwoAccordions />
      </IcAccordionGroup>
      <IcAccordionGroup size="large" groupTitle="Large">
        <TwoAccordions />
      </IcAccordionGroup>
    </>
  );
};
