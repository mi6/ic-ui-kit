import { InputLabel } from "../../ic-input-label";
import { newSpecPage } from "@stencil/core/testing";

describe("ic-input-label", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [InputLabel],
      html: `<ic-input-label for="test-input-id" label="Test label"></ic-input-label>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render required variant", async () => {
    const page = await newSpecPage({
      components: [InputLabel],
      html: `<ic-input-label for="test-input-id" label="Test label" required=true></ic-input-label>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render disabled variant", async () => {
    const page = await newSpecPage({
      components: [InputLabel],
      html: `<ic-input-label for="test-input-id" label="Test label" required=true disabled=true></ic-input-label>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render readonly variant", async () => {
    const page = await newSpecPage({
      components: [InputLabel],
      html: `<ic-input-label for="test-input-id" label="Test label" required=true readonly=true></ic-input-label>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render error variant", async () => {
    const page = await newSpecPage({
      components: [InputLabel],
      html: `<ic-input-label for="test-input-id" label="Test label" status="error"></ic-input-label>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with helpertext", async () => {
    const page = await newSpecPage({
      components: [InputLabel],
      html: `<ic-input-label for="test-input-id" label="Test label" required=true helper-text="Some helper text"></ic-input-label>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with label text not wrapped in label tag", async () => {
    const page = await newSpecPage({
      components: [InputLabel],
      html: `<ic-input-label label="Test label" required=true helper-text="Some helper text" use-label-tag=false></ic-input-label>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should remove label but keep helpertext", async () => {
    const page = await newSpecPage({
      components: [InputLabel],
      html: `<ic-input-label for="test-input-id" label="Test label" hide-label='true' helper-text="Some helper text"></ic-input-label>`,
    });

    expect(page.root).toEqualHtml(`
    <ic-input-label class="with-helper" for="test-input-id" helper-text="Some helper text" hide-label="true" label="Test label">
      <ic-typography class="helpertext helpertext-normal" variant="caption">
        <span id="test-input-id-helper-text">
          Some helper text
        </span>
      </ic-typography>
    </ic-input-label>
    `);
  });

  it("should remove helpertext but keep label", async () => {
    const page = await newSpecPage({
      components: [InputLabel],
      html: `<ic-input-label for="test-input-id" label="Test label" helper-text=""></ic-input-label>`,
    });

    expect(page.root).toEqualHtml(`
      <ic-input-label for="test-input-id" helper-text="" label="Test label">
        <ic-typography variant="label">
          <label htmlfor="test-input-id">
            Test label
          </label>
        </ic-typography>
      </ic-input-label>
    `);
  });

  it("should correctly detect if a helper text slot is used", async () => {
    const page = await newSpecPage({
      components: [InputLabel],
      html: `<ic-input-label for="test-input-id" label="Test label"></ic-input-label>`,
    });

    const mockSlot = {
      assignedElements: jest
        .fn()
        .mockReturnValue([document.createElement("div")]),
    } as unknown as HTMLSlotElement;

    expect(page.rootInstance.isHelperTextSlotUsed(mockSlot)).toBe(true);

    const parentMockSlot = {
      assignedElements: jest.fn().mockReturnValue([mockSlot]),
    } as unknown as HTMLSlotElement;

    parentMockSlot.assignedElements = jest.fn().mockReturnValue([mockSlot]);

    expect(page.rootInstance.isHelperTextSlotUsed(parentMockSlot)).toBe(true);

    mockSlot.assignedElements = jest.fn().mockReturnValue([]);

    expect(page.rootInstance.isHelperTextSlotUsed(mockSlot)).toBe(false);
  });
});
