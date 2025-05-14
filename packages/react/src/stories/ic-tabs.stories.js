/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from "react";
import {
  IcBadge,
  IcButton,
  IcTab,
  IcTabContext,
  IcTabGroup,
  IcTabPanel,
} from "../components";
import { SlottedSVG } from "../react-component-lib/slottedSVG";

const ControlledTabsExample = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <>
      <IcTabContext
        selectedTabIndex={selectedTab}
        onIcTabSelect={(event) => setSelectedTab(event.detail.tabIndex)}
      >
        <IcTabGroup label="Example tab group">
          <IcTab>One</IcTab>
          <IcTab>Two</IcTab>
          <IcTab>Three</IcTab>
        </IcTabGroup>
        <IcTabPanel>Tab One</IcTabPanel>
        <IcTabPanel>Tab Two</IcTabPanel>
        <IcTabPanel>Tab Three</IcTabPanel>
      </IcTabContext>
    </>
  );
};

const DynamicRender = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData([
        { label: "Ingredients" },
        { label: "Method" },
        { label: "History" },
      ]);
    }, 3000);
  }, []);

  const createRandomLabel = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < 3; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const addTab = () => {
    setData([...data, { label: createRandomLabel() }]);
  };

  const removeTab = () => {
    data.pop();
    setData([...data]);
  };

  return (
    <div className="wrapper">
      <IcButton onClick={addTab}>Add Tab</IcButton>
      <IcButton onClick={removeTab}>Remove Tab</IcButton>
      <IcTabContext
        onIcTabSelect={(ev) =>
          console.log({
            tabIndex: ev.detail.tabIndex,
            tabLabel: ev.detail.tabLabel,
          })
        }
      >
        <IcTabGroup label="Example tab group">
          {data.map((item, i) => (
            <IcTab key={`${item.label}-${i}`}>
              {i === 2 && (
                <SlottedSVG
                  slot="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M9,21V22H7V21A2,2 0 0,1 5,19V4A2,2 0 0,1 7,2H17A2,2 0 0,1 19,4V19A2,2 0 0,1 17,21V22H15V21H9M7,4V9H17V4H7M7,19H17V11H7V19M8,12H10V15H8V12M8,6H10V8H8V6Z" />
                </SlottedSVG>
              )}
              {item.label}
            </IcTab>
          ))}
        </IcTabGroup>
        <span></span>
        {data.map((item, i) => (
          <IcTabPanel key={`${item.label}-${i}`}>
            <p>
              Tab {i} - {item.label}
            </p>
          </IcTabPanel>
        ))}
      </IcTabContext>
    </div>
  );
};

const defaultArgs = {
  activationType: "automatic",
  disabled: false,
  inline: false,
  groupLabel: "Example tab group",
  theme: "inherit",
  monochrome: false,
};

export default {
  title: "Tabs",
  component: IcTabContext,
};

export const Default = {
  render: () => (
    <IcTabContext onIcTabSelect={(ev) => console.log(ev.detail)}>
      <IcTabGroup label="Example tab group">
        <IcTab>One</IcTab>
        <IcTab>Two</IcTab>
        <IcTab>Three</IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One</IcTabPanel>
      <IcTabPanel>Tab Two</IcTabPanel>
      <IcTabPanel>Tab Three</IcTabPanel>
    </IcTabContext>
  ),

  name: "Default",
};

export const WithIcons = {
  render: () => (
    <IcTabContext>
      <IcTabGroup label="Example tab group">
        <IcTab>
          One
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
          </svg>
        </IcTab>
        <IcTab>
          Two
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z" />
          </svg>
        </IcTab>
        <IcTab>
          Three
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
        </IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One</IcTabPanel>
      <IcTabPanel>Tab Two</IcTabPanel>
      <IcTabPanel>Tab Three</IcTabPanel>
    </IcTabContext>
  ),

  name: "With icons",
};

export const WithIconsAndBadges = {
  render: () => (
    <IcTabContext>
      <IcTabGroup label="Example tab group">
        <IcTab>
          Near
          <IcBadge label="2" slot="badge" variant="info" position="near"/>
        </IcTab>
        <IcTab>
          Far
          <IcBadge label="2" slot="badge" variant="info" position="far"/>
        </IcTab>
        <IcTab>
          Inline
          <IcBadge label="2" slot="badge" variant="info" position="inline"/>
        </IcTab>
        <IcTab>
          Near
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
          </svg>
          <IcBadge label="2" slot="badge" variant="info" position="near"/>
        </IcTab>
        <IcTab>
          Far
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z" />
          </svg>
          <IcBadge label="2" slot="badge" variant="info" position="far"/>
        </IcTab>
        <IcTab>
          Inline
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
          <IcBadge label="2" slot="badge" variant="info" position="inline"/>
        </IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab Near</IcTabPanel>
      <IcTabPanel>Tab Far</IcTabPanel>
      <IcTabPanel>Tab Inline</IcTabPanel>
      <IcTabPanel>Tab Near</IcTabPanel>
      <IcTabPanel>Tab Far</IcTabPanel>
      <IcTabPanel>Tab Inline</IcTabPanel>
    </IcTabContext>
  ),

  name: "With icons and badges",
};

