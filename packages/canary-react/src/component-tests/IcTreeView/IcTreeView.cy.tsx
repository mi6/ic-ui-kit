/// <reference types="cypress" />

import React, { ReactElement } from "react";
import { mount } from "cypress/react";
import { IcTreeView, IcTreeItem } from "../../components";
import { SlottedSVG } from "@ukic/react";
import { setThresholdBasedOnEnv } from "@ukic/react/cypress/utils/helpers";
import {
  HAVE_CSS,
  HAVE_FOCUS,
  HAVE_PROP,
  NOT_EXIST,
  NOT_HAVE_CSS,
  NOT_HAVE_BEEN_CALLED,
  HAVE_ID,
} from "@ukic/react/src/component-tests/utils/constants";
import { IcTreeItemOptions } from "@ukic/canary-web-components";

const TREE_VIEW = "ic-tree-view";
const TREE_ITEM = "ic-tree-item";
const TREE_ITEM_CONTENT = ".tree-item-content";
const TREE_ITEM_LABEL = ".tree-item-label";

const DEFAULT_TEST_THRESHOLD = 0.025;

export const BasicTreeView = (
  props?: object,
  treeItemProps?: object
): ReactElement => (
  <div
    style={{
      width: "250px",
      padding: "16px",
    }}
  >
    <IcTreeView heading="Menu" {...props}>
      <IcTreeItem label="Coffee" {...treeItemProps} />
      <IcTreeItem label="Tea">
        <IcTreeItem label="Earl Grey" />
        <IcTreeItem label="Chai" />
      </IcTreeItem>
      <IcTreeItem label="Hot Chocolate" />
    </IcTreeView>
  </div>
);

export const BasicTreeViewWithCoffeeTypes = (
  props?: object,
  treeItemProps?: object
): ReactElement => (
  <div
    style={{
      width: "250px",
      padding: "16px",
    }}
  >
    <IcTreeView heading="Menu" {...props}>
      <IcTreeItem label="Coffee" {...treeItemProps}>
        <IcTreeItem label="Americano">
          <IcTreeItem label="With milk" />
        </IcTreeItem>
        <IcTreeItem label="Latte" />
      </IcTreeItem>
      <IcTreeItem label="Tea">
        <IcTreeItem label="Earl Grey" />
        <IcTreeItem label="Chai" />
      </IcTreeItem>
      <IcTreeItem label="Hot Chocolate" />
    </IcTreeView>
  </div>
);

export const RemoveChildOnDelay = () => {
  const initial = [{ label: "Americano" }];
  const [data, setData] = React.useState(initial);

  React.useEffect(() => {
    setTimeout(() => {
      setData([]);
    }, 1000);
  }, []);

  return (
    <IcTreeView heading="Menu">
      <IcTreeItem label="Coffee" expanded>
        {data && data.map((d) => <IcTreeItem label={d.label} key={d.label} />)}
      </IcTreeItem>
    </IcTreeView>
  );
};

export const AddAllNodesOnDelay = () => {
  const newData = [
    { label: "Coffee" },
    { label: "Tea" },
    { label: "Hot chocolate" },
  ];
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    setTimeout(() => {
      setData(newData);
    }, 1000);
  }, []);

  return (
    <div style={{ width: "250px" }}>
      <IcTreeView heading="Menu">
        {!!data.length ? (
          data.map((d) => (
            <IcTreeItem label={d.label}>
              <IcTreeItem label="Item 1" />
              <IcTreeItem label="Item 2" />
              <IcTreeItem label="Item 3" />
            </IcTreeItem>
          ))
        ) : (
          <p>No data available</p>
        )}
      </IcTreeView>
    </div>
  );
};

export const AddChildNodesOnDelay = () => {
  const childData = [
    { label: "Coffee" },
    { label: "Tea" },
    { label: "Hot chocolate" },
  ];
  const [childNodes, setChildNodes] = React.useState([]);
  React.useEffect(() => {
    setTimeout(() => {
      setChildNodes(childData);
    }, 1000);
  }, []);

  return (
    <div style={{ width: "250px" }}>
      <IcTreeView heading="Menu">
        <IcTreeItem label="Coffee" />
        <IcTreeItem label="Tea">
          {childNodes.map((childNode) => (
            <IcTreeItem label={childNode.label} key={childNode.label} />
          ))}
        </IcTreeItem>
        <IcTreeItem label="Hot chocolate" />
      </IcTreeView>
    </div>
  );
};

