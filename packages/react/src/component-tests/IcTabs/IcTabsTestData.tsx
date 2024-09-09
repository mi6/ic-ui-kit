import React, { ReactElement, useState, useEffect } from "react";
import {
  IcTab,
  IcTabContext,
  IcTabGroup,
  IcTabPanel,
  IcBadge,
} from "../../components";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";

const compactStyle = {
  width: "60%",
  marginLeft: "auto",
  marginRight: "auto",
};

export const SimpleTabGroup = (): ReactElement => (
  <div style={{ margin: "2rem" }}>
    <IcTabContext
      onIcTabSelect={(ev) =>
        console.log({
          tabIndex: ev.detail.tabIndex,
          tabLabel: ev.detail.tabLabel,
        })
      }
    >
      <IcTabGroup label="Example tab group">
        <IcTab>Ingredients</IcTab>
        <IcTab>Method</IcTab>
        <IcTab>History</IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One - Ingredients</IcTabPanel>
      <IcTabPanel>Tab Two - Method</IcTabPanel>
      <IcTabPanel>Tab Three - History</IcTabPanel>
    </IcTabContext>
  </div>
);

export const LargerTabGroup = (): ReactElement => (
  <IcTabContext
    onIcTabSelect={(ev) =>
      console.log({
        tabIndex: ev.detail.tabIndex,
        tabLabel: ev.detail.tabLabel,
      })
    }
  >
    <IcTabGroup label="Example tab group">
      <IcTab>Ingredients</IcTab>
      <IcTab>Method</IcTab>
      <IcTab>History</IcTab>
      <IcTab>Drinks</IcTab>
      <IcTab>Recipes</IcTab>
    </IcTabGroup>
    <IcTabPanel>Tab One - Ingredients</IcTabPanel>
    <IcTabPanel>Tab Two - Method</IcTabPanel>
    <IcTabPanel>Tab Three - History</IcTabPanel>
    <IcTabPanel>Tab Four - Drinks</IcTabPanel>
    <IcTabPanel>Tab Five - Recipes</IcTabPanel>
  </IcTabContext>
);

export const ManualActivationTabGroup = (): ReactElement => (
  <div style={{ margin: "2rem" }}>
    <IcTabContext
      onIcTabSelect={(ev) =>
        console.log({
          tabIndex: ev.detail.tabIndex,
          tabLabel: ev.detail.tabLabel,
        })
      }
      activationType="manual"
    >
      <IcTabGroup label="Example tab group">
        <IcTab>Ingredients</IcTab>
        <IcTab>Method</IcTab>
        <IcTab>History</IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One - Ingredients</IcTabPanel>
      <IcTabPanel>Tab Two - Method</IcTabPanel>
      <IcTabPanel>Tab Three - History</IcTabPanel>
    </IcTabContext>
  </div>
);

export const DisabledTab = (): ReactElement => (
  <div style={{ margin: "2rem" }}>
    <IcTabContext
      onIcTabSelect={(ev) =>
        console.log({
          tabIndex: ev.detail.tabIndex,
          tabLabel: ev.detail.tabLabel,
        })
      }
    >
      <IcTabGroup label="Example tab group">
        <IcTab>Ingredients</IcTab>
        <IcTab disabled>Method</IcTab>
        <IcTab>History</IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One - Ingredients</IcTabPanel>
      <IcTabPanel>Tab Two - Method</IcTabPanel>
      <IcTabPanel>Tab Three - History</IcTabPanel>
    </IcTabContext>
  </div>
);

export const NestedTabs = (): ReactElement => (
  <div style={{ margin: "2rem" }}>
    <IcTabContext>
      <IcTabGroup label="Example tab group">
        <IcTab>Ingredients</IcTab>
        <IcTab>Method</IcTab>
        <IcTab>History</IcTab>
      </IcTabGroup>
      <IcTabPanel>
        <IcTabContext contextId="context-nested">
          <IcTabGroup label="Example tab group">
            <IcTab>Espresso</IcTab>
            <IcTab>Water</IcTab>
            <IcTab>Milk</IcTab>
          </IcTabGroup>
          <IcTabPanel>Nested Tab Panel One - Espresso</IcTabPanel>
          <IcTabPanel>Nested Tab Panel Two - Water</IcTabPanel>
          <IcTabPanel>Nested Tab Panel Three - Milk</IcTabPanel>
        </IcTabContext>
      </IcTabPanel>
      <IcTabPanel>Outer Tab Panel Two - Method</IcTabPanel>
      <IcTabPanel>Outer Tab Panel Three - History</IcTabPanel>
    </IcTabContext>
  </div>
);

export const ControlledModeTabs = (): ReactElement => (
  <IcTabContext selected-tab-index="1">
    <IcTabGroup label="Example tab group">
      <IcTab>Ingredients</IcTab>
      <IcTab>Method</IcTab>
      <IcTab>History</IcTab>
    </IcTabGroup>
    <IcTabPanel>Tab One - Ingredients</IcTabPanel>
    <IcTabPanel>Tab Two - Method</IcTabPanel>
    <IcTabPanel>Tab Three - History</IcTabPanel>
  </IcTabContext>
);

export const ResponsiveTabs = (): ReactElement => (
  <div style={{ margin: "2rem" }}>
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
  </div>
);

