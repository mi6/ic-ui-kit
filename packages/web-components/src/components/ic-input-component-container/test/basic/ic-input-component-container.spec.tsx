import {
  mockHasDynamicChildSlots,
  mockMutationObserverImplementation,
  MockMutationRecord,
  mockRenderDynamicChildSlots,
} from "../../../../testspec.setup";
import { InputComponentContainer } from "../../ic-input-component-container";
import { newSpecPage } from "@stencil/core/testing";

describe("ic-input-component-container", () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container>content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-component-container class="default">
      <div class="focus-indicator">
        content
      </div>
    </ic-input-component-container>
    `);
  });

  it("should render with validation status", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container validation-status="success">content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-component-container validation-status="success" class="default success">
      <div class="focus-indicator">
        content
      </div>
    </ic-input-component-container> 
    `);
  });

  it("should render with validation inline", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container validation-status="success" validation-inline=true>content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-component-container class="default success" validation-inline="true" validation-status="success">
      <div class="focus-indicator">
        content
        <span class="inline-success">
          svg
        </span>
      </div>
    </ic-input-component-container>
    `);
  });

  it("should ignore validation inline if not success", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container validation-status="error" validation-inline=true>content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-component-container class="default error" validation-inline="true" validation-status="error">
      <div class="focus-indicator">
        content
      </div>
    </ic-input-component-container>
    `);
  });

  it("should render with size small, multiline & fullwidth props set", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container size="small" multi-line=true full-width=true>content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-component-container class="small fullwidth multiline" full-width="true" multi-line="true" size="small">
      <div class="focus-indicator">
        content
      </div>
    </ic-input-component-container>
    `);
  });

  it("should render with size large", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container size=large>content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-component-container class="large" size="large">
      <div class="focus-indicator">
        content
      </div>
    </ic-input-component-container>
    `);
  });

  it("should render disabled", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container validation-status="success" disabled=true>content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-component-container validation-status="success" class="default disabled" aria-disabled="true" disabled="true">
      <div class="focus-indicator">
        content
      </div>
    </ic-input-component-container>
    `);

    page.rootInstance.disabled = false;

    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <ic-input-component-container validation-status="success" class="default success">
        <div class="focus-indicator">
          content
        </div>
      </ic-input-component-container>
      `);
  });

  it("should render readonly", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container validation-status="success" readonly=true>content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-input-component-container class="default readonly" readonly="true" validation-status="success">
        <div class="focus-indicator">
          content
        </div>
      </ic-input-component-container>
    `);
  });

  it("should render with slotted content", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container validation-status="success" disabled=true><span slot="left-icon">slotted content</span>content</ic-input-component-container>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-component-container class="default disabled" aria-disabled="true" disabled="true" validation-status="success">
      <div class="focus-indicator">
        <div class="icon-container">
          <span slot="left-icon">
            slotted content
          </span>
        </div>
        content
      </div>
    </ic-input-component-container>
    `);
  });

  it("should test rendering icon after initial render", async () => {
    const page = await newSpecPage({
      components: [InputComponentContainer],
      html: `<ic-input-component-container>content</ic-input-component-container>`,
    });

    const component = page.rootInstance;
    const host = page.root;

    const observerInstance =
      mockMutationObserverImplementation.mock.results[0].value;

    const icon = document.createElement("svg");
    icon.setAttribute("slot", "left-icon");

    observerInstance.observe(host, { childList: true });

    host.appendChild(icon);

    const mockMutationRecord: MockMutationRecord[] = [
      {
        addedNodes: [icon],
        removedNodes: [],
        target: host,
      },
    ];

    observerInstance.trigger(mockMutationRecord);

    await page.waitForChanges();

    expect(mockRenderDynamicChildSlots).toHaveBeenCalledTimes(1);
    expect(mockRenderDynamicChildSlots).toHaveBeenCalledWith(
      mockMutationRecord,
      "left-icon",
      component
    );

    expect(mockHasDynamicChildSlots).toHaveBeenCalledTimes(1);

    expect(page.root).toMatchSnapshot();
  });
});
