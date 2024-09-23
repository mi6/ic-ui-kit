import React, { ReactElement } from "react";
import { IcAlert, IcLink, IcButton } from "../../components";
import { SlottedSVG } from "../../";

export const Neutral = (): ReactElement => {
  return (
    <IcAlert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages."
    />
  );
};

export const Info = (): ReactElement => {
  return (
    <IcAlert
      variant="info"
      heading="Info"
      message="This alert is for displaying information."
    />
  );
};

export const Error = (): ReactElement => {
  return (
    <IcAlert
      variant="error"
      heading="Error"
      message="This alert is for displaying errors."
    />
  );
};

export const Warning = (): ReactElement => {
  return (
    <IcAlert
      variant="warning"
      heading="Warning"
      message="This alert is for displaying warnings."
    />
  );
};

export const Success = (): ReactElement => {
  return (
    <IcAlert
      variant="success"
      heading="Success"
      message="This alert is for displaying success messages."
    />
  );
};

export const Variants = (): ReactElement => {
  return (
    <>
      <IcAlert
        heading="Neutral"
        message="This alert is for displaying miscellaneous messages."
      />
      <IcAlert
        variant="info"
        heading="Info"
        message="This alert is for displaying information."
      />
      <IcAlert
        variant="error"
        heading="Error"
        message="This alert is for displaying errors."
      />
      <IcAlert
        variant="warning"
        heading="Warning"
        message="This alert is for displaying warnings."
      />
      <IcAlert
        variant="success"
        heading="Success"
        message="This alert is for displaying success messages. 
        It has a very long message with lots of text which goes over multiple 
        lines so the alert should expand as well to make sure it doesn't overflow."
      />
    </>
  );
};

export const Responsive = (): ReactElement => {
  return (
    <IcAlert
      heading="This title is very long so should force the alert to add 'title-above'"
      message="This alert does not have 'title-above' added as a prop but it's forced to add it due to the length of the title."
    />
  );
};

export const Dismissible = (): ReactElement => {
  return (
    <IcAlert
      heading="Dismissible"
      message="This alert is dismissible."
      dismissible
    />
  );
};

export const TitleAbove = (): ReactElement => {
  return (
    <IcAlert
      heading="Title displayed above the message"
      message="This alert has the title at the top of the alert and the message below it."
      title-above="true"
    />
  );
};

export const CustomMessage = (): ReactElement => {
  return (
    <IcAlert heading="This alert uses a custom message slot">
      <span slot="message">
        This is some text and <IcLink href="/">this is an inline link</IcLink>{" "}
        within the text.
      </span>
    </IcAlert>
  );
};

export const WithAction = (): ReactElement => {
  return (
    <IcAlert heading="With action" message="This alert has an action.">
      <IcButton
        type="button"
        slot="action"
        variant="secondary"
        appearance="dark"
      >
        Button
      </IcButton>
    </IcAlert>
  );
};

export const MessageOnly = (): ReactElement => {
  return (
    <IcAlert message="This alert is for displaying miscellaneous messages." />
  );
};

export const NoIcon = (): ReactElement => {
  return (
    <IcAlert
      heading="Neutral"
      message="This alert does not have an icon"
      showDefaultIcon={false}
    />
  );
};

export const SlottedIcon = (): ReactElement => {
  return (
    <IcAlert
      id="alert"
      heading="Neutral"
      message="This alert contains a slotted icon that overrides the default icon"
    >
      <SlottedSVG
        slot="neutral-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </SlottedSVG>
    </IcAlert>
  );
};
