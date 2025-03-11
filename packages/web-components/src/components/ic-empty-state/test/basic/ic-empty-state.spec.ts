import { newSpecPage } from "@stencil/core/testing";
import { EmptyState } from "../../ic-empty-state";
import {
  mockHasDynamicChildSlots,
  mockMutationObserverImplementation,
  MockMutationRecord,
  mockRenderDynamicChildSlots,
} from "../../../../testspec.setup";

describe("ic-empty-state component", () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render", async () => {
    const page = await newSpecPage({
      components: [EmptyState],
      html: `<ic-empty-state heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for the empty state."
    ></ic-empty-state>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with light theme", async () => {
    const page = await newSpecPage({
      components: [EmptyState],
      html: `<ic-empty-state heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for the empty state."
      theme="light"
    ></ic-empty-state>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with dark theme", async () => {
    const page = await newSpecPage({
      components: [EmptyState],
      html: `<ic-empty-state heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for the empty state."
      theme="dark"
    ></ic-empty-state>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with content in the image slot", async () => {
    const page = await newSpecPage({
      components: [EmptyState],
      html: `<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for the empty state."
    >
      <svg
        slot="image"
        height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
    ></ic-empty-state>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should test rendering an action after initial render", async () => {
    const page = await newSpecPage({
      components: [EmptyState],
      html: `<ic-empty-state heading="Empty state title"></ic-empty-state>`,
    });

    const component = page.rootInstance;
    const host = page.root;

    const observerInstance =
      mockMutationObserverImplementation.mock.results[0].value;

    const action = document.createElement("button");
    action.setAttribute("slot", "actions");

    observerInstance.observe(host, { childList: true });

    host?.appendChild(action);

    const mockMutationRecord: MockMutationRecord[] = [
      {
        addedNodes: [action],
        removedNodes: [],
        target: host,
      },
    ];

    observerInstance.trigger(mockMutationRecord);

    await page.waitForChanges();

    expect(mockRenderDynamicChildSlots).toHaveBeenCalledTimes(1);
    expect(mockRenderDynamicChildSlots).toHaveBeenCalledWith(
      mockMutationRecord,
      ["image", "actions"],
      component
    );

    expect(mockHasDynamicChildSlots).toHaveBeenCalledTimes(1);

    expect(page.root).toMatchSnapshot();
  });
});