export const ResponsiveLightTextTabs = (): ReactElement => (
  <div style={{ margin: "2rem" }}>
    <IcTabContext theme="dark">
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
  </div>
);

export const LightTabs = (): ReactElement => (
  <div style={{ margin: "2rem" }}>
    <IcTabContext theme="dark">
      <IcTabGroup label="Example tab group">
        <IcTab>Ingredients</IcTab>
        <IcTab>Method</IcTab>
        <IcTab>History</IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One - Ingredients</IcTabPanel>
      <IcTabPanel>Tab Two - Method</IcTabPanel>
      <IcTabPanel>Tab Three - History</IcTabPanel>
    </IcTabContext>
  </div>
);

export const TabsWithIcons = (): ReactElement => (
  <div style={{ margin: "2rem" }}>
    <IcTabContext>
      <IcTabGroup label="Example tab group">
        <IcTab>
          Ingredients
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
        </IcTab>
        <IcTab>
          Method
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z" />
          </SlottedSVG>
        </IcTab>
        <IcTab>
          History
          <SlottedSVG
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3" />
          </SlottedSVG>
        </IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One - Ingredients</IcTabPanel>
      <IcTabPanel>Tab Two - Method</IcTabPanel>
      <IcTabPanel>Tab Three - History</IcTabPanel>
    </IcTabContext>
  </div>
);

export const TabsWithInlineBadges = (): ReactElement => (
  <div style={{ margin: "2rem" }}>
    <IcTabContext>
      <IcTabGroup label="Example tab group">
        <IcTab>
          Small
          <IcBadge
            label="1"
            slot="badge"
            position="inline"
            size="small"
            accessibleLabel="1 notification found"
          />
        </IcTab>
        <IcTab>
          Default
          <IcBadge
            label="1"
            slot="badge"
            position="inline"
            accessibleLabel="1 notification found"
          />
        </IcTab>
        <IcTab>
          Large
          <IcBadge
            label="1"
            slot="badge"
            position="inline"
            size="large"
            accessibleLabel="1 notification found"
          />
        </IcTab>
      </IcTabGroup>
      <IcTabPanel>Default badge</IcTabPanel>
      <IcTabPanel>Small badge</IcTabPanel>
      <IcTabPanel>Large badge</IcTabPanel>
    </IcTabContext>
  </div>
);

export const InlineTabGroup = (): ReactElement => (
  <div style={{ margin: "2rem" }}>
    <IcTabContext>
      <IcTabGroup label="Example tab group" inline={true}>
        <IcTab>Ingredients</IcTab>
        <IcTab>Method</IcTab>
        <IcTab>History</IcTab>
      </IcTabGroup>
      <IcTabPanel>Tab One - Ingredients</IcTabPanel>
      <IcTabPanel>Tab Two - Method</IcTabPanel>
      <IcTabPanel>Tab Three - History</IcTabPanel>
    </IcTabContext>
  </div>
);

export const CompactTabSelector = (): ReactElement => (
  <IcTabContext style={compactStyle}>
    <IcTabGroup label="Example tab group">
      <IcTab>Ingredients</IcTab>
      <IcTab>Method</IcTab>
      <IcTab>History</IcTab>
      <IcTab>Drinks</IcTab>
      <IcTab>Recipes</IcTab>
      <IcTab>Blog</IcTab>
    </IcTabGroup>
    <IcTabPanel>Tab One - Ingredients</IcTabPanel>
    <IcTabPanel>Tab Two - Method</IcTabPanel>
    <IcTabPanel>Tab Three - History</IcTabPanel>
    <IcTabPanel>Tab Four - Drinks</IcTabPanel>
    <IcTabPanel>Tab Five - Recipes</IcTabPanel>
    <IcTabPanel>Tab Six - Blog</IcTabPanel>
  </IcTabContext>
);

export const ChangeTabs = ({ childTabs }): ReactElement => {
  const [tabs, setTabs] = useState([
    { label: "Ingredients", content: "Tab One - Ingredients" },
    { label: "Method", content: "Tab Two - Method" },
    { label: "History", content: "Tab Three - History" },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTabs(childTabs);
    }, 2000);

    return () => clearTimeout(timer);
  }, [childTabs]);

  return (
    <IcTabContext>
      <IcTabGroup label="Example tab group">
        {tabs.map((tab, index) => (
          <IcTab key={index}>{tab.label}</IcTab>
        ))}
      </IcTabGroup>
      {tabs.map((tab, index) => (
        <IcTabPanel key={index}>{tab.content}</IcTabPanel>
      ))}
    </IcTabContext>
  );
};

export const MinMaxTabs = (): ReactElement => {
  return (
    <div style={{ maxWidth: "500px" }}>
      <IcTabContext>
        <IcTabGroup label="Example tab group">
          <IcTab>Extremely long tab label made of plenty of words</IcTab>
          <IcTab>A</IcTab>
          <IcTab>Antidisestablishmentarianismbutmadeevenlonger</IcTab>
        </IcTabGroup>
        <IcTabPanel>
          Testing tab behaviour with lots of words in label
        </IcTabPanel>
        <IcTabPanel>Testing minimum label length</IcTabPanel>
        <IcTabPanel>
          Testing tab behaviour with one really long word in label
        </IcTabPanel>
      </IcTabContext>
    </div>
  );
};