export const Disabled = {
  render: () => (
    <IcTabContext>
      <IcTabGroup label="Example tab group">
        <IcTab>One</IcTab>
        <IcTab disabled>Two</IcTab>
        <IcTab>Three</IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One</IcTabPanel>
      <IcTabPanel>Tab Two</IcTabPanel>
      <IcTabPanel>Tab Three</IcTabPanel>
    </IcTabContext>
  ),

  name: "Disabled",
};

export const Inline = {
  render: () => (
    <IcTabContext>
      <IcTabGroup label="Example tab group" inline>
        <IcTab>One</IcTab>
        <IcTab>Two</IcTab>
        <IcTab>Three</IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One</IcTabPanel>
      <IcTabPanel>Tab Two</IcTabPanel>
      <IcTabPanel>Tab Three</IcTabPanel>
    </IcTabContext>
  ),

  name: "Inline",
};

export const Controlled = {
  render: () => <ControlledTabsExample />,
  name: "Controlled",
};

export const ManualActivation = {
  render: () => (
    <IcTabContext activationType="manual">
      <IcTabGroup label="Example tab group">
        <IcTab>One</IcTab>
        <IcTab>Two</IcTab>
        <IcTab>Three</IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One</IcTabPanel>
      <IcTabPanel>Tab Two</IcTabPanel>
      <IcTabPanel>Tab Three</IcTabPanel>
    </IcTabContext>
  ),

  name: "Manual activation",
};

export const Responsive = {
  render: () => (
    <IcTabContext>
      <IcTabGroup label="Example tab group">
        <IcTab>One</IcTab>
        <IcTab>Two</IcTab>
        <IcTab>Three</IcTab>
        <IcTab>Four</IcTab>
        <IcTab>Five</IcTab>
        <IcTab>Six</IcTab>
        <IcTab>Seven</IcTab>
        <IcTab>Eight</IcTab>
        <IcTab>Nine</IcTab>
        <IcTab>Ten</IcTab>
        <IcTab>Eleven</IcTab>
        <IcTab>Twelve</IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One</IcTabPanel>
      <IcTabPanel>Tab Two</IcTabPanel>
      <IcTabPanel>Tab Three</IcTabPanel>
      <IcTabPanel>Tab Four</IcTabPanel>
      <IcTabPanel>Tab Five</IcTabPanel>
      <IcTabPanel>Tab Six</IcTabPanel>
      <IcTabPanel>Tab Seven</IcTabPanel>
      <IcTabPanel>Tab Eight</IcTabPanel>
      <IcTabPanel>Tab Nine</IcTabPanel>
      <IcTabPanel>Tab Ten</IcTabPanel>
      <IcTabPanel>Tab Eleven</IcTabPanel>
      <IcTabPanel>Tab Twelve</IcTabPanel>
    </IcTabContext>
  ),

  name: "Responsive",
};

export const DynamicRendering = {
  render: () => <DynamicRender />,
  name: "Dynamic rendering",
};

export const Playground = {
  render: (args) => (
    <div>
      <IcTabContext
        activationType={args.activationType}
        theme={args.theme}
        monochrome={args.monochrome}
      >
        <IcTabGroup label={args.groupLabel} inline={args.inline}>
          <IcTab disabled={args.disabled}>One</IcTab>
          <IcTab>
            Two
            <IcBadge
              label="1"
              slot="badge"
              position="inline"
              accessibleLabel="1 notification found"
            />
          </IcTab>
          <IcTab>
            Three
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
            </svg>
          </IcTab>
          <IcTab>Four</IcTab>
        </IcTabGroup>
        <IcTabPanel>Tab One</IcTabPanel>
        <IcTabPanel>Tab Two</IcTabPanel>
        <IcTabPanel>Tab Three</IcTabPanel>
        <IcTabPanel>Tab Four</IcTabPanel>
      </IcTabContext>
    </div>
  ),

  args: defaultArgs,

  argTypes: {
    activationType: {
      options: ["automatic", "manual"],

      control: {
        type: "inline-radio",
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
