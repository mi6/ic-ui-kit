/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { IcAlert, IcLink, IcButton } from "../components";
import { SlottedSVG } from "../react-component-lib/slottedSVG";

const defaultArgs = {
  dismissible: false,
  heading: "Heading",
  message: "Message",
  titleAbove: false,
  variant: "neutral",
  showAction: false,
  showDefaultIcon: true,
  showSlottedIcon: false,
};

export default {
  title: "Alert",
  component: IcAlert,
};

export const Variants = {
  render: () => (
    <>
    <IcAlert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
    />
    <IcAlert
      variant="info"
      heading="Info"
      message="This alert is for displaying information"
    />
    <IcAlert
      variant="error"
      heading="Error"
      message="This alert is for displaying errors"
    />
    <IcAlert
      variant="warning"
      heading="Warning"
      message="This alert is for displaying warnings"
    />
    <IcAlert
      variant="success"
      heading="Success"
      message="This alert is for displaying success messages. It has a very long message with lots of text which goes over multiple lines so the alert should expand as well to make sure it doesn't overflow"
    />
    </>
  ),

  name: "Variants",
};

export const MessageOnly = {
  render: () => (
    <IcAlert message="This alert is for displaying miscellaneous messages" />
  ),
  name: "Message only",
};

export const Dismissible = {
  render: () => (
    <IcAlert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      dismissible
    />
  ),

  name: "Dismissible",
};

export const WithAction = {
  render: () => (
    <IcAlert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
    >
      <IcButton slot="action" variant="secondary">
        Button
      </IcButton>
    </IcAlert>
  ),

  name: "With action",
};

export const DismissibleWithAction = {
  render: () => (
    <IcAlert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      dismissible
    >
      <IcButton slot="action" variant="secondary">
        Button
      </IcButton>
    </IcAlert>
  ),

  name: "Dismissible with action",
};

export const TitleAbove = {
  render: () => (
    <IcAlert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      titleAbove
    />
  ),

  name: "Title above",
};

export const ResponsiveTitle = {
  render: () => (
    <>
    <IcAlert
      heading="This title is very long so should force the alert to add 'title-above'"
      message="This alert does not have 'title-above' added as a prop but it is forced to add it due to the length of the title"
    />
    <IcAlert
      variant="success"
      heading="Shorter title"
      message="Neither of these has 'title-above' set to true"
    />
    </>
  ),

  name: "Responsive title",
};

export const CustomMessage = {
  render: () => (
    <IcAlert heading="This alert uses a custom message slot">
      <p slot="message">
        This is some text and
        <IcLink href="/" inline>
          this is an inline link
        </IcLink>
        within the text.
      </p>
    </IcAlert>
  ),

  name: "Custom message",
};

export const CustomMessageAndTitleAbove = {
  render: () => (
    <IcAlert heading="Want to know more about our coffee?" titleAbove>
      <span
        slot="message"
        style={{
          font: "var(--ic-font-body)",
        }}
      >
        Go to our <IcLink href="/">coffee page</IcLink>to learn more.
      </span>
    </IcAlert>
  ),

  name: "Custom message and title above",
};

export const SlottedIcon = {
  render: () => (
    <IcAlert
      id="alert"
      heading="Neutral"
      message="This alert contains a slotted icon"
      showDefaultIcon="false"
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
  ),

  name: "Slotted icon",
};

export const NoIcon = {
  render: () => (
    <IcAlert
      id="alert"
      heading="Neutral"
      message="This alert has no icon"
      showDefaultIcon="false"
    />
  ),

  name: "No icon",
};

export const Playground = {
  render: (args) => (
    <IcAlert
      dismissible={args.dismissible}
      variant={args.variant}
      heading={args.heading}
      message={args.message}
      titleAbove={args.titleAbove}
      showDefaultIcon={args.showDefaultIcon}
    >
      {args.showAction && (
        <IcButton slot="action" variant="secondary">
          Button
        </IcButton>
      )}
      {args.showSlottedIcon && (
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
      )}
    </IcAlert>
  ),

  args: defaultArgs,

  argTypes: {
    variant: {
      options: ["neutral", "info", "warning", "error", "success"],

      control: {
        type: "select",
      },
    },
  },

  name: "Playground",
};