export const Icon = (): ReactElement => (
  <SlottedSVG
    slot="icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <title>file</title>
    <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
  </SlottedSVG>
);

export const treeItems: IcTreeItemOptions[] = [
  { label: "Coffee" },
  { label: "Tea", children: [{ label: "Earl Grey" }, { label: "Chai" }] },
  { label: "Hot Chocolate" },
];

export const treeItemsWithIcons: IcTreeItemOptions[] = [
  {
    label: "Coffee",
    icon: '<svg slot="icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>file</title><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
  },
  {
    label: "Tea",
    icon: '<svg slot="icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>file</title><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
    children: [
      {
        label: "Earl Grey",
        icon: '<svg slot="icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>file</title><path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" /></svg>',
      },
    ],
  },
];

export const treeItemsLongText: IcTreeItemOptions[] = [
  { label: "Coffee with lots of extra milk" },
  {
    label: "Tea",
    children: [{ label: "Earl Grey with milk on the side" }, { label: "Chai" }],
  },
  { label: "Hot Chocolate" },
];

describe("IcTreeView", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render", () => {
    mount(
      <div
        style={{
          width: "250px",
          padding: "16px",
        }}
      >
        <IcTreeView heading="Menu" treeItemData={treeItems} />
      </div>
    );

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });

  it("should render with slotted tree items", () => {
    mount(<BasicTreeView />);

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });

  it("should render with icons", () => {
    mount(
      <div
        style={{
          width: "250px",
          padding: "16px",
        }}
      >
        <IcTreeView heading="Menu" treeItemData={treeItemsWithIcons}>
          <Icon />
        </IcTreeView>
      </div>
    );

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-icons",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with icons and slotted tree items", () => {
    mount(
      <div
        style={{
          width: "250px",
          padding: "16px",
        }}
      >
        <IcTreeView heading="Menu">
          <Icon />
          <IcTreeItem label="Coffee">
            <Icon />
          </IcTreeItem>
          <IcTreeItem label="Tea">
            <Icon />
            <IcTreeItem label="Earl Grey">
              <Icon />
            </IcTreeItem>
          </IcTreeItem>
        </IcTreeView>
      </div>
    );

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/with-icons",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render small", () => {
    mount(
      <div
        style={{
          width: "250px",
          padding: "16px",
        }}
      >
        <IcTreeView heading="Menu" size="small" treeItemData={treeItems} />
      </div>
    );

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });

  it("should render small slotted tree items", () => {
    mount(BasicTreeView({ size: "small" }));

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/small",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });

  it("should render large", () => {
    mount(
      <div
        style={{
          width: "250px",
          padding: "16px",
        }}
      >
        <IcTreeView heading="Menu" size="large" treeItemData={treeItems} />
      </div>
    );

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/large",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });

  it("should render large slotted tree items", () => {
    mount(BasicTreeView({ size: "large" }));

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/large",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });

  it("should render dark theme", () => {
    mount(
      <div
        style={{
          width: "250px",
          padding: "16px",
        }}
      >
        <IcTreeView heading="Menu" theme="dark" treeItemData={treeItems} />
      </div>
    );

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/theme-dark",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.008),
    });
  });

  it("should render dark theme with slotted tree items", () => {
    mount(BasicTreeView({ theme: "dark" }));

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/theme-dark",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.008),
    });
  });

  it("should render with disabled tree item", () => {
    mount(
      <div
        style={{
          width: "250px",
          padding: "16px",
        }}
      >
        <IcTreeView
          heading="Menu"
          treeItemData={[
            { label: "Coffee", disabled: true },
            {
              label: "Tea",
              children: [{ label: "Earl Grey" }, { label: "Chai" }],
            },
            { label: "Hot Chocolate" },
          ]}
        />
      </div>
    );

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/disabled-tree-item",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.003),
    });
  });

  it("should render with disabled slotted tree item", () => {
    mount(BasicTreeView({}, { disabled: true }));

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/disabled-tree-item",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.003),
    });
  });

  it("should render with selected tree item", () => {
    mount(
      <div
        style={{
          width: "250px",
          padding: "16px",
        }}
      >
        <IcTreeView
          heading="Menu"
          treeItemData={[
            { label: "Coffee", selected: true },
            {
              label: "Tea",
              children: [{ label: "Earl Grey" }, { label: "Chai" }],
            },
            { label: "Hot Chocolate" },
          ]}
        />
      </div>
    );

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/selected-tree-item",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.006),
    });
  });

  it("should render with selected slotted tree item", () => {
    mount(BasicTreeView({}, { selected: true }));

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/selected-tree-item",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.006),
    });
  });

  it("should render with tree item as link", () => {
    mount(
      <div
        style={{
          width: "250px",
          padding: "16px",
        }}
      >
        <IcTreeView
          heading="Menu"
          treeItemData={[
            { label: "Coffee", href: "#" },
            {
              label: "Tea",
              children: [{ label: "Earl Grey" }, { label: "Chai" }],
            },
            { label: "Hot Chocolate" },
          ]}
        />
      </div>
    );

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/link-tree-item",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });

  it("should render with slotted tree item as link", () => {
    mount(BasicTreeView({}, { href: "#" }));

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/link-tree-item",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });

  it("should render with expanded tree item", () => {
    mount(
      <div
        style={{
          width: "250px",
          padding: "16px",
        }}
      >
        <IcTreeView heading="Menu" treeItemData={treeItems} />
      </div>
    );

    cy.checkHydrated(TREE_VIEW);
    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(1).click();

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/expanded-tree-item",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render with expanded slotted tree item", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(1).click();

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "/expanded-tree-item",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render with text wrapping", () => {
    mount(
      <div
        style={{
          width: "200px",
          padding: "16px",
        }}
      >
        <IcTreeView
          heading="Limited edition menu with extras"
          treeItemData={treeItemsLongText}
        />
      </div>
    );

    cy.checkHydrated(TREE_VIEW);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(1).click();

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(2).click();

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "/text-wrapping",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
    });
  });

  it("should render with text wrapping for slotted tree items", () => {
    mount(
      <div
        style={{
          width: "200px",
          padding: "16px",
        }}
      >
        <IcTreeView heading="Limited edition menu with extras">
          <IcTreeItem label="Coffee with lots of extra milk" />
          <IcTreeItem label="Tea">
            <IcTreeItem label="Earl Grey with milk on the side" />
            <IcTreeItem label="Chai" />
          </IcTreeItem>
          <IcTreeItem label="Hot Chocolate" />
        </IcTreeView>
      </div>
    );

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(1).click();

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(2).click();

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "/text-wrapping",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.034),
    });
  });

  it("should render with truncated text", () => {
    cy.viewport(992, 600);

    mount(
      <div
        style={{
          width: "200px",
          padding: "16px",
        }}
      >
        <IcTreeView
          heading="Limited edition menu with extras"
          truncateTreeItems
          truncateHeading
          treeItemData={treeItemsLongText}
        />
      </div>
    );

    cy.checkHydrated(TREE_VIEW);

    const TEXT_OVERFLOW = "text-overflow";
    const ELLIPSIS = "ellipsis";

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(1).click();

    cy.findShadowEl("ic-tree-view", ".tree-view-header").should(
      HAVE_CSS,
      TEXT_OVERFLOW,
      ELLIPSIS
    );

    cy.findShadowEl(TREE_ITEM, ".tree-item-label")
      .eq(0)
      .should(HAVE_CSS, TEXT_OVERFLOW, ELLIPSIS);

    cy.findShadowEl(TREE_ITEM, ".tree-item-label")
      .eq(2)
      .should(HAVE_CSS, TEXT_OVERFLOW, ELLIPSIS);

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "/truncated-text",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.023),
    });

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT)
      .eq(0)
      .realHover({ pointer: "mouse" });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/truncated-text-hover",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.037),
    });
  });

  it("should render with truncated text for slotted tree items", () => {
    cy.viewport(992, 600);

    mount(
      <div
        style={{
          width: "200px",
          padding: "16px",
        }}
      >
        <IcTreeView
          heading="Limited edition menu with extras"
          truncateTreeItems
          truncateHeading
        >
          <IcTreeItem label="Coffee with lots of extra milk" />
          <IcTreeItem label="Tea">
            <IcTreeItem label="Earl Grey with milk on the side" />
            <IcTreeItem label="Chai" />
          </IcTreeItem>
          <IcTreeItem label="Hot Chocolate" />
        </IcTreeView>
      </div>
    );

    cy.checkHydrated(TREE_VIEW);

    const TEXT_OVERFLOW = "text-overflow";
    const ELLIPSIS = "ellipsis";

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(1).click();

    cy.findShadowEl(TREE_VIEW, ".tree-view-header").should(
      HAVE_CSS,
      TEXT_OVERFLOW,
      ELLIPSIS
    );

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_LABEL)
      .eq(0)
      .should(HAVE_CSS, TEXT_OVERFLOW, ELLIPSIS);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_LABEL)
      .eq(2)
      .should(HAVE_CSS, TEXT_OVERFLOW, ELLIPSIS);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT)
      .eq(1)
      .realHover({ pointer: "mouse" });

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "/truncated-text",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.023),
    });

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT)
      .eq(0)
      .realHover({ pointer: "mouse" });

    cy.checkA11yWithWait();
    cy.compareSnapshot({
      name: "/truncated-text-hover",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.037),
    });
  });

  it("should remove any tooltips and truncation styling when displayed on a smaller screen size", () => {
    cy.viewport(576, 600);

    const TEXT_OVERFLOW = "text-overflow";
    const ELLIPSIS = "ellipsis";

    mount(
      <div
        style={{
          width: "200px",
          padding: "16px",
        }}
      >
        <IcTreeView
          heading="Limited edition menu with extras"
          truncateTreeItems
          truncateHeading
        >
          <IcTreeItem label="Coffee with lots of extra milk" />
          <IcTreeItem label="Tea">
            <IcTreeItem label="Earl Grey with milk on the side" />
            <IcTreeItem label="Chai" />
          </IcTreeItem>
          <IcTreeItem label="Hot Chocolate" />
        </IcTreeView>
      </div>
    );

    cy.findShadowEl(TREE_VIEW, ".tree-view-header").should(
      NOT_HAVE_CSS,
      TEXT_OVERFLOW,
      ELLIPSIS
    );

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_LABEL)
      .eq(0)
      .should(NOT_HAVE_CSS, TEXT_OVERFLOW, ELLIPSIS);

    cy.findShadowEl(TREE_ITEM, "ic-tooltip").should(NOT_EXIST);

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "/truncated-pattern-mobile",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });

    cy.viewport(992, 600);

    cy.wait(500);

    cy.findShadowEl(TREE_VIEW, ".tree-view-header").should(
      HAVE_CSS,
      TEXT_OVERFLOW,
      ELLIPSIS
    );

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_LABEL)
      .eq(0)
      .should(HAVE_CSS, TEXT_OVERFLOW, ELLIPSIS);

    cy.findShadowEl(TREE_ITEM, "ic-tooltip");

    cy.checkA11yWithWait(undefined, 500);
    cy.compareSnapshot({
      name: "/truncated-pattern-reset-to-desktop",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.003),
    });
  });

  it("should expand and collapse parent tree items on click", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(1).click();

    cy.get(TREE_ITEM).eq(1).should(HAVE_PROP, "expanded", true);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(1).click();

    cy.get(TREE_ITEM).eq(1).should(HAVE_PROP, "expanded", false);
  });

  it("should expand and collapse parent tree items on enter", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT)
      .eq(1)
      .focus()
      .realPress("Enter");

    cy.get(TREE_ITEM).eq(1).should(HAVE_PROP, "expanded", true);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(1).realPress("Enter");

    cy.get(TREE_ITEM).eq(1).should(HAVE_PROP, "expanded", false);
  });

  it("should expand and collapse parent tree items on space", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT)
      .eq(1)
      .focus()
      .realPress("Space");

    cy.get(TREE_ITEM).eq(1).should(HAVE_PROP, "expanded", true);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(1).realPress("Space");

    cy.get(TREE_ITEM).eq(1).should(HAVE_PROP, "expanded", false);
  });

  it("should expand parent tree items on right arrow and collapse on left arrow", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT)
      .eq(1)
      .focus()
      .realPress("ArrowRight");

    cy.get(TREE_ITEM).eq(1).should(HAVE_PROP, "expanded", true);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(1).realPress("ArrowLeft");

    cy.get(TREE_ITEM).eq(1).should(HAVE_PROP, "expanded", false);
  });

  it("should navigate to first child tree item on right arrow when tree item is expanded", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT)
      .eq(1)
      .focus()
      .realPress("ArrowRight");
    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(1).realPress("ArrowRight");

    cy.get(TREE_ITEM).eq(2).should(HAVE_FOCUS);
  });

  it("should navigate through unexpanded tree items using tab", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT)
      .eq(0)
      .focus()
      .realPress("Tab");

    cy.get(TREE_ITEM).eq(1).should(HAVE_FOCUS).realPress("Tab");

    cy.get(TREE_ITEM).eq(4).should(HAVE_FOCUS);
  });

  it("should navigate through unexpanded tree items using arrow down", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT)
      .eq(0)
      .focus()
      .realPress("ArrowDown");

    cy.get(TREE_ITEM).eq(1).should(HAVE_FOCUS).realPress("ArrowDown");

    cy.get(TREE_ITEM).eq(4).should(HAVE_FOCUS);
  });

  it("should navigate through tree items when expanded content is hidden using arrow keys", () => {
    mount(<BasicTreeViewWithCoffeeTypes />);

    cy.checkHydrated("ic-tree-view");

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT)
      .eq(0)
      .focus()
      .realPress("Enter");

    cy.get(TREE_ITEM).eq(0).should(HAVE_FOCUS).realPress("ArrowDown");

    cy.get(TREE_ITEM).eq(1).should(HAVE_FOCUS).realPress("Enter");
    cy.get(TREE_ITEM).eq(1).realPress("ArrowUp");

    cy.get(TREE_ITEM).eq(0).should(HAVE_FOCUS).realPress("Enter");
    cy.get(TREE_ITEM).eq(0).realPress("ArrowDown");

    cy.get(TREE_ITEM).eq(4).should(HAVE_FOCUS);
  });

  it("should navigate through expanded tree items using tab", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT)
      .eq(0)
      .focus()
      .realPress("Tab");

    cy.get(TREE_ITEM).eq(1).should(HAVE_FOCUS).realPress("Enter");
    cy.get(TREE_ITEM).eq(1).realPress("Tab");

    cy.get(TREE_ITEM).eq(2).should(HAVE_FOCUS);
  });

  it("should navigate through expanded tree items using arrow down", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT)
      .eq(0)
      .focus()
      .realPress("ArrowDown");

    cy.get(TREE_ITEM).eq(1).should(HAVE_FOCUS).realPress("Enter");
    cy.get(TREE_ITEM).eq(1).realPress("ArrowDown");

    cy.get(TREE_ITEM).eq(2).should(HAVE_FOCUS);
  });

  it("should have hover state", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT)
      .eq(0)
      .realHover({ pointer: "mouse" });

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT)
      .eq(0)
      .should(HAVE_CSS, "background-color", "rgba(65, 70, 77, 0.1)");
  });

  it("should render slotted router items and truncate them correctly", () => {
    cy.viewport(992, 600);

    mount(
      <div
        style={{
          width: "200px",
          padding: "16px",
        }}
      >
        <IcTreeView heading="Menu" truncateTreeItems>
          <IcTreeItem>
            <a slot="router-item" href="/">
              Hot chocolate with marshmallows and whipped cream
            </a>
          </IcTreeItem>
          <IcTreeItem>
            <a slot="router-item" href="/">
              Tea
            </a>
          </IcTreeItem>
          <IcTreeItem label="Hot chocolate with marshmallows" />
        </IcTreeView>
      </div>
    );

    cy.checkHydrated(TREE_VIEW);

    cy.get(TREE_ITEM)
      .find('[slot="router-item"]')
      .eq(0)
      .realHover({ pointer: "mouse" });

    cy.compareSnapshot({
      name: "/router-item",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.018),
    });
  });

  it("should retain the custom ID after re-render", () => {
    mount(
      <IcTreeView heading="foo">
        <IcTreeItem treeItemId="bar-1" label="bar" />
        <IcTreeItem treeItemId="baz-1" label="baz">
          <IcTreeItem label="qux" />
        </IcTreeItem>
      </IcTreeView>
    );

    cy.checkHydrated(TREE_VIEW);

    cy.get(TREE_ITEM).should(HAVE_ID, "bar-1");

    cy.get(TREE_VIEW).find(TREE_ITEM).eq(1).should(HAVE_ID, "baz-1");

    cy.get(TREE_VIEW).find(TREE_ITEM).eq(1).click();

    // Assert ID doesn't change after a re-render
    cy.get(TREE_VIEW).find(TREE_ITEM).eq(1).should(HAVE_ID, "baz-1");
  });

  it("should update parent node when children removed", () => {
    mount(<RemoveChildOnDelay />);

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait(undefined, 2000);

    cy.compareSnapshot({
      name: "/remove-child-on-delay",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });

  it("should only allow a single item to be selected after nodes added", () => {
    mount(<AddAllNodesOnDelay />);

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait(undefined, 2000);

    cy.get(TREE_VIEW).find(TREE_ITEM).eq(0).click();
    cy.get(TREE_VIEW).find(TREE_ITEM).eq(1).click();
    cy.get(TREE_VIEW).find(TREE_ITEM).eq(2).click();

    cy.checkA11yWithWait(undefined, 500);

    cy.compareSnapshot({
      name: "/single-selected-item-on-delay",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should only allow a single item to be selected after child nodes changed", () => {
    mount(<AddChildNodesOnDelay />);

    cy.checkHydrated(TREE_VIEW);

    cy.checkA11yWithWait(undefined, 2000);

    cy.get(TREE_VIEW).find(TREE_ITEM).eq(1).click();
    cy.get(TREE_VIEW).find(TREE_ITEM).eq(3).click();
    cy.get(TREE_VIEW).find(TREE_ITEM).eq(4).click();

    cy.checkA11yWithWait(undefined, 500);

    cy.compareSnapshot({
      name: "/single-selected-item-child-nodes-on-delay",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.014),
    });
  });

  it("should test code in tree item elements", () => {
    cy.spy(window, "alert").as("spyAlert");
    const clonedItems = JSON.parse(JSON.stringify(treeItemsWithIcons));
    clonedItems[1].icon = `<img src=x onerror=alert(12345)//>`;
    clonedItems[1].children[0].icon = `<img src=x onerror=alert(12345)//>`;

    mount(
      <div
        style={{
          width: "250px",
          padding: "16px",
        }}
      >
        <IcTreeView heading="Menu" treeItemData={clonedItems}>
          <Icon />
        </IcTreeView>
      </div>
    );

    cy.checkHydrated(TREE_VIEW);
    cy.get("@spyAlert").should(NOT_HAVE_BEEN_CALLED);
  });
});

describe("IcTreeView visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  after(() => {
    cy.disableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render", () => {
    mount(<BasicTreeView />);

    cy.checkHydrated(TREE_VIEW);

    cy.compareSnapshot({
      name: "/default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render with disabled tree item", () => {
    mount(BasicTreeView({}, { disabled: true }));

    cy.checkHydrated(TREE_VIEW);

    cy.compareSnapshot({
      name: "/disabled-tree-item-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.009),
    });
  });

  it("should render with expanded tree item", () => {
    mount(<BasicTreeView />);

    cy.findShadowEl(TREE_ITEM, TREE_ITEM_CONTENT).eq(1).click();

    cy.compareSnapshot({
      name: "/expanded-tree-item-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.017),
    });
  });

  it("should render with selected tree item", () => {
    mount(BasicTreeView({}, { selected: true }));

    cy.checkHydrated(TREE_VIEW);

    cy.compareSnapshot({
      name: "/selected-tree-item-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
    });
  });

  it("should render with icons", () => {
    mount(
      <div
        style={{
          width: "250px",
          padding: "16px",
        }}
      >
        <IcTreeView heading="Menu">
          <Icon />
          <IcTreeItem label="Coffee">
            <Icon />
          </IcTreeItem>
          <IcTreeItem label="Tea">
            <Icon />
            <IcTreeItem label="Earl Grey">
              <Icon />
            </IcTreeItem>
          </IcTreeItem>
        </IcTreeView>
      </div>
    );

    cy.compareSnapshot({
      name: "/with-icons-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.014),
    });
  });
});
