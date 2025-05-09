import { newSpecPage } from "@stencil/core/testing";
import { Alert } from "../../ic-alert";
import {
  mockHasDynamicChildSlots,
  mockMutationObserverImplementation,
  MockMutationRecord,
  mockRenderDynamicChildSlots,
} from "../../../../testspec.setup";

describe("ic-alert component", () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render with a heading when supplied", async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<ic-alert heading="Test heading"></ic-alert>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a message when supplied", async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<ic-alert message="Test message"></ic-alert>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render an action in the correct position when supplied", async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<ic-alert message="This has an action"><button slot="action"></button></ic-alert>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a dismiss icon when the prop is applied", async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<ic-alert message="This is dismissible" dismissible=true></ic-alert>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render an element in the message slot", async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<ic-alert heading="Using custom message"><ic-typography variant="h1" slot="message">Custom h1 message</ic-typography></ic-alert>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render an icon in the neutral-icon slot", async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `
        <ic-alert heading="Using custom icon" message="This has a slotted icon">
          <svg slot="neutral-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
          </svg>
        </ic-alert>
        `,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with no icon when the show-default-icon prop is set to false", async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<ic-alert heading="No icon" message="This alert has no icon" show-defaul-icon=false></ic-alert>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render default icon of success variant when the show-default-icon prop is set to false", async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<ic-alert heading="Success" message="This alert has the default success icon" variant="success" show-default-icon="false"></ic-alert>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should close on dismiss icon click", async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<ic-alert message="This is dismissible" dismissible=true></ic-alert>`,
    });

    let alert = await page.root?.shadowRoot?.querySelector(
      "div.container-neutral"
    );
    const dismissButton = await alert?.querySelector("ic-button");

    expect(alert).not.toBeNull();
    expect(dismissButton).not.toBeNull();

    await dismissButton?.click();

    await page.waitForChanges();
    alert = await page.root?.shadowRoot?.querySelector("div.container-neutral");

    expect(alert).toBeNull();
  });

  it("should test rendering an action after initial render", async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<ic-alert heading="Test heading"></ic-alert>`,
    });

    const component = page.rootInstance;
    const host = page.root;

    const observerInstance =
      mockMutationObserverImplementation.mock.results[0].value;

    const action = document.createElement("button");
    action.setAttribute("slot", "action");

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
      "action",
      component
    );

    expect(mockHasDynamicChildSlots).toHaveBeenCalledTimes(1);

    expect(page.root).toMatchSnapshot();
  });

  it("should detect when the themeChange event has been emitted", async () => {
    const page = await newSpecPage({
      components: [Alert],
      html: `<ic-alert heading="Test heading" show-default-icon="false" title-above="true"></ic-alert>`,
    });

    Object.defineProperty(page.rootInstance, "calculateMinHeight", {
      value: jest.fn(),
    });

    await page.rootInstance.darkModeChangeHandler({ detail: "dark" });
    await page.waitForChanges();

    expect(page.rootInstance.calculateMinHeight).toHaveBeenCalled();

    page.root?.setAttribute("theme", "dark");
    await page.waitForChanges();

    expect(page.rootInstance.calculateMinHeight).toHaveBeenCalledTimes(2);

    page.rootInstance.darkModeChangeHandler({ matches: true });

    expect(page.rootInstance.calculateMinHeight).toHaveBeenCalledTimes(3);

    page.root?.setAttribute("title-above", "false");
    await page.waitForChanges();

    expect(page.rootInstance.calculateMinHeight).toHaveBeenCalledTimes(4);

    page.root?.setAttribute(
      "message",
      "This alert is for displaying miscellaneous messages This alert is for displaying miscellaneous messages This alert is for displaying miscellaneous messages This alert is for displaying miscellaneous messages"
    );
    await page.waitForChanges();

    expect(page.rootInstance.calculateMinHeight).toHaveBeenCalledTimes(5);
  });
});
